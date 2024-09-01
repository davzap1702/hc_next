
import { IArticle, IHomePage } from '@/interfaces';
import { articleEndpoint, articlesEndpoints, homepageEndpoint } from './routes';
import { IArticleResponse } from '@/interfaces/latest';

export const getArticles = async (slug: string): Promise<IArticle> => {
  return await fetch(articleEndpoint(slug), {next: {revalidate: 30} })
    .then(res => res.json());
};

export const getHomepage = async (): Promise<IHomePage> => {
  return await fetch(homepageEndpoint(), {next: {revalidate: 30}})
    .then(res => res.json());
};

export const getLatestArticles = async (): Promise<IArticleResponse> => {
  return await fetch(articlesEndpoints(4), {next: {revalidate: 30}})
    .then(res => res.json());
};
