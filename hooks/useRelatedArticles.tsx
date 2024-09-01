import { IThreeUpProps } from '@/components/blog/ThreeUp';
import { getRelatedArticles } from '@/lib/requests';

export const useRelatedArticles = async (category: string): Promise<IThreeUpProps> => {
  const { data } = await getRelatedArticles(category);

  return {
    title: 'Related Articles',
    children: data.slice(0,3).map(child => ({
      img: child.attributes.Hero_Image.data.attributes.url,
      eyebrow: child.attributes.categories.data[0].attributes.name,
      title: child.attributes.heading,
      authorImg: child.attributes.author.data.attributes.author_image.data[0].attributes.url,
      authorName: child.attributes.author.data.attributes.Name,
      date: child.attributes.display_date,
      path: child.attributes.slug
    }))
  };
};
