"use client";

import Image from "next/image";
import { useState } from "react";
import { caseStudies } from "@/data/case-studies";

const sampleDetails = [
  ["Campaign planning", "An example campaign starts by identifying the audience, choosing relevant touchpoints, and mapping the rollout. A weekly schedule tracks production, approvals, and launch dates."],
  ["Creative and production", "A sample production plan covers concept reviews, asset specifications, and final checks so the team can prepare the right materials for each placement."],
  ["Rollout and review", "A sample campaign review tracks what launched, gathers feedback from the teams involved, and captures lessons for the next campaign."],
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unavailableLogos, setUnavailableLogos] = useState<string[]>([]);
  const study = caseStudies[activeIndex];

  return (
    <section className="container section" aria-labelledby="case-studies-title">
      <h2 id="case-studies-title" className="text-[clamp(34px,4.5vw,60px)] leading-none!">
        Case Studies
      </h2>
      <div className="mt-[clamp(24px,4vw,42px)] grid items-start gap-[clamp(18px,3vw,40px)] min-[761px]:grid-cols-[minmax(210px,.95fr)_minmax(0,2.55fr)]">
        <ul className="grid max-[760px]:max-h-64 max-[760px]:overflow-y-auto" aria-label="Client case studies">
          {caseStudies.map(({ client, initials, logo }, index) => (
            <li key={client} className="border-b border-[var(--line)] py-1.5 last:border-b-0">
              <button
                type="button"
                className="flex min-h-12 w-full items-center gap-3 rounded-md px-3 py-1.5 text-left text-sm! font-semibold! aria-[pressed=false]:hover:bg-[var(--surface)] focus-visible:-outline-offset-3! aria-pressed:bg-foreground aria-pressed:text-background!"
                aria-pressed={activeIndex === index}
                aria-controls="case-study-spotlight"
                onClick={() => setActiveIndex(index)}
              >
                <span aria-hidden="true" className="grid h-9 w-14 shrink-0 place-items-center overflow-hidden rounded bg-white p-1 text-xs text-neutral-800">
                  {!unavailableLogos.includes(logo) ? (
                    <Image
                      src={logo}
                      alt=""
                      width={48}
                      height={28}
                      unoptimized
                      className="h-7 w-12 object-contain"
                      onError={() => setUnavailableLogos((logos) => [...logos, logo])}
                    />
                  ) : initials}
                </span>
                {client}
              </button>
            </li>
          ))}
        </ul>
        <article
          id="case-study-spotlight"
          className="min-w-0 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]"
          aria-labelledby="case-study-client"
        >
          <div className="flex min-h-[clamp(125px,15vw,205px)] items-end bg-[radial-gradient(ellipse_at_top_right,#ad412b,transparent_70%),linear-gradient(120deg,#1c1918,#54241d)] p-[clamp(24px,4vw,48px)] text-[#fff8ed]">
            <h3 id="case-study-client" aria-live="polite" className="text-[clamp(32px,5vw,66px)] leading-none! [overflow-wrap:anywhere]">
              {study.client}
            </h3>
          </div>
          <div
            key={study.client}
            role="region"
            aria-label={`${study.client} campaign details`}
            tabIndex={0}
            className="max-h-88 overflow-y-auto [scrollbar-gutter:stable] p-[clamp(22px,4vw,44px)] focus-visible:-outline-offset-4!"
          >
            <p className="max-w-[58ch] text-[clamp(15px,1.7vw,21px)] leading-[1.45]">
              {study.summary}
            </p>
            <div className="mt-6 grid gap-5 border-t border-[var(--line)] pt-5 text-[13px]">
              <div>
                <h4 className="mb-2 font-bold">Campaign activities</h4>
                <ul className="grid list-disc gap-x-6 gap-y-1 pl-4 marker:text-accent min-[421px]:grid-cols-2">
                  {study.activities.map((activity) => <li key={activity}>{activity}</li>)}
                </ul>
              </div>
              {study.locations && (
                <div>
                  <h4 className="mb-2 font-bold">Locations</h4>
                  <p className="muted">{study.locations}</p>
                </div>
              )}
              <div className="grid gap-4 border-t border-[var(--line)] pt-5">
                <h4 className="font-bold">Sample campaign details</h4>
                {sampleDetails.map(([title, description]) => (
                  <div key={title}>
                    <h5 className="mb-1 font-semibold">{title}</h5>
                    <p className="muted">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
