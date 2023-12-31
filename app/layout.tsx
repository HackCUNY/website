import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackCUNY 2024",
  description: "hackathon for CUNY students by CUNY students",
  icons: ["/hackathon_logo.png"],
  openGraph: {
    title: "HackCUNY 2024",
    description: "hackathon for CUNY students by CUNY students",
    images: ["/hackathon_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-[100vh] " + inter.className}>{children}</body>
    </html>
  );
}
