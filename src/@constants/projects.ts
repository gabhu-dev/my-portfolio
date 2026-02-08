import ProjectLanding from "../assets/images/proyect-landing.png";
import ProjectLandingResponsive from "../assets/images/proyect-landing-responsive.png";

import ProjectTicker from "../assets/images/proyect-ticker.png";
import ProjectTickerResponsive from "../assets/images/proyect-ticker-responsive.png";

import ProjectDennky from "../assets/images/proyect-dennky.png";
import ProjectDennkyDuval from "../assets/images/proyect-dennky-2.png";

import ProjectTodoApp from "../assets/images/proyect-todo-app.png";

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
  responsiveImage?: {
    title?: string;
    description?: string;
    link: ImageMetadata;
    responsive: boolean;
  };
}

export const PROJECTS_DATA: Project[] = [
    {
    slug: "ticker",
    title: 'Ticker Web App',
    titlePage: "TICKER WEB APP",
    link: "https://app.beexconv.com/login",
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
    link: "https://app.dennky.com/",
    image: ProjectDennky,
    description: "<span class='font-semibold'>Dennky</span> es una plataforma web desarrollada para un laboratorio, enfocada en <span class='font-semibold'>gestionar reportes y servicios de análisis clínicos</span> de manera clara y accesible para los clientes.<br><br>Mi participación en el proyecto incluyó:<br><br>• 🎨 Diseño de interfaces adaptadas a los requerimientos del laboratorio y sus clientes, garantizando una experiencia visual moderna y funcional.<br>• 💻 Construcción del frontend, asegurando una navegación responsiva y una interacción fluida.<br>• 📊 Desarrollo de una <span class='font-semibold'>librería personalizada de gráficos de Duval</span>, que permite representar resultados de análisis de forma precisa y comprensible.<br>• ⚡ Implementación de actualizaciones en tiempo real, mejorando la comunicación y la eficiencia en la entrega de información.<br><br>El impacto logrado fue una plataforma que <span class='font-semibold'>optimiza la gestión de reportes, facilita la interpretación de resultados y mejora la interacción con los clientes</span>, consolidando la presencia digital del laboratorio 🚀.",
    tags: [
      { icon: CodeIcon, label: "Vue 3" },
      { icon: CodeIcon, label: "TS" },
      { icon: CodeIcon, label: "Vite" },
      { icon: CodeIcon, label: "Ant Design Vue" },
      { icon: CodeIcon, label: "Canvas" },
      { icon: CodeIcon, label: "Socket.io" },
      { icon: CodeIcon, label: "Axios" },
      { icon: BrushIcon, label: "Sass" },
      { icon: BrushIcon, label: "Desktop Design" },
      { icon: FigmaIcon, label: "Figma" },
    ],
    responsiveImage: {
      title: "Gráficos de Duval",
      description: "Los gráficos son una herramienta esencial en la interpretación de análisis de gases disueltos en aceite para transformadores. Implementé una visualización interactiva que permite a los técnicos identificar fallas de manera rápida y precisa, donde <span class='font-semibold'>todos los gráficos fueron construidos en base a fórmulas matemáticas</span> para garantizar la exactitud de los resultados.",
      link: ProjectDennkyDuval,
      responsive: false,
    },
  },
  {
    slug: "todo-list",
    title: 'Todo List',
    titlePage: "TODO List",
    link: "https://todo-app-six-orcin-98.vercel.app/",
    image: ProjectTodoApp,
    description: "El objetivo principal de esta aplicación es proporcionar una herramienta intuitiva y rápida para que los usuarios puedan organizar sus tareas pendientes, mejorando su productividad personal mediante una interfaz limpia y funcional.<br><br>Funcionalidades principales:<br><br>• ✅ Gestión completa de tareas: Crear, editar, marcar como completadas y eliminar tareas.<br>• Organización por estados: Visualización de tareas organizadas por su estado actual.<br>• Drag and Drop: Reorganización intuitiva mediante la funcionalidad de arrastrar y soltar.<br>• 🔍 Filtrado avanzado: Buscador de tareas y filtros por tipos.<br><br>Además, el proyecto utiliza <span class='font-semibold'>MockAPI.io</span> para simular una API REST real, permitiendo operaciones CRUD de forma persistente 🚀.",
    tags: [
      { icon: CodeIcon, label: "Vue 3" },
      { icon: CodeIcon, label: "Vite" },
      { icon: CodeIcon, label: "TS" },
      { icon: PaletteIcon, label: "Tailwind" },
      { icon: CodeIcon, label: "Pinia" },
      { icon: CodeIcon, label: "Axios" },
      { icon: FigmaIcon, label: "Figma" },
    ],
  },
];
