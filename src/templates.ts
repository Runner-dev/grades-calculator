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
      { name: "P4", weight: 20 },
      { name: "LT - Úrsula", weight: 5 },
      { name: "P5 - EL", weight: 15 },
      { name: "P5 - Geral", weight: 5, helper: "Nota geral na prova" },
      { name: "LT - Quincas Borba", weight: 5 },
      { name: "MNM - Documentário", weight: 10 },
      { name: "P6", weight: 30, regression: true },
      { name: "LT - Nós Matamos o Cão Tinhoso", weight: 5 },
      { name: "MNM - Site", weight: 5 },
    ],
  },
  filosofia: {
    name: "Filosofia",
    grades: [
      { name: "P4", weight: 20 },
      { name: "Sondagem Aristóteles", weight: 5 },
      { name: "P5", weight: 20 },
      { name: "Outras Sondagens + MNM", weight: 30, disabled: true },
      { name: "P6", weight: 25, regression: true },
    ],
  },
  fisica: {
    name: "Física",
    grades: [
      { name: "Sondagem 4", weight: 7 },
      { name: "P4", weight: 25 },
      { name: "Sondagem 5", weight: 7 },
      { name: "P5 - Física", weight: 15 },
      { name: "P5 - Geral", weight: 5, helper: "Nota geral na prova" },
      { name: "Sondagem 6", weight: 6 },
      { name: "P6", weight: 35, regression: true },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      { name: "P4", weight: 25 },
      { name: "LAB 12 Propriedades Coligativas", weight: 2 },
      { name: "Lab. Redox", weight: 2 },
      { name: "LAB 10 Diluição", weight: 2 },
      { name: "LAB 11 Titulação", weight: 2 },
      { name: "Lab. Gases", weight: 2 },
      { name: "Sondagem P5", weight: 2 },
      { name: "P5 - Química", weight: 15 },
      { name: "P5 - Geral", weight: 5, helper: "Nota geral na prova" },
      { name: "Período P6", unknown: true, weight: 43, regression: true },
    ],
  },
  "lingua-producao": {
    name: "Língua e Produção",
    grades: [
      { name: "P4", weight: 15 },
      { name: "P5 - LP", weight: 10 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P6", weight: 20, regression: true },
      { name: "Documentário", weight: 10 },
      {
        name: "R1 - Vídeo",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3442176/assignments/37938267",
      },
      {
        name: "R2 - Vídeo",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3442176/assignments/38870708",
      },
      { name: "R3 - Debate", weight: 10 },
      { name: "R4 - Argumentativa", weight: 10 },
    ],
  },
};

export default templates;
