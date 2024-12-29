interface Props {
  title: string;
}

export default function TagProgrammingLanguage({title}: Props) {
  return (
    <span
  className="flex flex-row gap-2 justify-center items-center px-2 py-1 border-gray-custom border-2 rounded-2xl text-txt-custom-gray text-xs"
>
  {title}
</span>

  )
}