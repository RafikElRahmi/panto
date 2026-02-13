import Image from 'next/image';
import Link from 'next/link';
import { FeatureType } from './features';

function Feature({ feature }: { feature: FeatureType }) {
  return (
    <div key={feature.title} className="flex h-full flex-col gap-y-4 md:gap-y-6">
      <h3 className="text-foreground font-montserrat text-xl font-bold lg:text-2xl">
        {feature.title}
      </h3>
      <p className="text-foreground leading-paragraph font-montserrat grow text-sm font-normal lg:text-base">
        {feature.description}
      </p>
      <Link
        href={feature.href}
        className="text-primary font-montserrat hover:text-primary/80 flex items-center gap-3 text-sm font-medium transition-colors lg:text-base"
      >
        More info
        <Image
          src={'/icons/long-right-arrow.svg'}
          alt="Arrow"
          width={16}
          height={16}
          className="w-12 lg:w-14"
        />
      </Link>
    </div>
  );
}

export default Feature;
