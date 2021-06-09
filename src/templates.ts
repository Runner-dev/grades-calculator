import type { Grade } from "./types/grades";

interface Templates {
  [slug: string]: {
    name: string;
    grades: Array<Grade>;
  };
}

const templates: Templates = {
  "estudos-literarios": {
    name: "Estudos Literários",
    grades: [
      {
        name: "LT 1",
        weight: 8,
        id: 0,
      },
      {
        name: "LT 2",
        weight: 10,
        id: 1,
      },
      {
        name: "LT 3",
        weight: 7,
        id: 2,
      },
      {
        name: "P1",
        weight: 15,
        id: 3,
      },
      {
        name: "P2",
        weight: 30,
        id: 4,
      },
      {
        name: "P3",
        weight: 30,
        id: 5,
      },
    ],
  },
};

export default templates;
