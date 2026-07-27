export default function ProductActions({ product }) {
  return (
    <div className="mt-6">
      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700 cursor-pointer">
        🛒
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
