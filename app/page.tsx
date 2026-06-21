import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-bone">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-14 sm:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-bone/20" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-bone/10" />

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="relative mb-10 aspect-[1739/1073] w-full max-w-[420px] overflow-hidden rounded-[20px] bg-[#13161a] shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:max-w-[580px] md:max-w-[720px]">
            <Image
              src="/boldly-built-logo.png"
              alt="Boldly Built"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 720px, 720px"
            />
          </div>

          <h1 className="text-5xl font-black uppercase leading-none text-bone sm:text-6xl md:text-7xl lg:text-8xl">
            Coming Soon
          </h1>
        </div>
      </section>
    </main>
  );
}
