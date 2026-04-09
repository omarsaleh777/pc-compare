import Link from "next/link";

const FOOTER_LINKS = ["Privacy Policy", "Terms of Service", "API Status", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-black text-lg font-headline tracking-tighter">
            PC Compare
          </span>
          <p className="font-mono text-[10px] uppercase text-outline tracking-widest">
            © 2024 PC Compare | Precision Silicon Architect
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((label) => (
            <Link
              key={label}
              href="#"
              className="font-mono text-[10px] uppercase text-outline hover:text-primary underline-offset-4 hover:underline transition-all tracking-widest"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
