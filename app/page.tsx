import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { restaurantImages, siteConfig } from "./lib/site";

export const metadata: Metadata = {
  title: "Restaurant français traditionnel à Sausheim",
  description: siteConfig.description,
  openGraph: {
    title: "Le Vinci, restaurant français à Sausheim",
    description: siteConfig.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Vinci, restaurant français à Sausheim",
    description: siteConfig.description,
  },
};

export default function Home() {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    servesCuisine: "Cuisine française traditionnelle",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: siteConfig.hours.map((schedule) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek:
        schedule.days === "Lundi - Mardi"
          ? ["Monday", "Tuesday"]
          : ["Wednesday", "Thursday", "Friday", "Saturday"],
      opens: schedule.hours.split(" - ")[0],
      closes: schedule.hours.split(" - ")[1],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="hero">
          <Image
            className="hero-image"
            src={restaurantImages.hero}
            alt="Salle lumineuse du restaurant Le Vinci"
            fill
            priority
            sizes="100vw"
          />
          <div className="container hero-content">
            <p className="eyebrow">Sausheim · Depuis plus de 10 ans</p>
            <h1>Le Vinci</h1>
            <div className="hero-rule" />
            <p className="hero-subtitle">Cuisine française traditionnelle</p>
            <Link className="button" href="/menu">
              Découvrir notre carte <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">L’esprit du Vinci</p>
              <h2>Une cuisine qui rassemble.</h2>
              <p className="section-copy">
                Au Vinci, nous cultivons le goût des choses bien faites. Une
                cuisine française généreuse, des produits choisis avec soin et
                une maison où l’on aime prendre le temps.
              </p>
              <Link className="button" href="/a-propos">
                Découvrir notre histoire <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="image-frame">
              <div>
                <Image
                  src={restaurantImages.terrace}
                  alt="Terrasse fleurie du restaurant Le Vinci"
                  fill
                  sizes="(max-width: 800px) 90vw, 50vw"
                />
              </div>
              <div className="stamp">
                <strong>10+</strong>
                <span>Années d’expérience</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-tinted">
          <div className="container">
            <p className="eyebrow">Notre promesse</p>
            <h2>Simplement bon.</h2>
            <div className="feature-grid">
              <div className="feature">
                <span className="feature-number">01</span>
                <h3>Excellence culinaire</h3>
                <p>
                  Une cuisine française traditionnelle, préparée avec précision
                  et générosité.
                </p>
              </div>
              <div className="feature">
                <span className="feature-number">02</span>
                <h3>Ambiance familiale</h3>
                <p>
                  Un accueil chaleureux dans un cadre authentique et convivial.
                </p>
              </div>
              <div className="feature">
                <span className="feature-number">03</span>
                <h3>Produits de saison</h3>
                <p>
                  Des assiettes vivantes au fil des arrivages et des envies du
                  moment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="split-callout">
          <div className="container callout-inner">
            <div>
              <p className="eyebrow">À table</p>
              <h2>Réservez votre moment.</h2>
            </div>
            <div>
              <p>
                Pour garantir votre place dans notre restaurant, nous vous
                recommandons de réserver à l’avance.
              </p>
              <a className="button button-light" href={siteConfig.phoneHref}>
                Appeler le restaurant <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
