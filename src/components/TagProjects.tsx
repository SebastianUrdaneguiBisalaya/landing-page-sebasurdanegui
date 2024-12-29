export default function TagProjects({title, setFilterTag, filterTag}: {title: string, setFilterTag: (title: string | null) => void, filterTag: string | null}) {
  return (
    <span
      id="tag-projects"
      onClick={() => setFilterTag(title)}
      className={`text-txt-custom-gray text-sm sm:text-base border-gray-custom border-2 p-3 rounded-2xl cursor-pointer min-w-fit snap-center ${filterTag === title ? "border-2 border-white text-white font-bold" : ""}`}
    >
      {title}
    </span>
  );
}
