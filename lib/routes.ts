import { env } from './env';

export const articleEndpoint = (slug: string) => {
  return `${env.base_url}/slugify/slugs/article/${slug}?populate%5BHero_Image%5D%5Bpopulate%5D=%2A&populate%5Bcategories%5D%5Bpopulate%5D=%2A&populate%5Bauthor%5D%5Bpopulate%5D=%2A&populate%5BComponents%5D%5Bpopulate%5D=%2A&populate%5BComponents%5D%5Bmedia%5D%5Bpopulate%5D=%2A`;
};

export const homepageEndpoint = () => {
  return `${env.base_url}/homepage?populate[article][populate][Hero_Image][populate]=*&populate[Components][populate][articles][populate][Hero_Image][populate]=*&populate[article][populate][author][populate]=*&populate[article][populate][categories][populate]=*&populate[Components][populate][articles][populate][author][populate]=*&populate[Components][populate][articles][populate][categories][populate]=*`;
};

export const articlesEndpoints = (limit?: number) => {
  const BASE_API = `${env.base_url}/articles?sort=createdAt:desc&`;

  return limit 
    ? `${BASE_API}pagination[pageSize]=${limit}`
    : BASE_API;
};
