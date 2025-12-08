// Centralized product database for the entire store
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Additional images for product detail
  category: string;
  collection: string;
  description: string;
  inStock: boolean;
  isNew?: boolean;
  sizes?: string[];
  colors?: string[];
  material?: string;
  care?: string;
}

export const products: Product[] = [
  // Silk Sarees Collection (sarees category)
  { id: 1, name: "Banarasi Silk Saree - Royal Blue", price: 12500, originalPrice: 15000, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Silk Sarees", collection: "silk-sarees", description: "Exquisite Banarasi silk saree with traditional motifs. Perfect for weddings and special occasions.", inStock: true, isNew: true, material: "Pure Banarasi Silk", care: "Dry clean only", colors: ["Royal Blue", "Gold"] },
  { id: 2, name: "Kanjivaram Silk Saree - Maroon", price: 18000, originalPrice: 22000, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Silk Sarees", collection: "silk-sarees", description: "Premium Kanjivaram silk with rich zari work. Traditional South Indian craftsmanship.", inStock: true, isNew: true, material: "Pure Kanjivaram Silk", care: "Dry clean only", colors: ["Maroon", "Gold"] },
  { id: 3, name: "Pure Silk Saree - Golden", price: 15000, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Silk Sarees", collection: "silk-sarees", description: "Elegant golden silk saree with intricate border design.", inStock: true, material: "Pure Silk", care: "Dry clean only", colors: ["Golden"] },
  { id: 4, name: "Banarasi Wedding Saree", price: 25000, originalPrice: 30000, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Silk Sarees", collection: "silk-sarees", description: "Luxurious wedding saree with heavy zari work and exclusive design.", inStock: true, material: "Pure Banarasi Silk", care: "Dry clean only", colors: ["Red", "Gold"] },
  { id: 5, name: "Tussar Silk Saree - Peach", price: 14500, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Silk Sarees", collection: "silk-sarees", description: "Elegant Tussar silk in soft peach tone with traditional prints.", inStock: false, material: "Tussar Silk", care: "Dry clean only", colors: ["Peach"] },
  { id: 6, name: "Kanjivaram Bridal Saree", price: 28000, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Silk Sarees", collection: "silk-sarees", description: "Stunning bridal collection with temple border and rich pallu.", inStock: true, isNew: true, material: "Pure Kanjivaram Silk", care: "Dry clean only", colors: ["Pink", "Gold"] },
  { id: 7, name: "Designer Silk Saree - Pink", price: 16500, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Silk Sarees", collection: "silk-sarees", description: "Contemporary designer silk saree with modern aesthetics.", inStock: true, material: "Pure Silk", care: "Dry clean only", colors: ["Pink", "Silver"] },
  { id: 8, name: "Pure Silk Party Saree", price: 19500, originalPrice: 24000, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Silk Sarees", collection: "silk-sarees", description: "Elegant party wear silk saree with delicate embroidery.", inStock: true, material: "Pure Silk", care: "Dry clean only", colors: ["Navy Blue", "Silver"] },

  // Cotton Sarees Collection (sarees category)
  { id: 9, name: "Handloom Cotton Saree - White", price: 3500, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Cotton Sarees", collection: "cotton-sarees", description: "Pure handloom cotton saree for daily wear comfort.", inStock: true, isNew: true, material: "Handloom Cotton", care: "Machine wash cold", colors: ["White", "Gold"] },
  { id: 10, name: "Printed Cotton Saree - Floral", price: 2800, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Cotton Sarees", collection: "cotton-sarees", description: "Beautiful floral print cotton saree for casual occasions.", inStock: true, material: "Cotton", care: "Machine wash cold", colors: ["Multi-color"] },
  { id: 11, name: "Pure Cotton Daily Wear Saree", price: 2200, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Cotton Sarees", collection: "cotton-sarees", description: "Comfortable daily wear cotton saree in soft colors.", inStock: true, material: "Pure Cotton", care: "Machine wash", colors: ["Cream", "Brown"] },
  { id: 12, name: "Block Print Cotton Saree", price: 4200, originalPrice: 5000, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Cotton Sarees", collection: "cotton-sarees", description: "Traditional block print cotton saree with ethnic motifs.", inStock: true, isNew: true, material: "Cotton", care: "Hand wash recommended", colors: ["Blue", "White"] },
  { id: 13, name: "Organic Cotton Saree - Green", price: 3800, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Cotton Sarees", collection: "cotton-sarees", description: "Eco-friendly organic cotton saree in natural colors.", inStock: true, material: "Organic Cotton", care: "Machine wash cold", colors: ["Green"] },
  { id: 14, name: "Handwoven Cotton Saree", price: 4500, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Cotton Sarees", collection: "cotton-sarees", description: "Artisan handwoven cotton saree with traditional patterns.", inStock: false, material: "Handwoven Cotton", care: "Hand wash", colors: ["Multicolor"] },
  { id: 15, name: "Cotton Silk Blend Saree", price: 5200, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Cotton Sarees", collection: "cotton-sarees", description: "Luxurious blend of cotton and silk for elegant draping.", inStock: true, material: "Cotton-Silk Blend", care: "Dry clean recommended", colors: ["Purple", "Gold"] },
  { id: 16, name: "Summer Cotton Saree - Yellow", price: 2950, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Cotton Sarees", collection: "cotton-sarees", description: "Light and breezy summer cotton saree in vibrant yellow.", inStock: true, material: "Cotton", care: "Machine wash", colors: ["Yellow"] },

  // Dresses (western category)
  { id: 17, name: "Summer Floral Dress", price: 3500, originalPrice: 4500, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Dresses", collection: "dresses", description: "Light and airy summer dress with beautiful floral print.", inStock: true, isNew: true, material: "Cotton Blend", care: "Machine wash cold", sizes: ["S", "M", "L", "XL"], colors: ["Floral Multi"] },
  { id: 18, name: "Maxi Dress - Navy Blue", price: 4800, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Dresses", collection: "dresses", description: "Elegant floor-length maxi dress for evening occasions.", inStock: true, material: "Polyester", care: "Hand wash", sizes: ["S", "M", "L", "XL"], colors: ["Navy Blue"] },
  { id: 19, name: "Casual T-Shirt Dress", price: 2500, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Dresses", collection: "dresses", description: "Comfortable everyday t-shirt dress in relaxed fit.", inStock: true, material: "Cotton Jersey", care: "Machine wash", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Grey", "Black", "White"] },
  { id: 20, name: "Party Mini Dress - Red", price: 6500, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Dresses", collection: "dresses", description: "Stunning red mini dress perfect for parties and events.", inStock: true, isNew: true, material: "Satin", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Red"] },
  { id: 21, name: "Boho Maxi Dress", price: 4800, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Dresses", collection: "dresses", description: "Bohemian style maxi dress with ethnic prints.", inStock: true, material: "Rayon", care: "Hand wash", sizes: ["S", "M", "L", "XL"], colors: ["Multi-print"] },
  { id: 22, name: "Midi Dress - Floral Print", price: 3800, originalPrice: 4500, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Dresses", collection: "dresses", description: "Versatile midi dress with elegant floral pattern.", inStock: true, material: "Chiffon", care: "Dry clean recommended", sizes: ["S", "M", "L", "XL"], colors: ["Floral"] },
  { id: 23, name: "Evening Dress - Black", price: 7500, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Dresses", collection: "dresses", description: "Classic black evening dress for formal occasions.", inStock: false, material: "Velvet", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Black"] },
  { id: 24, name: "Summer Sundress - Yellow", price: 3200, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Dresses", collection: "dresses", description: "Cheerful yellow sundress for warm weather.", inStock: true, material: "Cotton", care: "Machine wash", sizes: ["S", "M", "L", "XL"], colors: ["Yellow"] },

  // Tops & Shirts (western category)
  { id: 25, name: "Casual Crop Top - White", price: 1500, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Tops", collection: "tops-shirts", description: "Trendy white crop top for casual styling.", inStock: true, isNew: true, material: "Cotton", care: "Machine wash", sizes: ["S", "M", "L"], colors: ["White"] },
  { id: 26, name: "Silk Blouse - Cream", price: 2800, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Tops", collection: "tops-shirts", description: "Elegant silk blouse for office and formal wear.", inStock: true, material: "Silk", care: "Dry clean", sizes: ["S", "M", "L", "XL"], colors: ["Cream"] },
  { id: 27, name: "Off-Shoulder Top - Pink", price: 2200, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Tops", collection: "tops-shirts", description: "Feminine off-shoulder top in soft pink.", inStock: true, material: "Cotton Blend", care: "Machine wash cold", sizes: ["S", "M", "L"], colors: ["Pink"] },
  { id: 28, name: "Formal Shirt - Light Blue", price: 2500, originalPrice: 3000, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Tops", collection: "tops-shirts", description: "Classic formal shirt for professional look.", inStock: true, material: "Cotton", care: "Machine wash", sizes: ["S", "M", "L", "XL"], colors: ["Light Blue"] },
  { id: 29, name: "Tank Top Set - 3 Pack", price: 1800, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Tops", collection: "tops-shirts", description: "Essential tank top pack in basic colors.", inStock: true, isNew: true, material: "Cotton", care: "Machine wash", sizes: ["S", "M", "L", "XL"], colors: ["White, Black, Grey"] },
  { id: 30, name: "Peplum Top - Black", price: 3200, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Tops", collection: "tops-shirts", description: "Stylish peplum top for elegant look.", inStock: true, material: "Polyester", care: "Hand wash", sizes: ["S", "M", "L"], colors: ["Black"] },
  { id: 31, name: "Printed Blouse - Floral", price: 2400, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Tops", collection: "tops-shirts", description: "Beautiful floral print blouse for summer.", inStock: false, material: "Rayon", care: "Machine wash cold", sizes: ["S", "M", "L", "XL"], colors: ["Floral"] },
  { id: 32, name: "Wrap Top - Burgundy", price: 2900, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Tops", collection: "tops-shirts", description: "Flattering wrap top in rich burgundy.", inStock: true, material: "Jersey", care: "Machine wash", sizes: ["S", "M", "L", "XL"], colors: ["Burgundy"] },

  // Blazers & Jackets (office category)
  { id: 33, name: "Business Blazer - Navy", price: 7500, originalPrice: 9000, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Blazers", collection: "blazers", description: "Professional navy blazer for corporate wear.", inStock: true, isNew: true, material: "Wool Blend", care: "Dry clean only", sizes: ["S", "M", "L", "XL"], colors: ["Navy"] },
  { id: 34, name: "Formal Jacket - Black", price: 8200, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Blazers", collection: "blazers", description: "Classic black formal jacket with perfect fit.", inStock: true, material: "Wool Blend", care: "Dry clean only", sizes: ["S", "M", "L", "XL"], colors: ["Black"] },
  { id: 35, name: "Tailored Blazer - Grey", price: 7800, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Blazers", collection: "blazers", description: "Sophisticated grey blazer with tailored design.", inStock: true, material: "Polyester Blend", care: "Dry clean", sizes: ["S", "M", "L", "XL"], colors: ["Grey"] },
  { id: 36, name: "Office Blazer - Beige", price: 6500, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Blazers", collection: "blazers", description: "Versatile beige blazer for office styling.", inStock: true, isNew: true, material: "Linen Blend", care: "Dry clean recommended", sizes: ["S", "M", "L", "XL"], colors: ["Beige"] },
  { id: 37, name: "Double-Breasted Blazer", price: 9500, originalPrice: 11000, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Blazers", collection: "blazers", description: "Elegant double-breasted blazer for formal occasions.", inStock: false, material: "Wool", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Charcoal"] },
  { id: 38, name: "Casual Blazer - White", price: 6800, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Blazers", collection: "blazers", description: "Fresh white blazer for smart casual look.", inStock: true, material: "Cotton Blend", care: "Dry clean", sizes: ["S", "M", "L", "XL"], colors: ["White"] },
  { id: 39, name: "Professional Jacket - Charcoal", price: 8500, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Blazers", collection: "blazers", description: "Premium charcoal jacket for business meetings.", inStock: true, material: "Wool Blend", care: "Dry clean only", sizes: ["S", "M", "L", "XL"], colors: ["Charcoal"] },
  { id: 40, name: "Slim Fit Blazer - Black", price: 8800, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Blazers", collection: "blazers", description: "Modern slim fit black blazer.", inStock: true, material: "Polyester Blend", care: "Dry clean", sizes: ["S", "M", "L", "XL"], colors: ["Black"] },

  // Evening Gowns (party category)
  { id: 41, name: "Sequin Evening Gown - Gold", price: 15000, originalPrice: 18000, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Evening Gowns", collection: "evening-gowns", description: "Glamorous gold sequin gown for special events.", inStock: true, isNew: true, material: "Sequin Fabric", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Gold"] },
  { id: 42, name: "Long Evening Dress - Emerald", price: 18000, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Evening Gowns", collection: "evening-gowns", description: "Stunning emerald green evening gown.", inStock: true, material: "Satin", care: "Dry clean only", sizes: ["S", "M", "L", "XL"], colors: ["Emerald"] },
  { id: 43, name: "Satin Gown - Navy", price: 14500, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Evening Gowns", collection: "evening-gowns", description: "Elegant navy satin gown for formal events.", inStock: true, material: "Satin", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Navy"] },
  { id: 44, name: "Ball Gown - Burgundy", price: 22000, originalPrice: 26000, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Evening Gowns", collection: "evening-gowns", description: "Princess ball gown in rich burgundy.", inStock: true, isNew: true, material: "Tulle & Satin", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Burgundy"] },
  { id: 45, name: "Elegant Gown - Silver", price: 16500, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Evening Gowns", collection: "evening-gowns", description: "Sophisticated silver evening gown.", inStock: false, material: "Metallic Fabric", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Silver"] },
  { id: 46, name: "Mermaid Gown - Red", price: 19500, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Evening Gowns", collection: "evening-gowns", description: "Dramatic red mermaid style gown.", inStock: true, material: "Satin", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Red"] },
  { id: 47, name: "A-Line Evening Gown", price: 17800, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Evening Gowns", collection: "evening-gowns", description: "Classic A-line evening gown in elegant design.", inStock: true, material: "Chiffon", care: "Dry clean only", sizes: ["S", "M", "L", "XL"], colors: ["Champagne"] },
  { id: 48, name: "Off-Shoulder Gown - Black", price: 20000, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Evening Gowns", collection: "evening-gowns", description: "Timeless black off-shoulder gown.", inStock: true, isNew: true, material: "Velvet", care: "Dry clean only", sizes: ["S", "M", "L"], colors: ["Black"] },

  // Handbags (accessories category)
  { id: 49, name: "Designer Handbag - Tan", price: 4500, originalPrice: 6000, image: gallery5, images: [gallery5, gallery6, gallery7], category: "Handbags", collection: "handbags", description: "Luxurious designer handbag in classic tan.", inStock: true, isNew: true, material: "Leather", care: "Wipe with dry cloth", colors: ["Tan"] },
  { id: 50, name: "Leather Tote Bag - Black", price: 5500, image: gallery6, images: [gallery6, gallery7, gallery8], category: "Handbags", collection: "handbags", description: "Spacious leather tote for everyday use.", inStock: true, material: "Genuine Leather", care: "Leather conditioner", colors: ["Black"] },
  { id: 51, name: "Crossbody Bag - Red", price: 3800, originalPrice: 4500, image: gallery7, images: [gallery7, gallery8, gallery1], category: "Handbags", collection: "handbags", description: "Stylish red crossbody bag for hands-free convenience.", inStock: true, material: "PU Leather", care: "Wipe clean", colors: ["Red"] },
  { id: 52, name: "Shoulder Bag - Brown", price: 4200, image: gallery8, images: [gallery8, gallery1, gallery2], category: "Handbags", collection: "handbags", description: "Classic brown shoulder bag with multiple compartments.", inStock: true, material: "Leather", care: "Leather cleaner", colors: ["Brown"] },
  { id: 53, name: "Satchel Bag - Navy", price: 5800, image: gallery1, images: [gallery1, gallery2, gallery3], category: "Handbags", collection: "handbags", description: "Professional navy satchel for work.", inStock: true, isNew: true, material: "Leather", care: "Leather conditioner", colors: ["Navy"] },
  { id: 54, name: "Mini Handbag - Pink", price: 3200, image: gallery2, images: [gallery2, gallery3, gallery4], category: "Handbags", collection: "handbags", description: "Cute mini handbag for evening outings.", inStock: false, material: "PU Leather", care: "Wipe clean", colors: ["Pink"] },
  { id: 55, name: "Work Bag - Black", price: 6500, image: gallery3, images: [gallery3, gallery4, gallery5], category: "Handbags", collection: "handbags", description: "Large work bag with laptop compartment.", inStock: true, material: "Leather", care: "Leather cleaner", colors: ["Black"] },
  { id: 56, name: "Bucket Bag - Beige", price: 4800, image: gallery4, images: [gallery4, gallery5, gallery6], category: "Handbags", collection: "handbags", description: "Trendy beige bucket bag with drawstring.", inStock: true, material: "Canvas & Leather", care: "Spot clean", colors: ["Beige"] },
];

// Helper functions for product queries
export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(p => p.collection === collection);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(p => p.originalPrice);
};
