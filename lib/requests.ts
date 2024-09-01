
import { IArticle, IHomePage } from '@/interfaces';
import { articleEndpoint, articlesByCategory, articlesEndpoints, homepageEndpoint } from './routes';
import { IArticleResponse } from '@/interfaces/latest';

const CACHE_REVALIDATION = 50;

export const getArticles = async (slug: string): Promise<IArticle> => 
  await fetch(articleEndpoint(slug), { next: { revalidate: CACHE_REVALIDATION } })
    .then(res => res.json());


export const getHomepage = async (): Promise<IHomePage> => 
  await fetch(homepageEndpoint(), { next: { revalidate: CACHE_REVALIDATION } })
    .then(res => res.json());


export const getLatestArticles = async (): Promise<IArticleResponse> => 
  await fetch(articlesEndpoints(4), { next: { revalidate: CACHE_REVALIDATION } })
    .then(res => res.json());


export const getRelatedArticles = async (category: string): Promise<IArticleResponse> => 
  await fetch(articlesByCategory(category), { next: { revalidate: CACHE_REVALIDATION } })
    .then(res => res.json());
