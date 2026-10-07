import { useEffect, useState } from 'react'

const FRIDAY = 5
const PRACTICE_END_HOUR = 21

// Computed in the browser so the static page never shows a stale date.
export const useNextPractice = (): string | null => {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const now = new Date()
    const next = new Date(now)
    let daysAhead = (FRIDAY - now.getDay() + 7) % 7
    if (daysAhead === 0 && now.getHours() >= PRACTICE_END_HOUR) daysAhead = 7
    next.setDate(now.getDate() + daysAhead)
    setLabel(
      daysAhead === 0
        ? 'Tonight'
        : next.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
    )
  }, [])

  return label
}
