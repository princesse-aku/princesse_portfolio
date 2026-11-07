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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: `${site.name} | ${site.role}`,
    description: site.shortDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <a className="skipLink" href="#contenu">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
