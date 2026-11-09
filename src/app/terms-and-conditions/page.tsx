import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import LegalContact from "@/components/legal/LegalContact";
import { pageMetadata } from "@/lib/site-config";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "Terms for using the Magpie Services website, viewing creative work, and preparing project briefs.",
  "/terms-and-conditions",
);

const sections: LegalSection[] = [
  {
    id: "website-scope",
    title: "Using this website",
    content: (
      <p>
        These terms describe the permitted use of the Magpie Services website
        and its information. The website introduces our digital and offline
        marketing capabilities. Browsing the site or preparing a project brief
        does not itself create a service engagement, purchase, or payment
        obligation.
      </p>
    ),
  },
  {
    id: "service-agreements",
    title: "Projects and service agreements",
    content: (
      <p>
        Specific deliverables, fees, taxes, timelines, revisions, approvals,
        payment terms, cancellation terms, and ownership of commissioned work
        must be agreed in a separate written proposal or service agreement.
        Website descriptions and indicative budget options are not binding
        quotes or guarantees. If you enter a project agreement with us, that
        agreement governs the project.
      </p>
    ),
  },
  {
    id: "project-briefs",
    title: "Project briefs and enquiries",
    content: (
      <>
        <p>
          The brief form creates a text summary on your device. It does not
          submit an enquiry or reserve services. You decide whether to download,
          copy, or independently share the brief with us. Preparing a brief does
          not guarantee a response, project availability, or acceptance.
        </p>
        <p>
          Please provide information you are entitled to use and share. Do not
          include passwords, payment details, confidential third-party material,
          or sensitive personal information in a brief.
        </p>
      </>
    ),
  },
  {
    id: "creative-material",
    title: "Creative material and ownership",
    content: (
      <>
        <p>
          Website copy, branding, designs, and other materials belong to Magpie
          Services or their respective owners, subject to applicable licences.
          You may view the site and share links for legitimate personal or
          business evaluation. Reuse, resale, or redistribution of protected
          material requires appropriate permission or a valid licence, except
          where applicable law permits it.
        </p>
        <p>
          Portfolio entries marked “Concept study” are illustrative creative
          explorations using stock imagery. They are not commissioned client
          case studies, endorsements, or evidence of campaign results.
          Third-party names and trademarks remain the property of their owners.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <p>
        Do not use this website for unlawful activity, impersonation,
        harassment, unsolicited submissions, or infringement of others’ rights.
        Do not attempt unauthorised access, introduce malicious code, disrupt
        website availability, or interfere with other visitors’ use.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party links and platforms",
    content: (
      <p>
        References to social, advertising, marketplace, or other platforms
        describe service capabilities and do not imply partnership,
        certification, or endorsement. Third-party websites and platforms have
        their own terms, privacy policies, availability, and approval
        requirements. We do not control their content or decisions.
      </p>
    ),
  },
  {
    id: "availability-and-results",
    title: "Availability and results",
    content: (
      <>
        <p>
          We aim to keep website information useful and current, but pages may
          change or become temporarily unavailable. Please confirm any
          information important to a project before relying on it.
        </p>
        <p>
          Marketing performance depends on factors such as audience, budget,
          competition, platform decisions, and execution. Website content does
          not promise a specific return, ranking, reach, lead volume, or
          commercial outcome. Nothing in these terms excludes rights or
          responsibilities that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    id: "privacy-and-updates",
    title: "Privacy and updates",
    content: (
      <p>
        Our <Link href="/privacy-policy">Privacy Policy</Link> describes local
        theme storage, the brief form, and technical information. We may revise
        these website terms as features change. The revision date appears above.
        Updates do not replace or amend a separately signed project agreement
        unless agreed in writing.
      </p>
    ),
  },
  {
    id: "terms-contact",
    title: "Questions and contact",
    content: (
      <>
        <p>
          For questions about these terms or a proposed project, contact Magpie
          Services:
        </p>
        <LegalContact />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      introduction="The essentials for exploring our work, preparing a brief, and starting a conversation about your next project."
      sections={sections}
    />
  );
}
