import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#1d1d1d]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="inline-flex rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-black uppercase leading-tight">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-white/50">{workout.equipment}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
          <div className="flex items-center gap-1.5 text-xs text-white/60">
            <Clock3 size={15} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/60">
            <Flame size={15} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/60">
            <Star size={15} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}