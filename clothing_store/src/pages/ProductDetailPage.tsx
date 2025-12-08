import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { ArrowLeft, ShoppingCart, Heart, Truck, Shield, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);

  const productId = Number(id);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="container mx-auto px-4 py-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="mr-2" size={18} /> Back
          </Button>
          <Card className="p-12 text-center">
            <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')}>Go to Home</Button>
          </Card>
        </section>
      </div>
    );
  }

  const images = product.images || [product.image];
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 py-12">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2" size={18} /> Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img 
                  src={images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-accent text-foreground">NEW</Badge>
                )}
                {discount > 0 && (
                  <Badge className="absolute top-4 right-4 bg-destructive">-{discount}%</Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg py-2 px-4">Out of Stock</Badge>
                  </div>
                )}
              </div>
            </Card>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                  <Card 
                    key={idx}
                    className={`cursor-pointer overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <div className="aspect-[3/4]">
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Product Info */}
            <div className="space-y-3">
              {product.material && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span className="font-semibold">{product.material}</span>
                </div>
              )}
              {product.colors && product.colors.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Colors:</span>
                  <span className="font-semibold">{product.colors.join(', ')}</span>
                </div>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Sizes:</span>
                  <span className="font-semibold">{product.sizes.join(', ')}</span>
                </div>
              )}
              {product.care && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Care:</span>
                  <span className="font-semibold">{product.care}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability:</span>
                <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-destructive'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              {product.inStock && (
                <Button 
                  className="w-full gap-2 text-lg py-6" 
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={20} /> Add to Cart
                </Button>
              )}
              <Button 
                variant={isWishlisted ? "default" : "outline"} 
                className="w-full gap-2"
                onClick={handleWishlist}
              >
                <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="text-primary" size={20} />
                  <span>Island-wide delivery available</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="text-primary" size={20} />
                  <span>Quality guaranteed products</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RefreshCw className="text-primary" size={20} />
                  <span>Easy returns & exchanges</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  onAddToCart={(p) => {
                    addToCart(p);
                    toast.success(`${p.name} added to cart!`);
                  }}
                  onViewDetails={(id) => {
                    navigate(`/product/${id}`);
                    window.scrollTo(0, 0);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetailPage;
