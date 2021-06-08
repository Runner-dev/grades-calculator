import type { Grade } from "../types/grades";
import mobileRound from "./mobileRound";

export default function calculateAverage(grades: Array<Grade>) {
  const value = grades.reduce(
    (prev, grade) => prev + grade.value * grade.weight,
    0
  );

  const calculated = mobileRound(value / 100);

  return isNaN(calculated) ? 0 : calculated;
}
