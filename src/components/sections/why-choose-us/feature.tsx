import Image from 'next/image';
import Link from 'next/link';
import { FeatureType } from './features';
import MoreInfo from "@/components/shared/more-info";

function Feature({ feature }: { feature: FeatureType }) {
  return (
    <div key={feature.title} className="flex h-full flex-col gap-y-4 md:gap-y-6">
      <h3 className="text-foreground font-montserrat text-xl font-bold lg:text-2xl">
        {feature.title}
      </h3>
      <p className="text-foreground leading-paragraph font-montserrat grow text-sm font-normal lg:text-base">
        {feature.description}
      </p>
      <MoreInfo href={feature.href} />
    </div>
  );
}

export default Feature;
