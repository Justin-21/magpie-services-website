"use client";
import { useState } from "react";
import { projects } from "@/data/site";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
const categories = ["All work", "Branding", "Campaigns", "Content"];
export default function ProjectGallery() {
  const [category, setCategory] = useState("All work");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const visible = projects.filter(project => category === "All work" || project.category === category);
  return <section className="container section"><SectionHeading label="Creative explorations" description="A collection of concept studies that explore our creative direction. Client case studies are coming soon.">Fresh perspectives.<br /><em>Made to stand out.</em></SectionHeading><div className="filter-list" role="group" aria-label="Filter projects">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}{category === item && <span aria-hidden="true"> ↗</span>}</button>)}</div><p className="sr-only" aria-live="polite">{visible.length} projects shown</p><div className="project-grid">{visible.map(project => <ProjectCard key={project.slug} project={project} onOpen={() => setSelected(project)} />)}</div>{selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}</section>;
}
