import ProjectLanding from "../assets/images/proyect-landing.png";
import ProjectLandingResponsive from "../assets/images/proyect-landing-responsive.png";

import ProjectTicker from "../assets/images/proyect-ticker.png";
import ProjectTickerResponsive from "../assets/images/proyect-ticker-responsive.png";

import ProjectDennky from "../assets/images/proyect-dennky.png";
import ProjectDennkyDuval from "../assets/images/proyect-dennky-2.png";

import { FigmaIcon, PencilIcon } from "@lucide/astro";

export interface Tag {
  icon: any; // O string si prefieres nombres de iconos
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  titlePage: string;
  link: string;
  image: ImageMetadata;
  description: string;
  tags: Tag[];
  responsiveImage: {
    link: ImageMetadata;
    responsive: boolean;
  };
}

export const PROJECTS_DATA: Project[] = [
    {
    slug: "ticker",
    title: 'Ticker Web App',
    titlePage: "TICKER WEB APP",
    link: "https://dennky.com",
    image: ProjectTicker,
    description: "Laboratorio de fluidos dieléctricos y lubricantes. Somos una empresa que realiza servicios de muestreo, análisis de fluidos dieléctricos y de aceites lubricantes.",
    tags: [
      { icon: FigmaIcon, label: "Figma" },
      { icon: PencilIcon, label: "Tailwind" },
    ],
    responsiveImage: {
      link: ProjectTickerResponsive,
      responsive: true,
    },
  },
  {
    slug: "landing-dennky",
    title: 'Landing Dennky',
    titlePage: "LANDING DENNKY",
    link: "https://dennky.com",
    image: ProjectLanding,
    description: "Laboratorio de fluidos dieléctricos y lubricantes. Somos una empresa que realiza servicios de muestreo, análisis de fluidos dieléctricos y de aceites lubricantes.",
    tags: [
      { icon: FigmaIcon, label: "Figma" },
      { icon: PencilIcon, label: "Tailwind" },
    ],
    responsiveImage: {
      link: ProjectLandingResponsive,
      responsive: true,
    },
  },
    {
    slug: "dennky",
    title: 'Dennky Web',
    titlePage: "DENNKY",
    link: "https://dennky.com",
    image: ProjectDennky,
    description: "Laboratorio de fluidos dieléctricos y lubricantes. Somos una empresa que realiza servicios de muestreo, análisis de fluidos dieléctricos y de aceites lubricantes.",
    tags: [
      { icon: FigmaIcon, label: "Figma" },
      { icon: PencilIcon, label: "Tailwind" },
    ],
    responsiveImage: {
      link: ProjectDennkyDuval,
    },
  },
];
