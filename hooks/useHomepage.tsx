import { getHomepage } from '@/lib/requests';

interface IHome {
    heroHeading: string;
    heroImage: string;
    heroAuthorName: string;
    heroAuthorImage: string;
    heroArticleDisplayDate: Date;
    heroEyebrow: string;
    heroArticleSlug: string;
}




export const useHomepage = async (): Promise<IHome> => {
  try {
    const {data} = await getHomepage();
    return {
      heroHeading: data?.attributes?.article?.data?.attributes?.heading!,
      heroImage: data?.attributes?.article?.data?.attributes?.Hero_Image?.data?.attributes?.url!,
      heroAuthorName: data?.attributes?.article?.data?.attributes?.author?.data?.attributes?.Name!,
      heroArticleDisplayDate: data?.attributes?.article?.data?.attributes?.display_date!,
      heroAuthorImage: data?.attributes?.article?.data?.attributes?.author?.data?.attributes?.author_image?.data[0]?.attributes?.url!,
      heroEyebrow: data?.attributes?.article?.data?.attributes?.categories?.data[0]?.attributes?.name!,
      heroArticleSlug: data?.attributes?.article?.data?.attributes?.slug!
    };
  } catch (error) {
    throw new Error(`Error fetching homepage data ${error}`,);
  }

};