export default function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to NovaMart</h1>

        <p className="text-lg text-gray-600 mb-8">
          Find the best products with the best prices.
        </p>

        <button
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700
transition cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
