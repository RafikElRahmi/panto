import ExperienceContent from './experience-content';
import ExperienceImageSection from './experience-image-section';

export function ExperienceSection() {
  return (
    <section id="about" className=" py-16 md:py-28 " aria-labelledby="experience-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ExperienceImageSection />

        <ExperienceContent />
      </div>
    </section>
  );
}

export default ExperienceSection;
