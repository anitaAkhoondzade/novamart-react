export default function ProductImage({ image, title }) {
  return (
    <div className="w-full md:w-96 shrink-0 flex justify-center">
      <img
        src={image}
        alt={title}
        className="h-96 rounded-xl object-contain"
      />
    </div>
  );
}
