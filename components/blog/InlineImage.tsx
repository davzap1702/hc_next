import Image from 'next/image';

interface Props {
  media: string;
}

export const InlineImage = ({ media }: Props) => {
  return (
    <Image width={1000} height={600} layout="responsive" className="inline-image" src={media} alt="" role="presentation" />
  );
};