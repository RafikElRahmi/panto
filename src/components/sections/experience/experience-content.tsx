import Caption from '@/components/shared/caption';
import MoreInfo from '@/components/shared/more-info';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';

function ExperienceContent() {
  return (
    <div className="h-120">
      <Title>Experiences</Title>
      <Caption id="experience-heading">We Provide You The Best Experience</Caption>
      <Paragraph>
        You don&apos;t have to worry about the result because all of these interiors are made by
        people who are professionals in their fields with an elegant and luxurious style and with
        professional quality materials.
      </Paragraph>
      <MoreInfo href="#" className="mt-4" />
    </div>
  );
}

export default ExperienceContent;
