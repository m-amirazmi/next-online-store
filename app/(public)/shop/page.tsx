import Hero from "@/components/hero";
import ProductList from "@/components/product-list";

export default function ShopPage() {
  return (
    <div className="px-4 max-w-6xl mx-auto flex flex-col">
      <div className="my-4">
        <Hero size="small" />
      </div>
      <div className="my-4">
        <ProductList column={4} />
      </div>
    </div>
  );
}
