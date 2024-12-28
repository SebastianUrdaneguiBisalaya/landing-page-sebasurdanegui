export const projectsItems = [
  "Análisis y Ciencia de Datos",
  "Automatización",
  "Desarrollo web",
  "Desarrollo móvil",
];

interface PropsProjects {
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

export const projects: PropsProjects[] = [
  {
    category: "Análisis y Ciencia de Datos",
    title:
      "Comparativa del valor de mercado entre la selección argentina y peruana de fútbol",
    description:
      "¿Sabías que el XI inicial de la selección argentina en la Fecha 2 de la Copa América 2024 vale 29 veces más que el XI inicial de Perú? ⚽💰 Te adelanto algunos datos interesantes: el XI inicial argentino tiene un valor de mercado de €504 millones 💸, mientras que el de Perú es de €17.5 millones.",
    company: "Selección Peruana de Fútbol",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQEq956ES8HK3A/feedshare-shrink_800/feedshare-shrink_800/0/1719600244394?e=1738195200&v=beta&t=FuOQiKo0jprq49-M0PCG4Z0jzu2sGc_I7ovlBsfaPno",
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
    category: "Análisis y Ciencia de Datos",
    title: "Emisiones de gases de efecto invernadero por sector en el Perú",
    description:
      "La agricultura, silvicultura y otros usos de la tierra han multiplicado por cuatro sus emisiones de Gases de Efecto Invernadero (GEI) en el siglo XXI. Le sigue el sector de procesos industriales y usos de productos, con un aumento del 167% en el mismo periodo.",
    company: "Ministerio del Ambiente | Perú",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQHqfA6BYFlT1Q/feedshare-shrink_800/feedshare-shrink_800/0/1717717452676?e=1738195200&v=beta&t=AAJAGyfXHPGMfiZxA4Nki0IFAyDNqXpYE1Eq-yuE8iU",
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
    category: "Análisis y Ciencia de Datos",
    title: "Relación entre la tasa de desempleo y el % de microempresas 2021",
    description:
      "El análisis efectuado tiene como resultado que cuanto mayor sea la proporción de microempresas en el sector con respecto al universo empresarial menor será la tasa de desempleo. Dato Importante: 📊 En conjunto, las MIPYME representan el 99.5% de todas las empresas en América Latina y contribuyen al 25% del PBI (Banco Mundial).",
    company: "Produce - Base Tejido Empresarial Provincial | Perú",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQH-M-ZniPU9WQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1681619195458?e=1738195200&v=beta&t=q2zbYa9rSTtFJPwmsbNXP57LQSkhhqEkCrcwssxVoP0",
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
    category: "Análisis y Ciencia de Datos",
    title: "Desembolsos del Programa Techo Propio 2022",
    description:
      "¿Te has preguntado cuántos sueños de vivienda se hicieron realidad en el año 2022? 📊 Durante el año 2022, se han otorgado alrededor de S/. 1,273 millones en Bonos Familiares Habitacionales (BFH) derivados del Programa Techo Propio del Fondo Mi Vivienda. ¡38,000 bonos emitidos!",
    company: "Programa Techo Propio del Fondo Mi Vivienda | Perú",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQEqa98RLNKVjQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1698378175676?e=1738195200&v=beta&t=v_7Dv4S2Bj_QGJjT0z8RMIII4NWhdtAjrBZjCr2Pp28",
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
    category: "Análisis y Ciencia de Datos",
    title: "Valorización de días de descanso por accidentes laborales",
    description:
      "Estimo que el monto perdido destinado al descanso del colaborador por accidente laboral asciende la cifra de S/ 3.2MM en el periodo Jun22 - Abr23. El tipo de accidente más frecuente es la caída de personas (16% del total) y el agente causante es el ambiente de trabajo (18% del total). El turno de trabajo con más accidentes laborales es el periodo diurno.",
    company: "Ministerio de Trabajo y Promoción del Empleo | Perú",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714165571/Landing%20Page%20Sebastian/accidentesLaborales_bnhat6.jpg",
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
    category: "Análisis y Ciencia de Datos",
    title: "Personas adultas mayores",
    description:
      "Descubrí que las personas mayores en el distrito de Lurín en su mayoría son del género femenino, son casados, tienen entre 3 y 6 hijos, cuentan con SIS, no tienen trabajo y el 16% de las",
    company: "Municipalidad Distrital de Lurín | Perú",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714256501/Landing%20Page%20Sebastian/adultos_mayores-min_lfdeag.png",
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
    category: "Análisis y Ciencia de Datos",
    title: "Central de llamadas de emergencia",
    description:
      "La tasa de delitos de la Municipalidad de Ventanilla en el primer semestre de 2022 es del 0.48%. Encontré un total de 56,874 casos reportados a la central y 5,842 personas",
    company: "Municipalidad de Ventanilla | Perú",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714256578/Landing%20Page%20Sebastian/fondo_mivivienda-min_mfgkxl.png",
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
    category: "Análisis y Ciencia de Datos",
    title: "Colocaciones de créditos",
    description:
      "¿Sabías que, en el caso del Nuevo Crédito Mivivienda entre 2018 y 2022, la cuota inicial promedio en el departamento de Huánuco es 4 veces mayor que la cuota inicial promedio en Madre de Dios?",
    company: "Fondo Mivivienda | Perú",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714256581/Landing%20Page%20Sebastian/central_llamadas-min_b5bfvt.png",
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
    category: "Automatización",
    title: "Segmentación RFM",
    description:
      "Librería en Python para entender el comportamiento de los clientes, indentificar los segmentos clave y diseñar estrategias de marketing.",
    company: "Marketing Analytics",
    image:
      "https://hivemarketingcloud.com/media/zphnp5zi/rfm-analysis-blog-graphic-01.png",
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
    category: "Automatización",
    title: "Amigo secreto",
    description:
      "Sistema automatizado para la asignación aleatoria del amigo secreto navideño mediante el envío de correos personalizados en Python.",
    company: "Época Navideña",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQGC01rXJWAsLQ/feedshare-shrink_800/feedshare-shrink_800/0/1700192488175?e=1738195200&v=beta&t=Ox30pKSPqf-sZ4u1JG84cmiKXfDTG_tR3k5EKicXljI",
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
    category: "Automatización",
    title: "pyportfolioanalytics",
    description:
      "Agiliza el análisis financiero, ofreciendo reportes y gráficos sobre precio, rendimiento, volatilidad y distribución.",
    company: "Finanzas",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQHGzP1ZLnJ0FA/feedshare-shrink_800/feedshare-shrink_800/0/1684382335985?e=1738195200&v=beta&t=mVQx0cgXzu6Q6syJimyultafkz2akPeKLUXM4WNDn6M",
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
    category: "Automatización",
    title: "pyFinancialAnalysis",
    description:
      "Librería de Python para análisis financiero: gráficos, tableros estadísticos para decisiones informadas.",
    company: "Finanzas",
    image:
      "https://media.licdn.com/dms/image/v2/C4E22AQE2-8-OYDcO2Q/feedshare-shrink_800/feedshare-shrink_800/0/1672763919743?e=1738195200&v=beta&t=TS79fskGvcaeHKq9N4Eq2yqpJ1D6Y-EVoB8m7YqmEx4",
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
    category: "Desarrollo web",
    title: "Presentación de solución digital para la gestión escolar",
    description:
      "Revoluciona la gestión escolar con una solución digital que simplifica y moderniza tus procesos. Nuestra solución digital ha sido diseñada para transformar la manera en que las escuelas se organizan y se comunican entre padres de familia, alumnos y docentes.",
    company: "Dabifly",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1735425956/DabiflyProfileUsers/dabifly-lp_qsxdwv.png",
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
    category: "Desarrollo web",
    title: "Aplicación web para encontrar eventos en la ciudad",
    description:
      "Muchas personas en todo el mundo sufren la falta de acceso a información sobre los acontecimientos que suceden en su zona. Este es un problema que queremos solucionar con nuestra idea.",
    company: "Entretenimiento",
    image:
      "https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events/raw/main/img/trendingevents.png",
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
    category: "Desarrollo web",
    title: "Backend para encontrar eventos en la ciudad",
    description:
      "Muchas personas en todo el mundo sufren la falta de acceso a información sobre los acontecimientos que suceden en su zona. Este es un problema que queremos solucionar con nuestra idea.",
    company: "Entretenimiento",
    image:
      "https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events-Backend/raw/main/img/entity-relation-model-db.png",
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
    category: "Desarrollo web",
    title: "Landing page para gimnasios",
    description: "",
    company: "Gym24",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1735424384/gym24/gym24_ssvxle.png",
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
    category: "Desarrollo web",
    title: "Plataforma de streaming de películas y series",
    description: "",
    company: "Entretenimiento",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1735424306/Landing%20Page%20Sebastian/movie-platform_tcvymp.png",
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
    category: "Desarrollo web",
    title: "ToDo List App",
    description: "",
    company: "Organización y planificación",
    image:
      "https://github.com/SebastianUrdaneguiBisalaya/1-project-task-manager-app-scrum/raw/main/assets/img/home%20tasks.png",
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
    category: "Desarrollo web",
    title: "App de seguimiento de gastos",
    description: "",
    company: "Finanzas personales",
    image:
      "https://github.com/SebastianUrdaneguiBisalaya/4-project-app-tracking-expenses-sprint-2/raw/main/assets/Expenses%20Tracking%20App.png",
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
    category: "Desarrollo móvil",
    title: "App de asistencias escolares",
    description: "",
    company: "Educación y Tecnología",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1733813205/DabiflyProfileUsers/dabifly_docentes_landing_page_bity6y.png",
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
    category: "Desarrollo móvil",
    title: "App de registro de entradas y salidas de productos",
    description: "",
    company: "Sector Productivo",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1735426736/Landing%20Page%20Sebastian/app-analytics_vuxhdw.png",
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
