import { IMAGES } from '@/constants';
import Image from 'next/image';

export default function About() {
  return (
    <section className="about-me container">
      <div className="about-me__container">
        <Image
          priority
          width={690}
          height={800}
          style={{ height: 'auto', width: '100%' }}
          src={IMAGES.zach2}
          role="presentation"
          alt=''
        />
        <div className="about-me__container--content container">
          <div className="name-title">
            <h3>ABOUT US</h3>
            <p>
            Zach Huecker, CLTD, CSCP <br /> Founder & President
            </p>
          </div>
          <p>
          After nearly a decade of working in the transportation industry,
          Zach founded Huecker Consulting to share the best practices he
          helped develop over the years. Zach had the privilege of working
          with esteemed organizations and gained invaluable insights into
          various transportation models. This broad exposure has provided
          him with a deep understanding of the complexities and challenges
          that organizations face when it comes to optimizing their
          transportation processes.
            <br />
            <br />
          When engaged with clients, Zach leverages his extensive
          knowledge, analytical skills, and problem-solving abilities to
          identify strategic opportunities that can enhance efficiency and
          reduce costs. He prioritizes building strong client
          relationships based on trust, open communication, and
          collaboration. By working closely with the client's team, Zach
          ensures that the strategies are aligned with their business
          goals and seamlessly integrated into their existing operations.
            <br />
            <br />
          As your transportation consultant, Zach offers a combination of
          experience, industry knowledge, and a proven track record of
          driving success for clients in the transportation sector. Trust
          Huecker Consulting to provide innovative solutions tailored to
          your specific needs, optimize your operations, and drive
          sustainable growth for your business. Let's navigate the
          ever-changing transportation landscape together and achieve
          excellence in your organization.
          </p>
        </div>
      </div>
    </section>
  );
}