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
  fisica: {
    name: "Física",
    grades: [
      {
        name: "NC1",
        weight: 25 / 3,
        url: "https://escolamobile.instructure.com/courses/3168647/quizzes/7725216",
      },
      {
        name: "NC2",
        helper:
          "(Multiplique a nota da dissertativa por 2 e some com a nota da parte teste)",
        weight: 25 / 3,
        url: "https://escolamobile.instructure.com/courses/3168647/pages/aula-26-slash-04-nc2-calorimetria",
      },
      {
        name: "NC3",
        helper:
          "(Multiplique a nota da dissertativa por 3 e some com a nota da parte teste)",
        weight: 25 / 3,
        url: "https://escolamobile.instructure.com/courses/3168647/pages/aula-24-slash-05-nc3-dilatacao",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "P3",
        weight: 30,
      },
    ],
  },
};

export default templates;
