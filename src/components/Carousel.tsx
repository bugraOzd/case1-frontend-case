import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselItem from "./CarouselItem";
import { testimonials } from "../shared/testimonials";

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex < testimonials.length % itemsPerPage ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length % itemsPerPage
    );
  };

  return (
    <div className="px-4 md:px-8 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
          Because they love us
        </h3>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-col-hover"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-col-hover"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="bg-[#FDE68A] p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
              width: `${(testimonials.length / itemsPerPage) * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`px-2 ${
                  itemsPerPage === 1
                    ? "w-full"
                    : itemsPerPage === 2
                    ? "w-1/2"
                    : "w-1/4"
                }`}
              >
                <CarouselItem {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
