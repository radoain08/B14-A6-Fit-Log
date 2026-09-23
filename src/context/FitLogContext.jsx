"use client";

import { createContext, useContext, useMemo, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  function addToPlan(workout) {
    setPlan((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      if (current.length >= 5) {
        return current;
      }

      return [...current, workout];
    });
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
  }

  function saveForLater(workout) {
    setSaved((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  }

  function removeFromSaved(id) {
    setSaved((current) => current.filter((item) => item.id !== id));
  }

  const value = useMemo(
    () => ({
      plan,
      saved,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeFromSaved,
    }),
    [plan, saved]
  );

  return (
    <FitLogContext.Provider value={value}>
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}