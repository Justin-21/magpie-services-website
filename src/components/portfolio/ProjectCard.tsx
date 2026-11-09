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
      onClick={onOpen}
      aria-label={`View ${project.title}`}
    >
      <div className="project-image" style={{ backgroundColor: project.color }}>
        <Image
          src={imageUrl(project.image)}
          alt={project.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span className="project-badge">Concept study</span>
        <span className="project-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="project-caption">
        <h3>{project.title}</h3>
        <p>{project.discipline}</p>
      </div>
    </button>
  );
}
