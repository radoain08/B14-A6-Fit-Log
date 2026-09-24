
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Bookmark } from "lucide-react";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

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
            className={
              isWorkoutActive
                ? "text-sm font-semibold uppercase tracking-wide text-[#ccff00]"
                : "text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-white"
            }
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={
              isPlanActive
                ? "text-sm font-semibold uppercase tracking-wide text-[#ccff00]"
                : "text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-white"
            }
          >
            My Plan
          </Link>
        </div>

        <Link href="/my-plan" className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-2 text-sm font-bold text-black">
            <span className="hidden sm:inline">Plan</span>
            <span>{plan.length}</span>
          </span>

          <span className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm font-bold text-white">
            <Bookmark size={16} />
            <span className="hidden sm:inline">Saved</span>
            <span>{saved.length}</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}

