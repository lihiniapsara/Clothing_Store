import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, ArrowRight, Plus, Minus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Format cart items for WhatsApp message
    const orderDetails = cart.map(item => 
      `${item.name}\nQty: ${item.quantity}\nPrice: Rs. ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n\n');
    
    const totalAmount = `\nTotal: Rs. ${cartTotal.toLocaleString()}`;
    const message = `Hi! I'd like to place an order:\n\n${orderDetails}${totalAmount}`;
    
    // Replace with your actual WhatsApp number
    const phoneNumber = "94771234567"; // Update this with actual Sri Lankan number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">Your Shopping Cart</h1>
          {cart.length > 0 && (
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          )}
        </div>

        {cart.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some products to get started!</p>
            <Button onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item: any) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-24 h-32 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => navigate(`/product/${item.id}`)}
                      />
                      <div className="flex-1">
                        <h3 
                          className="font-semibold text-foreground mb-1 cursor-pointer hover:text-primary transition-colors"
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </Button>
                          </div>
                          <div className="flex-1 text-right">
                            <p className="text-lg font-bold text-primary">
                              Rs. {(item.price * item.quantity).toLocaleString()}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Rs. {item.price.toLocaleString()} each
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Order Summary</h2>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-primary">Contact for details</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full gap-2 text-lg py-6" 
                    onClick={handleCheckout}
                  >
                    Checkout via WhatsApp <ArrowRight size={20} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    You'll be redirected to WhatsApp to complete your order
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/')}
                  >
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;
