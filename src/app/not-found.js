import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0b0b] px-5">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#141414]">
          <Dumbbell size={28} className="text-[#ccff00]" />
        </div>

        <p className="mt-8 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-3 text-7xl font-black uppercase md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase">
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-3 max-w-md text-white/50">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to workouts
        </Link>
      </div>
    </main>
  );
}