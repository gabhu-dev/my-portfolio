import ProyectFirst from "../assets/images/proyect-landing.png";
import ProyectFirstResponsive from "../assets/images/proyect-landing-responsive.png";
// Importa otros iconos si es necesario, por ejemplo de @lucide/astro
// import { Code, Globe } from "@lucide/astro";

export interface Tag {
  icon: any; // O string si prefieres nombres de iconos
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  link: string;
  image: ImageMetadata;
  description: string;
  tags: Tag[];
  responsiveImage: {
    link: ImageMetadata;
    responsive: boolean;
  };
}

export const PROYECTS_DATA: Project[] = [
  {
    slug: "landing-dennky",
    title: "LANDING DENNKY",
    link: "https://dennky.com",
    image: ProyectFirst,
    description: "Laboratorio de fluidos dieléctricos y lubricantes. Somos una empresa que realiza servicios de muestreo, análisis de fluidos dieléctricos y de aceites lubricantes.",
    tags: [
      { icon: "Code", label: "Astro" },
      { icon: "Layout", label: "Tailwind" },
    ],
    responsiveImage: {
      link: ProyectFirstResponsive,
      responsive: true,
    },
  },
];
