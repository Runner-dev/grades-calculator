import type { Grade } from "src/types/grades";

export default function calculateMissingRequiredGrade(grades: Array<Grade>) {
  const { weight, value } = grades.reduce(
    (prev, grade) => ({
      weight: prev.weight + grade.weight,
      value: prev.value + grade.value * grade.weight,
    }),
    { weight: 0, value: 0 }
  );

  if (weight === 100) return 0;

  const missingWeighted = 476 - value;

  return Math.ceil((missingWeighted / (100 - weight)) * 100) / 100;
}
