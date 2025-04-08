import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Star, MapPin, Plane, Hotel, Utensils, Camera, Check } from 'lucide-react';

const packages = [
  {
    id: "1",
    title: "European Grand Tour",
    duration: "15 Days",
    price: 3499,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    rating: 4.9,
    reviews: 245,
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    included: ["Hotels", "Flights", "Tours", "Meals"],
    description: "Experience the best of Europe in this comprehensive tour package.",
    longDescription: "Embark on an unforgettable journey through Europe's most iconic cities. From the romantic streets of Paris to the ancient ruins of Rome, immerse yourself in rich history, culture, and cuisine.",
    highlights: [
      "Visit the Eiffel Tower and Louvre Museum in Paris",
      "Explore the Colosseum and Vatican in Rome",
      "Experience Gaudi's architecture in Barcelona",
      "Cruise Amsterdam's picturesque canals"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        activities: ["Airport transfer", "Welcome dinner", "Evening Seine cruise"]
      },
      {
        day: 2,
        title: "Paris Exploration",
        activities: ["Eiffel Tower visit", "Louvre Museum tour", "Champs-Élysées walk"]
      }
      // Add more days as needed
    ],
    accommodation: {
      type: "4 & 5 Star Hotels",
      features: ["Central locations", "Breakfast included", "Wi-Fi", "Concierge service"]
    },
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
    ]
  }
  // Add more packages as needed
];

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === id);

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${pkg.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">{pkg.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {pkg.duration}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{pkg.rating}</span>
                  <span className="text-gray-300 ml-1">({pkg.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold">
                  ${pkg.price}
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
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-6">{pkg.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Camera className="h-4 w-4 mr-2 text-blue-500" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Accommodation</h2>
              <div className="flex items-center mb-4">
                <Hotel className="h-6 w-6 text-blue-500 mr-3" />
                <span className="text-xl font-medium">{pkg.accommodation.type}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {pkg.accommodation.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pkg.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${pkg.title} gallery ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Included Features */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="space-y-4">
                {[
                  { icon: Plane, text: "International Flights" },
                  { icon: Hotel, text: "Luxury Accommodation" },
                  { icon: Utensils, text: "Daily Breakfast" },
                  { icon: MapPin, text: "Guided Tours" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-blue-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 animate-slide-up">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${pkg.price}
                </div>
                <div className="text-gray-600">per person</div>
              </div>
              
              <button
                onClick={() => navigate('/booking')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mb-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </button>

              <div className="text-center text-sm text-gray-500">
                <p>Free cancellation up to 24 hours before start</p>
                <p>Instant confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}