import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";

// Category metadata
const categoryMetadata: Record<string, { title: string; description: string }> = {
  sarees: {
    title: "Traditional Sarees Collection",
    description: "Exquisite silk, cotton, and designer sarees perfect for every occasion",
  },
  western: {
    title: "Western & Casual Wear",
    description: "Trendy dresses, tops, jeans and contemporary fashion pieces",
  },
  office: {
    title: "Office & Formal Wear",
    description: "Professional attire for the modern working woman",
  },
  party: {
    title: "Party & Evening Wear",
    description: "Glamorous outfits for special occasions and celebrations",
  },
  accessories: {
    title: "Bags & Accessories",
    description: "Complete your look with our stunning accessories collection",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "Latest additions to our collection - Fresh styles just for you",
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 30000]);

  // Get category metadata
  const categoryInfo = category ? categoryMetadata[category] : categoryMetadata["sarees"];
  
  // Filter products by category - match against product category field
  const categoryProducts = useMemo(() => {
    if (category === "sarees") {
      // For sarees, include all products with "Sarees" in category name
      return products.filter(p => p.category.toLowerCase().includes("saree"));
    } else if (category === "western") {
      // For western, include Dresses and Tops
      return products.filter(p => 
        p.category === "Dresses" || 
        p.category === "Tops"
      );
    } else if (category === "office") {
      // For office, include Blazers
      return products.filter(p => p.category === "Blazers");
    } else if (category === "party") {
      // For party, include Evening Gowns
      return products.filter(p => p.category === "Evening Gowns");
    } else if (category === "accessories") {
      // For accessories, include Handbags
      return products.filter(p => p.category === "Handbags");
    } else if (category === "new-arrivals") {
      // For new arrivals, show all new products
      return products.filter(p => p.isNew);
    }
    return [];
  }, [category]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: "View your cart to proceed to checkout",
    });
  };

  const handleViewDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  const sortedProducts = [...categoryProducts].sort((a, b) => {
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

      {/* Hero Section for Category */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
            {categoryInfo?.title}
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto px-4 drop-shadow-lg">
            {categoryInfo?.description}
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

                    <div>
                      <label className="text-sm font-medium mb-3 block">Availability</label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">In Stock</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Out of Stock</span>
                        </label>
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

export default CategoryPage;
