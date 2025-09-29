import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-zedOlive/30 p-10 md:p-16">
      <div className="absolute -right-24 -top-24 opacity-10">
        <Image src="/bunny.png" alt="Bunny" width={260} height={260} />
      </div>
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          ZED
        </h1>
        <p className="text-2xl mt-2 sparkle">Sleep Revolutionized</p>
        <p className="mt-4 max-w-xl text-balance">
          Sleepwear made with natural and organic fibres — for nights that feel as good as they look.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/sleep-kits" className="rounded-full bg-zedPurple text-white px-6 py-3 shadow">
            Explore Sleep Kits
          </Link>
          <Link href="/journal" className="rounded-full bg-white px-6 py-3 shadow">
            Explore the Sleep Journal
          </Link>
        </div>
      </div>
    </section>
  );
}
