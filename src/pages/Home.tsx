import { useEffect, useState } from 'react';
import FeaturedDestination from '../components/FeaturedDestination';
import { Star, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const testimonialSection = document.getElementById('testimonials');
      if (testimonialSection && scrollPosition > testimonialSection.offsetTop + 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredDestinations = [
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      title: "Cinque Terre, Italy",
      description: "Experience the colorful coastal villages of the Italian Riviera."
    },
    {
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      title: "Santorini, Greece",
      description: "Discover whitewashed buildings and stunning sunsets over the Aegean Sea."
    },
    {
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18",
      title: "Bali, Indonesia",
      description: "Explore tropical beaches, ancient temples, and lush rice terraces."
    }
  ];

  const popularPackages = [
    {
      title: "European Discovery",
      duration: "10 Days",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1471960098958-2059c6681742",
      rating: 4.9,
      reviews: 128
    },
    {
      title: "Asian Adventure",
      duration: "12 Days",
      price: "$2,899",
      image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
      rating: 4.8,
      reviews: 96
    },
    {
      title: "African Safari",
      duration: "8 Days",
      price: "$3,299",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.9,
      reviews: 156
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "The trip to Bali exceeded all my expectations. The itinerary was perfectly planned, and the local guides were exceptional."
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "Our European tour was incredible! Every detail was taken care of, and we got to experience the authentic culture of each country."
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "The African safari was a life-changing experience. The accommodations were luxurious and the wildlife sightings were amazing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 animate-fade-in">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-white text-center mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h2>
        <p className="text-gray-600 mb-12">Explore our hand-picked destinations for your next journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <FeaturedDestination
              key={index}
              image={destination.image}
              title={destination.title}
              description={destination.description}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Travel With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Expert Guides",
                description: "Professional local guides with deep knowledge"
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: "Flexible Booking",
                description: "Easy scheduling and free cancellation"
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: "Best Experience",
                description: "Highly rated tours and activities"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "24/7 Support",
                description: "Round-the-clock customer service"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 animate-float">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Popular Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <span className="text-blue-600 font-bold">{pkg.price}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-600 ml-1">({pkg.reviews} reviews)</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-sm transform transition-all duration-500 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 animate-float"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Travel Updates</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter and never miss our special offers!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}