import Link from "next/link";
import { navigation, siteConfig } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-kicker">Depuis plus de 10 ans</p>
          <p className="footer-title">Le Vinci</p>
          <p className="footer-copy">
            Une table sincère, des produits de saison et le plaisir de vous
            recevoir à Sausheim.
          </p>
        </div>
        <div>
          <p className="footer-heading">Nous trouver</p>
          <address>
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.city}
          </address>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        </div>
        <div>
          <p className="footer-heading">Explorer</p>
          <ul className="footer-links">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Le Vinci</span>
        <span>Restaurant français traditionnel</span>
      </div>
    </footer>
  );
}
