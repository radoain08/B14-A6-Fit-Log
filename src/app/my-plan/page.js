"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock3, Flame, Star, Check, X } from "lucide-react";
import { useFitLog } from "../../context/FitLogContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [completed, setCompleted] = useState([]);

  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  function handleDone(id) {
    setCompleted((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  function handleRemove(id) {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            FITLOG
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase md:text-7xl">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-2xl text-white/50">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">
              Exercises
            </p>
            <p className="mt-2 text-3xl font-black">{plan.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141414] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">
              Minutes
            </p>
            <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141414] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">
              Calories
            </p>
            <p className="mt-2 text-3xl font-black">{totalCalories}</p>
          </div>
        </div>

        <div className="mt-10 flex gap-3 border-b border-white/10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-4 py-3 text-sm font-black uppercase ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-white/50"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-4 py-3 text-sm font-black uppercase ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-white/50"
            }`}
          >
            Saved
          </button>
        </div>

        {currentList.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#141414] px-6 py-16 text-center">
            <h2 className="text-2xl font-black uppercase">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {currentList.map((workout) => {
              const isDone = completed.includes(workout.id);

              return (
                <article
                  key={workout.id}
                  className={`overflow-hidden rounded-2xl border border-white/10 bg-[#141414] ${
                    isDone ? "opacity-60" : ""
                  }`}
                >
                  <div className="grid sm:grid-cols-[180px_1fr]">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-52 w-full object-cover sm:h-full"
                    />

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-black uppercase">
                            {workout.name}
                          </h2>

                          <p className="mt-2 text-sm text-white/50">
                            {workout.equipment}
                          </p>
                        </div>

                        <button
                          onClick={() => handleRemove(workout.id)}
                          className="rounded-full p-2 text-white/40 transition hover:bg-white/10 hover:text-red-400"
                          aria-label="Remove workout"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-1 text-xs text-white/60">
                          <Clock3 size={14} />
                          {workout.duration} min
                        </div>

                        <div className="flex items-center gap-1 text-xs text-white/60">
                          <Flame size={14} />
                          {workout.caloriesBurned} kcal
                        </div>

                        <div className="flex items-center gap-1 text-xs text-white/60">
                          <Star size={14} />
                          {workout.rating}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link
                          href={`/workout/${workout.id}`}
                          className="rounded-full border border-white/20 px-4 py-2 text-xs font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                          View Details
                        </Link>

                        {activeTab === "plan" && (
                          <button
                            onClick={() => handleDone(workout.id)}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase ${
                              isDone
                                ? "bg-[#ccff00] text-black"
                                : "border border-white/20 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                            }`}
                          >
                            <Check size={15} />
                            {isDone ? "Done" : "Mark as Done"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}