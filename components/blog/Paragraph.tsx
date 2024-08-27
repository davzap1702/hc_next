import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface Props {
    content: any
}

export const Paragraph = ({ content }: Props) => {
  return <section>{<BlocksRenderer content={content} />}</section>;
};
