import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "développeuse web",
    "développeuse mobile",
    "Flutter",
    "Next.js",
    "FastAPI",
    "portfolio",
    "freelance",
    site.name,
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.shortDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  email: `mailto:${site.email}`,
  image: `${site.url}/images/avatar.png`,
  sameAs: [site.linkedin, site.github],
  knowsAbout: ["Flutter", "Next.js", "React", "TypeScript", "Python", "FastAPI", "Firebase", ".NET"],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <a className="skipLink" href="#contenu">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
