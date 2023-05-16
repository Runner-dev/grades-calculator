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
      { name: "DOC", weight: 15 },
      { name: "Sondagem 2", weight: 5 },
      { name: "Sondagem 3", weight: 5 },
      { name: "Site MNM", weight: 5 },
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
  quimica2: {
    name: "Química",
    grades: [
      { name: "Lab redox", weight: 2 },
      { name: "Lab gases", weight: 2 },
      { name: "Lab 10 (diluição)", weight: 2 },
      { name: "Lab 11 (titulação)", weight: 2 },
      { name: "Lab 12 (prop. coligativas)", weight: 2 },
      { name: "Lab 13 (termoquimica)", weight: 3 },
      { name: "Sondagem 4", weight: 2 },
      { name: "Sondagem 5", weight: 2 },
      { name: "Sondagem 6", weight: 3 },
      { name: "P4", weight: 25 },
      { name: "P5 (geral)", weight: 5 },
      { name: "P5 (especifica)", weight: 15 },
      { name: "P6", weight: 35, regression: true },
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
  biologia: {
    name: "Biologia",
    grades: [
      { name: "S1", weight: 5 },
      { name: "P4", weight: 25 },
      { name: "S2", weight: 8 },
      { name: "P5 - Biologia", weight: 15 },
      { name: "P5 - Geral", weight: 5 },
      { name: "S3", weight: 7 },
      { name: "P6 - Dissertativa", weight: 25, regression: true },
      { name: "P6 - Teste", weight: 10, regression: true },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      { name: "Sondagem 4", weight: 6 },
      { name: "P4", weight: 25 },
      { name: "Sondagem 5", weight: 7 },
      { name: "P5 - Matemática", weight: 15 },
      { name: "P5 - Geral", weight: 5, helper: "Nota geral na prova" },
      { name: "Sondagem 6", weight: 7 },
      { name: "P6", weight: 35, regression: true },
    ],
  },
  historia: {
    name: "História",
    grades: [
      { name: "P4", weight: 25 },
      { name: "P5 - Geral", weight: 5 },
      { name: "P5 - História", weight: 15 },
      { name: "P6 - Dissertativa", weight: 25, regression: true },
      { name: "P6 - Teste", weight: 10, regression: true },
      { name: "Documentário", weight: 10 },
      { name: "Site MNM", weight: 10 },
    ],
  },
  geografia: {
    name: "Geografia",
    grades: [
      { weight: 5, name: "Sondagem 3 - Dissertativa" },
      { weight: 25, name: "Prova 4" },
      { weight: 5, name: "Sondagem 4 - Teste" },
      { weight: 15, name: "Prova 5 - Específica" },
      { weight: 5, name: "Prova 5 - Geral" },
      { weight: 5, name: "Documentário MNM - Versão 2" },
      { weight: 25, name: "Prova 6 - Dissertativa" },
      { weight: 10, name: "Prova 6 - Teste" },
      { weight: 5, name: "Site MNM - Versão 2" },
    ],
  },
  inglesi2: {
    name: "Inglês I2",
    grades: [
      { name: "Sondagem 1", weight: 5 },
      { name: "P4", weight: 20 },
      { name: "Sondagem 2", weight: 5 },
      { name: "Sondagem 3", weight: 10 },
      { name: "Sondagem 4", weight: 10 },
      { name: "Sondagem 5", weight: 5 },
      { name: "Sondagem 6", weight: 20 },
      { name: "P6", weight: 25, regression: true },
    ],
  },
};

export default templates;
