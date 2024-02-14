import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LayoutPublic({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
      <Navbar />
      <div className="mb-8">{children}</div>
      <Footer />
    </main>
  );
}
