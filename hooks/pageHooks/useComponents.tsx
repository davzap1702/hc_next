import { InlineImage } from '@/components/blog/InlineImage';
import { Paragraph } from '@/components/blog/Paragraph';

interface IComponentProps {
  components: any
}

export const UseComponent = ({ components }: IComponentProps) => {
  return components?.map((component: any, index: number) => {
    switch (component.__component) {
    case 'shared.paragraph':
      return <Paragraph key={index} content={component.Paragraph} />;
    case 'shared.media':
      return (
        <InlineImage
          key={index}
          media={component.Media.data.attributes.url}
        />
      );
    default:
      return null;
    }
  });
};