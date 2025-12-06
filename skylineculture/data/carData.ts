import { Car } from "@/types/car";

const cars: Car[] = [
    {
        id: '1',
        make: "Nissan",
        model: "R34 GT-R",
        trim: "V-Spec II",
        year: "2002",
        color: "Gun Grey Metallic",
        milage: "50,000",
        code: "BNR-34",
        img: [
            '/listings/1/main.jpg', '/listings/2/main.jpg', '/listings/3/main.jpg'
        ],
        price: "$220,000"
    },
    {
        id: '2',
        make: "Nissan",
        model: "R33 GT-R",
        trim: "400R",
        year: "1997",
        color: "Deep Marine Blue",
        milage: "35,000",
        code: "BCNR-33",
        img: [
            '/listings/2/main.jpg'
        ],
        price: "$300,000"
    },
    {
        id: '3',
        make: "Nissan",
        model: "R32 GT-R",
        trim: "V-Spec",
        year: "1994",
        color: "Pearl Black",
        milage: "85,000",
        code: "BNR-32",
        img: [
            '/listings/3/main.jpg'
        ],
        price: "$110,000"
    },
]

export default cars;