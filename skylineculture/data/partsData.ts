import { Part } from "@/types/part";

const shipping =  ["All orders ship from Canada within 1 business day.\nUSA: 3-5 business days\nCanada: 2-6 business days\nInternational: 7-15 business days"]
const cloudFrontUrl = 'https://d38opoffv15p79.cloudfront.net/Parts';
const parts: Part[] = [
    {
        id : 15,
        title : "Radiator Cap",
        stars : 0,
        img : [`${cloudFrontUrl}/radiator-cap/radiator-cap-main.webp`],
        price : 39.99,
        sale_price: null,
        url : ["nismo-radiator-cap"],
        description : [
        
        "The NISMO Radiator Cap maintains higher cooling system pressure than the standard 0.9 kg/cm² cap, raising the coolant boiling point by approximately 6 °C. This helps reduce coolant boil-over and evaporation under high temperatures, improving overall cooling performance while retaining an OEM-style fit.",        

        ],
        specs: "Type: High-pressure radiator cap\nPerformance: Raises coolant boiling point by ~6 °C (vs. 0.9 kg/cm² cap)\nFitment: Direct OEM replacement",
        shipping: [shipping[0]],
        variants : [{}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "https://www.nismo.co.jp/products/web_catalogue/cooling/racing_radiator_cap.html#skyline",
        partNumber: ["21430-RS013"]
    },

    {
        id : 16,
        title : "Oil Filler Cap - Rachet Type",
        stars : 0,
        img : [`${cloudFrontUrl}/oil-filler-cap/oil_filler_cap_main.webp`],
        price : 59.99,
        sale_price: null,
        url : ["nismo-oil-filler-cap-rachet"],
        description : [
        
        "The ratchet mechanism prevents over-tightening to ensure a secure seal and protect engine threads. Featuring durable metal construction and NISMO branding, it offers a functional upgrade with a clean, OEM-style fit.",        

        ],
        specs: "Type: Ratchet-type oil filler cap\nMaterial: Metal construction\nFitment: Direct OEM replacement",
        shipping: [shipping[0]],
        variants : [{}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "",
        partNumber: ["15255-RN015"]
    },
    {
        id : 17,
        title : "Door Handle Protector",
        stars : 0,
        img : [`${cloudFrontUrl}/door-handle-protector/door_handle_protector_main.webp`, `${cloudFrontUrl}/door-handle-protector/door_handle_protector_r33_gtr.webp`, `${cloudFrontUrl}/door-handle-protector/door_handle_protector_r32_gtr.webp`],
        price : 44.99,
        sale_price: null,
        url : ["nismo-door-handle-protector-r34-gtr", "nismo-door-handle-protector-r33-gtr", "nismo-door-handle-protector-r32-gtr"],
        description : [
        
        "Protects the door handle area from scratches while adding a subtle, sporty NISMO accent. Each protector is designed specifically for the Skyline R32, R33, and R34, featuring an embossed finish and easy adhesive-backed installation.",        

        ],
        specs: "Function: Protects door handle area from scratches and wear\nDesign: Model-specific shape with embossed NISMO logo\nInstallation: Adhesive-backed, no drilling required",
        shipping: [shipping[0]],
        variants : [{"Select Skyline": ["BNR34", "BCNR33", "BNR32"]}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "https://www.nismo.co.jp/products/nismo_parts/NEW_PARTS/index_2020.html",
        partNumber: ["8064A-RSR20", "8064A-RSR30", "8064A-RSR40"]
    },
    {
        id : 18,
        title : "Brake Host Set",
        stars : 0,
        img : [`${cloudFrontUrl}/brake-lines/brake_lines_main.webp`],
        price : 199.99,
        sale_price: null,
        url : ["nismo-brake-lines-r34-gtr", "nismo-brake-lines-r33-gtr", "nismo-brake-lines-r32-gtr"],
        description : [
        
        "Designed to improve braking performance under high-load conditions, this brake hose set reduces pedal stroke and delivers a more direct, consistent pedal feel. Using a low-expansion PTFE inner hose with stainless steel mesh, it minimizes hose expansion while maintaining OEM-style routing and installation points for a safe, straightforward replacement.",        

        ],
        specs: "Construction: PTFE inner hose with stainless steel mesh\nFittings: Plated steel fittings\nWarranty: 1-year manufacturer warranty",
        shipping: [shipping[0]],
        variants : [{"Select Skyline": ["BNR34", "BCNR33", "BNR32"]}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "https://www.nismo.co.jp/products/web_catalogue/brake/brake_hose_set.html",
        partNumber: ["46200-RSR25", "46200-RSR45"]
    },
    {
        id : 19,
        title : "Aluminum Carbon Shift Knob",
        stars : 0,
        img : [`${cloudFrontUrl}/aluminum-carbon-shift-knob/aluminum_carbon_shift_knob_main.webp`],
        price : 119.99,
        sale_price: null,
        url : ["nismo-aluminum-carbon-shift-knob"],
        description : [
        
        "The NISMO Aluminum Carbon Shift Knob combines lightweight aluminum with carbon construction to deliver a solid, precise shift feel. Designed to enhance driver engagement, it adds a refined motorsport-inspired touch.",        

        ],
        specs: "Material: Aluminum and carbon construction\nDesign: Weighted for improved shift feel\nFitment: M10 × 1.25 thread",
        shipping: [shipping[0]],
        variants : [{}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "",
        partNumber: ["C2865-1EA07"]
    },
    {
        id : 20,
        title : "RB26 Oil Change Kit",
        stars : 0,
        img : [`${cloudFrontUrl}/rb26-oil-change-kit/rb26_oil_change_kit_main.webp`],
        price : 199.99,
        sale_price: null,
        url : ["nismo-rb26-oil-change-kit"],
        description : [
        
        "The NISMO RB26 Oil Change Kit includes genuine NISMO Motul engine oil developed specifically for the RB26DETT, along with a matching NISMO oil filter. Designed to handle a wide range of driving conditions, the 10W-60 fully synthetic oil provides reliable lubrication for both normal and high-performance driving, with recommended oil change intervals of 6,000 km under normal use.",        

        ],
        specs: "Oil Type: NISMO Motul 100% Synthetic SAE 10W-60\nIncluded: 4L bottle, 1L bottle, and NISMO oil filter\nApplication: RB26DETT engines",
        shipping: [shipping[0]],
        variants : [{}],
        compatible : ["All", "R34 GT-R", "R33 GT-R", "R32 GT-R"],
        featured : true,
        catalogue: "https://www.nismo.co.jp/products/catalogue_2019/html5.html#page=49",
        partNumber: ["KL101-RN641", "KL101-RN644", "15208-RN021"]
    },
]

export default parts;