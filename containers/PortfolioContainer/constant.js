import ManageMobileImage from "@/assets/images/portfolio/mobile/image-portfolio-manage.jpg";
import ManageTabletImage from "@/assets/images/portfolio/tablet/image-portfolio-manage.jpg";
import ManageDesktopImage from "@/assets/images/portfolio/desktop/image-portfolio-manage.jpg";

import BookmarkMobileImage from "@/assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";
import BookmarkTabletImage from "@/assets/images/portfolio/tablet/image-portfolio-bookmark.jpg";
import BookmarkDesktopImage from "@/assets/images/portfolio/desktop/image-portfolio-bookmark.jpg";

import InsureMobileImage from "@/assets/images/portfolio/mobile/image-portfolio-insure.jpg";
import InsureTabletImage from "@/assets/images/portfolio/tablet/image-portfolio-insure.jpg";
import InsureDesktopImage from "@/assets/images/portfolio/desktop/image-portfolio-insure.jpg";

import FyloeMobileImage from "@/assets/images/portfolio/mobile/image-portfolio-fylo.jpg";
import FyloTabletImage from "@/assets/images/portfolio/tablet/image-portfolio-fylo.jpg";
import FyloDesktopImage from "@/assets/images/portfolio/desktop/image-portfolio-fylo.jpg";

export const CARDS_INFO = [
  {
    id: 0,
    title: "Manage",
    path: "/portfolio/manage",
    content:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    buttonTitle: "View Project",
    images: {
      mobile: ManageMobileImage,
      tablet: ManageTabletImage,
      desktop: ManageDesktopImage,
    },
  },
  {
    id: 1,
    title: "Bookmark",
    path: "/portfolio/bookmark",
    content:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    buttonTitle: "View Project",
    images: {
      mobile: BookmarkMobileImage,
      tablet: BookmarkTabletImage,
      desktop: BookmarkDesktopImage,
    },
  },
  {
    id: 2,
    title: "Insure",
    path: "/portfolio/insure",
    content:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    buttonTitle: "View Project",
    images: {
      mobile: InsureMobileImage,
      tablet: InsureTabletImage,
      desktop: InsureDesktopImage,
    },
  },
  {
    id: 3,
    title: "Fylo",
    path: "/portfolio/fylo",
    content:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    buttonTitle: "View Project",
    images: {
      mobile: FyloeMobileImage,
      tablet: FyloTabletImage,
      desktop: FyloDesktopImage,
    },
  },
];
