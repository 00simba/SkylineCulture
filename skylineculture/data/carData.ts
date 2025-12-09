import { Car } from "@/types/car";
const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Listings';

const cars: Car[] = [
    {
        id: '1',
        make: "Nissan Skyline",
        model: "R34 GT-R",
        trim: "V-Spec",
        year: "1999",
        color: "QM1 White",
        milage: "61,889 mi (99,602 km)",
        code: "BNR34",
        location: "United Kingdom",
        img: [
            `${cloudFrontUrl}/1/1.jpg`,
            `${cloudFrontUrl}/1/2.jpg`,
            `${cloudFrontUrl}/1/3.jpg`,
            `${cloudFrontUrl}/1/4.jpg`,
            `${cloudFrontUrl}/1/5.jpg`,
            `${cloudFrontUrl}/1/6.jpg`,
            `${cloudFrontUrl}/1/7.jpg`,
            `${cloudFrontUrl}/1/8.jpg`,
            `${cloudFrontUrl}/1/9.jpg`,
            `${cloudFrontUrl}/1/10.jpg`,
            `${cloudFrontUrl}/1/11.jpg`,
            `${cloudFrontUrl}/1/12.jpg`,
            `${cloudFrontUrl}/1/13.jpg`,
            `${cloudFrontUrl}/1/14.jpg`,
            `${cloudFrontUrl}/1/15.jpg`,
            `${cloudFrontUrl}/1/16.jpg`,
            `${cloudFrontUrl}/1/17.jpg`,
            `${cloudFrontUrl}/1/18.jpg`,
        ],
        price: "On Request",
        description: "A stunning White R34 GT-R V-spec, another exclusive variation of the R34. With a production count of just 1,222 units, this car remains a sought-after gem among enthusiasts.\n\nThis car goes above and beyond a stock example, with every detail meticulously fine-tuned to create a true machine for the road. From the engine to the chassis, every aspect of the vehicle looks amazing.\n\nThis enhanced RB engine mitigates its traditional shortcomings through the replacement of some of the factory internals with many parts as HKS, ARC, and very nice set of brand-new wheels. Upgrades include the HKS 2.8 litre engine, paired with an HKS Big Single Turbo Kit and a very nice and clean engine bay with valve covers in the color of HKS. (Original HKS crate engine) The vehicle has been tested on a dynamometer, where it achieved a remarkable output of 780 horsepower.\n\nIn summary: A rare limited edition R34 GT-R that has been professionally tuned to perfect standards is a perfect addition to any car collector’s collection. Don’t miss out on the opportunity to own this unique vehicle.\n\n04/1999 Nissan Skyline R34 GT-R QM1 White\n\nSpecs:\n• HKS 2.8 Litre RB28DETT\n• HKS 272° Camshafts\n• HKS Water Pump\n• HKS T51R KAI BB Turbo\n• HKS V-Cam Pro System\n• HKS Air Filter\n• HKS Intercooler Piping\n• Nismo Intake Plenum\n• Altraks Turbo Manifold\n• ARC Titanium Muffler\n• Getrag 6SPD Transmission\n• 1050CC Injector Dynamics Injectors\n• 2× Bosch Fuel Pump\n• SARD 5 Litre Collector Tank\n• ARC Aluminium Radiator\n• ARC Intercooler\n• Haltech Elite 2000 ECU (checked on 98 octane pump fuel)\n• AIM Digital Dash\n• Nitron Force 3Way Suspension\n• Alcon Brake Kit\n• Ferodo Pads\n• 18” Volk Racing TE37 Wheels\n• Michelin Pilot Sport\n• Nismo Side Skirts\n• Nismo Rear Spats\n• Carbon Wing Legs\n• Colour: 2983 made in QM1 white (V-Spec: 1222)\n• 99,602 kms\n• No accident history\n• Built by Auto Gallery Yokohama\n• 780PS spec dyno checked on 98 octane pump fuel\n• U.S. Import Legal",
    },
]

export default cars;