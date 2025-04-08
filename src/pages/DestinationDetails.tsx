import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Star, Globe, Sun, Cloud, Thermometer } from 'lucide-react';

const destinations = [
  {
    id: "1",
    name: "Santorini Sunset Paradise",
    location: "Greece",
    rating: 4.9,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Experience breathtaking sunsets and pristine white architecture in the heart of the Aegean Sea.",
    longDescription: "Discover the magic of Santorini, where white-washed buildings cascade down volcanic cliffs, offering spectacular views of the Aegean Sea. This iconic Greek island is famous for its dramatic sunsets, black sand beaches, and charming villages.",
    highlights: [
      "Watch the famous Oia sunset",
      "Visit traditional wineries",
      "Explore ancient ruins",
      "Swim in volcanic hot springs"
    ],
    activities: [
      "Wine tasting tours",
      "Sailing excursions",
      "Photography tours",
      "Cooking classes"
    ],
    weather: {
      bestTime: "April to October",
      avgTemp: "25°C (77°F)",
      climate: "Mediterranean"
    },
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e"
    ]
  }
  // Add more destinations as needed
];

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {destination.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{destination.rating}</span>
                  <span className="text-gray-300 ml-1">({destination.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-gray-600 mb-6">{destination.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-500 mr-3" />
                    <span className="font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${destination.name} gallery ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Weather Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Best Time to Visit</span>
                  </div>
                  <span className="font-medium">{destination.weather.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Average Temperature</span>
                  </div>
                  <span className="font-medium">{destination.weather.avgTemp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Climate</span>
                  </div>
                  <span className="font-medium">{destination.weather.climate}</span>
                </div>
              </div>
            </div>

            {/* Book Now Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Plan Your Trip</h3>
              <button
                onClick={() => navigate('/booking')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Secure your spot and create lasting memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}