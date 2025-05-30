import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Provider from "./provider";

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
    <html>
      <head>
        <title>Taeeun Kim</title>
        <meta name="title" content="Taeeun Kim" />
        <meta
          name="description"
          content="Taeeun Kim's personal portfolio website. Click to learn about me!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taeeunkim.vercel.app/" />
        <meta property="og:title" content="Taeeun Kim" />
        <meta
          property="og:description"
          content="Taeeun Kim's personal portfolio website. Click to learn about me!"
        />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://taeeunkim.vercel.app/" />
        <meta property="twitter:title" content="Taeeun Kim" />
        <meta
          property="twitter:description"
          content="Taeeun Kim's personal portfolio website. Click to learn about me!"
        />
        <meta property="twitter:image" content="/thumbnail.png" />
      </head>
      <body className={`${inriaSans.variable}`}>
        <Provider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
