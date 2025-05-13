import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-sans",
});

export const metadata: Metadata = {
  title: "Taeeun Kim",
  description: "Website Created by Taeeun Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable}`}>{children}</body>
    </html>
  );
}
