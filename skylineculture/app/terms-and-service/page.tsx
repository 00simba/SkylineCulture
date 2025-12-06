export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">

      {/* Breadcrumb */}
      <div className="text-sm text-black mb-5">
        <a href="/" className="text-black">Home</a> / <span>Terms & Services</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">Terms & Services</h1>

      <p className="text-gray-700 mb-10">
        Welcome to SkylineCulture. By accessing our website or using our services,
        you agree to the following Terms & Services. Please read them carefully
        before submitting a listing, making a purchase, or using any part of our platform.
      </p>

      {/* 1. Platform Purpose */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Platform Purpose</h2>
        <p>
          SkylineCulture connects Nissan Skyline enthusiasts, buyers, and sellers through
          our website and our social media presence of over 430,000 followers.
          We provide product sales, accessories, and a marketplace for vehicle listings.
          SkylineCulture does not own or inspect the vehicles listed by sellers unless
          otherwise stated.
        </p>
      </section>

      {/* 2. User Responsibilities */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. User Responsibilities</h2>
        <p>
          Users are responsible for ensuring that all submitted vehicle information is
          accurate, honest, and up to date. SkylineCulture reserves the right to decline
          or remove any listing that appears fraudulent, misleading, or unsafe for buyers.
        </p>
      </section>

      {/* 3. Marketplace Fee (Required, Not Optional) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Marketplace Fee</h2>

        <p>
          SkylineCulture <span className="font-semibold">charges a mandatory service
          fee</span> for connecting a buyer and seller through the SkylineCulture platform
          or associated social media channels.
        </p>

        <p className="mt-2">
          This fee applies to all vehicle sales that occur as a direct result of:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>SkylineCulture introducing a buyer to a seller</li>
          <li>A buyer contacting a seller after viewing the vehicle on SkylineCulture</li>
          <li>Exposure generated through SkylineCulture’s 430,000+ follower audience</li>
        </ul>

        <p className="mt-2">
          The fee amount is <span className="font-semibold">required</span> and will be
          mutually agreed upon with the seller prior to or during the listing process.
          This fee may vary depending on vehicle value and promotional efforts.
        </p>

        <p className="mt-2">
          By submitting a vehicle listing, you acknowledge and agree to pay the agreed
          marketplace fee if your vehicle sells as a result of SkylineCulture’s exposure,
          communication, or referral.
        </p>
      </section>

      {/* 4. Payments & Checkout */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Product Sales & Payments</h2>
        <p>
          Purchases made for accessories, keychains, stickers, or diecast models are
          processed securely through Stripe. SkylineCulture does not store credit card
          information. By completing a purchase, you agree to all applicable shipping,
          tax, and processing fees.
        </p>
      </section>

      {/* 5. Shipping */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Shipping</h2>
        <p>
          Shipping rates vary based on your location and are displayed during checkout.
          International customers are responsible for any import fees, customs duties,
          or taxes required by their country.
        </p>
      </section>

      {/* 6. Returns & Refunds */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Returns & Refunds</h2>
        <p>
          Returns are accepted for unused accessory items within 14 days of delivery.
          Vehicle listings, promotional services, and marketplace fees are non-refundable.
        </p>
      </section>

      {/* 7. Seller Obligations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Seller Obligations</h2>
        <p>
          Sellers must notify SkylineCulture immediately upon sale of their vehicle.
          Failure to do so may result in account restrictions or legal action to recover
          owed marketplace fees.
        </p>
      </section>

      {/* 8. Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
        <p>
          SkylineCulture is not responsible for disputes, fraud, inaccurate listings,
          or damages resulting from private vehicle sales. Buyers should independently
          inspect vehicles before purchase.
        </p>
      </section>

      {/* 9. Changes to Terms */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
        <p>
          SkylineCulture reserves the right to update these Terms & Services at any time.
          Continued use of the platform indicates acceptance of the updated terms.
        </p>
      </section>

      {/* Footer Note */}
      <p className="text-gray-600 text-sm mt-12">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
