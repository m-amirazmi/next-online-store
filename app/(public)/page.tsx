import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductList from "@/components/product-list";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col">
      <div className="my-4">
        <Hero />
      </div>
      <div className="my-4">
        <ProductList column={5} />
      </div>
    </div>
  );
}
