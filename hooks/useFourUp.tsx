import { IFourUpComponent } from '@/components/blog/FourUp';
import { INewsComponent } from '@/interfaces/homepgeNews';

export const useFourUp = (component: INewsComponent): IFourUpComponent => {
  return {
    heading: component.title,
    slug: component.articles.data[0].attributes.slug,
    image: component.articles.data[0].attributes.Hero_Image?.data.attributes.url!,
    authorImage: component.articles.data[0].attributes.author.data.attributes.author_image.data[0].attributes.url!,
    authorName: component.articles.data[0].attributes.author?.data.attributes.Name!,
    date: component.articles.data[0].attributes.display_date,
    title: component.articles.data[0].attributes.heading,
    description: component.articles.data[0].attributes.description,
    children: component.articles.data.slice(1, 4).map((article) => {
      return {
        slug: article.attributes.slug,
        image: article.attributes.Hero_Image?.data.attributes.url!,
        authorImage: article.attributes.author?.data.attributes.author_image?.data[0]?.attributes.url!,
        authorName: article.attributes.author?.data.attributes.Name!,
        date: article.attributes.display_date,
        title: article.attributes.heading,
        description: article.attributes.description,
      };
    }),

  };
   
};
