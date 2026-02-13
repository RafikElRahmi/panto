import { Plus } from 'lucide-react';
import Image from 'next/image';
import StarRate from '../../shared/star-rate';
import { Product } from './products';

function ProductCard({ product }: { product: Product }) {
  return (
    <article key={product.name} className="group bg-background overflow-hidden rounded-xl">
      <div className="bg-background-gray relative aspect-3/4 overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.category}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-6 py-4">
        <p className="text-primary-gray text-xs">{product.category}</p>
        <h3 className="text-foreground mt-1 text-lg font-bold">{product.name}</h3>
        <div className="mt-1 flex gap-0.5">
          <StarRate rating={product.rating} />
        </div>

        <div className="mt-4 flex items-center justify-between py-3">
          <span className="text-foreground flex items-start gap-1.5 text-lg font-bold">
            <span className="text-sm" aria-hidden="true">{'$'}</span>
            <span className="sr-only">{`$${product.price}`}</span>
            <span aria-hidden="true">{product.price}</span>
          </span>
          <button
            className="bg-muted flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
            aria-label={`Add ${product.name} to cart`}
            type="button"
          >
            <Plus className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
