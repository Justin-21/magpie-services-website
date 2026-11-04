"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/data/site";
export default function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [brief, setBrief] = useState("");
  const [message, setMessage] = useState("");
  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(
      `PROJECT ENQUIRY — MAGPIE SERVICES\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not specified"}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\n\nProject details:\n${data.get("details")}`,
    );
    setMessage(
      "Your brief is ready. Save or copy it below. Nothing has been sent.",
    );
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "magpie-project-brief.txt";
    link.click();
    URL.revokeObjectURL(url);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setMessage("Project brief copied.");
    } catch {
      setMessage(
        "Copy is unavailable. Use Download brief to save your enquiry.",
      );
    }
  }
  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={prepareBrief}>
        <div className="form-grid">
          <label>
            Your name <span>*</span>
            <input
              autoComplete="name"
              name="name"
              required
              placeholder="What should we call you?"
              maxLength={120}
            />
          </label>
          <label>
            Email address <span>*</span>
            <input
              autoComplete="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              maxLength={254}
            />
          </label>
        </div>
        <label>
          Company / brand
          <input
            autoComplete="organization"
            name="company"
            placeholder="Who are you building for?"
            maxLength={160}
          />
        </label>
        <div className="form-grid">
          <label>
            I need help with <span>*</span>
            <select name="service" required defaultValue={initialService}>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((item) => (
                <option key={item.title}>{item.title}</option>
              ))}
              <option>Let’s figure it out together</option>
            </select>
          </label>
          <label>
            Project budget
            <select name="budget" defaultValue="Let’s discuss">
              <option>Let’s discuss</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹2,00,000</option>
              <option>₹2,00,000 – ₹5,00,000</option>
              <option>₹5,00,000+</option>
            </select>
          </label>
        </div>
        <label>
          Tell us about your idea <span>*</span>
          <textarea
            name="details"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            placeholder="Your goals, your challenge, your wildest idea. We’re listening."
          />
        </label>
        <p className="form-note">
          This form prepares a brief on your device. It does not submit an
          enquiry. Contact delivery is not configured yet.
        </p>
        <button className="action-link" type="submit">
          Create project brief <span aria-hidden="true">↗</span>
        </button>
      </form>
      <p role="status" className="form-status">
        {message}
      </p>
      {brief && (
        <section className="brief-result" aria-label="Your project brief">
          <h3>Your project brief</h3>
          <pre>{brief}</pre>
          <div className="brief-actions">
            <button className="action-link" onClick={download}>
              Download brief ↓
            </button>
            <button className="text-link" onClick={copy}>
              Copy brief ↗
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
