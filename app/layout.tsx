import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AccountModalProvider } from "@/components/AccountModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crossroads — English at the Crossroads of Cultures",
  description:
    "Crossroads is a resource hub for future teachers and learners of English: lesson plans, authentic materials, quizzes and community support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <AuthProvider>
          <AccountModalProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AccountModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}