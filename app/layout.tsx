import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://boldlybuilt.co"),
  title: "Boldly Built | Coming Soon",
  description: "Boldly Built is coming soon.",
  openGraph: {
    title: "Boldly Built | Coming Soon",
    description: "Boldly Built is coming soon.",
    url: "https://boldlybuilt.co",
    siteName: "Boldly Built",
    images: [
      {
        url: "/boldly-built-logo.png",
        width: 1536,
        height: 2048,
        alt: "Boldly Built logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boldly Built | Coming Soon",
    description: "Boldly Built is coming soon.",
    images: ["/boldly-built-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
