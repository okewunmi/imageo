import { Geist, Geist_Mono, Inter, Inria_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Configure Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Configure Inria Sans with explicit weights
const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify the available weights
});

export const metadata = {
  title: "Sharefoto App",
  description:
    "Sharefoto is your home for creativity and connection. Start exploring, create folders, and share your stories with those who matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${inriaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
