import Link from "next/link";
import { navigation, siteConfig } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Le Vinci, accueil">
          <span className="brand-mark">LV</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>Maison française</small>
          </span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-call" href={siteConfig.phoneHref}>
          <span aria-hidden="true">↗</span> Réserver une table
        </a>
      </div>
    </header>
  );
}
