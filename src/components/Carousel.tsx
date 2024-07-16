import { useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselItem from "./CarouselItem";
import { testimonials } from "../shared/data/testimonials";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = useCallback(() => {
    if (window.innerWidth < 640) {
      setItemsPerPage(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="px-4 md:px-8 lg:px-24 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
          Because they love us
        </h3>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-col-hover transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border-2 border-col-primary bg-white text-col-primary hover:bg-col-hover transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="bg-[#FDE68A] w-[93vw] h-[20rem] -top-5 absolute -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={currentIndex + index} className="w-full">
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
