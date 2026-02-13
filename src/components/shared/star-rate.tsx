import { Star } from 'lucide-react';

function StarRate({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1.5" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-4.5 w-4.5 ${i < rating ? 'fill-star-rating text-star-rating' : 'fill-star-rating/30 text-star-rating/30'}`}
        />
      ))}
    </div>
  );
}

export default StarRate;
