export const projectsItems = [
  "Análisis y Ciencia de Datos",
  "Automatización",
  "Desarrollo web",
  "Desarrollo móvil",
];

interface PropsProjects {
  id: string;
  category: string;
  title: string;
  description: string;
  company: string;
  image: string;
  alt: string;
  tags: {
    title: string;
  }[];
  linkToLinkedInProject: string;
  linkToGitHubProject: string;
  linkToTableauProject: string;
}
import image1 from "@assets-img/valor_mercado_futbol.webp";
import image2 from "@assets-img/gei.webp";
import image3 from "@assets-img/desempleo_microempresas.webp";
import image4 from "@assets-img/desembolsos_techo_propio.webp";
import image5 from "@assets-img/valorizacion_laboral.webp";
import image6 from "@assets-img/personas_adultas_mayores.webp";
import image7 from "@assets-img/central_llamadas_de_emergencia.webp";
import image8 from "@assets-img/colocaciones_credito.webp";
import image9 from "@assets-img/rfm-model.webp";
import image10 from "@assets-img/amigo_secreto.webp";
import image11 from "@assets-img/pyportfolioanalytics.webp";
import image12 from "@assets-img/pyfinancialanalysis.webp";
import image13 from "@assets-img/dabifly_landing_page.webp";
import image14 from "@assets-img/app_to_find_events_frontend.webp";
import image15 from "@assets-img/app_to_find_events_backend.webp";
import image16 from "@assets-img/gym24.webp";
import image17 from "@assets-img/movie-platform.webp";
import image18 from "@assets-img/home_tasks.webp";
import image19 from "@assets-img/app-expenses-tracker.webp";
import image20 from "@assets-img/app_asistencias.webp";
import image21 from "@assets-img/app_analytics.webp";

export const projects: PropsProjects[] = [
  {
    id: "1",
    category: "Análisis y Ciencia de Datos",
    title:
      "Comparativa del valor de mercado entre la selección argentina y peruana de fútbol",
    description:
      "¿Sabías que el XI inicial de la selección argentina en la Fecha 2 de la Copa América 2024 vale 29 veces más que el XI inicial de Perú? ⚽💰 Te adelanto algunos datos interesantes: el XI inicial argentino tiene un valor de mercado de €504 millones 💸, mientras que el de Perú es de €17.5 millones.",
    company: "Selección Peruana de Fútbol",
    image: image1.src,
    alt: "Stat image of Market Value between the Argentine and Peruvian soccer teams.",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Excel",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_sab%C3%ADas-que-el-xi-inicial-de-la-selecci%C3%B3n-activity-7212526186885722112-02_K?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Web-scraping-Valor-de-Mercado-Futbol-Peru",
    linkToTableauProject: "",
  },
  {
    id: "2",
    category: "Análisis y Ciencia de Datos",
    title: "Emisiones de gases de efecto invernadero por sector en el Perú",
    description:
      "La agricultura, silvicultura y otros usos de la tierra han multiplicado por cuatro sus emisiones de Gases de Efecto Invernadero (GEI) en el siglo XXI. Le sigue el sector de procesos industriales y usos de productos, con un aumento del 167% en el mismo periodo.",
    company: "Ministerio del Ambiente | Perú",
    image: image2.src,
    alt: "Stat image of Greenhouse Gass Emissions by Sector in Peru.",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Excel",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_la-agricultura-silvicultura-y-otros-usos-activity-7204629185439350784-jqY9?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
  {
    id: "3",
    category: "Análisis y Ciencia de Datos",
    title: "Relación entre la tasa de desempleo y el % de microempresas 2021",
    description:
      "El análisis efectuado tiene como resultado que cuanto mayor sea la proporción de microempresas en el sector con respecto al universo empresarial menor será la tasa de desempleo. Dato Importante: 📊 En conjunto, las MIPYME representan el 99.5% de todas las empresas en América Latina y contribuyen al 25% del PBI (Banco Mundial).",
    company: "Produce - Base Tejido Empresarial Provincial | Perú",
    image: image3.src,
    alt: "Stat image of Inverse Relationship between Unemployment Rate and Microenterprises in Peru.",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Excel",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_microempresas-dataanalyst-datavisualization-activity-7053222120700436480-y7hv?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
  {
    id: "4",
    category: "Análisis y Ciencia de Datos",
    title: "Desembolsos del Programa Techo Propio 2022",
    description:
      "¿Te has preguntado cuántos sueños de vivienda se hicieron realidad en el año 2022? 📊 Durante el año 2022, se han otorgado alrededor de S/. 1,273 millones en Bonos Familiares Habitacionales (BFH) derivados del Programa Techo Propio del Fondo Mi Vivienda. ¡38,000 bonos emitidos!",
    company: "Programa Techo Propio del Fondo Mi Vivienda | Perú",
    image: image4.src,
    alt: "Stat image of Program Disbursement Techo Propio in Peru.",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Excel",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_datavisualization-datosabiertos-activity-7123662130230259712-YQlT?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
  {
    id: "5",
    category: "Análisis y Ciencia de Datos",
    title: "Valorización de días de descanso por accidentes laborales",
    description:
      "Estimo que el monto perdido destinado al descanso del colaborador por accidente laboral asciende la cifra de S/ 3.2MM en el periodo Jun22 - Abr23. El tipo de accidente más frecuente es la caída de personas (16% del total) y el agente causante es el ambiente de trabajo (18% del total). El turno de trabajo con más accidentes laborales es el periodo diurno.",
    company: "Ministerio de Trabajo y Promoción del Empleo | Perú",
    image: image5.src,
    alt: "Stat image of work accidents in Peru",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Tableau",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_expraezsateperaeqcondatos-seguridadlaboral-activity-7101964162301341696-em0v?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Dataton-Expresate-Peru-Con-Datos/tree/main",
    linkToTableauProject:
      "https://public.tableau.com/app/profile/sebastian.marat.urdanegui.bisalaya/viz/ValorizacindeDasdeDescansodelosAccidentesdeTrabajo/Historia1",
  },
  {
    id: "6",
    category: "Análisis y Ciencia de Datos",
    title: "Personas adultas mayores",
    description:
      "Descubrí que las personas mayores en el distrito de Lurín en su mayoría son del género femenino, son casados, tienen entre 3 y 6 hijos, cuentan con SIS, no tienen trabajo y el 16% de las",
    company: "Municipalidad Distrital de Lurín | Perú",
    image: image6.src,
    alt: "Stat image of older adults in Lurin, Peru",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Tableau",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/feed/update/urn:li:activity:7083195477566861313?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Dataton-Expresate-Peru-Con-Datos/tree/main",
    linkToTableauProject:
      "https://public.tableau.com/app/profile/sebastian.marat.urdanegui.bisalaya/viz/PersonasAdultasMayoresenelDistritodeLurn/Historia1",
  },
  {
    id: "7",
    category: "Análisis y Ciencia de Datos",
    title: "Central de llamadas de emergencia",
    description:
      "La tasa de delitos de la Municipalidad de Ventanilla en el primer semestre de 2022 es del 0.48%. Encontré un total de 56,874 casos reportados a la central y 5,842 personas",
    company: "Municipalidad de Ventanilla | Perú",
    image: image7.src,
    alt: "Stat image of emergency call center",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Tableau",
      },
      {
        title: "Excel",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_tableaupublic-datosabiertos-pnda-activity-7020249376182697984-TcxV?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject: "",
    linkToTableauProject:
      "https://public.tableau.com/app/profile/sebastian.marat.urdanegui.bisalaya/viz/CentraldeLlamadasdeEmergenciadelaMunicipalidaddeVentanillaPer/Historia",
  },
  {
    id: "8",
    category: "Análisis y Ciencia de Datos",
    title: "Colocaciones de créditos",
    description:
      "¿Sabías que, en el caso del Nuevo Crédito Mivivienda entre 2018 y 2022, la cuota inicial promedio en el departamento de Huánuco es 4 veces mayor que la cuota inicial promedio en Madre de Dios?",
    company: "Fondo Mivivienda | Perú",
    image: image8.src,
    alt: "Stat image of placement credits",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Tableau",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_per%C3%BA-colocaciones-de-cr%C3%A9dito-mivivienda-activity-7143022394557755393-XrGo?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Colocaciones-de-Credito-Fondo-Mivivienda-Peru/tree/master",
    linkToTableauProject: "",
  },
  {
    id: "9",
    category: "Automatización",
    title: "Segmentación RFM",
    description:
      "Librería en Python para entender el comportamiento de los clientes, indentificar los segmentos clave y diseñar estrategias de marketing.",
    company: "Marketing Analytics",
    image: image9.src,
    alt: "Stat image of Secret Friend to Christmas gift automated system.",
    tags: [
      {
        title: "Python",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_segmentaci%C3%B3n-rfm-activity-7098483714757664768-PHlL?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Segmentacion-RFM",
    linkToTableauProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Segmentacion-RFM?tab=readme-ov-file",
  },
  {
    id: "10",
    category: "Automatización",
    title: "Amigo secreto",
    description:
      "Sistema automatizado para la asignación aleatoria del amigo secreto navideño mediante el envío de correos personalizados en Python.",
    company: "Época Navideña",
    image: image10.src,
    alt: "Stat image of Secret Friend to Christmas gift automated system.",
    tags: [
      {
        title: "Python",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_amigosecreto-python-automatizaciaejn-activity-7131294949731377153-DLm6?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
  {
    id: "11",
    category: "Automatización",
    title: "pyportfolioanalytics",
    description:
      "Agiliza el análisis financiero, ofreciendo reportes y gráficos sobre precio, rendimiento, volatilidad y distribución.",
    company: "Finanzas",
    image: image11.src,
    alt: "Stat image of pyportfolioanalytics library in Python.",
    tags: [
      {
        title: "Python",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_analisisfinanciero-innovacion-python-activity-7064811578323296256-sV6L?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/py-portfolioanalytics",
    linkToTableauProject:
      "https://github.com/SebastianUrdaneguiBisalaya/py-portfolioanalytics/blob/master/README.md",
  },
  {
    id: "12",
    category: "Automatización",
    title: "pyFinancialAnalysis",
    description:
      "Librería de Python para análisis financiero: gráficos, tableros estadísticos para decisiones informadas.",
    company: "Finanzas",
    image: image12.src,
    alt: "Image to show the pyFinancialAnalysis library in Python.",
    tags: [
      {
        title: "Python",
      },
      {
        title: "Tableau",
      },
    ],
    linkToLinkedInProject:
      "https://www.linkedin.com/posts/sebastianurdaneguibisalaya_anaerlisis-python-pyfinancialanalysis-activity-7016080403874611200-dJv8?utm_source=share&utm_medium=member_desktop",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/pyFinancialAnalysis",
    linkToTableauProject:
      "https://medium.com/@sebasurdanegui/c%C3%B3mo-realizar-un-an%C3%A1lisis-financiero-en-python-e7405a5f95d",
  },
  {
    id: "13",
    category: "Desarrollo web",
    title: "Presentación de solución digital para la gestión escolar",
    description:
      "Revoluciona la gestión escolar con una solución digital que simplifica y moderniza tus procesos. Nuestra solución digital ha sido diseñada para transformar la manera en que las escuelas se organizan y se comunican entre padres de familia, alumnos y docentes.",
    company: "Dabifly",
    image: image13.src,
    alt: "Image of Dabifly Landing Page.",
    tags: [
      {
        title: "Astro",
      },
      {
        title: "HTML & CSS",
      },
      {
        title: "TailwindCSS",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject: "",
    linkToTableauProject: "https://dabifly.vercel.app/",
  },
  {
    id: "14",
    category: "Desarrollo web",
    title: "Aplicación web para encontrar eventos en la ciudad",
    description:
      "Muchas personas en todo el mundo sufren la falta de acceso a información sobre los acontecimientos que suceden en su zona. Este es un problema que queremos solucionar con nuestra idea.",
    company: "Entretenimiento",
    image: image14.src,
    alt: "Image of Find Events app.",
    tags: [
      {
        title: "Vercel",
      },
      {
        title: "React",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "Typescript",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events",
    linkToTableauProject: "https://apptofindevents.vercel.app",
  },
  {
    id: "15",
    category: "Desarrollo web",
    title: "Backend para encontrar eventos en la ciudad",
    description:
      "Muchas personas en todo el mundo sufren la falta de acceso a información sobre los acontecimientos que suceden en su zona. Este es un problema que queremos solucionar con nuestra idea.",
    company: "Entretenimiento",
    image: image15.src,
    alt: "Image of Backend Code for Find Events app.",
    tags: [
      {
        title: "Render",
      },
      {
        title: "Express.js",
      },
      {
        title: "Typescript",
      },
      {
        title: "Supabase",
      },
      {
        title: "Prisma",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events-Backend",
    linkToTableauProject:
      "https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events-Backend",
  },
  {
    id: "16",
    category: "Desarrollo web",
    title: "Landing page para gimnasios",
    description: "",
    company: "Gym24",
    image: image16.src,
    alt: "Image of Frontend Code for Gym24 landing page.",
    tags: [
      {
        title: "Astro",
      },
      {
        title: "HTML & CSS",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "Typescript",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/gym-landing-page",
    linkToTableauProject: "https://gotothegym24.vercel.app",
  },
  {
    id: "17",
    category: "Desarrollo web",
    title: "Plataforma de streaming de películas y series",
    description: "",
    company: "Entretenimiento",
    image: image17.src,
    alt: "Image of Movie Plataform Application.",
    tags: [
      {
        title: "Vercel",
      },
      {
        title: "React",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "Typescript",
      },
      {
        title: "API's",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/Movie-Streaming-Platform",
    linkToTableauProject: "https://movie-streaming-platform-rho.vercel.app/",
  },
  {
    id: "18",
    category: "Desarrollo web",
    title: "ToDo List App",
    description: "",
    company: "Organización y planificación",
    image: image18.src,
    alt: "Image of ToDo List Application.",
    tags: [
      {
        title: "Vercel",
      },
      {
        title: "HTML & CSS",
      },
      {
        title: "Javascript",
      },
      {
        title: "Local Storage",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/1-project-task-manager-app-scrum",
    linkToTableauProject: "https://mytaski.vercel.app/",
  },
  {
    id: "19",
    category: "Desarrollo web",
    title: "App de seguimiento de gastos",
    description: "",
    company: "Finanzas personales",
    image: image19.src,
    alt: "Image of Expense Tracker Application.",
    tags: [
      {
        title: "Vercel",
      },
      {
        title: "HTML & CSS",
      },
      {
        title: "Javascript",
      },
      {
        title: "Local Storage",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject:
      "https://github.com/SebastianUrdaneguiBisalaya/4-project-app-tracking-expenses-sprint-2",
    linkToTableauProject: "https://tracking-expenses-app.vercel.app/",
  },
  {
    id: "20",
    category: "Desarrollo móvil",
    title: "App de asistencias escolares",
    description: "",
    company: "Educación y Tecnología",
    image: image20.src,
    alt: "Image of Attendances Management School Application.",
    tags: [
      {
        title: "Expo",
      },
      {
        title: "React Native",
      },
      {
        title: "TypeScript",
      },
      {
        title: "Supabase",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
  {
    id: "21",
    category: "Desarrollo móvil",
    title: "App de registro de entradas y salidas de productos",
    description: "",
    company: "Sector Productivo",
    image: image21.src,
    alt: "Image of inputs and outputs of products.",
    tags: [
      {
        title: "Google AppSheet",
      },
      {
        title: "App NoCode",
      },
      {
        title: "Google Sheets",
      },
    ],
    linkToLinkedInProject: "",
    linkToGitHubProject: "",
    linkToTableauProject: "",
  },
];
