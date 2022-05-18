import type { Grade } from "./types/grades";

interface Templates {
  [slug: string]: {
    hasMnm?: boolean;
    name: string;
    grades: Array<Grade>;
  };
}

const templates: Templates = {
  biologia: {
    name: "Biologia",
    grades: [
      { name: "P1 Dissertativa", weight: 15 },
      { name: "P1 Teste", weight: 10 },
      { name: "Sondagem 1", weight: 5 },
      { name: "P2 Disseratativa", weight: 15 },
      { name: "P2 Teste", weight: 10 },
      { name: "Sondagem 2", weight: 5 },
      { name: "P3 Dissertativa", weight: 21 },
      { name: "P3 Teste", weight: 14 },
      { name: "Sondagem 3", weight: 5 },
    ],
  },
  "estudos-literarios": {
    name: "Estudos Literários",
    hasMnm: true,
    grades: [
      { name: "LT1", weight: 5 },
      { name: "P1 Dissertativa", weight: 12 },
      { name: "P1 Teste", weight: 8 },
      { name: "LT2", weight: 5 },
      { name: "Seminário MNM", weight: 4 },
      { name: "P2 Disseratativa", weight: 14 },
      { name: "P2 Teste", weight: 10 },
      { name: "Sondagem 3", weight: 5 },
      { name: "P3 Teste", weight: 10 },
      { name: "P3 Dissertativa", weight: 16 },
      { name: "Site MNM", weight: 5 },
      { name: "Doc MNM", weight: 6 },
    ],
  },
  "etica-cidadania": {
    name: "Ética e Cidadania",
    grades: [
      { name: "P1 Dissertativa", weight: 15 },
      { name: "P1 Teste", weight: 10 },
      { name: "Sondagem 1", weight: 5 },
      { name: "P2 Redação", weight: 25 },
      { name: "Sondagem 2", weight: 5 },
      { name: "P3 Dissertativa", weight: 25 },
      { name: "P3 Teste", weight: 10 },
      { name: "Sondagem 3", weight: 5 },
    ],
  },
  filososfia: {
    name: "Filosofia",
    grades: [
      { name: "P1 Redação", weight: 25 },
      { name: "Sondagem 1", weight: 5 },
      { name: "P2 Dissertativa", weight: 15 },
      { name: "Seminário MNM", weight: 5 },
      { name: "P3 Redação", weight: 25 },
      { name: "Site MNM", weight: 8 },
      { name: "Doc MNM", weight: 17 },
    ],
  },
  fisica: {
    name: "Física",
    grades: [
      { name: "P1 Dissertativa", weight: 15 },
      { name: "P1 Teste", weight: 10 },
      { name: "Sondagem 1", weight: 6 },
      { name: "P2 Disseratativa", weight: 15 },
      { name: "P2 Teste", weight: 10 },
      { name: "Sondagem 2", weight: 7 },
      { name: "P3 Dissertativa", weight: 18 },
      { name: "P3 Teste", weight: 12 },
      { name: "Sondagem 3", weight: 7 },
    ],
  },
  historia: {
    name: "História",
    grades: [
      { name: "P1 Teste", weight: 10 },
      { name: "P1 Dissertativa", weight: 15 },
      { name: "Sondagem 1", weight: 3 },
      { name: "P2 Disseratativa", weight: 15 },
      { name: "P2 Teste", weight: 10 },
      { name: "P3 Dissertativa", weight: 20 },
      { name: "P3 Teste", weight: 10 },
      { name: "Seminário MNM", weight: 5 },
      { name: "Site MNM", weight: 6 },
      { name: "Doc MNM", weight: 6 },
    ],
  },
  "lingua-producao": {
    name: "Língua e produção",
    grades: [
      { name: "P1 Dissertativa", weight: 10 },
      { name: "P1 Teste", weight: 5 },
      { name: "R1", weight: 10 },
      { name: "R2", weight: 10 },
      { name: "P2 Disseratativa", weight: 10 },
      { name: "P2 Teste", weight: 5 },
      { name: "R3", weight: 10 },
      { name: "P3 Teste", weight: 5 },
      { name: "P3 Dissertativa", weight: 15 },
      { name: "R4", weight: 20, unknown: true },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      { name: "P1 Dissertativa", weight: 15 },
      { name: "P1 Teste", weight: 10 },
      { name: "Sondagem 1", weight: 5 },
      { name: "Sondagem 2", weight: 2 },
      { name: "P2 Disseratativa", weight: 15 },
      { name: "P2 Teste", weight: 10 },
      { name: "Sondagem 3", weight: 2 },
      { name: "Sondagem 4", weight: 5 },
      { name: "P3 Teste", weight: 12 },
      { name: "P3 Dissertativa", weight: 18 },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      { name: "Laboratório 1", weight: 2 },
      { name: "Laboratório 2", weight: 2 },
      { name: "Laboratório 3", weight: 2 },
      { name: "P1 Dissertativa", weight: 15 },
      { name: "P1 Teste", weight: 10 },
      { name: "Sondagem 1", weight: 2 },
      { name: "Laboratório 4", weight: 2 },
      { name: "P2 Disseratativa", weight: 15 },
      { name: "P2 Teste", weight: 10 },
      { name: "Sondagem 2", weight: 2 },
      { name: "P3 Teste", weight: 12 },
      { name: "P3 Dissertativa", weight: 18 },
      { name: "Sondagem 3", weight: 2 },
      { name: "Laboratório 5", weight: 2 },
      { name: "Laboratório 6", weight: 2 },
      { name: "Laboratório 7", weight: 2 },
    ],
  },
};

export default templates;
