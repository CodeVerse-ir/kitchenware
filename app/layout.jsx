import "./globals.css";
import PageTransition from '../components/ui/PageTransition'
import StairTransition from '../components/ui/StairTransition'
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export const metadata = {
  title: "Kitchenware",
  description: "Generated by create next app",
  icons: {  
    icon: "../public/utils/image/logo/logo-img.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
