import Link from "next/link";
import WorkoutActions from "../../../components/WorkoutActions";
import {
  ArrowLeft,
  Clock3,
  Flame,
  Gauge,
  Dumbbell,
  Layers3,
  Star,
} from "lucide-react";
import { getWorkout } from "../../../lib/api";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase">Workout Not Found</h1>
          <p className="mt-3 text-white/50">
            The workout you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
          >
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0b0b0b]">
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/60 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={18} />
          Back to Library
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-[350px] w-full object-cover md:h-[550px]"
            />
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#ccff00]"
                >
                  {group}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase leading-none md:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-6 text-base leading-7 text-white/60">
              {workout.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Dumbbell size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">
                  Equipment
                </p>
                <p className="mt-1 text-sm font-bold">{workout.equipment}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Gauge size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">
                  Difficulty
                </p>
                <p className="mt-1 text-sm font-bold">{workout.difficulty}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Layers3 size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">Sets</p>
                <p className="mt-1 text-sm font-bold">{workout.sets}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Dumbbell size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">Reps</p>
                <p className="mt-1 text-sm font-bold">{workout.reps}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Clock3 size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">Duration</p>
                <p className="mt-1 text-sm font-bold">{workout.duration} min</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <Flame size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">Calories</p>
                <p className="mt-1 text-sm font-bold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4 sm:col-span-3">
                <Star size={18} className="text-[#ccff00]" />
                <p className="mt-3 text-xs uppercase text-white/40">Rating</p>
                <p className="mt-1 text-sm font-bold">{workout.rating} / 5</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-black uppercase">INSTRUCTIONS</h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-[#141414] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-white/70">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </section>
    </main>
  );
}