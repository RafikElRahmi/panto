import MoreInfo from '@/components/shared/more-info';

function ExperienceContent() {
  return (
    <div className="h-120">
      <span className="text-primary text-base font-semibold tracking-[0.2em] uppercase md:text-lg">
        Experiences
      </span>
      <h2 className="text-foreground md:text-4xxl mt-4 text-4xl leading-tight font-bold md:text-3xl lg:text-4xl">
        We Provide You The Best Experience
      </h2>
      <p className="text-foreground leading-paragraph mt-4 max-w-md text-base font-normal md:mt-6 md:text-lg">
        You don{"'"}t have to worry about the result because all of these interiors are made by
        people who are professionals in their fields with an elegant and luxurious style and with
        professional quality materials.
      </p>
      <MoreInfo href="#" className="mt-4" />
    </div>
  );
}

export default ExperienceContent;
