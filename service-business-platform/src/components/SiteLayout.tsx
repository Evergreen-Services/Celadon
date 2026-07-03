import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}