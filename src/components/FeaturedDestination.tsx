interface FeaturedDestinationProps {
    image: string;
    title: string;
    description: string;
  }
  
  export default function FeaturedDestination({ image, title, description }: FeaturedDestinationProps) {
    return (
      <div className="group relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-200 mb-4">{description}</p>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }