import SectionHeading from "../ui/SectionHeading";
export default function ContactIntro() {
  return (
    <div className="contact-intro">
      <SectionHeading level={1} label="Start a conversation">
        Your next chapter
        <br />
        <em>starts here.</em>
      </SectionHeading>
      <p className="muted">
        Have a challenge to solve or an idea to explore? Tell us a little about
        your brand and what you have in mind.
      </p>
      <div className="contact-promise">
        <span aria-hidden="true">↗</span>
        <p>
          No complicated pitches.
          <br />
          Just possibilities.
        </p>
      </div>
      <p className="eyebrow">Strategy · Creative · Execution</p>
    </div>
  );
}
