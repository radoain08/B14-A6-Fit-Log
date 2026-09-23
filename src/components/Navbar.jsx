"use client";

import Link from "next/link";
import { Dumbbell, Bookmark } from "lucide-react";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();

  return (
    <nav className="border-b border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell size={24} />
          <span className="text-xl font-black tracking-wider">FITLOG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-wide text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm"
        >
          <span className="hidden sm:inline">Plan</span>
          <span className="font-bold text-[#ccff00]">{plan.length}</span>

          <Bookmark size={16} />

          <span className="hidden sm:inline">Saved</span>
          <span className="font-bold">{saved.length}</span>
        </Link>
      </div>
    </nav>
  );
}