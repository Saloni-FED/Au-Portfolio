import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aistear Unica: Find the Perfect Makeup Artist for Any Occasion in India",
  description: "Aistear Unica is elevating beauty, one visit at a time. Book top-rated makeup artists in India for weddings, events, parties & more on Aistear Unica. Get flawless makeup for every occasion.",
  keywords: "makeup artist India, bridal makeup artist India, aistear unica, makeup for weddings, hire makeup artists"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
