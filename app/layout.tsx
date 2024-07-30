// Next
import { Metadata } from "next";

// Styled-Components
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "./components/GlobalStyles";
const Footer = dynamic(() => import("./components/Footer"));

// Assets
import WhatsAppBtn from "./components/WhatsAppBtn";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://pousadataiua.com"),
  title: "Taiuá Ambiental",
  description:
    "Pousada e Camping Taiuá Ambiental, um lugar incrível para quem busca uma experiência única e sustentável em contato com a natureza.",
  alternates: {
    canonical: "https://pousadataiua.com",
  },
  category:
    "pousada,ferias,resort,acampamento,barraca,barracas,camping,hotel,motel,paisagem,paisagens,natureza,felicidade,alegria,ambiente",
  keywords: [
    "Paisagem",
    "Pousada",
    "Taiua",
    "Ambiental",
    "Dormitório",
    "Cama",
    "Hotel",
    "Férias",
    "Feriado",
    "Viagem",
    "Chapada",
    "Chapada dos Veadeiros",
    "Goiás",
    "Visita",
    "Rural",
    "Sítio",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192x192",
    other: [
      {
        rel: "android-chrome-72x72",
        url: "/android-chrome-72x72.png",
        sizes: "72x72",
      },
      {
        rel: "android-chrome-96x96",
        url: "android-chrome-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "android-chrome-128x128",
        url: "android-chrome-128x128.png",
        sizes: "128x128",
      },
      {
        rel: "android-chrome-144x144",
        url: "android-chrome-144x144.png",
        sizes: "144x144",
      },
      {
        rel: "android-chrome-152x152",
        url: "android-chrome-152x152.png",
        sizes: "152x152",
      },
      {
        rel: "android-chrome-192x192",
        url: "android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome-384x384",
        url: "android-chrome-384x384.png",
        sizes: "384x384",
      },
      {
        rel: "android-chrome-512x512",
        url: "android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  authors: {
    name: "Igor Torres",
    url: "https://www.linkedin.com/in/igorttdp",
  },
  creator: "Igor Torres",
  publisher: "Studio Tráfego",
  openGraph: {
    title: "Taiuá Ambiental - Um lugar incrível para momentos especiais",
    description:
      "Pousada e Camping Taiuá Ambiental, um lugar incrível para quem busca uma experiência única e sustentável em contato com a natureza.",
    url: "https://pousadataiua.com",
    siteName: "Taiuá Ambiental - Um lugar incrível para momentos especiais",
    images: [
      {
        url: "https://pousadataiua.com/taiua_ambiental_logo_open_graph.png",
        width: 800,
        height: 600,
        alt: "Logo Oficial - Taiuá Ambiental 2024",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiuá Ambiental - Um lugar incrível para momentos especiais",
    description:
      "Pousada e Camping Taiuá Ambiental, um lugar incrível para quem busca uma experiência única e sustentável em contato com a natureza.",
    siteId: "1321070245612818433",
    creator: "@igor_ttdp",
    creatorId: "1321070245612818433",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} >
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
