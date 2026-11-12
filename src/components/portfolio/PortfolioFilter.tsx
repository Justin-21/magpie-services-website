"use client";

import { useEffect, useId, useRef, useState } from "react";

type FilterOption = { value: string; label: string };

export default function PortfolioFilter({
  label,
  options,
  value,
  onChange,
  primary = false,
}: {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  primary?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const selection = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  function closeAndRestoreFocus() {
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <div
      className="portfolio-filter"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          event.preventDefault();
          closeAndRestoreFocus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="portfolio-filter-trigger"
        data-primary={primary}
        aria-label={`${label}: ${selection?.label ?? label}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          trigger.current?.focus();
          setOpen(!open);
        }}
      >
        <span>{selection?.label ?? label}</span>
        <span className="portfolio-filter-chevron" aria-hidden="true" />
      </button>
      <ul id={id} className="portfolio-filter-options" hidden={!open} aria-label={label}>
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              aria-pressed={value === option.value}
              onClick={() => {
                onChange(option.value);
                closeAndRestoreFocus();
              }}
            >
              <span>{option.label}</span>
              {value === option.value && <span aria-hidden="true">✓</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
