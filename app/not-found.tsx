import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p className="eyebrow">404 · Cette page n’existe pas</p>
        <h1>Oups.</h1>
        <p className="section-copy">La page recherchée a quitté la carte.</p>
        <Link className="button" href="/">
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
