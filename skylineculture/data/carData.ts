import { Car } from "@/types/car";
const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net';


const cars: Car[] = [
    {
        id: '1',
        make: "Nissan Skyline",
        model: "R34 GT-R",
        trim: "V-Spec II",
        year: "2002",
        color: "Bayside Blue",
        milage: "50,000",
        code: "BNR34-401489",
        location: "UK",
        img: [
            `${cloudFrontUrl}/public/hero1.webp`,
            '/2.jpg',
            '/3.jpg',
            '/4.jpg',
            '/5.jpg'
        ],
        price: "$220,000"
    },
    {
        id: '2',
        make: "Nissan Skyline",
        model: "R33 GT-R",
        trim: "400R",
        year: "1997",
        color: "Deep Marine Blue",
        milage: "35,000",
        code: "BCNR33-003095",
        location: "Canada",
        img: [
            `${cloudFrontUrl}/public/hero2.webp`
        ],
        price: "$300,000"
    },
    {
        id: '3',
        make: "Nissan Skyline",
        model: "R32 GT-R",
        trim: "V-Spec",
        year: "1994",
        color: "Pearl Black",
        milage: "85,000",
        code: "BNR32-220088",
        location: "USA",
        img: [
            `${cloudFrontUrl}/public/hero3.webp`
        ],
        price: "$110,000"
    },
]

export default cars;