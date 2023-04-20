import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
