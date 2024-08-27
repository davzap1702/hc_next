export const articleEndpoint = (slug: string) => {
  return `http://localhost:1337/api/slugify/slugs/article/${slug}?populate%5BHero_Image%5D%5Bpopulate%5D=%2A&populate%5Bcategories%5D%5Bpopulate%5D=%2A&populate%5Bauthor%5D%5Bpopulate%5D=%2A&populate%5BComponents%5D%5Bpopulate%5D=%2A&populate%5BComponents%5D%5Bmedia%5D%5Bpopulate%5D=%2A`;
};

export const homepageEndpoint = () => {
  return 'http://localhost:1337/api/homepage?populate[article][populate][Hero_Image][populate]=*&populate[Components][populate][articles][populate][Hero_Image][populate]=*&populate[article][populate][author][populate]=*&populate[article][populate][categories][populate]=*';
};