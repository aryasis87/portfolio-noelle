import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["300", "400", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Noelle — UI/UX Designer","description":"Portfolio template for Noelle, a fictional UI/UX designer: calm, minimal case studies that link to six live demo sites (to-do apps and booking tools), plus articles on lists that forget, WIP limits, and dates.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-noelle-one.vercel.app"),
  title: { default: "Noelle — UI/UX Designer", template: "%s — Noelle" },
  description: "Portfolio template for Noelle, a fictional UI/UX designer: calm, minimal case studies that link to six live demo sites (to-do apps and booking tools), plus articles on lists that forget, WIP limits, and dates.",
  applicationName: "Noelle",
  keywords: ["UI/UX designer", "product designer", "portfolio", "user experience", "interface design"],
  authors: [{ name: "Noelle" }],
  creator: "Noelle",
  publisher: "Noelle",
  alternates: { canonical: "https://portfolio-noelle-one.vercel.app" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-noelle-one.vercel.app",
    siteName: "Noelle",
    title: "Noelle — UI/UX Designer",
    description: "Portfolio template for Noelle, a fictional UI/UX designer: calm, minimal case studies that link to six live demo sites (to-do apps and booking tools), plus articles on lists that forget, WIP limits, and dates.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Noelle — UI/UX Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noelle — UI/UX Designer",
    description: "Portfolio template for Noelle, a fictional UI/UX designer: calm, minimal case studies that link to six live demo sites (to-do apps and booking tools), plus articles on lists that forget, WIP limits, and dates.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <body className="bg-white text-black antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
