/* eslint-disable @next/next/no-img-element */
import { AuthorByline } from '@/components/blog/AuthorByline';
import { Eyebrow } from '@/components/blog/Eyebrow';
import { formatDate } from '@/helpers';
import useArticle from '@/hooks/useArticle';
import { UseComponent } from '@/hooks/pageHooks/useComponents';
import { getArticles } from '@/lib/requests';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata>{
  const { data } = await getArticles(slug);

  return {
    title: `${data.attributes.heading}`,
    description: data.attributes.description,
    openGraph: {
      images: [data?.attributes?.Hero_Image?.data?.attributes?.url]
    }
  };
}


export default async function Page({params: {slug}}: Props) {

  const data = await useArticle(slug);

  return (
    <main className="container-md blog_article">
      <Eyebrow name={data?.eyebrow ?? 'Archives'} /> 
      <h1>{data?.heading}</h1>
      <AuthorByline
        imagen={data?.authorImage}
        name={data?.authorName}
        title={data?.authorTitle ?? 'Writer'}
        date={formatDate(new Date(data?.articleDisplayDate))}
      />
      <img
        className="blog_article__hero"
        src={data?.heroImage}
        alt=""
        role="presentation"
      />

      <section className="blog_body">
        <UseComponent components={data?.components} />
      </section>
    </main>
  );
}