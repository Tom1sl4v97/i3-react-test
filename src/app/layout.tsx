import type { Metadata } from "next";
import { Inter } from "next/font/google";
import style from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i3-react-test",
  description: "i3-react-test description :D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  );
}
