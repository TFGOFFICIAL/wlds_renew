// import icons
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
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
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import NodeJS from './assets/img/NodeJS.png';
import ReactJS from './assets/img/ReactJS.png';
import TailWindCSS from './assets/img/TailWindCSS.png';
import TailWindUI from './assets/img/TailWindUI.png';
import TailWindUITemplates from './assets/img/TailWindUITemplates.png';
import CookieImg from './assets/img/cookie.png';

export const cookies = {
  image : <CookieImg />
}

export const features = {
  image: <Features1Img />,
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
    },
    {
      icon: <IoIosCheckmarkCircle />,
    },
    {
      icon: <IoIosCheckmarkCircle />,
    },
  ],
  feature2: {
    image: <Features2Img />,
  },
};

export const wwu = {
  items: [
    {
      image: <NodeJS />,
    },
    {
      image: <ReactJS />,
    },
    {
      image: <TailWindCSS />,
    },
    {
      image: <TailWindUI />,
    },
    {
      image: <TailWindUITemplates />,
    },
  ]
};

export const newInStore = {
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      image: <ChairImg />,
    },
    {
      image: <BedImg />,
    },
    {
      image: <CupboardImg />,
    },
    {
      image: <LightingImg />,
    },
    {
      image: <Web />,
    }
  ],
};

export const testimonial = {
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
  ]
};
