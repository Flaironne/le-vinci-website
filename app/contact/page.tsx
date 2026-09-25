import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact et réservation",
  description:
    "Retrouvez Le Vinci à Sausheim, consultez nos horaires et contactez-nous pour réserver votre table.",
  openGraph: {
    title: "Contacter Le Vinci",
    description:
      "Adresse, téléphone et horaires du restaurant Le Vinci à Sausheim.",
  },
  twitter: {
    card: "summary",
    title: "Contacter Le Vinci",
    description: "Adresse, téléphone et horaires du restaurant Le Vinci.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Nous trouver"
          title="Nous contacter"
          description="Réservez votre table ou contactez-nous pour toute information. Nous serons heureux de vous accueillir."
        />
        <section className="contact-grid container">
          <div className="contact-cards">
            <div className="contact-card">
              <h2>Adresse</h2>
              <address>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </address>
            </div>
            <div className="contact-card">
              <h2>Téléphone</h2>
              <p>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </p>
            </div>
            <div className="contact-card">
              <h2>Horaires</h2>
              {siteConfig.hours.map((entry) => (
                <p key={`${entry.days}-${entry.hours}`}>
                  {entry.days} : {entry.hours}
                </p>
              ))}
            </div>
            <a className="button" href={siteConfig.phoneHref}>
              Réserver une table <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="map-wrap">
            <iframe
              title="Localisation du restaurant Le Vinci à Sausheim"
              src="https://www.google.com/maps?q=71%20Grand%20Rue%2C%2068390%20Sausheim&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
