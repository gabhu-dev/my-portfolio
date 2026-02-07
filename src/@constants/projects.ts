import ProjectLanding from "../assets/images/proyect-landing.png";
import ProjectLandingResponsive from "../assets/images/proyect-landing-responsive.png";

import ProjectTicker from "../assets/images/proyect-ticker.png";
import ProjectTickerResponsive from "../assets/images/proyect-ticker-responsive.png";

import ProjectDennky from "../assets/images/proyect-dennky.png";
import ProjectDennkyDuval from "../assets/images/proyect-dennky-2.png";

import { FigmaIcon, PencilIcon, CodeIcon, BrushIcon, PaletteIcon } from "@lucide/astro";

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
    description: "Ticker es un <span class='font-semibold'>SAAS web omnicanal</span> diseñada para facilitar la comunicación entre empresas y clientes a través de múltiples canales en un solo lugar 🌐.<br><br>Durante mi participación en el proyecto:<br><br>• ✨ Diseñé y prototipé nuevas vistas, aportando a la identidad visual y a la experiencia del usuario.<br>• 🤝 Colaboré con equipos multidisciplinarios para optimizar la interacción y lograr una experiencia más fluida.<br>• 💬 Implementé funcionalidades que permiten conversaciones en tiempo real entre usuarios y clientes.<br>• 🗂️ Transformé la aplicación en una experiencia adaptable y moderna, integrando principios de accesibilidad y diseño visual.<br><br>Ticker se consolidó como una solución práctica y atractiva, enfocada en mejorar la comunicación y la experiencia del usuario en entornos digitales 🚀.",
    tags: [
      { icon: CodeIcon, label: "Vue 2" },
      { icon: CodeIcon, label: "JS" },
      { icon: CodeIcon, label: "Ant Design Vue" },
      { icon: CodeIcon, label: "Socket.io" },
      { icon: CodeIcon, label: "Axios" },
      { icon: BrushIcon, label: "Sass" },
      { icon: BrushIcon, label: "Responsive Design" },
      { icon: FigmaIcon, label: "Figma" },
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
    description: "La landing fue creada como la página oficial de un laboratorio, con el objetivo de <span class='font-semibold'>presentar de manera clara y atractiva los servicios que ofrecen</span> 🔬.<br><br>En este proyecto me encargué de:<br><br>• 🎨 Diseñar la interfaz, cuidando la identidad visual y la experiencia del usuario.<br>• 🛠️ Construir la landing, asegurando que fuera responsiva y fácil de navegar.<br>• 📲 Integrar un botón de contacto por WhatsApp, lo que permitió que Dennky sea más accesible y que los clientes lleguen directamente a través de este canal.<br><br>El resultado fue una landing page que no solo comunica los servicios del laboratorio de forma efectiva, sino que también <span class='font-semibold'>mejoró la captación de clientes y la facilidad de contacto</span> 🚀.",
    tags: [
      { icon: CodeIcon, label: "Nuxt" },
      { icon: CodeIcon, label: "Vite" },
      { icon: CodeIcon, label: "TS" },
      { icon: BrushIcon, label: "Sass" },
      { icon: PaletteIcon, label: "Tailwind" },
      { icon: BrushIcon, label: "Responsive Design" },
      { icon: FigmaIcon, label: "Figma" },
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
