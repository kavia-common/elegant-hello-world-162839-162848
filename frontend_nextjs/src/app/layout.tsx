import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elegant Hello World",
  description: "A sophisticated Hello World with modern UI, animation, and responsive design.",
  applicationName: "Elegant Hello World",
  authors: [{ name: "Elegant UI" }],
  themeColor: "#ffffff",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
