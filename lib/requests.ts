
import { IArticle, IHomePage } from '@/interfaces';
import { articleEndpoint, articlesEndpoints, homepageEndpoint } from './routes';
import { IArticleResponse } from '@/interfaces/latest';

export const getArticles = async (slug: string): Promise<IArticle> => {
  return await fetch(articleEndpoint(slug))
    .then(res => res.json());
};

export const getHomepage = async (): Promise<IHomePage> => {
  return await fetch(homepageEndpoint())
    .then(res => res.json());
};

export const getLatestArticles = async (): Promise<IArticleResponse> => {
  return await fetch(articlesEndpoints(4))
    .then(res => res.json());
};
