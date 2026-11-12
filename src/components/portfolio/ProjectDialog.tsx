"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { projects, imageUrl } from "@/data/site";
import ActionLink from "../ui/ActionLink";
export default function ProjectDialog({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onClose={() => {
        if (!ref.current?.open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className="icon-button dialog-close"
        onClick={onClose}
        aria-label="Close project"
      >
        ×
      </button>
      <Image
        src={imageUrl(project.image)}
        alt={project.title}
        width={1000}
        height={600}
      />
      <div className="dialog-content">
        <p className="eyebrow">Concept study / {project.channel}</p>
        <h2 id="project-title">{project.title}</h2>
        <p>{project.description}</p>
        <p className="muted">
          Illustrative creative direction using stock imagery. This is not a
          commissioned client case study.
        </p>
        <ActionLink href="/contact">Create something with us</ActionLink>
      </div>
    </dialog>
  );
}
