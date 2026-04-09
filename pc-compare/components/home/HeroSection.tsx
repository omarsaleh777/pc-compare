import SearchBar from "@/components/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] flex flex-col items-center justify-center px-6 lg:px-8 overflow-hidden">

      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-FAUb3OwJP1GU8Rh0vCzmFI8t3wymfMa0UQAawqrFisb39um0FcwyVEHL6ukUFd3SAUxiGHIa0Yl_6Z4x5TD1pLHizBwn9UnXcjF8trmERYOOGOOkEOPPA55J1VeJJL4ZRYzdHBGyVNO6Z3DaAUFwyB6ETVw7HcdL4pvkAiNJkiu3asuXJwamdEOpKP0jU3ECmlbiLSePFwqAyQ7OSoeyd9CLnLWS-nY1WcDyK2TwfVWG5bqBs7ks8E9gKYFuuKFWM2egNHjjUFPW')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient fade from transparent → surface */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/70 to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">

        {/* Eyebrow label */}
        <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-6 block">
          Precision Silicon Architect
        </span>

        {/* Hero headline */}
        <h1 className="font-headline font-black tracking-hero leading-none mb-8
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          ENGINEER YOUR{" "}
          <br />
          <span className="gradient-text">PERFORMANCE.</span>
        </h1>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 blur-xl group-focus-within:bg-primary/40 transition-all duration-500 rounded-xl pointer-events-none" />
          <div className="relative flex items-center bg-surface-container-highest border border-outline-variant/20 rounded-xl p-2 gap-2">
            <svg
              className="ml-3 w-5 h-5 text-on-surface-variant shrink-0"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <SearchBar className="flex-1 bg-transparent border-none focus:ring-0 px-2 py-3 text-base font-body placeholder:text-on-surface-variant/50 text-on-surface outline-none" />
            <button className="bg-primary-gradient text-on-primary font-label font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all active:scale-95 shrink-0 text-sm tracking-wider">
              COMPARE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
