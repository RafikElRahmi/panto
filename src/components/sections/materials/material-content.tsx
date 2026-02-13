import Caption from '@/components/shared/caption';
import MoreInfo from '@/components/shared/more-info';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';

function MaterialContent() {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <Title>Materials</Title>
      <Caption id="materials-heading">
        Very Serious <br />
        Materials For Making <br />
        Furniture
      </Caption>
      <Paragraph>
        Because panto was very serious about designing furniture for our environment, using a very
        expensive and famous capital but at a relatively low price
      </Paragraph>
      <MoreInfo href="#" />
    </div>
  );
}

export default MaterialContent;
