import { IMAGES } from '@/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Huecker Consulting | Services | Comprehensive Transportation and Supply Chain Services',
  description: 'Explore our wide range of consulting services tailored for the transportation and supply chain industry. From vendor selection and seamless software implementation to experiential training and custom development, Huecker Consulting offers solutions designed to optimize your operations, enhance efficiency, and drive growth. Let us help you navigate the complexities of the industry with our expert guidance and innovative strategies.',
  keywords: ['Transportation services, supply chain services, logistics consulting, vendor selection, software implementation, experiential training, custom software development, carrier solutions, supply chain optimization, logistics efficiency']
};

export default function Services() {
  return (
    <div>
      <div className="heading container">
        <h1 className="services-title">Services</h1>
      </div>
      <div className="services">
        <div className="services-container container">
          <div className="services__section">
            <div className="services__section--img">
              <Image 
                layout='responsive'
                priority 
                width={500} 
                height={410}
                src={IMAGES.vendor}
                role="presentation"
                aria-label="hidden"
                alt=''
              />
            </div>
            <div className="services__section--info" id="vendor-selection">
              <h2>Vendor Selection</h2>
              <p className="p">
                Technology vendors are constantly soliciting you with the latest
                and greatest solutions to problems you were not even aware you
                had. As platforms evolve and new technologies emerge, you need a
                disciplined approach to understanding your true needs and
                evaluating the most relevant contenders.
              </p>
            </div>
          </div>
          <hr />
          <div className="services__section" id="software-implementation">
            <div className="services__section--img">
              <Image layout='responsive' width={500} height={410} src={IMAGES.software} alt="" aria-label="hidden" />
            </div>
            <div className="services__section--info">
              <h2>Software Implementation</h2>
              <p className="p">
                Our Software Implementation consulting ensures a smooth
                transition to new software solutions. We maximize the benefits
                of your software investment, providing comprehensive support
                throughout the implementation process. Contact us today to
                achieve a successful software transition with our expert
                guidance.
              </p>
            </div>
          </div>
          <hr />
          <div className="services__section" id="experiential">
            <div className="services__section--img">
              <Image layout='responsive' width={500} height={410} src={IMAGES.inHouse} alt="" aria-label="hidden" />
            </div>
            <div className="services__section--info">
              <h2>Experiential Training</h2>
              <p className="p">
                Elevate your workforce through post-onboarding training with
                Huecker Consulting. Our tailored programs empower employees with
                the skills and knowledge to excel in their roles. With engaging
                training sessions and ongoing support, we foster a culture of
                continuous improvement for enhanced performance and long-term
                success. Invest in your team's development and gain a
                competitive edge.
              </p>
            </div>
          </div>
          <hr />
          <div className="services__section" id="custom-development">
            <div className="services__section--img">
              <Image layout='responsive' width={500} height={410} src={IMAGES.custom} alt="" aria-label="hidden" />
            </div>
            <div className="services__section--info">
              <h2>Custom Development</h2>
              <p className="p">
                Revolutionize business processes with Custom Software
                Development. Streamline your operations, automate tasks,
                integrate systems seamlessly, and optimize logistics management.
                Contact Huecker Consulting today for tailored software solutions
                that empower your business.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}