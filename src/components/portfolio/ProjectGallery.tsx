"use client";

import { useState } from "react";
import { projects } from "@/data/site";
import PortfolioFilter from "./PortfolioFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery() {
  const [channel, setChannel] = useState("Offline");
  const [workType, setWorkType] = useState("");
  const channelProjects = projects.filter((project) => project.channel === channel);
  const workTypes = [...new Set(channelProjects.map((project) => project.workType))];
  const visibleProjects = channelProjects.filter(
    (project) => !workType || project.workType === workType,
  );

  return (
    <section
      className="container section"
      aria-labelledby="creative-concepts-title"
    >
      <h2 id="creative-concepts-title" className="text-[clamp(32px,4.4vw,60px)] leading-none! uppercase">
        Creative Concepts
      </h2>
      <div className="relative z-[3] mt-4 mb-[clamp(24px,3vw,38px)] flex flex-wrap gap-2">
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
            { value: "", label: `All ${channel.toLowerCase()} work types` },
            ...workTypes.map((type) => ({ value: type, label: type })),
          ]}
          value={workType}
          onChange={setWorkType}
        />
      </div>
      <p className="sr-only" aria-live="polite">{visibleProjects.length} projects shown</p>
      <div className="grid items-start gap-[clamp(14px,1.5vw,24px)] min-[421px]:grid-cols-2 min-[761px]:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
