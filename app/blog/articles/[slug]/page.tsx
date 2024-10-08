/* eslint-disable @next/next/no-img-element */
import useArticle from '@/hooks/useArticle';

import { useRelatedArticles } from '@/hooks/useRelatedArticles';
import { articlesEndpoints } from '@/lib/routes';
import { IArticleResponse } from '@/interfaces/latest';
import { UseComponent } from '@/hooks/pageHooks/useComponents';
import { AuthorByline } from '@/components/blog/AuthorByline';
import { getArticles } from '@/lib/requests';
import { Breadcrumb } from '@/components/blog/Breadcrumb';
import { formatDate } from '@/helpers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ThreeUp } from '@/components/blog/ThreeUp';
import { Eyebrow } from '@/components/blog/Eyebrow';
import { Share } from '@/components';

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams(){
  const { data }: IArticleResponse = await fetch(articlesEndpoints())
    .then(res => res.json())
    .catch(notFound);

  return data.map(({ attributes: { slug } }) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata>{
  const { data } = await getArticles(slug);
  if (!data) return notFound();

  return {
    title: `${data.attributes.heading}`,
    description: data.attributes.description,
    openGraph: {
      images: [data?.attributes?.Hero_Image?.data?.attributes?.url]
    }
  };
}

export default async function Page({ params: { slug } }: Props) {
  const data = await useArticle(slug);
  const relatedArticleProps = await useRelatedArticles(data?.eyebrow);

  return (
    <main className="container-md blog_article">
      <Breadcrumb category={data?.eyebrow ?? 'Archives'} />
      <h1>{data?.heading}</h1>
      <div className='blog_article__top-hero'>
        <AuthorByline
          imagen={data?.authorImage}
          name={data?.authorName}
          title={data?.authorTitle ?? 'Writer'}
          date={formatDate(new Date(data?.articleDisplayDate))}
        />
        <Share heading={data.heading} />
      </div>
      <img
        className="blog_article__hero"
        src={data?.heroImage}
        alt=""
        role="presentation"
      />

      <section className="blog_body">
        <UseComponent components={data?.components} />
        <hr />
      </section>

      <div className='container-md' style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Article Tag:</p>
        <Eyebrow name={data.eyebrow} />
      </div>

      <section style={{ marginTop: '8rem' }}>
        <ThreeUp {...relatedArticleProps} />
      </section>
    </main>
  );
}