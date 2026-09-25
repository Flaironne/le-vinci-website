import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { menuSections, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "La carte",
  description:
    "Découvrez la carte du restaurant Le Vinci à Sausheim : entrées, plats, desserts et boissons.",
  openGraph: {
    title: "La carte du Vinci",
    description: "Entrées, plats, desserts et boissons au restaurant Le Vinci.",
  },
  twitter: {
    card: "summary",
    title: "La carte du Vinci",
    description: "Découvrez notre cuisine française traditionnelle.",
  },
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="À table"
          title="La carte"
          description="Une cuisine française traditionnelle, généreuse et faite maison. Notre carte évolue au rythme des saisons et des arrivages."
        />
        <section className="menu-layout">
          <div className="container">
            {menuSections.map((section) => (
              <section className="menu-section" key={section.name}>
                <div>
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2>{section.name}</h2>
                </div>
                <div>
                  {section.items.map((item) => (
                    <article className="menu-item" key={item.name}>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                      <span className="menu-price">{item.price}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
            <p className="section-copy" style={{ marginTop: 35 }}>
              Les prix et suggestions sont susceptibles d’évoluer. Pour
              connaître la carte du jour, contactez-nous au{" "}
              <a href={siteConfig.phoneHref}>
                <strong>{siteConfig.phone}</strong>
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
