import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-black">ShopMart</span>
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Discover the latest technology, fashion, and lifestyle products.
          Quality guaranteed with fast shipping and excellent customer service.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-black text-white px-10 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          <Link
            href="/categories"
            className="border border-black text-black px-10 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
