import Layout from '@/components/layout/layout';
import BestSellingSection from '@/components/sections/best-selling/best-selling-section';
import ExperienceSection from '@/components/sections/experience/experience-section';
import HeroSection from '@/components/sections/hero/hero-section';
import MaterialsSection from '@/components/sections/materials/materials-section';
import TestimonialsSection from '@/components/sections/testimonials/testimonials-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us/why-choose-us-section';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <BestSellingSection />
      <ExperienceSection />
      <MaterialsSection />
      <TestimonialsSection />
    </Layout>
  );
}
