const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerceDB")
    .then(async () => {
        await Product.deleteMany({});
        await Product.insertMany([
            {
                "name": "Wireless Mouse",
                "price": 999.00,
                "image": "https://m.media-amazon.com/images/I/21JXHgKpVsL._SX300_SY300_QL70_FMwebp_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/61Aech0xpUL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61iCerRZKDL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/610fNfekR5L._SX679_.jpg"
                ],
                "description": "Bluetooth Mouse with 2.4 GHz & BT 5.3 Dual Wireless, 6 Buttons, Rechargeable, RGB Lights, Connect 3 Devices, Ergonomic Design for Laptop, Smartphone, Tablet (White)",
                "specifications": [
                    "Dual Wireless Connectivity",
                    "Rechargeable Battery",
                    "6 Buttons Convenience",
                    "Multi-Device Pairing"
                ],
                "category": "Electronics"
            },
            {
                "name": "Bluetooth Headphones",
                "price": 4999.00,
                "image": "https://m.media-amazon.com/images/I/31SLkF15ZkL._SX300_SY300_QL70_FMwebp_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/71R9LjXf-8L._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/71gNds5KLmL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/61HcONRF9nL._SX522_.jpg"
                ],
                "description": "Max 5 Wireless Over Ear Headphones with Adaptive Hybrid ANC (up to 50dB), HFA Tech, 80H Playtime, Dual Pairing(Calm Beige)",
                "specifications": [
                    "Premium Sound Quality",
                    "Hybrid Noise Cancellation",
                    "Spatial Audio",
                    "Ultra-Low Latency"
                ],
                "category": "Electronics"
            },
            
            {
                "name": "Casual T-Shirt 1",
                "price": 499,
                "image": "https://m.media-amazon.com/images/I/51-pLhPHoBL.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/51GvSReOAGL._SY500_.jpg",
                    "https://m.media-amazon.com/images/I/41uKa5xYPyL._SY500_.jpg",
                    "https://m.media-amazon.com/images/I/41IczDYVkXL._SX522_.jpg"
                ],
                "description": "Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirts",
                "specifications": [
                    "Soft, Breathable and Light Fabric",
                    "Regular Fit",
                    "Long Sleeve",
                ],
                "category": "Fashion"
            },
            {
                "name": "Denim Jeans",
                "price": 1599,
                "image": "https://m.media-amazon.com/images/I/71vSy-vxjvL._SY550_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/81aWYwrpwkL._SY550_.jpg",
                    "https://m.media-amazon.com/images/I/91e+3lGL6mL._SY550_.jpg",
                    "https://m.media-amazon.com/images/I/71U8+eVXZhL._SY550_.jpg"
                ],
                "description": "Men's Slim Fit Stretchable Jeans | Casual Denim | Cotton Stretch | Fashion Shades of Black & Blue (Available in Plus Size)",
                "specifications": [
                    "Material type : Cotton, Polyester and Lycra",
                    "Length : Ankle length",
                    "Style : Classic"
                ],
                "category": "Fashion"
            },
            {
                "name": "Gaming Keyboard 4",
                "price": 2599.00,
                "image": "https://m.media-amazon.com/images/I/51Qnb9swJvL._SX679_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/61fHfFTkdCL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61GYSt6hLLL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/612lRssUpxL._SX679_.jpg"
                ],
                "description": "Mechanical Wireless Gaming Keyboard with Bluetooth 5.0 + 2.4 GHz, RGB Lights 16.8 Million Colors, Type C Charging, Compatible with PCs, Smartphones and Tablets(Brown)",
                "specifications": [
                    "Bluetooth, USB",
                    "Laptop, Tablet, Smartphone",
                    "Gaming Keyboard Feature C",
                    "Everyday Use"
                ],
                "category": "Electronics"
            },
            {
                "name": "Running Shoes 3",
                "price": 799,
                "image": "https://m.media-amazon.com/images/I/61JeQldlirL._SY575_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/61yyB2ItMAL._SY500_.jpg",
                    "https://m.media-amazon.com/images/I/61600QjFd+L._SY500_.jpg",
                    "https://m.media-amazon.com/images/I/61Nn-QkGJKL._SY500_.jpg"
                ],
                "description": "Pro Running Shoes",
                "specifications": [
                    "Material type : Mesh",
                    "Closure type : Lace-Up",
                    "Heel type : No Heel",
                    "Sole material : Thermoplastic Elastomers"
                ],
                "category": "Fashion"
            },
            
            
            {
                "name": "Screwdriver Set 1",
                "price": 238,
                "image": "https://m.media-amazon.com/images/I/61G9i1udDRL._SX425_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/71Ut9jiqqZL._SX425_.jpg",
                    "https://m.media-amazon.com/images/I/71beKZ4QW6L._SX425_.jpg",
                    "https://m.media-amazon.com/images/I/61m2cxZCz3L._SX425_.jpg"
                ],
                "description": "24 in 1 Mini Screwdriver Set with Case, Small Flathead Magnetic Screwdriver Kit for Electronics, PC, Watches, Glasses, Phones, Jewelry",
                "specifications": [
                    "24-in-1 Precision Screwdriver Set",
                    "Electric Mini Screwdriver Kit",
                    "Spectacle & Laptop Screwdriver Companion",
                    
                ],
                "category": "Hardware"
            },
            {
                "name": "Electric Drill",
                "price": 2599,
                "image": "https://m.media-amazon.com/images/I/715Oi-wXcaL._SX679_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/81rmIhamlnL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71QrLx9gTXL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/81d+JRSg0wL._SX679_.jpg"
                ],
                "description": "12V Cordless Drill Machine Tool Kit 10MM Keyless Chuck,Copper Armature, 3M Auto Measuring Tape, CRV Bits, TPR Screwdriver | Home Tools Box Kit with Drill Machine (6 Month Warranty)",
                "specifications": [
                    "Versatile Power For Projects",
                    "69-Piece Set For Any Task",
                    "Precise Drilling Performance",
                    "Ergonomic & User-Friendly"
                ],
                "category": "Hardware"
            },
           
            {
                "name": "Measuring Tape",
                "price": 161,
                "image": "https://m.media-amazon.com/images/I/61wEQfT1XWL._SX679_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/615w+P6Er-L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61nmsckKELL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71uTMAHh7mL._SX679_.jpg"
                ],
                "description": "5 Meter Plastic Short Measuring Tape for Home, DIY, Professional & Industrial Use, YELLOW & BLACK",
                "specifications": [
                    "Ensures the matchless performance",
                    "Gives accurate measurements",
                    "Long lasting and durable",
                    "tanley-short tape rule"
                ],
                "category": "Hardware"
            },
          
            {
                "name": "Wall Clock 1",
                "price": 160,
                "image": "https://m.media-amazon.com/images/I/71r2jMeCVrL._SX679_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/719ExGbcy6L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61iIovr3ygL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/616ohyquiHL._SX679_.jpg"
                ],
                "description": "Plastic Analog Wall Clock for Home/Office/Bedroom/Living Room/Kitchen (White, 7 Inches)",
                "specifications": [
                    "Size: 17cm x 17cm",
                    "Material of the frame: Plastic, Material of the transparent face: Glass",
                    "Step Movement",
                    "Pack contents: 1 wall clock, 1 AA battery"
                ],
                "category": "Home"
            },
            {
                "name": "LED Lamp",
                "price": 769,
                "image": "https://m.media-amazon.com/images/I/31TcSUXnt7L._SX300_SY300_QL70_FMwebp_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/51kV4EaZVAL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61q38wBxP+L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/51u1t+e5SXL._SX679_.jpg"
                ],
                "description": "6w Rechargeable LED Table Lamp |3 Grade Dimming with Night Light |Adjustable Desk Lamp for Study |Mobile Holder |with Pen Stand | Li-Ion Battery, ABS, White (Pack of 1)",
                "specifications": [
                    "Rechargeable battery",
                    "Flexible body design",
                    "High light output",
                    "Sleek and modern design"
                ],
                "category": "Home"
            },
            {
                "name": "Curtain Set of 3",
                "price": 569,
                "image": "https://m.media-amazon.com/images/I/81l8RVvVjmL._SX679_.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/714OzjjHdgL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61Ft0ZDLBeL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71PPyJQvONL._SX679_.jpg"
                ],
                "description": " 3 Piece Combination Curtains for Window 5 feet, Grey & Cream (Grey & Cream Pyramid, Window 5 Feet)",
                "specifications": [
                    "Color : Grey & Cream, Size : Window - 5 Feet",
                    "Material: Polyester, Thread Count: 180, gsm: 180",
                    "Package Contents: 3 Curtains",
                    "Manufactured by Galaxy Home Decor, Made in India"
                ],
                "category": "Home"
            }
         
        ]);
        console.log("Products seeded");
        mongoose.disconnect();
    })
    .catch(console.error);
