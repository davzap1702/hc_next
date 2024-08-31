import { HomepageHero } from '@/components/blog/HomepageHero';
import { LatestNews } from '@/components/blog/LatestNews';
// import { ThreeUp } from '@/components/blog/ThreeUp';
// import { FourUp } from '@/components/blog/FourUp';
import { useHomepage } from '@/hooks/useHomepage';
import { useLatest } from '@/hooks/useLatest';

export default async function BlogHomepage() {

  const data = await useHomepage();

  useLatest();

  

  return (
    <main>
      <HomepageHero 
        heroHeading = {data.heroHeading}
        heroImage = {data.heroImage}
        heroAuthorName = {data.heroAuthorName}
        heroAuthorImage = {data.heroAuthorImage}
        heroArticleDisplayDate = {data.heroArticleDisplayDate}
        heroEyebrow = {data.heroEyebrow}
        heroArticleSlug = {data.heroArticleSlug}
      />
      <section className="blog_homepage_section">
        {/* <ThreeUp title={'3up for testing'} data={data} /> */}
        {/* <FourUp title={'4up for testing'} /> */}

        <LatestNews />
      </section>
    </main>
  );
}