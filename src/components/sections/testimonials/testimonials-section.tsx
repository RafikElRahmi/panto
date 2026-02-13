'use client';

import Caption from '@/components/shared/caption';
import NavigationButtons from '@/components/shared/navigation-buttons';
import Title from '@/components/shared/title';
import { useEffect, useState } from 'react';
import { testimonials } from './testimonials';
import { TestimonialCard } from './testimonials-card';

function getVisibleCardsCount(): number {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    setVisibleCards(getVisibleCardsCount());

    const handleResize = () => {
      const newVisibleCards = getVisibleCardsCount();
      setVisibleCards(newVisibleCards);
      // Adjust current index if needed when resizing
      setCurrentIndex(prev => Math.min(prev, Math.max(0, testimonials.length - newVisibleCards)));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - visibleCards));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < testimonials.length - visibleCards;

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-1 py-16 md:py-28 "
      aria-labelledby="testimonials-heading"
    >
      <Title>Testimonials</Title>
      <Caption id="testimonials-heading">Our Client Reviews</Caption>
      <div className="relative mt-4 flex w-full flex-col items-center justify-center gap-7 md:mt-10 lg:mt-18" role="region" aria-label="Client testimonials carousel" aria-roledescription="carousel">
        <div className="flex w-full justify-center gap-4 sm:gap-6 lg:gap-8" aria-live="polite">
          {testimonials.slice(currentIndex, currentIndex + visibleCards).map(testimonial => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
        <NavigationButtons
          onPrev={prevSlide}
          onNext={nextSlide}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
