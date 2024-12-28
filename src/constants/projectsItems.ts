export const projectsItems = [
  "Análisis y Ciencia de Datos",
  "Automatización",
  "Desarrollo web",
  "Desarrollo móvil",
];

interface PropsProjects {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: {
    image: "python" | "tableau";
    title: string;
    alt: string;
  }[];
}

export const projects: PropsProjects[] = [
  {
    title: "Valorización de días de descanso por accidentes laborales",
    description:
      "Estimo que el monto perdido destinado al descanso del colaborador por accidente laboral asciende la cifra de S/ 3.2MM en el periodo Jun22 - Abr23. El tipo de accidente más frecuente es la caída de personas (16% del total) y el agente causante es el ambiente de trabajo (18% del total). El turno de trabajo con más accidentes laborales es el periodo diurno.",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714165571/Landing%20Page%20Sebastian/accidentesLaborales_bnhat6.jpg",
    alt: "Stat image of work accidents in Peru",
    tags: [
      {
        image: "python",
        title: "Python",
        alt: "Python Logo",
      },
      {
        image: "tableau",
        title: "Tableau",
        alt: "Tableau Logo",
      },
    ],
  },
  {
    title: "Valorización de días de descanso por accidentes laborales",
    description:
      "Estimo que el monto perdido destinado al descanso del colaborador por accidente laboral asciende la cifra de S/ 3.2MM en el periodo Jun22 - Abr23. El tipo de accidente más frecuente es la caída de personas (16% del total) y el agente causante es el ambiente de trabajo (18% del total). El turno de trabajo con más accidentes laborales es el periodo diurno.",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714165571/Landing%20Page%20Sebastian/accidentesLaborales_bnhat6.jpg",
    alt: "Stat image of work accidents in Peru",
    tags: [
      {
        image: "python",
        title: "Python",
        alt: "Python Logo",
      },
      {
        image: "tableau",
        title: "Tableau",
        alt: "Tableau Logo",
      },
    ],
  },
  {
    title: " descanso por accidentes laborales",
    description:
      "Estimo que el monto perdido destinado al descanso del colaborador por accidente laboral asciende la cifra de S/ 3.2MM en el periodo Jun22 - Abr23. El tipo de accidente más frecuente es la caída de personas (16% del total) y el agente causante es el ambiente de trabajo (18% del total). El turno de trabajo con más accidentes laborales es el periodo diurno.",
    image:
      "https://res.cloudinary.com/drzumfcdp/image/upload/v1714165571/Landing%20Page%20Sebastian/accidentesLaborales_bnhat6.jpg",
    alt: "Stat image of work accidents in Peru",
    tags: [
      {
        image: "python",
        title: "Python",
        alt: "Python Logo",
      },
      {
        image: "tableau",
        title: "Tableau",
        alt: "Tableau Logo",
      },
    ],
  },
];
