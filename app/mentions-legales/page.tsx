import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site du restaurant Le Vinci.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentions légales | Le Vinci",
    description: "Informations légales du site Le Vinci.",
  },
  twitter: {
    card: "summary",
    title: "Mentions légales | Le Vinci",
    description: "Informations légales du site Le Vinci.",
  },
};

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Informations"
          title="Mentions légales"
          description="Les informations légales de ce site sont présentées ci-dessous. Les champs signalés sont à compléter par le responsable de la publication."
        />
        <article className="legal container">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nom du restaurant :</strong> {siteConfig.name}
            <br />
            <strong>Nom du gérant :</strong> [À COMPLÉTER]
            <br />
            <strong>Forme juridique :</strong> [À COMPLÉTER]
            <br />
            <strong>SIRET :</strong> [À COMPLÉTER]
            <br />
            <strong>Adresse du siège :</strong> [À COMPLÉTER]
          </p>
          <h2>Directeur de publication</h2>
          <p>[À COMPLÉTER]</p>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc.
            <br />
            <strong>Adresse de l’hébergeur :</strong> [À COMPLÉTER selon les
            informations légales officielles de Vercel]
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus de ce site sont destinés à présenter le restaurant Le
            Vinci. Toute reproduction ou utilisation des contenus sans
            autorisation préalable est interdite.
          </p>
          <h2>Services tiers et cookies</h2>
          <p>
            La page Contact intègre une carte Google Maps. Ce service tiers peut
            déposer des cookies ou traiter des informations techniques selon les
            conditions de Google, même si le site Le Vinci ne collecte pas
            directement de données personnelles et ne propose aucun formulaire.
          </p>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant le site, contactez le restaurant au{" "}
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
