import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  DM_Sans,
  Montserrat,
} from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panto - Premium Furniture Store | Chairs, Beds, Sofas & Lamps",
  description:
    "Discover stylish and comfortable furniture at Panto. Shop our collection of modern chairs, beds, sofas, and lamps. Quality craftsmanship, affordable prices, and fast delivery.",
  keywords: [
    "furniture",
    "chairs",
    "beds",
    "sofas",
    "lamps",
    "home decor",
    "modern furniture",
    "comfortable seating",
    "bedroom furniture",
    "living room furniture",
  ],
  authors: [{ name: "Panto Furniture" }],
  creator: "Panto",
  publisher: "Panto Furniture Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  //todo change to host url
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panto - Premium Furniture Store",
    description:
      "Discover stylish and comfortable furniture. Shop chairs, beds, sofas, and lamps at Panto.",
    url: "http://localhost:3000",
    siteName: "Panto",
    images: [
      {
        url: "/open-graph-cover.png",
        width: 1200,
        height: 630,
        alt: "Panto Furniture Store - Modern Home Decor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panto - Premium Furniture Store",
    description:
      "Discover stylish and comfortable furniture. Shop chairs, beds, sofas, and lamps at Panto.",
    images: ["/open-graph-cover.png"],
    creator: "@RahmiRafik",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${dmSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
