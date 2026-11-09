"use client";

import { useId, useRef, useState, type ReactNode } from "react";

type AccordionItem = { id: string; title: string; content: ReactNode };

export default function Accordion({
  items,
  onActiveChange,
}: {
  items: AccordionItem[];
  onActiveChange?: (index: number) => void;
}) {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);

  return (
    <div className="service-list" ref={root}>
      {items.map((item, index) => {
        const open = active === index;
        const triggerId = `${id}-${item.id}-trigger`;
        const panelId = `${id}-${item.id}-panel`;
        return (
          <div
            className={`service-item ${open ? "selected" : ""}`}
            key={item.id}
          >
            <h3>
              <button
                type="button"
                data-accordion-trigger
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => {
                  setActive(open ? null : index);
                  onActiveChange?.(index);
                }}
                onKeyDown={(event) => {
                  const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
                  if (!keys.includes(event.key)) return;
                  event.preventDefault();
                  const buttons =
                    root.current?.querySelectorAll<HTMLButtonElement>(
                      "[data-accordion-trigger]",
                    );
                  if (!buttons) return;
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? items.length - 1
                        : (index +
                            (event.key === "ArrowDown" ? 1 : -1) +
                            items.length) %
                          items.length;
                  buttons[next]?.focus();
                }}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
                <span className="accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="accordion-panel"
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!open}
              inert={!open}
              data-open={open}
            >
              <div className="accordion-panel-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
