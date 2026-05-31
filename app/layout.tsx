import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
// const robomono = Roboto_Mono({ subsets: ["latin"] ,variable:'--font-mono'});

export const metadata: Metadata = {
  title: "Aditya's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="" sizes="any" /> */}
        <link className="logo-img" rel="icon" href="/greenheart.jpg" sizes="any" />
      </head>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
