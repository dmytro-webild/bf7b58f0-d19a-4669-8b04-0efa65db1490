import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Камни Всем - Продажа и Доставка Натуральных Камней',
  description: 'Ведущий поставщик натурального камня для дизайна домов, ландшафта, строительства и облицовки. Широкий ассортимент мрамора, гранита, кварцита с доставкой.',
  keywords: ["натуральный камень, продажа камня, доставка камня, мрамор, гранит, кварцит, сланец, травертин, оникс, ландшафтный дизайн, облицовка, строительство, дизайн интерьеров"],
  openGraph: {
    "title": "Камни Всем - Натуральные Камни для Вашего Проекта",
    "description": "Откройте для себя красоту и долговечность природного камня для дизайна домов, ландшафта, строительства и облицовки.",
    "url": "https://www.kamnivsem.ru",
    "siteName": "Камни Всем",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/plant-vases-background-zoom-calls_23-2149684464.jpg",
        "alt": "Luxurious marble kitchen countertop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Камни Всем - Натуральные Камни для Вашего Проекта",
    "description": "Откройте для себя красоту и долговечность природного камня для дизайна домов, ландшафта, строительства и облицовки.",
    "images": [
      "http://img.b2bpic.net/free-photo/plant-vases-background-zoom-calls_23-2149684464.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
