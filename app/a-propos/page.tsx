import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/page-intro";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { restaurantImages } from "../lib/site";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Découvrez l’histoire et l’esprit du restaurant Le Vinci à Sausheim.",
  openGraph: {
    title: "L’histoire du Vinci",
    description: "Une maison française chaleureuse à Sausheim.",
  },
  twitter: {
    card: "summary",
    title: "L’histoire du Vinci",
    description: "Découvrez l’esprit du restaurant Le Vinci.",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="La maison"
          title="Notre histoire"
          description="Une adresse de quartier où la cuisine française se partage avec sincérité, depuis plus de dix ans."
        />
        <section className="section">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">Le goût du vrai</p>
              <h2>Une maison, une famille, une table.</h2>
              <p className="section-copy">
                Le Vinci est né d’une envie simple : proposer une cuisine
                française traditionnelle dans un cadre chaleureux. Ici, chaque
                assiette raconte le plaisir des produits bien travaillés et
                chaque service est une occasion de vous recevoir comme à la
                maison.
              </p>
              <p className="section-copy">
                Au fil des années, notre restaurant a grandi avec ses habitués.
                Notre engagement reste le même : une cuisine généreuse, une
                équipe attentive et une ambiance où l’on revient pour le goût
                autant que pour l’accueil.
              </p>
            </div>
            <div className="about-image">
              <Image
                src={restaurantImages.interior}
                alt="Salle intérieure chaleureuse du restaurant Le Vinci"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
        <section className="section section-tinted">
          <div className="container section-grid">
            <div className="image-frame">
              <div>
                <Image
                  src={restaurantImages.dish}
                  alt="Assiette de cuisine française traditionnelle"
                  fill
                  sizes="(max-width: 800px) 90vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow">Notre façon de faire</p>
              <h2>Des produits, du temps et du cœur.</h2>
              <p className="section-copy">
                Nous privilégions les recettes qui ont une histoire, les
                cuissons justes et les desserts qui terminent le repas avec
                douceur. La carte s’adapte aux saisons pour garder le plaisir
                intact, midi après midi.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
