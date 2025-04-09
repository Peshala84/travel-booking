import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Star, Globe, Sun, Cloud, Thermometer } from 'lucide-react';

const destinations = [
  {
    id: "2",
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
  },
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
          <div className="flex items-end h-full px-4 pb-16 mx-auto max-w-7xl">
            <div className="text-white animate-fade-in">
              <h1 className="mb-4 text-5xl font-bold">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {destination.location}
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>{destination.rating}</span>
                  <span className="ml-1 text-gray-300">({destination.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-up">
              <h2 className="mb-4 text-2xl font-bold">About {destination.name}</h2>
              <p className="mb-6 text-gray-600">{destination.longDescription}</p>
              
              <h3 className="mb-4 text-xl font-semibold">Highlights</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-up">
              <h2 className="mb-6 text-2xl font-bold">Activities</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50">
                    <Globe className="w-6 h-6 mr-3 text-blue-500" />
                    <span className="font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="p-8 bg-white shadow-lg rounded-xl animate-slide-up">
              <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {destination.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${destination.name} gallery ${index + 1}`}
                    className="object-cover w-full h-48 transition-opacity rounded-lg cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Info */}
            <div className="p-6 bg-white shadow-lg rounded-xl animate-slide-up">
              <h3 className="mb-4 text-xl font-semibold">Weather Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Best Time to Visit</span>
                  </div>
                  <span className="font-medium">{destination.weather.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Average Temperature</span>
                  </div>
                  <span className="font-medium">{destination.weather.avgTemp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Climate</span>
                  </div>
                  <span className="font-medium">{destination.weather.climate}</span>
                </div>
              </div>
            </div>

            {/* Book Now Card */}
            <div className="sticky p-6 bg-white shadow-lg rounded-xl top-24 animate-slide-up">
              <h3 className="mb-4 text-xl font-semibold">Plan Your Trip</h3>
              <button
                onClick={() => navigate('/booking')}
                className="flex items-center justify-center w-full py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </button>
              <p className="mt-4 text-sm text-center text-gray-500">
                Secure your spot and create lasting memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}