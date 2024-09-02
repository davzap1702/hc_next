import { HomepageHero } from '@/components/blog/HomepageHero';
import { LatestNews } from '@/components/blog/LatestNews';
import { useHomepageHero } from '@/hooks/useHomepage';
import { UseHomepageComponents } from '@/hooks/pageHooks/UseHomepageComponents';
// import { UseComponent } from '@/hooks/useComponents';
// import { ThreeUp } from '@/components/blog/ThreeUp';
// import { FourUp } from '@/components/blog/FourUp';

export default async function BlogHomepage() {
  const { hero_props, raw } = await useHomepageHero();

  return (
    <main>
      <HomepageHero {...hero_props} />
      <section className="blog_homepage_section">
        {/* <ThreeUp title={'3up for testing'} data={data} /> */}
        {/* <FourUp title={'4up for testing'} /> */}
        {/* <useHomepageHero /> */}
        <UseHomepageComponents components={raw.attributes.Components} />

      </section>
      <LatestNews />
    </main>
  );
}