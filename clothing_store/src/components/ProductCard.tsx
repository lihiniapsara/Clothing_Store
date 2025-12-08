import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  onAddToCart: (product: any) => void;
  onViewDetails: (id: number) => void;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  inStock, 
  isNew,
  onAddToCart,
  onViewDetails 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isLiked = isInWishlist(id);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    onAddToCart({ id, name, price, image, category });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image, category });
    }
  };

  return (
    <Card 
      className="group overflow-hidden border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              -{discount}%
            </span>
          )}
          {!inStock && (
            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary hover:text-foreground transition-all shadow-lg z-10"
        >
          <Heart 
            size={18} 
            className={isLiked ? 'fill-destructive text-destructive' : ''} 
          />
        </button>

        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size="sm"
            variant="outline"
            className="bg-background/90 backdrop-blur-md hover:bg-primary hover:text-foreground border-primary/50"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(id);
            }}
          >
            <Eye size={18} className="mr-2" />
            View
          </Button>
          {inStock && (
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-foreground shadow-glow"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">Rs. {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs. {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
