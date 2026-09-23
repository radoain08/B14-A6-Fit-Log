"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getWorkouts } from "../lib/api";
import Loading from "../components/Loading";
import WorkoutCard from "../components/WorkoutCard";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [workouts, sortBy]);

  return (
    <main className="bg-[#0b0b0b]">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            <span>BROWSE WORKOUTS</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/banner.png"
            alt="Workout training"
            className="h-[360px] w-full object-cover md:h-[500px]"
          />
        </div>
      </section>

      <section id="library" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-black uppercase">THE LIBRARY</h2>

            <p className="mt-3 text-white/50">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="relative">
            <label
              htmlFor="sort"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="appearance-none rounded-full border border-white/20 bg-[#141414] py-3 pl-4 pr-10 text-sm font-bold text-white outline-none transition focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}