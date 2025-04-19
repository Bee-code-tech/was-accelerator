import React from 'react';

interface CarouselItem {
  image: string;
  result?: string;
  quote?: string;
  name?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  isResult?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, isResult = false }) => {
  return (
    <div className={`carousel-container ${isResult ? 'carousel-results' : 'carousel-testimonials'}`}>
      {/* Map over the items and display them */}
      <div className="flex overflow-x-scroll gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex-none w-80 h-80 bg-gray-200 rounded-lg shadow-md p-4">
            {isResult ? (
              <>
                <img src={item.image} alt={`result-${index}`} className="w-full h-32 object-cover rounded-md mb-4" />
                <p className="text-center text-lg font-semibold text-gray-800">{item.result}</p>
              </>
            ) : (
              <>
                <img src={item.image} alt={`testimonial-${index}`} className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" />
                <p className="text-center text-lg text-gray-700">{item.quote}</p>
                <p className="text-center text-sm text-gray-500 mt-2">{item.name}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
