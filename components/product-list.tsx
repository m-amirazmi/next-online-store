import { cn } from "@/lib/utils";
import ProductCard from "./product-card";

interface ProductListProps {
  column?: 2 | 3 | 4 | 5;
}

export default function ProductList({ column = 3 }: ProductListProps) {
  const columns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Latest Products</h2>
      <div className={cn("grid gap-x-4 gap-y-6 grid-cols-2", columns[column])}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
