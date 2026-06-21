import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-14 sm:px-10 lg:px-12">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="relative mb-10 aspect-[1739/1073] w-full max-w-[420px] overflow-hidden rounded-[20px] bg-black shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:max-w-[580px] md:max-w-[720px]">
            <Image
              src="/boldly-built-logo.png"
              alt="Boldly Built"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 720px, 720px"
            />
          </div>

          <h1 className="text-4xl font-light uppercase leading-none tracking-[0.2em] text-white sm:text-5xl md:text-6xl">
            Coming Soon
          </h1>
        </div>
      </section>
    </main>
  );
}
