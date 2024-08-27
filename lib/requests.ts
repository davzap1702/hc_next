
import { IArticle, IHomePage } from '@/interfaces';
import { articleEndpoint, homepageEndpoint } from './routes';

export const getArticles = async (slug: string): Promise<IArticle> => {
  return await fetch(articleEndpoint(slug))
    .then(res => res.json());
};

export const getHomepage = async (): Promise<IHomePage> => {
  return await fetch(homepageEndpoint())
    .then(res => res.json());
};