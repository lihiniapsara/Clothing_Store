import { Shirt, TrendingUp, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Shirt,
      title: "Curated Collections",
      description: "Carefully selected pieces that blend contemporary style with timeless elegance.",
    },
    {
      icon: TrendingUp,
      title: "New Arrivals",
      description: "Stay ahead of trends with our latest fashion-forward pieces and seasonal collections.",
    },
    {
      icon: ShoppingBag,
      title: "Personal Styling",
      description: "Expert styling advice to help you discover your perfect look and signature style.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Luxurious fabrics and exceptional craftsmanship in every garment we offer.",
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

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Élite Boutique
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Where timeless elegance meets contemporary fashion
          </p>
          <Button variant="hero" size="lg" onClick={() => scrollToSection("gallery")}>
            Shop Collection
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story & Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curating exceptional fashion experiences with premium quality pieces and personalized styling for the modern wardrobe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium clothing and accessories for every occasion
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
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Élite Boutique</h3>
              <p className="text-primary-foreground/80 mb-4">
                Premium fashion destination for discerning style
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <a
                  href="mailto:info@eliteboutique.com"
                  className="flex items-center gap-2 hover:text-accent transition-smooth"
                >
                  <Mail size={18} />
                  info@eliteboutique.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 hover:text-accent transition-smooth"
                >
                  <Phone size={18} />
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Élite Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
