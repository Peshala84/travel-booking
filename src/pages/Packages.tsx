import { useState } from 'react';
import { Clock, Star, Plane, DollarSign, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: "European Grand Tour",
    duration: "15 Days",
    price: 3499,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    rating: 4.9,
    reviews: 245,
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    included: ["Hotels", "Flights", "Tours", "Meals"],
    description: "Experience the best of Europe in this comprehensive tour package.",
    featured: true
  },
  {
    id: 2,
    title: "Asian Cultural Experience",
    duration: "12 Days",
    price: 2899,
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    rating: 4.8,
    reviews: 189,
    destinations: ["Tokyo", "Kyoto", "Seoul", "Bangkok"],
    included: ["Hotels", "Local Transport", "Cultural Shows", "Guide"],
    description: "Immerse yourself in the rich cultures of Asia's most iconic cities.",
    featured: false
  },
  {
    id: 3,
    title: "Caribbean Paradise",
    duration: "8 Days",
    price: 1999,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    rating: 4.7,
    reviews: 156,
    destinations: ["Bahamas", "Jamaica", "Virgin Islands"],
    included: ["Resort Stay", "Water Activities", "Beach Access", "Meals"],
    description: "Relax on pristine beaches and enjoy crystal clear waters.",
    featured: true
  }
];

export default function Packages() {
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  const filteredPackages = packages.filter(pkg => {
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      if (pkg.price < min || pkg.price > max) return false;
    }
    if (selectedDuration !== "all") {
      const duration = parseInt(pkg.duration);
      if (selectedDuration === "short" && duration > 7) return false;
      if (selectedDuration === "medium" && (duration <= 7 || duration > 14)) return false;
      if (selectedDuration === "long" && duration <= 14) return false;
    }
    return true;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Curated Travel Packages
            </h1>
            <p className="text-xl text-white animate-slide-up">
              All-inclusive packages designed to create unforgettable experiences
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000-4000">$3,000 - $4,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <option value="all">All Durations</option>
                <option value="short">Short (1-7 days)</option>
                <option value="medium">Medium (8-14 days)</option>
                <option value="long">Long (15+ days)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                pkg.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(pkg.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`}
                  />
                </button>
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-gray-600 ml-1">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.destinations.map((dest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {dest}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.included.map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      <Plane className="h-3 w-3 mr-1" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/packages/${pkg.id}`)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}