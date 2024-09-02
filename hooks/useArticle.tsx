import { Component } from '@/interfaces';
import { getArticles } from '@/lib/requests';

interface IArticleData {
  heading: string;
  articleDisplayDate: Date;
  eyebrow: string;
  heroImage: string;
  components: Component[];
  authorImage: string;
  authorName: string;
  authorTitle: string;
}

const useArticle = async (slug: string): Promise<IArticleData> => {
  try {
    const { data } = await getArticles(slug);


    return {
      heading: data?.attributes?.heading,
      articleDisplayDate: data?.attributes?.display_date,
      eyebrow: data?.attributes?.categories?.data[0]?.attributes?.name,
      authorImage: data?.attributes?.author?.data?.attributes?.author_image?.data[0]?.attributes?.url,
      authorName: data?.attributes?.author?.data?.attributes?.Name,
      authorTitle: data?.attributes?.author?.data?.attributes?.title,
      components: data?.attributes?.Components,
      heroImage: data?.attributes?.Hero_Image?.data?.attributes?.url
    };
  } catch (error) {
    throw new Error('Error fetching article data');

  }
};

export default useArticle;
