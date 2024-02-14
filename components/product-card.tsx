import { Button } from "./ui/button";

export default function ProductCard() {
  return (
    <div className="rounded-md flex flex-col gap-2 relative group cursor-pointer">
      <div className="relative aspect-[12/16] bg-gray-100 rounded-md p-4 flex items-center justify-center">
        Image
        <div className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 -translate-x-1/2 w-full p-4">
          <Button variant="default" className="w-full">
            Add To Cart
          </Button>
        </div>
      </div>
      <div>
        <p className="font-semibold">Item Name</p>
        <p className="text-gray-700 text-lg">RM20.00</p>
      </div>
    </div>
  );
}
