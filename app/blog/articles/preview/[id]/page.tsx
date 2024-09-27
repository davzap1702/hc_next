/* eslint-disable @next/next/no-img-element */
import useArticle from '@/hooks/useArticle';

import { useRelatedArticles } from '@/hooks/useRelatedArticles';
import { getArticleById } from '@/lib/requests';
import { UseComponent } from '@/hooks/pageHooks/useComponents';
import { AuthorByline } from '@/components/blog/AuthorByline';
import { formatDate } from '@/helpers';
import { Breadcrumb } from '@/components/blog/Breadcrumb';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ThreeUp } from '@/components/blog/ThreeUp';
import { Share } from '@/components';
import { Eyebrow } from '@/components/blog/Eyebrow';


interface Props {
    params: {
        id: string
    }
}


export async function generateMetadata({ params: { id } }: Props): Promise<Metadata>{
  const { data } = await getArticleById(id);
  if (!data) return notFound();

  return {
    title: `${data.attributes.heading}`,
    description: data.attributes.description,
    openGraph: {
      images: [data?.attributes?.Hero_Image?.data?.attributes?.url]
    }
  };
}

export default async function Page({ params: { id } }: Props) {
  const data = await useArticle(id);
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