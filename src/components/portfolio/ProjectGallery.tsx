"use client";

import { useState } from "react";
import { projects } from "@/data/site";
import PortfolioFilter from "./PortfolioFilter";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";

export default function ProjectGallery() {
  const [channel, setChannel] = useState("Offline");
  const [workType, setWorkType] = useState("");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const channelProjects = projects.filter((project) => project.channel === channel);
  const workTypes = [...new Set(channelProjects.map((project) => project.workType))];
  const visibleProjects = channelProjects.filter(
    (project) => !workType || project.workType === workType,
  );

  return (
    <section
      className="container section creative-explorations"
      aria-labelledby="creative-concepts-title"
    >
      <h2 id="creative-concepts-title" className="portfolio-gallery-title">
        Creative Concepts
      </h2>
      <div className="portfolio-filters">
        <PortfolioFilter
          label="Marketing channel"
          options={[
            { value: "Offline", label: "Offline" },
            { value: "Online", label: "Online" },
          ]}
          value={channel}
          primary
          onChange={(nextChannel) => {
            setChannel(nextChannel);
            setWorkType("");
          }}
        />
        <PortfolioFilter
          label="Work type"
          options={[
            { value: "", label: "All work types" },
            ...workTypes.map((type) => ({ value: type, label: type })),
          ]}
          value={workType}
          onChange={setWorkType}
        />
      </div>
      <p className="sr-only" aria-live="polite">{visibleProjects.length} projects shown</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
