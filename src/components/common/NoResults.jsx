export default function NoResults({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-75">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
}
