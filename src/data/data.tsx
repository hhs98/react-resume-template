import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hasibul Hasan Siju | Full Stack Software Engineer',
  description: "I'm a Bangladesh based Full Stack Software Engineer, currently working at SupplyLine helping build a product to make life easier for job seekers and job provider around bangladesh.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hasibul Hasan Siju.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bangladesh based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Jobmedia</strong> helping build a product to make life easier for job seekers and job providers in bangladesh.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning new stuffs on <strong className="text-stone-100">The Internet</strong>,
        riding my <strong className="text-stone-100">motorcycle</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Bangladesh</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a seasoned Software Engineer based in Dhaka, Bangladesh specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
  aboutItems: [
    {label: 'Location', text: 'Nikunja, Dhaka', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Bangladeshi', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Tech News, Keyboards', Icon: SparklesIcon},
    {label: 'Study', text: 'Daffodil International University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'SupplyLine, ltd.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Bengali',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Pytest',
        level: 5,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Continuos Integration/ Continuos Deployment',
        level: 4,
      },
      {
        name: 'Version Control',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Spread Smile',
    description: 'A charity website for helping people in need.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Kakatua',
    description: 'An online library for lending books.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'BShopper',
    description: 'Shopping malls navigation app.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Case Manager',
    description: 'A case management app for lawyers and law firms.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'ToLetBD',
    description: 'A website for finding apartments for rent.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'BrightSkiils',
    description: 'An online platform for learning new skills.',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'Oditiya/Efast Courier',
    description: 'A courier service app for sending and keeping track of parcels.',
    url: '#',
    image: porfolioImage7,
  },
  {
    title: 'Apple Gadgets',
    description: 'An online store for buying tech products.',
    url: '#',
    image: porfolioImage8,
  },
  {
    title: 'PosNinja',
    description: 'A point of sale app for small to large shop owners.',
    url: '#',
    image: porfolioImage9,
  },
  {
    title: 'SupplyLine',
    description: 'A b2b ecommerce platform for small shop owners.',
    url: '#',
    image: porfolioImage10,
  },
  {
    title: 'Spiro',
    description: 'An educational platform for learning new skills.',
    url: '#',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2021',
    location: 'Daffofil International University',
    title: 'Bachelor of Science in Software Engineering',
    content: <p>Started programming career with C++ and Java. Learned about data structures and algorithms.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2023 - Present',
    location: 'SupplyLine',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>• Significantly improved user engagement by developing and maintaining enterprise-level web applications using Python, Django, and React. This led to a 20% increase in user interaction, resulting in higher customer satisfaction and improved application performance.</li>
        <li>• Fostered cross-functional synergy by actively collaborating with team members, driving knowledge sharing.</li>
        <li>• Harnessed AWS to deploy code to production, ensuring peak system performance and unwavering reliability. This strategy led to 99.9% uptime and streamlined application scalability.</li>
      </ul>
    ),
  },
  {
    date: 'November 2020 - May 2023',
    location: 'Qtec Solutions Limited',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>• Developed, tested, and implemented software solutions in accordance with design specifications, following established coding standards and practices.</li>
        <li>• Conducted thorough requirement analysis and consistently met project deadlines by providing accurate estimations.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Asiqur Baig',
      text: 'Siju has the passion to solve a problem. Everytime I have come up with a new problem and he never gets frustrated and he tries to solve my problem.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    }
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },s
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you have any questions or want to contact me, please fill out the form below.',
  items: [
    {
      type: ContactType.Email,
      text: 'hhsiju97@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Nikunja, Dhaka',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@hasansiju',
      href: 'https://www.instagram.com/hasansiju/',
    },
    {
      type: ContactType.Github,
      text: 'hhs98',
      href: 'https://github.com/hhs98',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hhs98'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hasibul-hasan-siju/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hasansiju/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/SkinnySiju'},
];
