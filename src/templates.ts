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
      { name: "S3", weight: 12 },
      { name: "P4", weight: 25 },
      { name: "S4", weight: 13 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "P6", weight: 30 },
    ],
  },
  "etica-cidadania": {
    name: "Ética e Cidadania",
    grades: [
      { name: "P4", weight: 35 },
      { name: "P5 - Geral", weight: 10 },
      { name: "P5 - Específica", weight: 20 },
      { name: "P6", weight: 35 },
    ],
  },
  filosofia: {
    name: "Filosofia",
    grades: [
      { name: "P4", weight: 25 },
      { name: "P5", weight: 35 },
      { name: "P6", weight: 40 },
    ],
  },
  fisica: {
    name: "Física",
    grades: [
      { name: "S4", weight: 12.5 },
      { name: "P4", weight: 25 },
      { name: "S5", weight: 12.5 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "P6", weight: 30 },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      { name: "S4", weight: 4.33 },
      { name: "Lab 4", weight: 4 },
      { name: "P4", weight: 25 },
      { name: "S5", weight: 4.33 },
      { name: "Lab 5", weight: 4 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "S6", weight: 4.34 },
      { name: "Lab 6", weight: 4 },
      { name: "P6", weight: 30 },
    ],
  },
  "lingua-producao": {
    name: "Língua e Produção",
    grades: [
      { name: "R1", weight: 5 },
      { name: "R2", weight: 7 },
      { name: "R3", weight: 12 },
      { name: "R4", weight: 13 },
      { name: "R5", weight: 13 },
      { name: "P4", weight: 15 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 10 },
      { name: "P6", weight: 20 },
    ],
  },
  biologia: {
    name: "Biologia",
    grades: [
      { name: "S4", weight: 10 },
      { name: "P4", weight: 25 },
      { name: "S5", weight: 15 },
      { name: "P5 - Específica", weight: 15 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P6", weight: 30 },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      { name: "S4", weight: 15 },
      { name: "P4", weight: 25 },
      { name: "S5 - Fábio", weight: 5 },
      { name: "S5 - João", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P6", weight: 30 },
    ],
  },
  historia: {
    name: "História",
    grades: [
      { name: "S4", weight: 13 },
      { name: "P4", weight: 25 },
      { name: "S5", weight: 12 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "P6", weight: 30 },
    ],
  },
  geografia: {
    name: "Geografia",
    grades: [
      { name: "S4", weight: 8 },
      { name: "P4", weight: 25 },
      { name: "S5", weight: 8 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - Específica", weight: 15 },
      { name: "S6", weight: 8 },
      { name: "P6", weight: 30 },
    ],
  },
};

export default templates;
