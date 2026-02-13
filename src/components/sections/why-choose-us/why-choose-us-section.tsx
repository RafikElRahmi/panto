import Feature from './feature';
import { features, type FeatureType } from './features';

function WhyChooseUsSection() {
  return (
    <section className="bg-white px-10 py-20 lg:py-32 lg:px-24">
      <div className="grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-4 items-stretch">
        <div className="md:col-span-1 self-center">
          <h2 className="text-foreground text-4xxl leading-tight font-bold">
            Why
            <br /> Choosing Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:gap-5 sm:grid-cols-3 md:col-span-3">
          {features.map((feature: FeatureType) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
