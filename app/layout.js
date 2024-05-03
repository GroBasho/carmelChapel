import "./reset.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Carmel Chapel",
  description: "OUR LADY OF CARMEL CHAPEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='Abril-Regular'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
