import type { Metadata } from "next";
import '@fontsource/dm-serif-display';
import '@fontsource-variable/dm-sans';
import "./globals.css";


export const metadata: Metadata = {
  title: "agentall.ai - Future-Proof SAP Business One Success in the AI Era",
  description: "Purpose-built agentic AI for SAP Business One, empowering your enterprise with digital workers to maximize efficiency and optimize performance",
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
