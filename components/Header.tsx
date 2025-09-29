import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo-red.png" alt="ZED logo" width={56} height={56} className="rounded-full" />
        <span className="text-2xl font-semibold tracking-wide">ZED</span>
      </Link>
      <nav className="flex gap-5 text-sm">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/sleep-kits" className="hover:underline">Sleep Kits</Link>
        <Link href="/about" className="hover:underline">About ZED</Link>
        <Link href="/journal" className="hover:underline">Sleep Journal</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
