import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="text-7xl mb-6">⚠️</div>
      <h1 className="font-headline text-5xl font-black tracking-hero text-on-surface mb-4">
        404
      </h1>
      <p className="text-on-surface-variant mb-8 text-sm font-label tracking-wide">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary-gradient text-on-primary py-3 px-8 rounded-lg
          font-label font-bold text-sm tracking-wider uppercase
          hover:brightness-110 active:scale-95 transition-all"
      >
        Go Home
      </Link>
    </main>
  );
}
