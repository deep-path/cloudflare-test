import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REF Finance",
  description: "Ref finance landing page",
  icons: {
    icon: '/favicon.svg',
    shortcut: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
