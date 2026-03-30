import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </main>
  );
}
