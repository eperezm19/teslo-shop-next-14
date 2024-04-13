import { Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const titleFont = Montserrat_Alternates({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-title",
});
