import { Shirt, TrendingUp, ShoppingBag, Sparkles, Star, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import GalleryImage from "@/components/GalleryImage";
import heroImage from "@/assets/hero-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Shirt,
      title: "Traditional & Ethnic Elegance",
      description: "Stunning sarees in silk, cotton, and chiffon • Designer kurtas & lehengas • Authentic Kandyan & Osariya wear • Traditional jewelry accessories • Perfect for weddings & cultural ceremonies",
    },
    {
      icon: TrendingUp,
      title: "Contemporary Fashion",
      description: "Latest western trends & fusion wear • Stylish dresses, tops & jeans • Smart casual & weekend wear • Instagram-worthy outfits • Climate-friendly fabrics for tropical comfort",
    },
    {
      icon: ShoppingBag,
      title: "Premium Occasion Wear",
      description: "Elegant office & corporate attire • Stunning party dresses & evening gowns • Wedding guest outfits • Date night specials • Custom tailoring available upon request",
    },
    {
      icon: Sparkles,
      title: "Lihini's Signature Collection",
      description: "Exclusive designer pieces • Limited edition imports from India, Thailand & Dubai • Celebrity-inspired styles • Premium quality fabrics tested for Sri Lankan climate • 100% authenticity guaranteed",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Island-Wide Delivery",
      description: "Free shipping across Sri Lanka for orders above Rs. 5,000",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "7-day return policy and authenticity guaranteed on all products",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Same-day delivery available in Colombo, Kandy & Galle",
    },
    {
      icon: Star,
      title: "Expert Consultation",
      description: "Free styling advice and size recommendations via WhatsApp",
    },
  ];

  const testimonials = [
    {
      name: "Amara Perera",
      location: "Colombo 7",
      rating: 5,
      comment: "Lihini personally helped me choose the perfect saree for my sister's wedding! Her eye for detail and color coordination is incredible. The quality exceeded my expectations and I received so many compliments!",
    },
    {
      name: "Dinesh Silva",
      location: "Kandy",
      rating: 5,
      comment: "My wife has been ordering from Lihini's collection for over 2 years now. Every single piece has been perfect - from casual wear to office outfits. The personal styling advice via WhatsApp is a game changer!",
    },
    {
      name: "Nishani Fernando",
      location: "Galle",
      rating: 5,
      comment: "I've tried many online fashion stores, but Lihini's Fashion is truly the best! Authentic products, reasonable prices, and the fabrics are perfect for our climate. The traditional wear collection is exceptional!",
    },
    {
      name: "Thilini Jayawardena",
      location: "Nugegoda",
      rating: 5,
      comment: "Lihini understands Sri Lankan women's fashion needs perfectly! I bought 5 outfits for different occasions and each one fits beautifully. Fast delivery and excellent customer care. 100% recommended!",
    },
    {
      name: "Chamodi Rajapaksa",
      location: "Moratuwa",
      rating: 5,
      comment: "The best fashion consultant I've found! Lihini's styling tips are spot-on and the WhatsApp catalog is so convenient. I especially love the contemporary fusion collection - modern yet culturally appropriate.",
    },
    {
      name: "Shenali Wijesinghe",
      location: "Dehiwala",
      rating: 5,
      comment: "Been a loyal customer since 2020! The quality never disappoints and Lihini always knows the latest trends. Her signature collection pieces are absolutely stunning. Thank you for making fashion accessible!",
    },
  ];

  const galleryImages = [
    { src: gallery1, alt: "Elegant Summer Dress Collection" },
    { src: gallery2, alt: "Modern Urban Streetwear" },
    { src: gallery3, alt: "Premium Business Formal Suit" },
    { src: gallery4, alt: "Luxury Winter Coat Collection" },
    { src: gallery5, alt: "Designer Accessories and Bags" },
    { src: gallery6, alt: "Athletic Performance Activewear" },
    { src: gallery7, alt: "Elegant Evening Gown Collection" },
    { src: gallery8, alt: "Contemporary Denim Fashion" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Video-like Animated Intro Hero Section with Glassmorphism */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Fully Visible */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110 animate-zoom-in"
          style={{
            backgroundImage: `url(${heroImage})`,
            animationDuration: '3s',
          }}
        />

        {/* Floating decorative glass bubbles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 backdrop-blur-sm blur-xl animate-float border border-primary/20" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-accent/10 backdrop-blur-sm blur-xl animate-float border border-accent/20" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-28 h-28 rounded-full bg-primary/15 backdrop-blur-sm blur-xl animate-float border border-primary/20" style={{ animationDelay: '2s' }} />

        {/* Glassmorphism Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Glass Badge with slide animation */}
          <div className="inline-block px-8 py-4 mb-8 bg-primary/20 backdrop-blur-xl rounded-full border-2 border-primary/40 shadow-glow animate-bounce-in" style={{ animationDelay: '0.3s', boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.37)' }}>
            <p className="text-foreground text-sm md:text-base font-bold tracking-wide drop-shadow-lg">
              ✨ SRI LANKA'S #1 FASHION DESTINATION ✨
            </p>
          </div>

          {/* Main title with glass background - removed */}

          {/* Subtitle with glass effect */}
          <div className="animate-zoom-in" style={{ animationDelay: '0.9s' }}>
            <div className="inline-block px-8 py-4 bg-foreground/20 backdrop-blur-xl rounded-2xl border border-foreground/30">
              <p className="text-2xl md:text-4xl lg:text-5xl text-foreground font-light italic drop-shadow-xl">
                "Where Every Piece Tells Your Story"
              </p>
            </div>
          </div>

          {/* Description with glass panel */}
          <div className="animate-fade-in mt-8" style={{ animationDelay: '1.2s' }}>
            <div className="max-w-3xl mx-auto px-8 py-6 bg-background/30 backdrop-blur-xl rounded-2xl border border-foreground/20 shadow-elegant">
              <p className="text-lg md:text-xl text-foreground font-medium mb-3 drop-shadow-lg">
                Curated by <span className="font-bold text-primary">Lihini</span> - Your Personal Style Expert
              </p>
              <p className="text-base md:text-lg text-foreground/90 drop-shadow-lg">
                From timeless traditional sarees to cutting-edge contemporary fashion • 
                Handpicked collections for the modern Sri Lankan woman • 
                Serving Colombo, Kandy, Galle & Island-wide
              </p>
            </div>
          </div>

          {/* CTA Buttons with glass effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in mt-10" style={{ animationDelay: '1.5s' }}>
            <Button 
              size="lg" 
              className="bg-primary/80 backdrop-blur-xl border-2 border-primary text-foreground hover:bg-primary shadow-glow px-10 py-7 text-lg font-bold rounded-full transform hover:scale-110 transition-bounce"
              onClick={() => scrollToSection("gallery")}
            >
              🛍️ Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/20 backdrop-blur-xl border-2 border-foreground/50 text-foreground hover:bg-foreground/80 hover:text-background px-10 py-7 text-lg font-bold rounded-full transform hover:scale-110 transition-bounce"
              onClick={() => scrollToSection("about")}
            >
              📖 Lihini's Story
            </Button>
          </div>

          {/* Scroll indicator with glass */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-foreground/50 bg-background/20 backdrop-blur-md rounded-full flex justify-center pt-2">
              <div className="w-2 h-4 bg-primary rounded-full animate-glow-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Lihini's Story Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-bold text-foreground mb-4">
                ABOUT THE FOUNDER
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Meet Lihini</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                Your Personal Fashion Curator & Style Expert
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="text-3xl font-bold text-primary">"Fashion</span> is not just about clothes - 
                  it's about confidence, expression, and celebrating who you are. I started this journey in 2018 
                  with a simple dream: to help every woman in Sri Lanka discover her unique style."
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With over 6 years of experience in fashion retail and styling, I've personally curated every 
                  piece in our collection. From sourcing the finest fabrics to ensuring perfect fits for the 
                  Sri Lankan climate, every detail matters. Whether you're looking for the perfect wedding saree, 
                  elegant office wear, or casual weekend styles - I'm here to guide you.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
                  <p className="text-foreground font-medium italic">
                    "My mission is simple: Make every woman feel beautiful, confident, and authentically herself."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- Lihini, Founder & Chief Stylist</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={heroImage} 
                    alt="Lihini - Fashion Expert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-foreground p-6 rounded-2xl shadow-glow">
                  <p className="text-4xl font-bold">5000+</p>
                  <p className="text-sm font-medium">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <p className="text-3xl font-bold text-primary mb-2">6+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <p className="text-3xl font-bold text-primary mb-2">10K+</p>
                  <p className="text-sm text-muted-foreground">Products Sold</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <p className="text-3xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">New Arrivals Monthly</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">WhatsApp Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-bold text-foreground mb-4">
              HANDPICKED COLLECTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Discover Your Perfect Style</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From timeless traditional elegance to contemporary chic - every piece is personally selected by Lihini 
              to match Sri Lankan taste, climate, and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Shop With Us?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best shopping experience in Sri Lanka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                      <feature.icon size={28} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-bold text-foreground mb-4">
              SHOP BY CATEGORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Browse Our Collections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully organized categories to help you find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/sarees')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery1} alt="Sarees Collection" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">Sarees & Traditional</h3>
                  <p className="text-sm">200+ Premium Designs</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold text-foreground">SHOP NOW →</p>
                </div>
              </div>
            </Card>

            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/western')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery2} alt="Western Wear" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">Western & Casual</h3>
                  <p className="text-sm">300+ Trendy Pieces</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold text-foreground">SHOP NOW →</p>
                </div>
              </div>
            </Card>

            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/office')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery3} alt="Office Wear" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">Office & Formal</h3>
                  <p className="text-sm">150+ Professional Looks</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold text-foreground">SHOP NOW →</p>
                </div>
              </div>
            </Card>

            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/party')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery4} alt="Party Wear" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">Party & Evening</h3>
                  <p className="text-sm">100+ Glamorous Styles</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold text-foreground">SHOP NOW →</p>
                </div>
              </div>
            </Card>

            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/accessories')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery5} alt="Accessories" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">Bags & Accessories</h3>
                  <p className="text-sm">250+ Must-Have Items</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs font-bold text-foreground">SHOP NOW →</p>
                </div>
              </div>
            </Card>

            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-glow transition-smooth border-2 border-primary/20"
              onClick={() => navigate('/category/new-arrivals')}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={gallery6} alt="New Arrivals" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold mb-1">New Arrivals</h3>
                  <p className="text-sm">Fresh Stock Weekly!</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full animate-glow-pulse">
                  <p className="text-xs font-bold text-foreground">NEW! →</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-primary rounded-full text-sm font-bold text-foreground mb-4 animate-glow-pulse">
                🎉 LIMITED TIME OFFERS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">This Month's Special Deals</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary to-accent text-foreground p-8 text-center hover:shadow-glow transition-smooth">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">🎁</div>
                  <h3 className="text-2xl font-bold mb-2">First Order Bonus</h3>
                  <p className="text-3xl font-black mb-2">15% OFF</p>
                  <p className="text-sm opacity-90">Use code: LIHINI15</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent to-primary text-foreground p-8 text-center hover:shadow-glow transition-smooth">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">🚚</div>
                  <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
                  <p className="text-3xl font-black mb-2">Orders Rs. 5000+</p>
                  <p className="text-sm opacity-90">Island-wide shipping</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-accent text-foreground p-8 text-center hover:shadow-glow transition-smooth">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold mb-2">VIP Membership</h3>
                  <p className="text-3xl font-black mb-2">Exclusive Deals</p>
                  <p className="text-sm opacity-90">Join our loyalty program</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-bold text-foreground mb-4">
              INSTAGRAM FAVORITES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Customer Favorites Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our customers are styling Lihini's Fashion pieces • 
              Tag us @lihinis_fashion to get featured!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.alt}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <GalleryImage {...image} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-foreground text-primary hover:bg-foreground/90 shadow-glow px-8 py-6 text-lg font-bold rounded-full transform hover:scale-110 transition-bounce"
              onClick={() => scrollToSection("contact")}
            >
              💬 Chat with Lihini on WhatsApp
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Get instant access to full catalog • Personal styling advice • Real-time availability
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-bold text-foreground mb-4">
              ⭐ 5000+ HAPPY CUSTOMERS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Customer Love Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers across Sri Lanka • Join our growing fashion family!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-primary/20 bg-card hover:shadow-glow transition-smooth hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">"{testimonial.comment}"</p>
                  <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">📍 {testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Star className="fill-primary text-primary" size={20} />
              <span className="font-bold text-foreground">4.9/5.0 Average Rating</span>
              <Star className="fill-primary text-primary" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 pb-16 border-b border-background/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Lihini's Latest!</h3>
            <p className="text-background/80 mb-6">
              Get exclusive access to new arrivals, special offers, and fashion tips directly from Lihini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-foreground hover:bg-primary/90 rounded-full px-8 font-bold">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-primary">LIHINI'S</span><br />Fashion
              </h3>
              <p className="text-background/80 mb-4 leading-relaxed">
                Your personal fashion curator since 2018. 
                Bringing you the finest traditional and contemporary styles 
                with authentic quality and exceptional service.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/lihinis_fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-foreground transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/lihinis.fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-foreground transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com/lihinis_fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-foreground transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-primary">Quick Links</h4>
              <div className="space-y-3 text-background/80">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block hover:text-primary transition-smooth font-medium"
                >
                  About Lihini
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block hover:text-primary transition-smooth font-medium"
                >
                  Shop Collection
                </button>
                <a href="#" className="block hover:text-primary transition-smooth font-medium">
                  Size Guide
                </a>
                <a href="#" className="block hover:text-primary transition-smooth font-medium">
                  Delivery Info
                </a>
                <a href="#" className="block hover:text-primary transition-smooth font-medium">
                  Returns & Exchange
                </a>
                <a href="#" className="block hover:text-primary transition-smooth font-medium">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-primary">Get In Touch</h4>
              <div className="space-y-4 text-background/80">
                <a
                  href="tel:+94771234567"
                  className="flex items-center gap-3 hover:text-primary transition-smooth group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-background/60">Call Us</p>
                    <p className="font-semibold">+94 77 123 4567</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-smooth group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-background/60">WhatsApp</p>
                    <p className="font-semibold">+94 77 123 4567</p>
                  </div>
                </a>
                <a
                  href="mailto:lihini@lihinis-fashion.lk"
                  className="flex items-center gap-3 hover:text-primary transition-smooth group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-background/60">Email</p>
                    <p className="font-semibold">lihini@lihinis-fashion.lk</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-primary">Visit Our Showroom</h4>
              <div className="space-y-4 text-background/80">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold mb-1">Main Boutique</p>
                    <p className="text-sm leading-relaxed">
                      123 Galle Road,<br />
                      Colombo 03,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold mb-1">Opening Hours</p>
                    <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="text-xs text-primary mt-1">Closed on Poya Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/60 text-sm">
              <p>&copy; {new Date().getFullYear()} Lihini's Fashion Collection. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Made with <span className="text-primary text-lg">❤️</span> in Sri Lanka 🇱🇰
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
