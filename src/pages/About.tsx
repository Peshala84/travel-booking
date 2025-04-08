import { Users, Award, Globe, Heart } from 'lucide-react';

const stats = [
  { icon: Users, label: "Happy Travelers", value: "50,000+" },
  { icon: Globe, label: "Destinations", value: "100+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Heart, label: "5-Star Reviews", value: "10,000+" }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Travel enthusiast with 15+ years of experience in crafting unique journeys."
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Expert in creating seamless travel experiences and managing global operations."
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Travel Curator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Passionate about discovering hidden gems and authentic local experiences."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-white animate-slide-up">
              Creating unforgettable travel experiences since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To inspire and enable memorable journeys that connect people with diverse cultures,
            breathtaking landscapes, and extraordinary experiences around the world.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600 animate-float" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-blue-600 mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We believe in creating genuine travel experiences that reflect the true spirit of each destination."
              },
              {
                title: "Sustainability",
                description: "We're committed to responsible tourism that benefits local communities and preserves natural environments."
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in service quality and customer satisfaction."
              },
              {
                title: "Innovation",
                description: "We continuously evolve our offerings to provide unique and contemporary travel experiences."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}