import type { Grade } from "src/types/grades";

export default function calculateMissingRequiredGrade(grades: Array<Grade>) {
  const { weight, value, regressionWeight } = grades.reduce<{
    weight: number;
    value: number;
    regressionWeight: number;
  }>(
    (prev, grade) => {
      if (typeof grade.value === "number") {
        return {
          ...prev,
          weight: prev.weight + grade.weight,
          value: prev.value + grade.value * grade.weight,
        };
      } else if (grade.regression) {
        return {
          ...prev,
          regressionWeight: prev.regressionWeight + grade.weight,
        };
      }
      return prev;
    },
    { weight: 0, value: 0, regressionWeight: 0 }
  );

  if (weight === 100) return 0;

  const missingWeighted = 500 - value;
  const missingWeight = 100 - weight;
  const valueOfRegressions = regressionWeight * 3.5;
  const missingWeightWithoutRegressions = missingWeight - regressionWeight;

  if (
    (missingWeighted - valueOfRegressions) / missingWeightWithoutRegressions <
    3.5
  )
    return Math.max(
      Math.ceil(
        ((missingWeighted - valueOfRegressions) /
          missingWeightWithoutRegressions) *
          100
      ) / 100,
      0
    );
  return Math.max(Math.ceil((missingWeighted / missingWeight) * 100) / 100, 0);
}
