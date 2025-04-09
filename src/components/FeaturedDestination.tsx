import { useNavigate } from 'react-router-dom';

interface FeaturedDestinationProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function FeaturedDestination({ id, image, title, description }: FeaturedDestinationProps) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden group rounded-2xl">
      <img
        src={image}
        alt={title}
        className="object-cover w-full transition-transform duration-500 transform h-96 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-gray-200">{description}</p>
          <button 
            onClick={() => navigate(`/destinations/${id}`)}
            className="px-6 py-2 text-gray-900 transition-colors duration-300 bg-white rounded-full hover:bg-blue-600 hover:text-white"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}