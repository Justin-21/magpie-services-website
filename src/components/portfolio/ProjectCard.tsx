import Image from "next/image";
import { imageUrl, projects } from "@/data/site";

export default function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article
      className="relative isolate aspect-4/3 overflow-hidden rounded-lg after:absolute after:inset-0 after:bg-[linear-gradient(transparent_35%,#000d)]"
      style={{ backgroundColor: project.color }}
    >
      <Image
        src={imageUrl(project.image)}
        alt=""
        fill
        sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 grid gap-1 p-[clamp(14px,2vw,24px)] text-white">
        <h3 className="text-[clamp(16px,1.9vw,24px)] leading-[1.15]! font-bold">{project.title}</h3>
        <p className="text-xs">{project.discipline}</p>
      </div>
    </article>
  );
}
