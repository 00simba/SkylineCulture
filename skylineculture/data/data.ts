import { Product } from "@/types/product";

const shipping =  ["Orders of $35 or more qualify for FREE Shipping.\nUSA: 4-6 business days\nCanada: 2-6 business days\nInternational: 7-15 business days"]
//curr_id = 13
const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Images';
const products: Product[] = [
    {
        "id" : 1,
        "title" : "R34 GTR Keychain",
        "stars" : 0,
        "img" : [`${cloudFrontUrl}/r34_keychain/r34key_main.webp`, `${cloudFrontUrl}/r34_keychain/r34key_1.webp`],
        "price" : 14.99,
        "sale_price": null,
        "url" : "r34-gtr-keychain",
        "description" : [
        
        "One of the most popular sports car out of Japan, the R34 GTR! This spec is based off the ultra rare 1 of 20 Z-TUNE!",        

        ],
        "specs": "Size: 2 inches on longest side\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Keychains",
        "featured" : true,
    },
    {
        "id" : 2,
        "title" : "R32 GTR Keychain",
        "stars" : 0,
        "img" : [`${cloudFrontUrl}/r32_keychain/r32key_main.webp`],
        "price" : 14.99,
        "sale_price": null,
        "url" : "r32-gtr-keychain",
        "description" : [
            
        "Featuring the record setting sports car dubbed 'Godzilla', the R32 GTR!"
        
        ],
        "specs": "Size: 2 inches on longest side\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Keychains",
        "featured" : true,
    },
    {
        "id" : 5,
        "title" : "Turbo Keychain",
        "stars" : 5,
        "img" : [`${cloudFrontUrl}/turbo_keychain/turbo_main.webp`, `${cloudFrontUrl}/turbo_keychain/turbo_Black.webp`, `${cloudFrontUrl}/turbo_keychain/turbo_Silver.webp`, `${cloudFrontUrl}/turbo_keychain/turbo_Chroma.webp`],
        "price" : 9.99,
        "sale_price": null,
        "url" : "turbo-keychain",
        "description" : [
            
        "Give your keyset a boost by getting this turbo keychain that features a spinnable turbine.",
    
        ],

        "specs": "Size: 28mm X 16mm.\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants": [{"Select Color": ["Black", "Silver", "Chroma"]}],
        "collection" : "Keychains",
        "featured" : false,
    },
    {
        "id" : 6,
        "title" : "NOS Keychain",
        "stars" : 4.5,
        "img" : [`${cloudFrontUrl}/nos_keychain/nos_main.webp`, `${cloudFrontUrl}/nos_keychain/nos_1.webp`, `${cloudFrontUrl}/nos_keychain/nos_2.webp`],
        "price" : 7.99,
        "sale_price": null,
        "url" : "nos-keychain",
        "description" : [
            
        "A perfect miniature NOS bottle keychain that features an unscrewable lid to work as a stash.",
    
        ],

        "specs": "Size: 2 inches on longest side\n Material: Constructed of zinc alloy",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Keychains",
        "featured" : false,
    },
    {
        "id" : 11,
        "title" : "100 Pack Stickers",
        "stars" : 5,
        "img" : [`${cloudFrontUrl}/100pc_sticker/100pc_main.webp`, `${cloudFrontUrl}/100pc_sticker/100pc_1.webp`, `${cloudFrontUrl}/100pc_sticker/100pc_2.webp`, `${cloudFrontUrl}/100pc_sticker/100pc_3.webp`],
        "price" : 14.99,
        "sale_price": null,
        "url" : "100-pack-stickers",
        "description" : [
            
        "A pack of 100 stickers containing various JDM cars to decorate your accessories.",         
        
        ],

        "specs": "Size: 4cm to 10cm\n Material: Vinyl, Eco-Friendly PVC",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Stickers",
        "featured" : false,
    },
    {
        "id" : 13,
        "title" : "Skyline R34 GTR - 1/24",
        "stars" : 0,
        "img" : [`${cloudFrontUrl}/24r34_diecast/24r34_Blue.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_White.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_1.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_2.webp`,
        `${cloudFrontUrl}/24r34_diecast/24r34_3.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_4.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_5.webp`, `${cloudFrontUrl}/24r34_diecast/24r34_6.webp`,
        `${cloudFrontUrl}/24r34_diecast/24r34_7.webp`],
        "price" : 34.99,
        "sale_price": null,
        "url" : "24-r34-diecast",
        "description" : [
            
        "A well detailed 1/24 scaled version of the R34 GTR by Welly featuring doors and hood that can be opened.",         
        
        ],

        "specs": "Brand: Welly\n Scale: 1:24",
        "shipping": [shipping[0]],
        "variants" : [{"Select Color": ["Blue", "White"]}],
        "collection" : "Diecast Cars",
        "featured" : false,
    },
    {
        "id" : 12,
        "title" : "Nissan Skyline R34 GTR - 1/36",
        "stars" : 5,
        "img" : [`${cloudFrontUrl}/36r34_diecast/36r34_main.webp`, `${cloudFrontUrl}/36r34_diecast/36r34_Blue.webp`, `${cloudFrontUrl}/36r34_diecast/36r34_Silver.webp`, `${cloudFrontUrl}/36r34_diecast/r36r34_Black.webp`],
        "price" : 19.99,
        "sale_price": null,
        "url" : "36-r34-diecast",
        "description" : [
            
        "Featuring the R34 GTR in Bayside Blue, Black, and Fast & Furious Silver with doors that can open.",         
        
        ],

        "specs": "Brand: Jackiekim \n Scale: 1:36",
        "shipping": [shipping[0]],
        "variants" : [{"Select Color": ["Blue", "Black", "Silver"]}],
        "collection" : "Diecast Cars",
        "featured" : false,
    },
    {
        "id" : 7,
        "title" : "Gearbox Keychain",
        "stars" : 4.5,
        "img" : [`${cloudFrontUrl}/gearbox_keychain/gearbox_main.webp`, `${cloudFrontUrl}/gearbox_keychain/gearbox_1.webp`, `${cloudFrontUrl}/gearbox_keychain/gearbox_2.webp`],
        "price" : 12.99,
        "sale_price": null,
        "url" : "gearbox-keychain",
        "description" : [
            
        "A fun 6 speed gearbox keychain that you can fidgit with to mimic the gearbox of a real car.",         
        
        ],

        "specs": "Size: 2 inches on longest side\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Keychains",
        "featured" : false,
    },
    {
        "id" : 8,
        "title" : "Suspension Keychain",
        "stars" : 5,
        "img" : [`${cloudFrontUrl}/suspension_keychain/suspension_main.webp`, `${cloudFrontUrl}/suspension_keychain/suspension_Blue.webp`, `${cloudFrontUrl}/suspension_keychain/suspension_Green.webp`, `${cloudFrontUrl}/suspension_keychain/suspension_Gold.webp`, `${cloudFrontUrl}/suspension_keychain/suspension_Red.webp`, `${cloudFrontUrl}/suspension_keychain/suspension_Black.webp`],
        "price" : 11.99,
        "sale_price": null,
        "url" : "suspension-keychain",
        "description" : [
            
        "An adjustable suspension keychain that can be pressed on its ends to engage the spring just like a real suspension.",         
        
        ],

        "specs": "Size: 74mm length\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants": [{"Select Colour": ["Blue", "Green", "Gold", "Red", "Black"]}],
        "collection" : "Keychains",
        "featured" : false,
    },
    {
        "id" : 9,
        "title" : "TE37 Keychain",
        "stars" : 0,
        "img" : [`${cloudFrontUrl}/te37_keychain/te37_Black.webp`, `${cloudFrontUrl}/te37_keychain/te37_Chroma.webp`, `${cloudFrontUrl}/te37_keychain/te37_Silver.webp`, `${cloudFrontUrl}/te37_keychain/te37_1.webp`, `${cloudFrontUrl}/te37_keychain/te37_2.webp`, `${cloudFrontUrl}/te37_keychain/te37_3.webp`, `${cloudFrontUrl}/te37_keychain/te37_4.webp`],
        "price" : 11.99,
        "sale_price": null,
        "url" : "te37-keychain",
        "description" : [
            
        "Featuring the car community famous TE37 as a 3D miniature keychain designed as realistic as possible.",         
        
        ],

        "specs": "Size: 3.2cm rim diameter\n Material: Constructed of zinc alloy",
        "shipping": [shipping[0]],
        "variants" : [{"Select Color": ["Black", "Silver", "Chroma"]}],
        "collection" : "Keychains",
        "featured" : false,
    },
    {
        "id" : 10,
        "title" : "GTR Keychain",
        "stars" : 4.5,
        "img" : [`${cloudFrontUrl}/gtr_keychain/gtr_main.webp`, `${cloudFrontUrl}/gtr_keychain/gtr_1.webp`, `${cloudFrontUrl}/gtr_keychain/gtr_2.webp`],
        "price" : 9.99,
        "sale_price": null,
        "url" : "gtr-keychain",
        "description" : [
            
        "A clean, simple, and classic GTR logo keychain for any GTR fan.",         
        
        ],

        "specs": "Size: 1.5 inches by 1.7 inches\n Material: Constructed of metal",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Keychains",
        "featured" : true,
    },
    {
        "id" : 3,
        "title" : "R34 GTR Pin",
        "stars": 0,
        "img" : [`${cloudFrontUrl}/r34_pin/r34pin_main.webp`, `${cloudFrontUrl}/r34_pin/r34pin_1.webp`, `${cloudFrontUrl}/r34_pin/r34pin_2.webp`, `${cloudFrontUrl}/r34_pin/r34pin_3.webp`],
        "price" : 14.99,
        "sale_price": null,
        "url" : "r34-gtr-pin",
        "description" : [
        
        "A pin for all R34 GTR fans to bring the most out of their backpacks, hats, pin collections, and more!"],
        
        "specs": "Size: 1.5 in x 0.75 in\n Double Black Rubber Pin Clutch\n Soft Enamel Process\n Black Dyed Metal",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Pins",
        "featured" : false,
    },
    {
        "id" : 14,
        "title" : "Engine Bay Badge",
        "stars": 0,
        "img" : [`${cloudFrontUrl}/skylineculture-badge/badge_main.webp`, `${cloudFrontUrl}/skylineculture-badge/badge_1.webp`, `${cloudFrontUrl}/skylineculture-badge/badge_2.webp`, `${cloudFrontUrl}/skylineculture-badge/badge_3.webp`],
        "price" : 34.99,
        "sale_price": null,
        "url" : "skylineculture-badge",
        "description" : [
            
        "Elevate your engine bay with a subtle yet unmistakable statement. The SkylineCulture Engine Bay Badge is precision-cut from 304-grade stainless steel and finished with a brushed surface for a clean, OEM-plus aesthetic.\n \nBuilt to withstand heat, moisture, and time, this badge is designed for enthusiasts who value quality and attention to detail. Whether mounted in the engine bay, on a strut bar, or a custom panel, it adds a refined motorsport-inspired touch without overpowering the build.\n\nEach badge includes pre-applied 3M automotive-grade adhesive for a secure and hassle-free installation—no drilling required.\n"],

        "specs": "- Made from 304 stainless steel with brushed metal finish\n- Measures 3 inches by 0.65 inches and 1mm in thickness\n- Precision laser-etched SkylineCulture branding\n- Heat and corrosion-resistant\n- Includes 3M automotive-grade tape for easy installation\n- Ideal for engine bays, show cars, and street builds\n\nDesigned for true Skyline enthusiasts — clean, timeless, and built to last.",
        "shipping": [shipping[0]],
        "variants" : [{}],
        "collection" : "Other", 
        "featured" : true,   
    },
]

export default products;