import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-semibold">OS.</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/shop">Shop</Link>
          <Link href="/customer">My Account</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
