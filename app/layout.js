import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Africa World Market",
  description: "tastes of home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="h-dvh flex flex-col gap-2 tablet:gap-4   w-full ">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
