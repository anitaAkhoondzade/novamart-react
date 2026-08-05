export default function NoResults({ title, description, action }) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-500">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}