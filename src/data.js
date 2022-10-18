// import icons
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/feature-1.jpg';
import Features2Img from './assets/img/features-2.jpeg';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Web from './assets/img/web.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import NodeJS from './assets/img/NodeJS.png';
import ReactJS from './assets/img/ReactJS.png';
import TailWindCSS from './assets/img/TailWindCSS.png';
import TailWindUI from './assets/img/TailWindUI.png';
import TailWindUITemplates from './assets/img/TailWindUITemplates.png';

export const navigation = [
  {
    name: 'home',
    href: '#home',
  },
  {
    name: 'about',
    href: '#stats',
  },
  {
    name: 'features',
    href: '#features',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export const hero = {
  title: 'Logic Web Design',
  subtitle: `Founded for non-programmers people. We wanted to replace the CMS. Don't have time to code your website?`,
  buttonText: 'Request',
};

export const stats = [
  {
    value: '3+',
    text: 'Year Experience',
  },
  {
    value: '30+',
    text: 'Websites Built',
  },
  {
    value: '500+',
    text: 'Web Components',
  },
  {
    value: '10+',
    text: 'Website Templates',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Websites',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Portfolio websites',
      subtitle: 'Do you need a portfolio website?',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Online shops',
      subtitle: 'We can also make an Online Shop.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Management websites',
      subtitle: 'Or maybe you need a management website?',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Built to your needs',
    subtitle: `WLDS is a service company that create websites according to clients needs. You don't have a website yet? Contact us!`,
  },
};

export const wwu = {
  title: 'What we use?',
  subtitle: `NodeJS, ReactJS, Tailwind etc. A couple things we'll use to build your website`,
  items: [
    {
      image: <NodeJS />,
      title: 'NodeJS',
    },
    {
      image: <ReactJS />,
      title: 'ReactJS',
    },
    {
      image: <TailWindCSS />,
      title: 'TailwindCSS',
    },
    {
      image: <TailWindUI />,
      title: 'TailwindUI',
    },
    {
      image: <TailWindUITemplates />,
      title: 'Templates',
    },
  ]
};

export const newInStore = {
  title: 'Follow-up',
  subtitle: 'You will be informed & advised on all aspects of your website.',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'WEB',
      image: <ChairImg />,
    },
    {
      name: 'WEB HOSTING',
      image: <BedImg />,
    },
    {
      name: 'CODE',
      image: <CupboardImg />,
    },
    {
      name: 'NEWSLETTER',
      image: <LightingImg />,
    },
    {
      name: 'ONLINE PAYMENT',
      image: <Web />,
    }
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Web components',
  subtitle: 'Need clients opinions on your website?',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Design Manager',
      message:
        '“A huge time saving.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'IT',
      message:
        '“This is interesting and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Photographer',
      message:
        '“Really cool.”',
    },
  ],
};

export const newsletter = {
  title: 'Want to be notified?',
  subtitle: 'Join our mailing list.',
  placeholder: 'Your email address',
  buttonText: 'Join',
};

export const footer = {
  social: [
    {
      icon: <IoLogoTwitter />,
      href: 'https://twitter.com/WldsCompany',
    },
    {
      icon: <IoLogoInstagram />,
      href: 'https://www.instagram.com/a.wlds/',
    },
    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/profile.php?id=100086852616521',
    },
  ],
  copyright: 'WLDS 2022 - All Rights Reserved.',
};
