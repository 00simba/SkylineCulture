const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products');
const Order = require('./models/orders');
const orderUtil =  require('./lib/getNextOrderNumber.ts');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.static('../client/build'));
app.use(bodyParser.urlencoded({extended: false}));
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
require('dotenv').config()
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

const s3 = new AWS.S3();

const dbURI = process.env.DATABASE_URI;
mongoose.connect(dbURI, {dbName: 'website-db', useNewUrlParser: true, useUnifiedTopology: true}).then((result) => console.log('Connected to DB')).catch((err) => console.log(err))
const storeItems = new Map()
const stripe = require('stripe')(process.env.STRIPE_LIVE_KEY)

Product.find().then((result) => result.map((item) => {
    storeItems.set(item.id, {name: item.name, price: item.price, stripe_price: item.stripe_price, stock: item.stock, reviews: item.reviews})
}))


app.post(
  "/sell-car",
  upload.array("images", 20),
  async (req, res) => {
    try {
      const { form } = req.body;
      const parsed = JSON.parse(form);
      const email = parsed.contact.email.toLowerCase();

      const imageUrls = [];

      for (const img of req.files) {
        const key = `Requests/${email}/${Date.now()}-${img.originalname}`;

        await s3
          .putObject({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: key,
            Body: img.buffer,
            ContentType: img.mimetype,
          })
          .promise();

        imageUrls.push(`https://${process.env.CLOUDFRONT_DOMAIN}/${key}`);
      }

      // Return URLs so frontend can email using EmailJS
      return res.json({
        success: true,
        message: "Listing uploaded",
        images: imageUrls,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    }
  }
);


app.post("/get-stock", async (req, res) => {
  try {
    const product = await Product.findOne(
      { url: req.body.url },
      { variants: 1, _id: 0 }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product.variants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.post('/remove-inventory', async (req, res) => {
  try {
    const cart = JSON.parse(req.body.cart);
    const orderNumber = req.body.orderNumber;

    if (!cart || !cart.length) {
      return res.send({ success: true }); // nothing to update
    }

    // Ensure order exists
    await Order.findOne({ orderNumber });

    // Update stock
    for (const item of cart) {
      const product = await Product.findOne({ name: item.productName });
      if (!product) continue;

      const stockObj = product.stock[0];
      const variant = item.productVariant;

      const currentQty =
        variant === "null"
          ? parseInt(stockObj.Default)
          : parseInt(stockObj[variant]);

      const newQty = currentQty - parseInt(item.productQuantity);

      // Build dynamic $set update
      const updatePath =
        variant === "null"
          ? "stock.$[elem].Default"
          : `stock.$[elem].${variant}`;

      await Product.findOneAndUpdate(
        { name: product.name },
        { $set: { [updatePath]: newQty } },
        {
          arrayFilters: [
            {
              [`elem.${variant === "null" ? "Default" : variant}`]: currentQty,
            },
          ],
        }
      );
    }

    // IMPORTANT → send response
    return res.send({ success: true });

  } catch (err) {
    console.error("remove-inventory ERROR:", err);
    return res.status(500).send({ success: false, error: err.toString() });
  }
});


function getShipping(total, country){

    var shipping = []

    if(total < 3500){
        if(country == 'Canada'){
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 695,
                    currency: 'usd',
                  },
                  display_name: 'Canada Post Expedited',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 2,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 6,
                    },
                  },
                },
              })
        } 
        else if(country == "United States"){
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 395,
                    currency: 'usd',
                  },
                  display_name: 'USPS Ground Advantage',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 4,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 6,
                    },
                  },
                },
              })
        }
        else{
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 995,
                    currency: 'usd',
                  },
                  display_name: 'APC Priority Worldwide',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 7,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 15,
                    },
                  },
                },
              })
        }
    }
    else{
        if(country == 'Canada'){
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 0,
                    currency: 'usd',
                  },
                  display_name: 'Canada Post Expedited',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 2,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 6,
                    },
                  },
                },
              })
        } 
        else if(country == "United States"){
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 0,
                    currency: 'usd',
                  },
                  display_name: 'USPS Ground Advantage',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 4,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 6,
                    },
                  },
                },
              })
        }
        else{
            shipping.push({
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 0,
                    currency: 'usd',
                  },
                  display_name: 'APC Priority Worldwide',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 7,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 15,
                    },
                  },
                },
              })
        }
    }
    return shipping     
}

function getLineItems(cart){

    var line_items = []

    cart.forEach((cartItem) => {
        if(cartItem.productVariant != 'null'){
            var priceString = storeItems.get(parseInt(cartItem.productId)).stripe_price
            stringArr = priceString.split(' ')
            priceIndex = stringArr.indexOf(cartItem.productVariant) + 1
            var stripe_price = stringArr[priceIndex]

            line_items.push({
                price: stripe_price,
                quantity: parseInt(cartItem.productQuantity)
            })    
        }
        else{
            line_items.push({
                price: storeItems.get(parseInt(cartItem.productId)).stripe_price,
                quantity: parseInt(cartItem.productQuantity)
            })
        } 

    })
    return line_items
}

app.post('/order-complete', async (req, res) => {

  var orderNumber;
  var cart = JSON.parse(req.body.cart);
  var cartArray = [];

  if(cart.length){

    orderUtil.getNextOrderNumber().then((res) => (
    orderNumber = res
    ));

    try{
      const session = await stripe.checkout.sessions.retrieve(req.body.session_id)
      const customer = await stripe.customers.retrieve(session.customer)
      res.send({
        'name': customer.name,
        'orderNumber' : orderNumber
      });

      for(var i = 0; i < cart.length; i++){
        cartArray.push(
          {
            'name': cart[i]['productName'],
            'quantity': cart[i]['productQuantity']
          }
        );
      };

      var orderModel = await new Order();
      orderModel.orderNumber = orderNumber;
      orderModel.name = customer.name;
      orderModel.items = cartArray;
      await orderModel.save();

    } catch(err) {
      console.log(err)
      return res.sendStatus(400)
    }
  }

});


app.post('/create-checkout-session', async (req, res) => {

    const domainURL = 'https://skylineculture.com';
    const cart = req.body.cartItems;

    var total = 0;
    cart.forEach((itemObject) => {
        var price = ((storeItems.get(parseInt(itemObject.productId))).price)*(parseInt(itemObject.productQuantity))
        total += price 
    })

    var chainCount = 0;
    var couponId;
    var prices = [];

    cart.forEach((itemObject) => {
        var name = (storeItems.get(parseInt(itemObject.productId))).name
        if(name.includes("Keychain")){
          chainCount += 1 * (parseInt(itemObject.productQuantity))
          for(var i = 0; i < parseInt(itemObject.productQuantity); i ++){
            prices.push(storeItems.get(parseInt(itemObject.productId)).price)
          }
        }
    })

    prices.sort((a, b) => a - b)

    if(chainCount >= 4){

      discount = parseInt(prices[0]) +  parseInt(prices[1])

      const coupon = await stripe.coupons.create({
        name: "BUY 2 GET 2 FREE",
        amount_off: discount,
        "currency": 'USD',
      });
      couponId = coupon.id
    }

    if(chainCount == 2){

      discount = Math.floor(parseInt(prices[0]) / 2)

      const coupon = await stripe.coupons.create({
        name: "BUY 1 GET 1 50% OFF",
        amount_off: discount,
        "currency": 'USD',
      });
      couponId = coupon.id
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      invoice_creation: {
        enabled: true,
      },
      discounts: [
        {
        coupon: couponId
        }
      ],
      customer_creation: "always",
      shipping_address_collection: {allowed_countries: ['CA', 'US', 'GB', 'AU', 'NZ', 'FR', 'ES', 'IT', 'DE', 'PL', 'BE', 'AT', 'DK', 'IS', 'IE', 'FI', 'SE', 'CH', 'NL', 'NO', 'HK', 'JP', 'SG', 'KW', 'AE', 'QA']},
      line_items: getLineItems(cart),
      success_url: `${domainURL}/order-complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/cart`,
      billing_address_collection: 'required',
      shipping_options: getShipping(total, req.body.selected),
    });
    
    return res.send({url: session.url});

  });

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on port 8080")
})