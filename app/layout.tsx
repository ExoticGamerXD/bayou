import type { Metadata, Viewport } from "next";
import { cormorant, inter, caveat } from "@/lib/fonts";
import { SITE } from "@/data/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Cork City`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Cork City`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayou — A New Orleans supper house in Cork City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Cork City`,
    description: SITE.description,
    images: ["/images/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#13201B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="bg-bayou-cream text-bayou-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
