import { useState } from "react";
import "../styles/styles.css";
import { projects, projectsItems } from "@constants/projectsItems";
import CardProjects from "@components/CardProjects";
import TagProjects from "@components/TagProjects";

export default function Projects() {
  const [filterTag, setFilterTag] = useState<string | null>("Análisis y Ciencia de Datos");	
  const filteredProjects = filterTag
    ? projects.filter((project) => project.category === filterTag)
    : projects.filter((project) => project.category === projectsItems[0]);
  return (
    <>
      <div className="flex flex-row gap-4 justify-start items-center w-full overflow-x-scroll snap-proximity snap-x hidden-scroll">
        {projectsItems.map((projectTag) => (
          <TagProjects key={projectTag} title={projectTag} setFilterTag={setFilterTag} filterTag={filterTag} />
        ))}
      </div>
      <div className="flex flex-row justify-start items-stretch w-full overflow-x-scroll snap-proximity snap-x hidden-scroll">
        {filteredProjects.map((project) => (
          <CardProjects
            key={project.id}
            title={project.title}
            description={project.description}
            company={project.company}
            image={project.image}
            alt={project.alt}
            tags={project.tags}
            linkToLinkedInProject={project.linkToLinkedInProject}
            linkToGitHubProject={project.linkToGitHubProject}
            linkToTableauProject={project.linkToTableauProject}
          />
        ))}
      </div>
    </>
  );
}

