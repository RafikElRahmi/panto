import { Star } from 'lucide-react';

function StarRate({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4.5 w-4.5 ${i < rating ? 'fill-[#F6973F] text-[#F6973F]' : 'fill-[#F6973F]/30 text-[#F6973F]/30'}`}
        />
      ))}
    </div>
  );
}

export default StarRate;
