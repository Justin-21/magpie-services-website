import ActionLink from "@/components/ui/ActionLink";
export default function NotFound() {
  return (
    <main className="container section not-found">
      <p className="eyebrow">404 / A little off track</p>
      <h1>
        This idea hasn’t
        <br />
        <em>landed yet.</em>
      </h1>
      <p className="muted">The page you’re looking for could not be found.</p>
      <ActionLink href="/">Back to home</ActionLink>
    </main>
  );
}
