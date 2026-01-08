//
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "M Ibrahim Khan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="dark:bg-darkTheme dark:text-white">{children}</body>
    </html>
  );
}
