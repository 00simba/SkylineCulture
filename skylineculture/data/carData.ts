import { Car } from "@/types/car";
const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Listings';

const cars: Car[] = [
    {
        id: '1',
        make: "Nissan Skyline",
        model: "R34 GT-R",
        trim: "Base",
        year: "2000",
        color: "Sparkling-Silver",
        milage: "44,137 mi (71,033 km)",
        code: "BNR34",
        location: "Australia",
        img: [
            `${cloudFrontUrl}/2/1.jpg`,
            `${cloudFrontUrl}/2/2.jpg`,
            `${cloudFrontUrl}/2/3.jpg`,
            `${cloudFrontUrl}/2/4.jpg`,
            `${cloudFrontUrl}/2/5.jpg`,
            `${cloudFrontUrl}/2/6.jpg`,
            `${cloudFrontUrl}/2/7.jpg`,
            `${cloudFrontUrl}/2/8.jpg`,
            `${cloudFrontUrl}/2/9.jpg`,
            `${cloudFrontUrl}/2/10.jpg`,
            `${cloudFrontUrl}/2/11.jpg`,
            `${cloudFrontUrl}/2/12.jpg`,
            `${cloudFrontUrl}/2/13.jpg`,
            `${cloudFrontUrl}/2/14.jpg`,
            `${cloudFrontUrl}/2/15.jpg`,
            `${cloudFrontUrl}/2/16.jpg`,
            `${cloudFrontUrl}/2/17.jpg`,
            `${cloudFrontUrl}/2/18.mov`,
            `${cloudFrontUrl}/2/19.jpg`,
            

        ],
        price: "Sold",
        description: "Finished in the highly desirable WV2 Sparkling Silver, this 2000 Nissan Skyline R34 GT-R Series 2 presents a rare opportunity to own a beautifully preserved and tastefully enhanced example of one of Japan’s most iconic performance cars. With 71,000 km and service history included, this GT-R combines originality with carefully selected OEM+ and premium upgrades that elevate both its presence and drivability.\n\nThis example features a full suite of dry carbon aero enhancements from All Street, complementing the GT-R’s timeless design with a more aggressive and modern appearance. The exterior is further enhanced by a set of Nismo LMGT4 wheels, while suspension and braking improvements ensure the car performs as impressively as it looks.\n\nA standout upgrade is the R35 GT-R brake conversion, equipped with carbon-ceramic rotors and pads — a premium enhancement valued at over $15,000. Together with Tein coilovers and a carbon rear diffuser, this GT-R benefits from a balanced combination of aesthetics, performance, and exclusivity.\n\nInside, the vehicle features the desirable Series 2 black interior, complemented by Nismo accessories including a titanium shift knob, white-face cluster, and Nismo floor mats — all contributing to a refined, collector-focused cabin.\n\nIn summary: This WV2 R34 GT-R is an exceptional OEM+ example with rare factory colour, low mileage, and premium upgrades throughout. Ideal for enthusiasts seeking a highly desirable, clean, and thoughtfully enhanced GT-R.\n\nSpecs:\n· Series 2 black interior\n· R35 GTR brakes with carbon ceramic rotors and pads ($15,000+ upgrade)\n· All Street front diffuser in dry carbon\n· All Street side skirts and pods in dry carbon\n· All Street wing blade and extended legs in dry carbon\n· Nismo old logo exhaust\n· Tein Coilovers\n· Carbon rear diffuser\n· Nismo LMGT4\n· Nismo titanium shift knob\n· Nismo white face cluster\n· Nismo floor mats\n· Billet centre caps\n",
    },
]

export default cars;
