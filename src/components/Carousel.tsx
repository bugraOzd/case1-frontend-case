import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    company: "Zoomerr",
    logo: "⚡",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    author: "Hellen Jummy",
    role: "Team Lead",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "SHELLS",
    logo: "🎯",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    author: "Hellena John",
    role: "Co-founder",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "ArtVenue",
    logo: "🎨",
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    author: "David Oshodi",
    role: "Manager",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "WATTPAD",
    logo: "📚",
    text: "Magna eget tristique parturient integer sed ipsum et quis amet. Ut urna ornare ante mauris, varius nisl potenti bibendum.",
    author: "Charolette Hanlin",
    role: "CEO",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "WATTPAD",
    logo: "📚",
    text: "Magna eget tristique parturient integer sed ipsum et quis amet. Ut urna ornare ante mauris, varius nisl potenti bibendum.",
    author: "Charolette Hanlin",
    role: "CEO",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "WATTPAD",
    logo: "📚",
    text: "Magna eget tristique parturient integer sed ipsum et quis amet. Ut urna ornare ante mauris, varius nisl potenti bibendum.",
    author: "Charolette Hanlin",
    role: "CEO",
    avatar: "/api/placeholder/32/32",
  },
  {
    company: "WATTPAD",
    logo: "📚",
    text: "Magna eget tristique parturient integer sed ipsum et quis amet. Ut urna ornare ante mauris, varius nisl potenti bibendum.",
    author: "Charolette Hanlin",
    role: "CEO",
    avatar: "/api/placeholder/32/32",
  },
  // Add more testimonials if needed
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{testimonial.logo}</span>
        <h3 className="text-xl font-bold">{testimonial.company}</h3>
      </div>
      <p className="text-gray-600 mb-4">{testimonial.text}</p>
    </div>
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.author}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 4
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex < testimonials.length - 4 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="px-24">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-4xl font-bold">Because they love us</h3>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-gray-100"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-gray-100"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="bg-yellow-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {testimonials
              .slice(startIndex, startIndex + 4)
              .map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
