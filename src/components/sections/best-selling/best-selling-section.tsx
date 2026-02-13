'use client';

import Caption from '@/components/shared/caption';
import NavigationButtons from '@/components/shared/navigation-buttons';
import ViewAll from '@/components/shared/view-all';
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
    <section className="bg-background-light-gray px-4 py-20" aria-labelledby="best-selling-heading">
      <div className="mb-12 text-center flex flex-col items-center gap-8">
        <Caption id="best-selling-heading">Best Selling Product</Caption>

        <CategoryTabs />
      </div>

      {/* Products Slider */}
      <div className="relative w-full" role="region" aria-label="Product carousel" aria-roledescription="carousel">
        <NavigationButtons
          onPrev={prevSlide}
          onNext={nextSlide}
          canGoPrev={currentIndex > 0}
          canGoNext={currentIndex < products.length - 4}
        />

        <ul className="grid w-full grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" aria-label="Products" role="list">
          {products.slice(0, 4).map((product, index) => {
            let responsiveClass = '';
            if (index === 1) responsiveClass = 'hidden sm:block';
            else if (index === 2) responsiveClass = 'hidden md:block';
            else if (index === 3) responsiveClass = 'hidden lg:block';

            return (
              <li key={product.id} className={responsiveClass} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${products.length}: ${product.name}`}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <ViewAll href="#" />
      </div>
    </section>
  );
}
export default BestSellingSection;
