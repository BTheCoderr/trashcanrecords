import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BTheSound | Trash Can Records",
  description:
    "Official fan hub for BTheSound — stream music, watch visuals, shop merch, and join the Trash Can Records list.",
  openGraph: {
    title: "BTheSound | Trash Can Records",
    description: "Music for the ones who feel everything.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
