import { FaCloudArrowUp, FaPeopleGroup } from 'react-icons/fa6';
import type { IServiceProps } from './ServiceItem';
import { FaCode, FaGraduationCap } from 'react-icons/fa';

const size = 35;

export const servicesSeeder: Array<IServiceProps> = [
  {
    title: 'Vendor Selection',
    description: 'Carefully evaluate and choose the most suitable program for your business needs based on factors such as quality, cost, reliability, and compatibility.',
    link: 'Learn more',
    href: '/services#vendor-selection',
    icon: <FaPeopleGroup size={size}/>
  },
  {
    title: 'Software Implementation',
    description: 'Facilitate a smooth transition as you migrate to a new software, ensuring minimal disruptions and maximizing the benefits of the new solution.',
    link: 'Learn more',
    href: '/services#software-implementation',
    icon: <FaCloudArrowUp size={size}/>
  },
  {
    title: 'Experiential Training',
    description: 'Our customized training programs empower your workforce with the knowledge and skills to maximize the potential of your technology systems.',
    link: 'Learn more',
    href: '/services#experiential-training',
    icon: <FaGraduationCap size={size} />
  },
  {
    title: 'Custom Development',
    description: 'Create tailored solutions that precisely meet your unique business needs, leveraging our expertise to deliver innovative software and applications.',
    link: 'Learn more',
    href: '/services#custom-development',
    icon: <FaCode size={size} />
  }
];