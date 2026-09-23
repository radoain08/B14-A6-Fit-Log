"use client";

import toast from "react-hot-toast";
import { useFitLog } from "../context/FitLogContext";

export default function WorkoutActions({ workout }) {
  const {
    plan,
    saved,
    addToPlan,
    saveForLater,
  } = useFitLog();

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  function handleAddToPlan() {
    if (isInPlan) {
      toast("Already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan can have up to 5 lifts.");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan!");
  }

  function handleSave() {
    if (isSaved) {
      toast("Already saved.");
      return;
    }

    saveForLater(workout);
    toast.success("Saved for later!");
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:scale-[1.02]"
      >
        {isInPlan ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        className="rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}