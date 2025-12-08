import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X, ShoppingCart, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Sample product data - organized by collection
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const productsData: Record<string, any> = {
  "silk-sarees": {
    title: "Silk Sarees Collection",
    description: "Premium Banarasi & Kanjivaram silk sarees",
    category: "sarees",
    products: [
      { id: 1, name: "Banarasi Silk Saree - Royal Blue", price: 12500, originalPrice: 15000, image: gallery1, category: "Silk Sarees", inStock: true, isNew: true },
      { id: 2, name: "Kanjivaram Silk Saree - Maroon", price: 18000, originalPrice: 22000, image: gallery2, category: "Silk Sarees", inStock: true, isNew: true },
      { id: 3, name: "Pure Silk Saree - Golden", price: 15000, image: gallery3, category: "Silk Sarees", inStock: true },
      { id: 4, name: "Banarasi Wedding Saree", price: 25000, originalPrice: 30000, image: gallery4, category: "Silk Sarees", inStock: true },
      { id: 5, name: "Tussar Silk Saree - Peach", price: 14500, image: gallery5, category: "Silk Sarees", inStock: false },
      { id: 6, name: "Kanjivaram Bridal Saree", price: 28000, image: gallery6, category: "Silk Sarees", inStock: true, isNew: true },
      { id: 7, name: "Designer Silk Saree - Pink", price: 16500, image: gallery7, category: "Silk Sarees", inStock: true },
      { id: 8, name: "Pure Silk Party Saree", price: 19500, originalPrice: 24000, image: gallery8, category: "Silk Sarees", inStock: true },
    ]
  },
  "cotton-sarees": {
    title: "Cotton Sarees Collection",
    description: "Comfortable handloom cotton sarees",
    category: "sarees",
    products: [
      { id: 9, name: "Handloom Cotton Saree - White", price: 3500, image: gallery1, category: "Cotton Sarees", inStock: true, isNew: true },
      { id: 10, name: "Printed Cotton Saree - Floral", price: 2800, image: gallery2, category: "Cotton Sarees", inStock: true },
      { id: 11, name: "Pure Cotton Daily Wear Saree", price: 2200, image: gallery3, category: "Cotton Sarees", inStock: true },
      { id: 12, name: "Block Print Cotton Saree", price: 4200, originalPrice: 5000, image: gallery4, category: "Cotton Sarees", inStock: true, isNew: true },
      { id: 13, name: "Organic Cotton Saree - Green", price: 3800, image: gallery5, category: "Cotton Sarees", inStock: true },
      { id: 14, name: "Handwoven Cotton Saree", price: 4500, image: gallery6, category: "Cotton Sarees", inStock: false },
      { id: 15, name: "Cotton Silk Blend Saree", price: 5200, image: gallery7, category: "Cotton Sarees", inStock: true },
      { id: 16, name: "Summer Cotton Saree - Yellow", price: 2950, image: gallery8, category: "Cotton Sarees", inStock: true },
    ]
  },
  "dresses": {
    title: "Dresses Collection",
    description: "Casual, party & formal dresses",
    category: "western",
    products: [
      { id: 17, name: "Summer Floral Dress", price: 3500, originalPrice: 4500, image: gallery2, category: "Dresses", inStock: true, isNew: true },
      { id: 18, name: "Maxi Dress - Navy Blue", price: 4800, image: gallery3, category: "Dresses", inStock: true },
      { id: 19, name: "Casual T-Shirt Dress", price: 2500, image: gallery4, category: "Dresses", inStock: true },
      { id: 20, name: "Party Mini Dress - Red", price: 6500, image: gallery5, category: "Dresses", inStock: true, isNew: true },
      { id: 21, name: "Boho Maxi Dress", price: 4800, image: gallery6, category: "Dresses", inStock: true },
      { id: 22, name: "Midi Dress - Floral Print", price: 3800, originalPrice: 4500, image: gallery7, category: "Dresses", inStock: true },
      { id: 23, name: "Evening Dress - Black", price: 7500, image: gallery8, category: "Dresses", inStock: false },
      { id: 24, name: "Summer Sundress - Yellow", price: 3200, image: gallery1, category: "Dresses", inStock: true },
    ]
  },
  "tops-shirts": {
    title: "Tops & Shirts",
    description: "Stylish tops, blouses & shirts",
    category: "western",
    products: [
      { id: 25, name: "Casual Crop Top - White", price: 1500, image: gallery2, category: "Tops", inStock: true, isNew: true },
      { id: 26, name: "Silk Blouse - Cream", price: 2800, image: gallery3, category: "Tops", inStock: true },
      { id: 27, name: "Off-Shoulder Top - Pink", price: 2200, image: gallery4, category: "Tops", inStock: true },
      { id: 28, name: "Formal Shirt - Light Blue", price: 2500, originalPrice: 3000, image: gallery5, category: "Tops", inStock: true },
      { id: 29, name: "Tank Top Set - 3 Pack", price: 1800, image: gallery6, category: "Tops", inStock: true, isNew: true },
      { id: 30, name: "Peplum Top - Black", price: 3200, image: gallery7, category: "Tops", inStock: true },
      { id: 31, name: "Printed Blouse - Floral", price: 2400, image: gallery8, category: "Tops", inStock: false },
      { id: 32, name: "Wrap Top - Burgundy", price: 2900, image: gallery1, category: "Tops", inStock: true },
    ]
  },
  "blazers": {
    title: "Blazers & Jackets",
    description: "Professional blazers & formal jackets",
    category: "office",
    products: [
      { id: 33, name: "Business Blazer - Navy", price: 7500, originalPrice: 9000, image: gallery3, category: "Blazers", inStock: true, isNew: true },
      { id: 34, name: "Formal Jacket - Black", price: 8200, image: gallery4, category: "Blazers", inStock: true },
      { id: 35, name: "Tailored Blazer - Grey", price: 7800, image: gallery5, category: "Blazers", inStock: true },
      { id: 36, name: "Office Blazer - Beige", price: 6500, image: gallery6, category: "Blazers", inStock: true, isNew: true },
      { id: 37, name: "Double-Breasted Blazer", price: 9500, originalPrice: 11000, image: gallery7, category: "Blazers", inStock: false },
      { id: 38, name: "Casual Blazer - White", price: 6800, image: gallery8, category: "Blazers", inStock: true },
      { id: 39, name: "Professional Jacket - Charcoal", price: 8500, image: gallery1, category: "Blazers", inStock: true },
      { id: 40, name: "Slim Fit Blazer - Black", price: 8800, image: gallery2, category: "Blazers", inStock: true },
    ]
  },
  "evening-gowns": {
    title: "Evening Gowns",
    description: "Elegant long evening gowns",
    category: "party",
    products: [
      { id: 41, name: "Sequin Evening Gown - Gold", price: 15000, originalPrice: 18000, image: gallery7, category: "Evening Gowns", inStock: true, isNew: true },
      { id: 42, name: "Long Evening Dress - Emerald", price: 18000, image: gallery8, category: "Evening Gowns", inStock: true },
      { id: 43, name: "Satin Gown - Navy", price: 14500, image: gallery1, category: "Evening Gowns", inStock: true },
      { id: 44, name: "Ball Gown - Burgundy", price: 22000, originalPrice: 26000, image: gallery2, category: "Evening Gowns", inStock: true, isNew: true },
      { id: 45, name: "Elegant Gown - Silver", price: 16500, image: gallery3, category: "Evening Gowns", inStock: false },
      { id: 46, name: "Mermaid Gown - Red", price: 19500, image: gallery4, category: "Evening Gowns", inStock: true },
      { id: 47, name: "A-Line Evening Gown", price: 17800, image: gallery5, category: "Evening Gowns", inStock: true },
      { id: 48, name: "Off-Shoulder Gown - Black", price: 20000, image: gallery6, category: "Evening Gowns", inStock: true, isNew: true },
    ]
  },
  "handbags": {
    title: "Handbags Collection",
    description: "Designer & casual handbags",
    category: "accessories",
    products: [
      { id: 49, name: "Designer Handbag - Tan", price: 4500, originalPrice: 6000, image: gallery5, category: "Handbags", inStock: true, isNew: true },
      { id: 50, name: "Leather Tote Bag - Black", price: 5500, image: gallery6, category: "Handbags", inStock: true },
      { id: 51, name: "Crossbody Bag - Red", price: 3800, originalPrice: 4500, image: gallery7, category: "Handbags", inStock: true },
      { id: 52, name: "Shoulder Bag - Brown", price: 4200, image: gallery8, category: "Handbags", inStock: true },
      { id: 53, name: "Satchel Bag - Navy", price: 5800, image: gallery1, category: "Handbags", inStock: true, isNew: true },
      { id: 54, name: "Mini Handbag - Pink", price: 3200, image: gallery2, category: "Handbags", inStock: false },
      { id: 55, name: "Work Bag - Black", price: 6500, image: gallery3, category: "Handbags", inStock: true },
      { id: 56, name: "Bucket Bag - Beige", price: 4800, image: gallery4, category: "Handbags", inStock: true },
    ]
  },
  // Default fallback for any collection
  default: {
    title: "Collection",
    description: "Browse our curated selection",
    category: "all",
    products: [
      { id: 57, name: "Fashion Item 1", price: 3500, image: gallery1, category: "Fashion", inStock: true, isNew: true },
      { id: 58, name: "Fashion Item 2", price: 4200, image: gallery2, category: "Fashion", inStock: true },
      { id: 59, name: "Fashion Item 3", price: 2800, image: gallery3, category: "Fashion", inStock: true },
      { id: 60, name: "Fashion Item 4", price: 5500, image: gallery4, category: "Fashion", inStock: true },
    ]
  }
};

const ProductsPage = () => {
  const { category, collection } = useParams<{ category: string; collection: string }>();
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const collectionInfo = collection ? (productsData[collection] || productsData["default"]) : productsData["default"];
  const products = collectionInfo?.products || [];

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: "View your cart to proceed to checkout",
    });
  };

   const handleViewDetails = (id: number) => {
     navigate(`/product/${id}`);
   };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  }).filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 text-center px-4">
          <Button
            variant="ghost"
            className="mb-4 text-foreground hover:text-foreground/80"
            onClick={() => navigate(`/category/${category}`)}
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Collections
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
            {collectionInfo?.title}
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto px-4 drop-shadow-lg">
            {collectionInfo?.description}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <p className="text-muted-foreground">
                Showing <span className="font-bold text-foreground">{sortedProducts.length}</span> products
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal size={18} />
                Filters {showFilters && <X size={16} />}
              </Button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 relative"
                onClick={() => toast.info("Cart page coming soon! Use WhatsApp to checkout now.")}
              >
                <ShoppingCart size={18} />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-foreground rounded-full text-xs flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <Card className="w-64 h-fit sticky top-24 hidden md:block">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Filters</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-3 block">Price Range</label>
                      <Slider
                        min={0}
                        max={30000}
                        step={500}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Rs. {priceRange[0].toLocaleString()}</span>
                        <span>Rs. {priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" onClick={() => {
                      setPriceRange([0, 30000]);
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-2xl text-muted-foreground mb-4">No products found</p>
                  <Button onClick={() => setPriceRange([0, 30000])}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
