import { getHomepage } from '@/lib/requests';

interface Props {
  raw: any,
  hero_props: IHome;
}

export interface IHome {
    heading: string;
    image: string;
    authorName: string;
    authorImage: string;
    articleDisplayDate: Date;
    eyebrow: string;
    articleSlug: string;
}


export const useHomepageHero = async (): Promise<Props> => {
  try {
    const { data } = await getHomepage();
    return {
      raw: data,
      hero_props: {
        heading: data?.attributes?.article?.data?.attributes?.heading!,
        image: data?.attributes?.article?.data?.attributes?.Hero_Image?.data?.attributes?.url!,
        authorName: data?.attributes?.article?.data?.attributes?.author?.data?.attributes?.Name!,
        articleDisplayDate: data?.attributes?.article?.data?.attributes?.display_date!,
        authorImage: data?.attributes?.article?.data?.attributes?.author?.data?.attributes?.author_image?.data[0]?.attributes?.url!,
        eyebrow: data?.attributes?.article?.data?.attributes?.categories?.data[0]?.attributes?.name!,
        articleSlug: data?.attributes?.article?.data?.attributes?.slug!
      }
    };
  } catch (error) {
    throw new Error(`Error fetching homepage data ${error}`,);
  }

};