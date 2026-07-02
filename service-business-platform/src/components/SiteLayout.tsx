import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Explore from "./sections/Explore";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Explore />

      <main style={{ paddingTop: 70, flex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}