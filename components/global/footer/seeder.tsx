import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import type { IFooterSectionProps } from './FooterSection';

export const footerSeeder: Array<IFooterSectionProps> = [
  {
    title: 'Company',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Vendor Selection', path: '/services#vendor-selection' },
      { name: 'Software Implementation', path: '/services#software-implementation' },
      { name: 'Experiential Training', path: '/services#experiential' },
      { name: 'Custom Development', path: '/services#custom-development' }
    ]
  },
  {
    title: 'Connect',
    hasIcon: true,
    links: [
      { 
        name: 'LinkedIn', 
        path: 'https://www.linkedin.com/company/huecker-consulting/',
        icon: <FaLinkedin /> 
      },
      { 
        name: 'Facebook', 
        path: 'https://www.facebook.com/profile.php?id=61553056147885&mibextid=LQQJ4d',
        icon: <FaFacebook />
      }
    ]
  }

];