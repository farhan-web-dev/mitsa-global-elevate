import { Wind, FileText, Pen, Coffee, ShieldCheck,Tag, ShoppingBag, Box, Sparkles, LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  image: string; // The category image on home page
  desc: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  specs: string;
  image: string; // Product specific image
}

// Reuse existing images where possible for categories, use unsplash for new ones
import productAromatic from "@/assets/product-aromatic.jpg";
import productCleaning from "@/assets/product-cleaning.jpg";
import productPaper from "@/assets/product-paper.jpg";
import productStationery from "@/assets/product-stationery.jpg";
import productRefreshments from "@/assets/product-refreshments.jpg";
import plasticProducts from "@/assets/product-plastic.png";
import aluminumProducts from "@/assets/product-allmunium.png";
import labelsProducts from "@/assets/thermal.png";
import aro1 from "@/assets/aromatic/aro1.png";
import aro2 from "@/assets/aromatic/aro2.png";
import aro3 from "@/assets/aromatic/aro3.png";
import aro4 from "@/assets/aromatic/aro4.png";
import aro5 from "@/assets/aromatic/aro5.png";
import pap1 from "@/assets/paper/pap1.png";
import pap2 from "@/assets/paper/pap2.png";
import pap3 from "@/assets/paper/pap3.png";
import pap4 from "@/assets/paper/pap4.png";
import pap6 from "@/assets/paper/pap6.png";
import pap7 from "@/assets/paper/pap7.png";
import pap9 from "@/assets/paper/pap9.png";
import pap11 from "@/assets/paper/pap11.png";
import pap12 from "@/assets/paper/pap12.png";
import pap13 from "@/assets/paper/pap13.png";
import pap14 from "@/assets/paper/pap14.png";
import pap15 from "@/assets/paper/pap15.png";
// import pap16 from "@/assets/paper/pap16.png";
import sta1 from "@/assets/stationery/sta1.png";
import sta2 from "@/assets/stationery/sta2.png";
import sta3 from "@/assets/stationery/sta3.png";
import sta4 from "@/assets/stationery/sta4.png";
import sta5 from "@/assets/stationery/sta5.png";
import sta6 from "@/assets/stationery/sta6.png";
import sta7 from "@/assets/stationery/sta7.png";
import sta8 from "@/assets/stationery/sta8.png";
import sta9 from "@/assets/stationery/sta9.png";
import sta10 from "@/assets/stationery/sta10.png";
import sta11 from "@/assets/stationery/sta11.png";
import sta12 from "@/assets/stationery/sta12.png";
import ref1 from "@/assets/refreshments/ref1.png";
import ref2 from "@/assets/refreshments/ref2.png";
import ref3 from "@/assets/refreshments/ref3.png";
import ref4 from "@/assets/refreshments/ref4.png";
import ref5 from "@/assets/refreshments/ref5.png";
import ref6 from "@/assets/refreshments/ref6.png";
import saf1 from "@/assets/saftey/saf1.png";
import saf2 from "@/assets/saftey/saf2.png";
import saf3 from "@/assets/saftey/saf3.png";
import saf4 from "@/assets/saftey/saf4.png";
import saf5 from "@/assets/saftey/saf5.png";
import saf6 from "@/assets/saftey/saf6.png";
import saf7 from "@/assets/saftey/saf7.png";
import saf8 from "@/assets/saftey/saf8.png";
import saf9 from "@/assets/saftey/saf9.png";
import saf10 from "@/assets/saftey/saf10.png";
import saf11 from "@/assets/saftey/saf11.png";
import saf12 from "@/assets/saftey/saf12.png";
import saf13 from "@/assets/saftey/saf13.png";
import saf14 from "@/assets/saftey/saf14.png";
import saf15 from "@/assets/saftey/saf15.png";
import saf16 from "@/assets/saftey/saf16.png";
import saf17 from "@/assets/saftey/saf17.png";
import saf18 from "@/assets/saftey/saf18.png";
import saf19 from "@/assets/saftey/saf19.png";
import saf20 from "@/assets/saftey/saf20.png";
import saf21 from "@/assets/saftey/saf21.png";
import saf22 from "@/assets/saftey/saf22.png";
import saf23 from "@/assets/saftey/saf23.png";
import saf24 from "@/assets/saftey/saf24.png";
import saf25 from "@/assets/saftey/saf25.png";
import saf26 from "@/assets/saftey/saf26.png";
import saf27 from "@/assets/saftey/saf27.png";
import saf28 from "@/assets/saftey/saf28.png";
import pla1 from "@/assets/plastic/pla1.png";
import pla2 from "@/assets/plastic/pla2.png";
import pla3 from "@/assets/plastic/pla3.png";
import pla4 from "@/assets/plastic/pla4.png";
import pla5 from "@/assets/plastic/pla5.png";
import pla6 from "@/assets/plastic/pla6.png";
import pla7 from "@/assets/plastic/pla7.png";
import pla8 from "@/assets/plastic/pla8.png";
import pla9 from "@/assets/plastic/pla9.png";
import pla10 from "@/assets/plastic/pla10.png";
import pla11 from "@/assets/plastic/pla11.png";
import pla12 from "@/assets/plastic/pla12.png";
import pla13 from "@/assets/plastic/pla13.png";
import pla14 from "@/assets/plastic/pla14.png";
import pla15 from "@/assets/plastic/pla15.png";
import pla16 from "@/assets/plastic/pla16.png";
import pla17 from "@/assets/plastic/pla17.png";
import pla18 from "@/assets/plastic/pla18.png";
import alu1 from "@/assets/aluminum/al1.png";
import alu2 from "@/assets/aluminum/al2.png";
import alu3 from "@/assets/aluminum/al3.png";
import cle1 from "@/assets/cleaning/cle1.png";
import cle2 from "@/assets/cleaning/cle2.png";
import cle3 from "@/assets/cleaning/cle3.png";
import cle4 from "@/assets/cleaning/cle4.png";
import cle5 from "@/assets/cleaning/cle5.png";
import cle6 from "@/assets/cleaning/cle6.png";
import cle7 from "@/assets/cleaning/cle7.png";
import cle8 from "@/assets/cleaning/cle8.png";
import cle9 from "@/assets/cleaning/cle9.png";
import cle10 from "@/assets/cleaning/cle10.png";
import cle11 from "@/assets/cleaning/cle11.png";
import cle12 from "@/assets/cleaning/cle12.png";
import cle13 from "@/assets/cleaning/cle13.png";
import cle14 from "@/assets/cleaning/cle14.png";
import cle15 from "@/assets/cleaning/cle15.png";
import cle16 from "@/assets/cleaning/cle16.png";
import cle17 from "@/assets/cleaning/cle17.png";
import cle18 from "@/assets/cleaning/cle18.png";
import cle19 from "@/assets/cleaning/cle19.png";
import cle20 from "@/assets/cleaning/cle20.png";
import cle21 from "@/assets/cleaning/cle21.png";
import cle22 from "@/assets/cleaning/cle22.png";
import cle23 from "@/assets/cleaning/cle23.png";
import cle24 from "@/assets/cleaning/cle24.png";
import cle25 from "@/assets/cleaning/cle25.png";
import cle26 from "@/assets/cleaning/cle26.png";
import cle27 from "@/assets/cleaning/cle27.png";
import cle28 from "@/assets/cleaning/cle28.png";
import cle29 from "@/assets/cleaning/cle29.png";
import cle30 from "@/assets/cleaning/cle30.png";
import lab1 from "@/assets/labels/lab1.png";
import lab2 from "@/assets/labels/lab2.png";
import lab3 from "@/assets/labels/lab3.png";
import lab4 from "@/assets/labels/lab4.png";
import lab5 from "@/assets/labels/lab5.png";
import lab6 from "@/assets/labels/lab6.png";

export const categories: Category[] = [
  {
    id: "aromatic",
    name: "Aromatic Products",
    subtitle: "Scent Machines & Fragrances",
    icon: Wind,
    image: productAromatic,
    desc: "Premium scent diffusers and fragrances for commercial spaces.",
  },
  {
    id: "paper",
    name: "Paper Products",
    subtitle: "Tissue & Packaging",
    icon: FileText,
    image: productPaper,
    desc: "Complete range of tissue products, napkins, and packaging items.",
  },
  {
    id: "stationery",
    name: "Stationery Items",
    subtitle: "Office Supplies",
    icon: Pen,
    image: productStationery,
    desc: "Office consumables and materials for business environments.",
  },
  {
    id: "refreshments",
    name: "Refreshing Products",
    subtitle: "Beverages & Sugar",
    icon: Coffee,
    image: productRefreshments,
    desc: "Coffee, tea, and sugar products for offices and hospitality.",
  },
  {
    id: "safety",
    name: "Safety & Hygiene",
    subtitle: "Protective Gear",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?q=80&w=800&auto=format&fit=crop",
    desc: "Essential safety equipment and personal hygiene products.",
  },
  {
    id: "plastic",
    name: "Plastic Products",
    subtitle: "Containers & Bags",
    icon: ShoppingBag,
    image: plasticProducts,
    desc: "Durable disposable plastic containers, cups, and bags.",
  },
{
  id: "labels",
  name: "Labels & Thermal Papers",
  subtitle: "Barcode Labels & POS Rolls",
  icon: Tag,
  image: labelsProducts,
  desc: "Thermal paper rolls, barcode labels, and retail shelf tag stickers for POS and labeling systems."
},
  {
    id: "aluminum",
    name: "Aluminum Products",
    subtitle: "Foil & Trays",
    icon: Box,
    image: aluminumProducts,
    desc: "High-quality aluminum foils and food storage containers.",
  },
  {
    id: "cleaning",
    name: "Cleaning Tools & Equipments",
    subtitle: "Professional Gear",
    icon: Sparkles,
    image: productCleaning,
    desc: "Professional cleaning tools, chemicals, and janitorial supplies.",
  },
];

// 40 Products (5 per category)
export const products: Product[] = [
// Aromatic Products
{
  id: "aro-1",
  categoryId: "aromatic",
  name: "Mini Scent Diffusing Machine",
  specs: "Wall mount / HVAC system • 200ml oil capacity • 300–500 m³ coverage",
  image: aro1,
},
{
  id: "aro-2",
  categoryId: "aromatic",
  name: "Smart Scent Diffusing Machine",
  specs: "Wall mount installation • 200ml oil capacity • 300–500 m³ coverage",
  image: aro2,
},
{
  id: "aro-3",
  categoryId: "aromatic",
  name: "Pro Smart Scent Diffusing Machine",
  specs: "450ml oil capacity • 750–1500 m³ coverage • Large area fragrance diffusion",
  image: aro3,
},
{
  id: "aro-4",
  categoryId: "aromatic",
  name: "Automatic Air Freshener Dispenser",
  specs: "Wall mount • Automatic spray system • Suitable for homes, offices & commercial spaces",
  image: aro4,
},
{
  id: "aro-5",
  categoryId: "aromatic",
  name: "300ml Air Freshener Refill",
  specs: "300ml refill • Available scents: Strawberry, Lemon, Fresh Water, Jasmine, Lavender",
  image: aro5,
},
  
 // Paper Products
{
  id: "pap-1",
  categoryId: "paper",
  name: "Maxi Roll Tissue",
  specs: "High absorbency • Heavy duty roll",
  image: pap1,
},
{
  id: "pap-2",
  categoryId: "paper",
  name: "Maxi Roll Auto Cut Machine",
  specs: "Auto dispenser • 1×6 pack compatibility",
  image: pap2,
},
{
  id: "pap-3",
  categoryId: "paper",
  name: "Snow White Box Tissue",
  specs: "Soft facial tissue • Premium quality",
  image: pap3,
},
{
  id: "pap-4",
  categoryId: "paper",
  name: "Boutique Cube White Tissue",
  specs: "Cube box tissue • Soft & hygienic",
  image: pap4,
},
{
  id: "pap-6",
  categoryId: "paper",
  name: "Facial Tissue Box",
  specs: "1×30 pack • Soft facial tissues",
  image: pap6,
},
{
  id: "pap-7",
  categoryId: "paper",
  name: "Paper Napkins",
  specs: "All sizes available • Bulk packaging",
  image: pap7,
},
{
  id: "pap-9",
  categoryId: "paper",
  name: "Plain White Rectangle Box Tissue",
  specs: "Premium rectangular tissue box",
  image: pap9,
},
{
  id: "pap-11",
  categoryId: "paper",
  name: "Paper Plates",
  specs: "Disposable plates • All sizes available",
  image: pap11,
},
{
  id: "pap-12",
  categoryId: "paper",
  name: "Foam Plates",
  specs: "Disposable foam plates • All sizes",
  image: pap12,
},
{
  id: "pap-13",
  categoryId: "paper",
  name: "Interfold Tissue 150×20",
  specs: "150 sheets × 20 packs",
  image: pap13,
},
{
  id: "pap-14",
  categoryId: "paper",
  name: "Paper Cups with Lid",
  specs: "All sizes available • Disposable cups",
  image: pap14,
},
{
  id: "pap-15",
  categoryId: "paper",
  name: "Toilet Roll",
  specs: "All sizes available • Toilet rolls",
  image: pap15,
},
// {
//   id: "pap-15",
//   categoryId: "paper",
//   name: "Bed Roll",
//   specs: "All sizes available • Bed rolls",
//   image: pap16,
// },
// Stationery Items
{
  id: "sta-1",
  categoryId: "stationery",
  name: "Spiral Notebooks",
  specs: "A4 & A5 sizes • Durable spiral binding",
  image: sta1,
},
{
  id: "sta-2",
  categoryId: "stationery",
  name: "Ballpoint Pens",
  specs: "Smooth writing • Office use",
  image: sta2,
},
{
  id: "sta-3",
  categoryId: "stationery",
  name: "Highlighters",
  specs: "Bright colors • Quick drying ink",
  image: sta3,
},
{
  id: "sta-4",
  categoryId: "stationery",
  name: "Sticky Notes",
  specs: "Neon colors • Easy peel",
  image: sta4,
},
{
  id: "sta-5",
  categoryId: "stationery",
  name: "Office Stapler",
  specs: "Heavy duty stapler",
  image: sta5,
},
{
  id: "sta-6",
  categoryId: "stationery",
  name: "Stapler Pins",
  specs: "Standard office pins • Bulk pack",
  image: sta6,
},
{
  id: "sta-7",
  categoryId: "stationery",
  name: "Paper Clips",
  specs: "Steel clips • Multi-size pack",
  image: sta7,
},
{
  id: "sta-8",
  categoryId: "stationery",
  name: "Adhesive Tape",
  specs: "Transparent tape • Office use",
  image: sta8,
},
{
  id: "sta-9",
  categoryId: "stationery",
  name: "Glue Stick",
  specs: "Strong adhesive • Paper friendly",
  image: sta9,
},
{
  id: "sta-10",
  categoryId: "stationery",
  name: "Office Scissors",
  specs: "Sharp stainless steel blades",
  image: sta10,
},
{
  id: "sta-11",
  categoryId: "stationery",
  name: "Office Ruler",
  specs: "Plastic ruler • Accurate measurement",
  image: sta11,
},
{
  id: "sta-12",
  categoryId: "stationery",
  name: "Permanent Markers",
  specs: "Bold ink • Multi surface use",
  image: sta12,
},

  // Refreshing Products
{
  id: "ref-1",
  categoryId: "refreshments",
  name: "Sugar Sachets",
  specs: "1×1000 pack • Individual sugar sticks",
  image: ref1,
},
{
  id: "ref-2",
  categoryId: "refreshments",
  name: "Sugar Cubes",
  specs: "Refined white sugar cubes • Beverage use",
  image: ref2,
},
{
  id: "ref-3",
  categoryId: "refreshments",
  name: "Nescafe Gold",
  specs: "Premium instant coffee",
  image: ref3,
},
{
  id: "ref-4",
  categoryId: "refreshments",
  name: "Nescafe Red Mug",
  specs: "Classic instant coffee blend",
  image: ref4,
},
{
  id: "ref-5",
  categoryId: "refreshments",
  name: "Nescafe 3 in 1",
  specs: "Instant coffee mix • Coffee, sugar & creamer",
  image: ref5,
},
{
  id: "ref-6",
  categoryId: "refreshments",
  name: "Lipton Tea Bags",
  specs: "Premium tea bags • Refreshing taste",
  image: ref6,
},
 // Safety Hygiene
{
  id: "saf-1",
  categoryId: "safety",
  name: "Jif Cream",
  specs: "Multi surface cleaning cream",
  image: saf1,
},
{
  id: "saf-2",
  categoryId: "safety",
  name: "Vinyl Gloves Powder Free Black",
  specs: "Disposable protective gloves",
  image: saf2,
},
{
  id: "saf-3",
  categoryId: "safety",
  name: "Plastic Shoe Cover",
  specs: "Disposable shoe protection",
  image: saf3,
},
{
  id: "saf-4",
  categoryId: "safety",
  name: "Sponge Good Quality",
  specs: "Cleaning sponge for kitchen use",
  image: saf4,
},
{
  id: "saf-5",
  categoryId: "safety",
  name: "Dishwashing Steel",
  specs: "Steel scrubber for tough cleaning",
  image: saf5,
},
{
  id: "saf-6",
  categoryId: "safety",
  name: "Hand Soap Liquid 4×5L",
  specs: "Bulk liquid hand soap",
  image: saf6
},
{
  id: "saf-7",
  categoryId: "safety",
  name: "Disinfectant Lavender 4×5L",
  specs: "Lavender disinfectant cleaner",
  image: saf7
},
{
  id: "saf-8",
  categoryId: "safety",
  name: "All Purpose Cleaner 4×5L",
  specs: "Multipurpose surface cleaner",
  image: saf8
},
{
  id: "saf-9",
  categoryId: "safety",
  name: "Dishwasher Strong 4×5L",
  specs: "Heavy duty dishwashing liquid",
  image: saf9
},
{
  id: "saf-10",
  categoryId: "safety",
  name: "Bleach 6×4L",
  specs: "Powerful bleaching disinfectant",
  image: saf10
},
{
  id: "saf-11",
  categoryId: "safety",
  name: "Floor Cleaner Lavender 4×5L",
  specs: "Lavender fragrance floor cleaner",
  image: saf11
},
{
  id: "saf-12",
  categoryId: "safety",
  name: "Glass Cleaner 12×750ml",
  specs: "Streak free glass cleaning spray",
  image: saf12
},
{
  id: "saf-13",
  categoryId: "safety",
  name: "Glass Cleaner 4×5L",
  specs: "Bulk glass cleaner solution",
  image: saf13
},
{
  id: "saf-14",
  categoryId: "safety",
  name: "Hand Sanitizer 4×5L",
  specs: "Bulk alcohol hand sanitizer",
  image: saf14
},
{
  id: "saf-15",
  categoryId: "safety",
  name: "Table Top Sanitizer",
  specs: "Surface disinfectant spray",
  image: saf15
},
{
  id: "saf-16",
  categoryId: "safety",
  name: "Grease Cleaner 4×5L",
  specs: "Heavy duty grease remover",
  image: saf16
},
{
  id: "saf-17",
  categoryId: "safety",
  name: "Oven Cleaner",
  specs: "Powerful oven degreaser",
  image: saf17
},
{
  id: "saf-18",
  categoryId: "safety",
  name: "Dettol",
  specs: "Antiseptic disinfectant liquid",
  image: saf18
},
{
  id: "saf-19",
  categoryId: "safety",
  name: "Fairy Dishwashing Liquid",
  specs: "Strong grease cutting formula",
  image: saf19
},
{
  id: "saf-20",
  categoryId: "safety",
  name: "Cheffing Fuels & Candle",
  specs: "Food warmer fuel and candles",
  image: saf20
},
{
  id: "saf-21",
  categoryId: "safety",
  name: "Urinal Disinfectant Mat",
  specs: "Deodorizing urinal screen",
  image: saf21
},
{
  id: "saf-22",
  categoryId: "safety",
  name: "Furniture Polish Spray",
  specs: "Shine and protect furniture surfaces",
  image: saf22
},
{
  id: "saf-23",
  categoryId: "safety",
  name: "Air Wick Pocket",
  specs: "Compact air freshener",
  image: saf23
},
{
  id: "saf-24",
  categoryId: "safety",
  name: "Carpet Disinfectant Powder",
  specs: "Carpet deodorizing powder",
  image: saf24
},
{
  id: "saf-25",
  categoryId: "safety",
  name: "Sofa & Upholstery Cleaning Spray",
  specs: "Fabric and sofa cleaner",
  image: saf25
},
{
  id: "saf-26",
  categoryId: "safety",
  name: "Clorex",
  specs: "Powerful disinfectant cleaner",
  image: saf26
},
{
  id: "saf-27",
  categoryId: "safety",
  name: "Dettol Disinfectant Spray",
  specs: "Antibacterial surface disinfectant spray",
  image: saf27
},
{
  id: "saf-28",
  categoryId: "safety",
  name: "Loyal Air Freshener",
  specs: "Long lasting room fragrance spray",
  image: saf28
},
// Plastic Products
{
  id: "pla-1",
  categoryId: "plastic",
  name: "Cling Film",
  specs: "1 × 6 pack • Food wrapping film",
  image: pla1
},
{
  id: "pla-2",
  categoryId: "plastic",
  name: "Cling Film JUMBO",
  specs: "Large roll • Commercial kitchen use",
  image: pla2
},
{
  id: "pla-3",
  categoryId: "plastic",
  name: "Plastic Carry Bag",
  specs: "Multipurpose shopping bags",
  image: pla3
},
{
  id: "pla-4",
  categoryId: "plastic",
  name: "Plastic White Garbage Bag",
  specs: "20kg pack • Size 50 × 60",
  image: pla4
},
{
  id: "pla-5",
  categoryId: "plastic",
  name: "Plastic Garbage Bag Black Big",
  specs: "20kg pack • Size 95 × 120",
  image: pla5
},
{
  id: "pla-6",
  categoryId: "plastic",
  name: "Plastic Garbage Bag Black Extra Large",
  specs: "20kg pack • Size 120 × 140",
  image: pla6
},
{
  id: "pla-7",
  categoryId: "plastic",
  name: "Zip Lock Plastic Bags",
  specs: "All sizes available",
  image: pla7
},
{
  id: "pla-8",
  categoryId: "plastic",
  name: "Plastic Apron",
  specs: "White & Blue • Disposable protection",
  image: pla8
},

// Added Garbage Bags from Catalog
{
  id: "pla-9",
  categoryId: "plastic",
  name: "Garbage Bag Black",
  specs: "20kg pack • Size 65 × 95",
  image: pla9
},
{
  id: "pla-10",
  categoryId: "plastic",
  name: "Garbage Bag Black",
  specs: "20kg pack • Size 85 × 110",
  image: pla10
},
{
  id: "pla-11",
  categoryId: "plastic",
  name: "Garbage Bag White",
  specs: "Size 45 × 60",
  image: pla11
},
{
  id: "pla-12",
  categoryId: "plastic",
  name: "Garbage Bag White",
  specs: "Size 55 × 60",
  image: pla12
},
// Labels & Thermal Papers
{
  id: "lab-1",
  categoryId: "labels",
  name: "Thermal Label Roll",
  specs: "38×25 TT • 100 rolls",
  image: lab1
},
{
  id: "lab-2",
  categoryId: "labels",
  name: "Thermal Label Roll",
  specs: "38×25 DT • 100 rolls",
  image: lab2
},
{
  id: "lab-3",
  categoryId: "labels",
  name: "Barcode Label Roll",
  specs: "58×39 • 60 rolls",
  image: lab3
},
{
  id: "lab-4",
  categoryId: "labels",
  name: "Thermal Paper Roll",
  specs: "80×80 • 48 GSM • 50 rolls",
  image: lab4
},
{
  id: "lab-5",
  categoryId: "labels",
  name: "Thermal Paper Roll",
  specs: "80×80 • 65 GSM • 50 rolls",
  image: lab5
},
{
  id: "lab-6",
  categoryId: "labels",
  name: "Shelf Tag Label Sticker",
  specs: "60×36 • 1000 stickers",
  image: lab6
},

 // Aluminum Products
{
  id: "alu-1",
  categoryId: "aluminum",
  name: "Aluminium Foil Roll",
  specs: "45cm x 300m • Heavy duty catering foil",
  image: alu1
},
{
  id: "alu-2",
  categoryId: "aluminum",
  name: "Aluminium Foil Jumbo Roll",
  specs: "Extra large roll • Commercial kitchen use",
  image: alu2
},
{
  id: "alu-3",
  categoryId: "aluminum",
  name: "Aluminium Container with Lid",
  specs: "Disposable food container • Multiple sizes",
  image: alu3
},

// Cleaning Tools & Equipments
{
  id: "cle-1",
  categoryId: "cleaning",
  name: "Microfiber Cleaning Cloth",
  specs: "Reusable lint-free cloth",
  image: cle1
},
{
  id: "cle-2",
  categoryId: "cleaning",
  name: "Heavy Duty Mop",
  specs: "Cotton mop head for floor cleaning",
  image: cle2
},
{
  id: "cle-3",
  categoryId: "cleaning",
  name: "Mop Bucket with Wringer",
  specs: "Commercial floor cleaning bucket",
  image: cle3
},
{
  id: "cle-4",
  categoryId: "cleaning",
  name: "Floor Squeegee",
  specs: "Rubber blade water remover",
  image: cle4
},
{
  id: "cle-5",
  categoryId: "cleaning",
  name: "Window Cleaning Squeegee",
  specs: "Professional glass cleaner tool",
  image: cle5
},
{
  id: "cle-6",
  categoryId: "cleaning",
  name: "Dust Pan & Brush Set",
  specs: "Plastic dustpan with hand brush",
  image: cle6
},
{
  id: "cle-7",
  categoryId: "cleaning",
  name: "Soft Floor Broom",
  specs: "Indoor sweeping broom",
  image: cle7
},
{
  id: "cle-8",
  categoryId: "cleaning",
  name: "Hard Floor Broom",
  specs: "Heavy duty outdoor broom",
  image: cle8
},
{
  id: "cle-9",
  categoryId: "cleaning",
  name: "Toilet Cleaning Brush",
  specs: "Durable plastic handle brush",
  image: cle9
},
{
  id: "cle-10",
  categoryId: "cleaning",
  name: "Floor Scrub Brush",
  specs: "Hard bristles for tough stains",
  image: cle10
},
{
  id: "cle-11",
  categoryId: "cleaning",
  name: "Cleaning Sponge",
  specs: "Multipurpose kitchen sponge",
  image: cle11
},
{
  id: "cle-12",
  categoryId: "cleaning",
  name: "Steel Scrubber",
  specs: "Heavy duty dish scrubber",
  image: cle12
},
{
  id: "cle-13",
  categoryId: "cleaning",
  name: "Spray Bottle",
  specs: "500ml refillable spray bottle",
  image: cle13
},
{
  id: "cle-14",
  categoryId: "cleaning",
  name: "Cleaning Gloves",
  specs: "Reusable rubber gloves",
  image: cle14
},
{
  id: "cle-15",
  categoryId: "cleaning",
  name: "Janitor Cleaning Cart",
  specs: "Commercial housekeeping trolley",
  image: cle15
},
{
  id: "cle-16",
  categoryId: "cleaning",
  name: "Wet Floor Sign",
  specs: "Safety warning sign",
  image: cle16
},
{
  id: "cle-17",
  categoryId: "cleaning",
  name: "Feather Duster",
  specs: "Lightweight dust remover",
  image: cle17
},
{
  id: "cle-18",
  categoryId: "cleaning",
  name: "Extension Handle",
  specs: "Telescopic cleaning pole",
  image: cle18
},
{
  id: "cle-19",
  categoryId: "cleaning",
  name: "Window Cleaning Kit",
  specs: "Squeegee + washer combo",
  image: cle19
},
{
  id: "cle-20",
  categoryId: "cleaning",
  name: "Dust Mop",
  specs: "Wide head dust control mop",
  image: cle20
},
{
  id: "cle-21",
  categoryId: "cleaning",
  name: "Scrubbing Pad",
  specs: "Heavy duty scouring pad",
  image: cle21
},
{
  id: "cle-22",
  categoryId: "cleaning",
  name: "Trash Picker Grabber",
  specs: "Long handle litter picker",
  image: cle22
},
{
  id: "cle-23",
  categoryId: "cleaning",
  name: "Hand Scraper",
  specs: "Removes stuck dirt and gum",
  image: cle23
},
{
  id: "cle-24",
  categoryId: "cleaning",
  name: "Carpet Brush",
  specs: "Manual carpet cleaning brush",
  image: cle24
},
{
  id: "cle-25",
  categoryId: "cleaning",
  name: "Cleaning Bucket",
  specs: "20L heavy duty bucket",
  image: cle25
},
{
  id: "cle-26",
  categoryId: "cleaning",
  name: "Dusting Cloth",
  specs: "Soft reusable cloth",
  image: cle26
},
{
  id: "cle-27",
  categoryId: "cleaning",
  name: "Floor Scraper",
  specs: "Removes adhesive & dirt",
  image: cle27
},
{
  id: "cle-28",
  categoryId: "cleaning",
  name: "Glass Cleaning Cloth",
  specs: "Streak-free microfiber cloth",
  image: cle28
},
{
  id: "cle-29",
  categoryId: "cleaning",
  name: "Cleaning Brush Set",
  specs: "Multipurpose cleaning brushes",
  image: cle29
},
{
  id: "cle-30",
  categoryId: "cleaning",
  name: "Heavy Duty Floor Mop",
  specs: "Commercial cleaning mop",
  image: cle30
}
];
