# FitLog — Workout Library

FitLog is a dark, responsive workout library and fitness planner built with Next.js. Users can browse workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and track their daily workout stats.

## Technologies

- Next.js
- React
- JavaScript
- Tailwind CSS
- Lucide React
- React Hot Toast
- REST API
- LocalStorage

## Key Features

- Browse a workout library with responsive workout cards
- View detailed workout information with instructions and specifications
- Add up to five workouts to Today's Plan
- Save workouts for later
- Track total exercises, minutes, and calories
- Mark workouts as Done with toast notifications
- Remove planned or saved workouts
- Sort workouts by duration, calories, or rating
- Persist Plan and Saved workouts using LocalStorage
- Custom 404 page for invalid routes
- Responsive design for mobile, tablet, and desktop

## API

All workout data is loaded from:

`https://api.abcz.workers.dev/api/fitlog`

Single workout:

`https://api.abcz.workers.dev/api/fitlog/:id`

## Project Structure

```text
src/
├── app/
│   ├── workout/
│   │   └── [id]/
│   │       └── page.js
│   ├── my-plan/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   └── globals.css
├── components/
├── context/
└── lib/