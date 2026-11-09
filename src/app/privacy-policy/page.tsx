import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import LegalContact from "@/components/legal/LegalContact";
import { pageMetadata } from "@/lib/site-config";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How Magpie Services handles website information, local preferences, and project briefs.",
  "/privacy-policy",
);

const sections: LegalSection[] = [
  {
    id: "about-this-policy",
    title: "About this policy",
    content: (
      <p>
        This policy explains how information is handled when you use the Magpie
        Services website. It covers this website’s current features. A separate
        agreement or notice may apply when you engage us for marketing services.
      </p>
    ),
  },
  {
    id: "information-you-provide",
    title: "Information you provide",
    content: (
      <>
        <p>
          The project-brief form asks for your name, email address, company or
          brand, service requirements, project budget, and a description of your
          idea. Name, email address, service, and project description are
          required to prepare a brief.
        </p>
        <p>
          The current form prepares the brief in your browser. It does not send
          the form fields or brief to Magpie Services, and it does not save them
          in a website database or browser storage. Refreshing or leaving the
          page clears the form’s temporary state. Please avoid including
          sensitive personal information or confidential credentials.
        </p>
      </>
    ),
  },
  {
    id: "downloads-and-clipboard",
    title: "Downloads and clipboard",
    content: (
      <p>
        Choosing “Download brief” saves a text file on your device. Choosing
        “Copy brief” places the brief on your device’s clipboard. You control
        those copies and any later sharing. You can delete a downloaded file or
        clear your clipboard using your device’s controls.
      </p>
    ),
  },
  {
    id: "preferences-and-tracking",
    title: "Preferences and tracking",
    content: (
      <>
        <p>
          We store your light or dark theme choice in your browser’s local
          storage under the key “magpie-theme”. Without a saved choice, the
          website follows your device’s colour preference. You can remove the
          saved choice through your browser’s site-data settings.
        </p>
        <p>
          This version of the website does not include advertising pixels,
          analytics trackers, newsletter sign-ups, or account registration. If
          those features are added, this policy will need to be updated to
          describe them.
        </p>
      </>
    ),
  },
  {
    id: "technical-information",
    title: "Technical information and providers",
    content: (
      <>
        <p>
          To deliver pages and protect the website, hosting and infrastructure
          providers may process technical request information, such as IP
          addresses, requested URLs, browser information, timestamps, and error
          logs. Retention depends on the hosting configuration.
        </p>
        <p>
          The website uses stock imagery delivered through its image service and
          Unsplash. Image requests may be served through the website’s image
          proxy or provider infrastructure. Fonts are served with the website.
          External websites linked from this site have their own privacy
          practices.
        </p>
      </>
    ),
  },
  {
    id: "use-and-sharing",
    title: "Use, sharing and retention",
    content: (
      <>
        <p>
          The project-brief feature does not transmit your brief to us. If you
          independently contact us or share a brief, the information you choose
          to provide may be used to respond, understand your requirements, and
          discuss a proposed project. A separate project agreement may describe
          additional processing.
        </p>
        <p>
          Any information received through direct correspondence should be
          retained only as needed to handle that correspondence, provide agreed
          services, or meet applicable obligations. This website has no feature
          for selling or distributing form entries.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices and requests",
    content: (
      <p>
        You can use the website without completing the brief form, clear the
        saved theme preference, and choose whether to download, copy, or share a
        brief. For questions about information you have sent directly to Magpie
        Services, or to request access, correction, deletion, or withdrawal of a
        previously given consent where applicable, contact us using the details
        below. Requests relating to your local files or clipboard are managed on
        your device.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to this policy",
    content: (
      <p>
        We may update this page as website features or information practices
        change. The date above identifies the latest revision. Please also read
        our <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> for
        information about using this website.
      </p>
    ),
  },
  {
    id: "privacy-contact",
    title: "Contact",
    content: (
      <>
        <p>For privacy questions or requests, contact Magpie Services:</p>
        <LegalContact />
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      introduction="A clear look at your information, your preferences, and your choices when using our website."
      sections={sections}
    />
  );
}
