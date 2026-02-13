'use client';

import NavigationButtons from '@/components/shared/navigation-buttons';
import { useState } from 'react';
import CategoryTabs from './category-tabs';
import ProductCard from './product-card';
import { products } from './products';

function BestSellingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, products.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-12 text-5xl font-bold">Best Selling Product</h2>

          <CategoryTabs />
        </div>

        {/* Products Slider */}
        <div className="relative w-full">
          <NavigationButtons
            onPrev={prevSlide}
            onNext={nextSlide}
            canGoPrev={currentIndex > 0}
            canGoNext={currentIndex < products.length - 4}
          />

          <div className="grid w-full grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 4).map((product, index) => {
              let responsiveClass = '';
              if (index === 1) responsiveClass = 'hidden sm:block';
              else if (index === 2) responsiveClass = 'hidden md:block';
              else if (index === 3) responsiveClass = 'hidden lg:block';

              return (
                <div key={product.id} className={responsiveClass}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium transition">
            View All
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              className="w-12 lg:w-14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
                stroke="currentColor"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
export default BestSellingSection;
