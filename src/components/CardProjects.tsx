interface Props {
  title: string;
  company: string;
  description: string;
  image: string;
  alt: string;
  tags: {
    title: string;
  }[];
  linkToLinkedInProject: string;
  linkToGitHubProject: string;
  linkToTableauProject: string;
}
import TagProgrammingLanguage from "@components/TagProgrammingLanguage";
import linkedinIcon from "@svg-icons/linkedin.svg";
import githubIcon from "@svg-icons/github.svg";

export default function CardProjects({title,
  description,
  company,
  image,
  alt,
  tags,
  linkToLinkedInProject,
  linkToGitHubProject,
  linkToTableauProject}: Props) {
  return (
  <div
  className="max-w-80 h-full flex flex-col justify-center items-center gap-4 p-6"
>
  <a
    className={`flex justify-center items-center w-64 h-56 rounded-2xl ${linkToTableauProject !== "" ? "cursor-pointer" : ""}`}
    href={linkToTableauProject || undefined}
    target={linkToTableauProject ? "_blank" : undefined}
    onClick={(event) => {
      if (linkToTableauProject === "") {
        event.preventDefault()
      }
    }}
  >
    <img
      src={image}
      alt={alt}
      className={`w-full h-full rounded-2xl bg-cover ${linkToTableauProject !== "" ? "transition-transform duration-300 hover:scale-110" : ""}`}
    />
  </a>
  <p className="text-lg sm:text-xl font-bold text-left w-full">{title}</p>
  <p className="text-txt-custom-gray text-xs text-left w-full">
    {company}
  </p>
  <p className="text-sm sm:text-base line-clamp-5">{description}</p>
  <div className="flex flex-row flex-wrap gap-2 justify-start items-center w-full">
    {tags.map((tag) => <TagProgrammingLanguage key={tag.title} {...tag} />)}
  </div>
  <div className="flex flex-row gap-2 justify-start items-center w-full">
    {
      linkToLinkedInProject && linkToLinkedInProject !== "" && (
        <a
          className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
          href={linkToLinkedInProject}
          target="_blank"
        >
          <img
            src={linkedinIcon.src}
            alt="LinkedIn Profile"
            className="w-full h-full"
          />
        </a>
      )
    }
    {
      linkToGitHubProject && linkToGitHubProject !== "" && (
        <a
          className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
          href={linkToGitHubProject}
          target="_blank"
        >
          <img
            src={githubIcon.src}
            alt="GitHub Profile"
            className="w-full h-full"
          />
        </a>
      )
    }
  </div>
</div>

  )
}