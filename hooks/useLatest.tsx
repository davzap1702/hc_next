import { ILatestArticleItem } from '@/components/blog/LatestNewsItem';
import { getLatestArticles } from '@/lib/requests';

export const useLatest = async (): Promise<Array<ILatestArticleItem>> => {

  const { data } = await getLatestArticles();

  return data.map((article) => {
    return {
      image: article.attributes.Hero_Image.data.attributes.url,
      eyebrow: article.attributes.categories.data[0].attributes.name,
      title: article.attributes.heading,
      author: article.attributes.author.data.attributes.Name,
      date: article.attributes.display_date,
      path: article.attributes.slug
    };
  });
  
};
