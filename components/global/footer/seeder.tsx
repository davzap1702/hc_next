import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import type { IFooterSectionProps } from './FooterSection';

export const footerSeeder: Array<IFooterSectionProps> = [
  {
    title: 'Company',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/About' },
      { name: 'Contact', path: '/Contact' },
      { name: 'Blog', path: '/blog' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Vendor Selection', path: '/Services/vendor-selection' },
      { name: 'Software Implementation', path: '/Services/software-implementation' },
      { name: 'Experiential Training', path: '/Services/experiential' },
      { name: 'Custom Development', path: '/Services/custom-development' }
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