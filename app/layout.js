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

export const metadata = {
  title: "Noelle — UI/UX Designer",
  description: "Portfolio of Noelle, a UI/UX designer crafting intuitive digital experiences.",
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
      </body>
    </html>
  );
}
