import Hero from "../components/Hero";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-12">
      <Hero />
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-zedPink/15 p-8">
          <h2 className="text-2xl font-semibold">🌿 The Natural Collection</h2>
          <p className="mt-2">Breathable classics made to last — cotton, linen, silk.</p>
          <Link className="mt-4 inline-block underline" href="/shop">Explore the Collection</Link>
        </div>
        <div className="rounded-3xl bg-zedOlive/20 p-8">
          <h2 className="text-2xl font-semibold">🍃 The Organic Collection</h2>
          <p className="mt-2">Planet-kind and ultra-soft — bamboo cotton & banana fibre.</p>
          <Link className="mt-4 inline-block underline" href="/shop">Explore the Collection</Link>
        </div>
      </section>
      <section className="rounded-3xl bg-white p-8">
        <h2 className="text-2xl font-semibold">🐰 Meet the Bunny</h2>
        <p className="mt-2 max-w-2xl">
          Our shy, peeking bunny is the heart of ZED — a symbol of stillness, softness, and a little whimsy.
        </p>
        <Link className="mt-4 inline-block underline" href="/about#bunny">The story behind the bunny →</Link>
      </section>
    </div>
  );
}
