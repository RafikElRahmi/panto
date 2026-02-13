import ExperienceContent from './experience-content';
import ExperienceImageSection from './experience-image-section';

export function ExperienceSection() {
  return (
    <section id="about" className="px-6 py-16 md:py-28 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ExperienceImageSection />

        <ExperienceContent />
      </div>
    </section>
  );
}

export default ExperienceSection;
