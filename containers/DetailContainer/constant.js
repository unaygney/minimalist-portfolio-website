import HeroManageMobile from "@/assets/images/detail/mobile/image-manage-hero.jpg";
import HeroManageTablet from "@/assets/images/detail/tablet/image-manage-hero.jpg";
import HeroManageDesktop from "@/assets/images/detail/desktop/image-manage-hero.jpg";

import HeroBookmarkMobile from "@/assets/images/detail/mobile/image-bookmark-hero.jpg";
import HeroBookmarkTablet from "@/assets/images/detail/tablet/image-bookmark-hero.jpg";
import HeroBookmarkDesktop from "@/assets/images/detail/desktop/image-bookmark-hero.jpg";

import HeroInsureMobile from "@/assets/images/detail/mobile/image-insure-hero.jpg";
import HeroInsureTablet from "@/assets/images/detail/tablet/image-insure-hero.jpg";
import HeroInsureDesktop from "@/assets/images/detail/desktop/image-insure-hero.jpg";

import HeroFyloMobile from "@/assets/images/detail/mobile/image-fylo-hero.jpg";
import HeroFyloTablet from "@/assets/images/detail/tablet/image-fylo-hero.jpg";
import HeroFyloDesktop from "@/assets/images/detail/desktop/image-fylo-hero.jpg";

import PrevManageMobile1 from "@/assets/images/detail/mobile/image-manage-preview-1.jpg";
import PrevManageTablet1 from "@/assets/images/detail/mobile/image-manage-preview-1.jpg";
import PrevManageDesktop1 from "@/assets/images/detail/mobile/image-manage-preview-1.jpg";
import PrevManageMobile2 from "@/assets/images/detail/mobile/image-manage-preview-2.jpg";
import PrevManageTablet2 from "@/assets/images/detail/mobile/image-manage-preview-2.jpg";
import PrevManageDesktop2 from "@/assets/images/detail/mobile/image-manage-preview-2.jpg";

export const PROJECTS = [
  {
    id: 0,
    name: "manage",
    manageDescription:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    usedTechnologies: "HTML/CSS/JS",
    backgroundDescription:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    heroImg: {
      mobile: HeroManageMobile,
      tablet: HeroManageTablet,
      desktop: HeroManageDesktop,
    },
    previewsImg1: {
      mobile: PrevManageMobile1,
      tablet: PrevManageTablet1,
      desktop: PrevManageDesktop1,
    },
    previewsImg2: {
      mobile: PrevManageMobile2,
      tablet: PrevManageTablet2,
      desktop: PrevManageDesktop2,
    },
  },
  {
    id: 1,
    name: "bookmark",
    manageDescription:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    usedTechnologies: "HTML/CSS/JS",
    backgroundDescription:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    heroImg: {
      mobile: HeroBookmarkMobile,
      tablet: HeroBookmarkTablet,
      desktop: HeroBookmarkDesktop,
    },
  },
  {
    id: 2,
    name: "insure",
    manageDescription:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    usedTechnologies: "HTML/CSS/JS",
    backgroundDescription:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    heroImg: {
      mobile: HeroInsureMobile,
      tablet: HeroInsureTablet,
      desktop: HeroInsureDesktop,
    },
  },
  {
    id: 3,
    name: "fylo",
    manageDescription:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    usedTechnologies: "HTML/CSS",
    backgroundDescription:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    heroImg: {
      mobile: HeroFyloMobile,
      tablet: HeroFyloTablet,
      desktop: HeroFyloDesktop,
    },
  },
];
