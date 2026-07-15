import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "STRIDES Pakistan | Strategic Research Institute",
    template: "%s | STRIDES Pakistan",
  },
  description:
    "Strategic Research Institute for Defence, Emerging Threats and Security — advancing research, training and policy dialogue in Pakistan.",
  keywords: ["defence research", "strategic studies", "Pakistan security", "cyber security", "emerging threats"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
