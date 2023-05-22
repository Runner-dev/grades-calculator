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
      { name: "S1", weight: 12 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 13 },
      { name: "P2", weight: 20 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  "etica-cidadania": {
    name: "Ética e Cidadania",
    grades: [
      { name: "S1", weight: 5 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 5 },
      { name: "P2", weight: 25 },
      { name: "S3", weight: 5 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 15 },
    ],
  },
  filosofia: {
    name: "Filosofia",
    grades: [
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 25 },
      { name: "P2", weight: 25 },
      { name: "P3", weight: 40, disabled: true },
    ],
  },
  fisica: {
    name: "Física",
    grades: [
      { name: "S1", weight: 7.5 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 7.5 },
      { name: "P2", weight: 20 },
      { name: "S3", weight: 10 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      { name: "S1", weight: 3.33 },
      { name: "Lab 1", weight: 5 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 3.33 },
      { name: "Lab 2", weight: 5 },
      { name: "P2", weight: 20 },
      { name: "S3", weight: 3.33 },
      { name: "Lab 3", weight: 5 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  "lingua-producao": {
    name: "Língua e Produção",
    grades: [
      { name: "R1", weight: 3 },
      { name: "R2", weight: 5 },
      { name: "P1 - Teste", weight: 5 },
      { name: "P1 - Dissertativa", weight: 10 },
      { name: "R3", weight: 7 },
      { name: "R4", weight: 10 },
      { name: "P2", weight: 15 },
      { name: "R5", weight: 12 },
      { name: "R6", weight: 13 },
      { name: "P3 - Teste", weight: 6 },
      { name: "P3 - Dissertativa", weight: 14 },
    ],
  },
  biologia: {
    name: "Biologia",
    grades: [
      { name: "S1", weight: 7 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 8 },
      { name: "P2", weight: 20 },
      { name: "S3", weight: 10 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      { name: "S1", weight: 4 },
      { name: "S2", weight: 4 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S3", weight: 9 },
      { name: "P2", weight: 20 },
      { name: "S4", weight: 4 },
      { name: "S5", weight: 4 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  historia: {
    name: "História",
    grades: [
      { name: "S1", weight: 7 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 7 },
      { name: "P2", weight: 20 },
      { name: "S3", weight: 11 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
  geografia: {
    name: "Geografia",
    grades: [
      { name: "S1", weight: 7 },
      { name: "P1 - Teste", weight: 10 },
      { name: "P1 - Dissertativa", weight: 15 },
      { name: "S2", weight: 9 },
      { name: "P2", weight: 20 },
      { name: "S3", weight: 9 },
      { name: "P3 - Teste", weight: 10 },
      { name: "P3 - Dissertativa", weight: 20 },
    ],
  },
};

export default templates;
