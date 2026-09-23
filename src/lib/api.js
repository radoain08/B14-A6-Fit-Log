const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}