import { Montserrat } from 'next/font/google'

import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "ITS Incom",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}