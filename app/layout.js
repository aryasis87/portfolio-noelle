import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["300", "400", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Noelle","jobTitle":"UI/UX Designer","url":"https://portfolio-noelle.vercel.app","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://portfolio-noelle.vercel.app"),
  title: "Noelle — UI/UX Designer",
  description: "Portfolio of Noelle, a UI/UX designer crafting intuitive, human-centered digital experiences.",
  applicationName: "Noelle",
  keywords: ["UI/UX designer", "product designer", "portfolio", "user experience", "interface design"],
  authors: [{ name: "Noelle" }],
  creator: "Noelle",
  publisher: "Noelle",
  alternates: { canonical: "https://portfolio-noelle.vercel.app" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-noelle.vercel.app",
    siteName: "Noelle",
    title: "Noelle — UI/UX Designer",
    description: "Portfolio of Noelle, a UI/UX designer crafting intuitive, human-centered digital experiences.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Noelle — UI/UX Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noelle — UI/UX Designer",
    description: "Portfolio of Noelle, a UI/UX designer crafting intuitive, human-centered digital experiences.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} bg-white text-black antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Message />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
