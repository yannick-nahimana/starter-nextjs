import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Starter template",
  description: "this is a starter template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="h-dvh flex flex-col gap-2 tablet:gap-4 p-2 tablet:p-4 w-full max-w-[1024px] ">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
