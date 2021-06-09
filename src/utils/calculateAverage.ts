import type { Grade } from "../types/grades";
import mobileRound from "./mobileRound";

export default function calculateAverage(grades: Array<Grade>) {
  const value = grades.reduce((prev, grade) => {
    if (typeof grade.value === "number")
      return prev + grade.value * grade.weight;
    return prev;
  }, 0);

  const calculated = mobileRound(value / 100);

  return isNaN(calculated) ? 0 : calculated;
}
