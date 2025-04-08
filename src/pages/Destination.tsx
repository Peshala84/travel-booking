import { useState } from 'react';
import { MapPin, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Destination = {
  id: number;
  name: string;
  location: string;
  category: string[];
  rating: number;
  image: string;
  description: string;
  price: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini Sunset Paradise",
    location: "Greece",
    category: ["Beach", "Romantic", "Cultural"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Experience breathtaking sunsets and pristine white architecture in the heart of the Aegean Sea.",
    price: "From $1,299"
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    category: ["Adventure", "Mountain", "Winter"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35",
    description: "Explore majestic peaks and charming alpine villages in the Swiss Alps.",
    price: "From $1,499"
  },
  {
    id: 3,
    name: "Kyoto Cultural Journey",
    location: "Japan",
    category: ["Cultural", "Historic", "City"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    description: "Immerse yourself in ancient Japanese traditions and stunning temples.",
    price: "From $1,899"
  },
  {
    id: 4,
    name: "Machu Picchu Trek",
    location: "Peru",
    category: ["Adventure", "Historic", "Mountain"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Journey through the ancient Inca Trail to the mystical citadel.",
    price: "From $2,199"
  },
  {
    id: 5,
    name: "Maldives Paradise",
    location: "Maldives",
    category: ["Beach", "Luxury", "Romantic"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Relax in overwater bungalows surrounded by crystal clear waters.",
    price: "From $2,499"
  },
  {
    id: 6,
    name: "Safari Adventure",
    location: "Tanzania",
    category: ["Adventure", "Wildlife", "Nature"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    description: "Witness the great migration and incredible African wildlife up close.",
    price: "From $2,899"
  }
];

const categories = ["All", "Beach", "Adventure", "Cultural", "Historic", "Mountain", "Luxury", "Wildlife", "Romantic", "City", "Nature", "Winter"];

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === "All" || destination.category.includes(selectedCategory);
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Explore Dream Destinations
            </h1>
            <p className="text-xl text-white animate-slide-up">
              Discover the world's most breathtaking locations
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-8 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                  {destination.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                    <span className="text-blue-600 font-semibold">{destination.rating}</span>
                    <span className="text-blue-600 ml-1">★</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.category.map(cat => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => navigate(`/destinations/${destination.id}`)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}