import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

// Collections data organized by category
const collectionsData: Record<string, any> = {
  sarees: {
    title: "Sarees & Traditional Wear",
    description: "Explore our exclusive saree collections",
    collections: [
      {
        id: "silk-sarees",
        name: "Silk Sarees Collection",
        description: "Premium Banarasi & Kanjivaram silk sarees",
        image: gallery1,
        itemCount: 25,
      },
      {
        id: "cotton-sarees",
        name: "Cotton Sarees Collection",
        description: "Comfortable handloom cotton sarees",
        image: gallery2,
        itemCount: 30,
      },
      {
        id: "designer-sarees",
        name: "Designer Sarees",
        description: "Modern designer & party wear sarees",
        image: gallery3,
        itemCount: 20,
      },
      {
        id: "wedding-sarees",
        name: "Wedding Sarees",
        description: "Bridal & wedding ceremony sarees",
        image: gallery4,
        itemCount: 18,
      },
      {
        id: "osariya-collection",
        name: "Kandyan Osariya",
        description: "Traditional Sri Lankan Kandyan wear",
        image: gallery5,
        itemCount: 15,
      },
    ],
  },
  western: {
    title: "Western & Casual Wear",
    description: "Trendy western fashion collections",
    collections: [
      {
        id: "dresses",
        name: "Dresses Collection",
        description: "Casual, party & formal dresses",
        image: gallery2,
        itemCount: 35,
      },
      {
        id: "tops-shirts",
        name: "Tops & Shirts",
        description: "Stylish tops, blouses & shirts",
        image: gallery3,
        itemCount: 40,
      },
      {
        id: "jeans-pants",
        name: "Jeans & Pants",
        description: "Comfortable denim & trousers",
        image: gallery4,
        itemCount: 28,
      },
      {
        id: "skirts",
        name: "Skirts Collection",
        description: "Mini, midi & maxi skirts",
        image: gallery5,
        itemCount: 22,
      },
      {
        id: "jumpsuits",
        name: "Jumpsuits & Rompers",
        description: "Trendy one-piece outfits",
        image: gallery6,
        itemCount: 18,
      },
    ],
  },
  office: {
    title: "Office & Formal Wear",
    description: "Professional attire collections",
    collections: [
      {
        id: "blazers",
        name: "Blazers & Jackets",
        description: "Professional blazers & formal jackets",
        image: gallery3,
        itemCount: 20,
      },
      {
        id: "formal-pants",
        name: "Formal Pants & Trousers",
        description: "Office wear pants & trousers",
        image: gallery4,
        itemCount: 25,
      },
      {
        id: "formal-dresses",
        name: "Formal Dresses",
        description: "Business & office dresses",
        image: gallery5,
        itemCount: 22,
      },
      {
        id: "blouses-shirts",
        name: "Formal Blouses & Shirts",
        description: "Professional tops & shirts",
        image: gallery6,
        itemCount: 30,
      },
    ],
  },
  party: {
    title: "Party & Evening Wear",
    description: "Glamorous party collections",
    collections: [
      {
        id: "evening-gowns",
        name: "Evening Gowns",
        description: "Elegant long evening gowns",
        image: gallery7,
        itemCount: 15,
      },
      {
        id: "cocktail-dresses",
        name: "Cocktail Dresses",
        description: "Stylish cocktail & party dresses",
        image: gallery8,
        itemCount: 25,
      },
      {
        id: "sequin-collection",
        name: "Sequin & Sparkle",
        description: "Glamorous sequin outfits",
        image: gallery1,
        itemCount: 18,
      },
      {
        id: "party-jumpsuits",
        name: "Party Jumpsuits",
        description: "Chic party jumpsuits & playsuits",
        image: gallery2,
        itemCount: 20,
      },
    ],
  },
  accessories: {
    title: "Bags & Accessories",
    description: "Complete your look with accessories",
    collections: [
      {
        id: "handbags",
        name: "Handbags Collection",
        description: "Designer & casual handbags",
        image: gallery5,
        itemCount: 35,
      },
      {
        id: "clutches",
        name: "Clutches & Evening Bags",
        description: "Elegant clutches for special occasions",
        image: gallery6,
        itemCount: 25,
      },
      {
        id: "jewelry",
        name: "Fashion Jewelry",
        description: "Necklaces, earrings & accessories",
        image: gallery7,
        itemCount: 50,
      },
      {
        id: "belts-scarves",
        name: "Belts & Scarves",
        description: "Stylish belts, scarves & more",
        image: gallery8,
        itemCount: 30,
      },
      {
        id: "sunglasses",
        name: "Sunglasses Collection",
        description: "Trendy eyewear & sunglasses",
        image: gallery1,
        itemCount: 20,
      },
    ],
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "Latest fresh collections",
    collections: [
      {
        id: "this-week",
        name: "This Week's Arrivals",
        description: "Brand new items added this week",
        image: gallery1,
        itemCount: 15,
      },
      {
        id: "trending-now",
        name: "Trending Now",
        description: "Hottest fashion trends",
        image: gallery2,
        itemCount: 20,
      },
      {
        id: "seasonal-collection",
        name: "Seasonal Collection",
        description: "Latest seasonal fashion",
        image: gallery3,
        itemCount: 25,
      },
      {
        id: "limited-edition",
        name: "Limited Edition",
        description: "Exclusive limited pieces",
        image: gallery4,
        itemCount: 12,
      },
    ],
  },
};

const CollectionsPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const categoryInfo = category ? collectionsData[category] : collectionsData["sarees"];
  const collections = categoryInfo?.collections || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-3 bg-foreground/20 backdrop-blur-xl rounded-full border border-foreground/30 mb-6">
            <p className="text-foreground text-sm font-bold tracking-wide">
              SHOP BY COLLECTION
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-2xl">
            {categoryInfo?.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto drop-shadow-lg">
            {categoryInfo?.description}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="group overflow-hidden cursor-pointer border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300"
                onClick={() => navigate(`/collection/${category}/${collection.id}`)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  
                  {/* Collection Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <div className="mb-3">
                      <div className="inline-block px-4 py-1 bg-primary/90 backdrop-blur-sm rounded-full mb-3">
                        <p className="text-xs font-bold text-foreground">
                          {collection.itemCount} ITEMS
                        </p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-background/90 drop-shadow-lg mb-4">
                      {collection.description}
                    </p>
                    
                    {/* View Collection Button */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-background/20 backdrop-blur-md border border-background/30 rounded-full group-hover:bg-primary group-hover:border-primary transition-all">
                      <span className="text-sm font-bold group-hover:text-foreground">
                        View Collection
                      </span>
                      <span className="text-sm group-hover:text-foreground">→</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {collections.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground mb-4">No collections found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
