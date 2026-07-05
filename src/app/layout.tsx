import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import { I18nProvider } from "@/lib/i18n";
import LocaleHtml from "@/lib/i18n/LocaleHtml";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "jadren - Start",
  description: "Start page for jadren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${nunito.variable}`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeRegistry>
          <I18nProvider>
            <LocaleHtml />
            {children}
          </I18nProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
