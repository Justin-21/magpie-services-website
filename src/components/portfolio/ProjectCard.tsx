import Image from "next/image";
import { imageUrl, projects } from "@/data/site";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[number];
  onOpen: () => void;
}) {
  return (
    <button
      className="project-card"
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.title}`}
    >
      <span className="project-image" style={{ backgroundColor: project.color }}>
        <Image
          src={imageUrl(project.image)}
          alt=""
          fill
          sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, 33vw"
        />
        <span className="project-caption">
          <strong>{project.title}</strong>
          <span>{project.discipline}</span>
        </span>
      </span>
    </button>
  );
}
