import Link from "next/link";
import { SITE } from "@/data/site";
import BrassRule from "@/components/ui/BrassRule";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bayou-teal-deep border-t border-bayou-brass/20">
      <div className="container-site py-16 md:py-20">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-3xl text-bayou-cream tracking-[0.08em] uppercase mb-4">
              Bayou
            </p>
            <p className="font-body text-body-sm text-bayou-sage leading-relaxed max-w-xs">
              New Orleans comfort food in a bright Cork City room. Brunch with a Louisiana accent.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home",    href: "/"        },
                { label: "Menu",    href: "/menu"    },
                { label: "About",   href: "/about"   },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-body-sm text-bayou-sage hover:text-bayou-cream link-draw transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-5">
              Hours
            </p>
            <ul className="space-y-2">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="font-body text-body-sm text-bayou-sage">{h.day.slice(0, 3)}</span>
                  <span className="font-body text-body-sm text-bayou-cream/70">
                    {"closed" in h && h.closed ? "Closed" : `${"open" in h ? h.open : ""}–${"kitchenClose" in h ? h.kitchenClose : ""}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Find us */}
          <div>
            <p className="font-body text-label-sm text-bayou-brass tracking-[0.2em] uppercase mb-5">
              Find Us
            </p>
            <address className="not-italic space-y-2">
              <p className="font-body text-body-sm text-bayou-sage">{SITE.address.street}</p>
              <p className="font-body text-body-sm text-bayou-sage">{SITE.address.city}, {SITE.address.county}</p>
              <p className="font-body text-body-sm text-bayou-sage">{SITE.address.eircode}</p>
            </address>
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${SITE.contact.phoneIntl}`}
                className="block font-body text-body-sm text-bayou-sage hover:text-bayou-cream link-draw transition-colors duration-200"
              >
                {SITE.contact.phone}
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="block font-body text-body-sm text-bayou-sage hover:text-bayou-cream link-draw transition-colors duration-200"
              >
                {SITE.contact.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-label-sm text-bayou-sage hover:text-bayou-brass tracking-widest uppercase transition-colors duration-200"
              >
                Instagram
              </a>
              <span className="text-bayou-brass/30">·</span>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-label-sm text-bayou-sage hover:text-bayou-brass tracking-widest uppercase transition-colors duration-200"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <BrassRule ornament className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-body-xs text-bayou-sage/60">
            © {currentYear} Bayou Cork. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-body text-body-xs text-bayou-sage/60 hover:text-bayou-sage transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/accessibility" className="font-body text-body-xs text-bayou-sage/60 hover:text-bayou-sage transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
