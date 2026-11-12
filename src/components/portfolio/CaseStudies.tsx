"use client";

import { useState } from "react";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const study = caseStudies[activeIndex];

  return (
    <section
      className="container section portfolio-case-studies"
      aria-labelledby="case-studies-title"
    >
      <h2 id="case-studies-title" className="portfolio-section-title">
        Case Studies
      </h2>
      <div className="case-study-layout">
        <div className="case-study-index" role="group" aria-label="Choose a client case study">
          {caseStudies.map(({ client }, index) => (
            <button
              type="button"
              key={client}
              aria-pressed={activeIndex === index}
              aria-controls="case-study-spotlight"
              onClick={() => setActiveIndex(index)}
            >
              {client}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <label className="case-study-picker">
          Client case study
          <select
            value={activeIndex}
            onChange={(event) => setActiveIndex(Number(event.target.value))}
            aria-controls="case-study-spotlight"
          >
            {caseStudies.map(({ client }, index) => (
              <option key={client} value={index}>{client}</option>
            ))}
          </select>
        </label>
        <article
          id="case-study-spotlight"
          className="case-study-spotlight"
          aria-labelledby="case-study-client"
        >
          <div className="case-study-banner">
            <h3 id="case-study-client" aria-live="polite">{study.client}</h3>
          </div>
          <div className="case-study-body">
            <p className="case-study-summary">{study.summary}</p>
            <div className="case-study-facts">
              <div>
                <h4>Campaign activities</h4>
                <ul>
                  {study.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
              {study.locations && (
                <div>
                  <h4>Locations</h4>
                  <p className="muted">{study.locations}</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
