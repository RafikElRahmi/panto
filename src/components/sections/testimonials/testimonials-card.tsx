import StarRate from '@/components/shared/star-rate';
import Image from 'next/image';
import { TestimonialType } from './testimonials';
import UnionShape from './union-shape';

export function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className="relative w-full max-w-120 overflow-hidden rounded-4xl shadow-xl">
      <div className="relative h-160 w-full">
        <Image
          src={testimonial.backgroundImage}
          alt="Interior background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute right-0 bottom-4 left-0">
        <div className="relative px-6 pb-2">
          <UnionShape />

          <div className="absolute inset-0 flex h-70 flex-col items-center px-8 pt-2 pb-6">
            <Image
              src={testimonial.avatarImage}
              alt={testimonial.name}
              width={64}
              height={64}
              className="h-20 w-20 rounded-full border-8 border-white object-cover"
            />
            <h3 className="text-muted mt-1 text-lg font-bold">{testimonial.name}</h3>

            <p className="text-muted mt-1 text-xs">{testimonial.role}</p>

            <p className="text-muted mt-4 grow px-4 text-center text-sm">
              {`\u201C${testimonial.quote}\u201D`}
            </p>

            <div className="flex items-center justify-center gap-1">
              <StarRate rating={testimonial.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
