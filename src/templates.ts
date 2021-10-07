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
        url: "https://escolamobile.instructure.com/courses/3168644/pages/25-slash-02-aula-7-lt-1-e-genero-lirico?module_item_id=68942195",
        weight: 8,
      },
      {
        name: "LT 2",
        url: "https://escolamobile.instructure.com/courses/3168644/pages/01-slash-06-aula-30-lt-2?module_item_id=72241352",
        weight: 17,
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
  biologia: {
    name: "Biologia",
    grades: [
      {
        name: "NC 1",

        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168641/pages/aula-12-05-slash-03-biologia?module_item_id=69653776",
      },
      {
        name: "NC 2",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168641/quizzes/7811059",
      },
      {
        name: "NC 3",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168641/pages/aula-40-25-slash-05-biologia?module_item_id=72206717",
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
  espanhol: {
    name: "Espanhol",
    grades: [
      {
        name: "Sondeo 1 (EC)",
        helper: "0-10",
        weight: 2.5,
        url: "https://escolamobile.instructure.com/courses/3187009/assignments/31814080",
      },
      {
        name: "Sondeo 1 (EL)",
        helper: "0-10",
        weight: 2.5,
        url: "https://escolamobile.instructure.com/courses/3187010/assignments/31720212",
      },
      {
        name: "Sondeo 2",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3187009/pages/clase-12-ec-28-slash-05?module_item_id=72321465",
      },
      {
        name: "EOLP",
        helper: "Evaluación Oral a Partir deLectura Prévia",
        weight: 20,
        url: "https://escolamobile.instructure.com/courses/3187010/assignments/32090475/submissions/7884899",
      },
      { name: "Interacción Oral Periódica", weight: 5 },
      {
        name: "Video Ponencia",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3187009/assignments/32418541",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "P2",
        weight: 20,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      { name: "P3", weight: 20 },
    ],
  },
  "etica-cidadania": {
    name: "Ética e cidadania",
    grades: [
      {
        name: "AC1",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168645/quizzes/7730372",
      },
      {
        name: "AC2",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168645/pages/aula-27-28-slash-05-semana-1?module_item_id=72273161",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "P2",
        weight: 35,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "P3",
        weight: 30,
      },
    ],
  },
  geografia: {
    name: "Geografia",
    grades: [
      {
        name: "NC1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168648/pages/aula-11-12-slash-03-nc-1?module_item_id=69855383",
      },
      {
        name: "NC2",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168648/assignments/32569976",
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
      { name: "P3", weight: 30 },
    ],
  },
  historia: {
    name: "História",
    grades: [
      {
        name: "NC1",
        weight: 8,
        url: "https://escolamobile.instructure.com/courses/3168649/pages/aula-31-29-slash-04-historia-guerras-punicas?module_item_id=71508782",
      },
      {
        name: "NC2",
        weight: 8,
        url: "https://escolamobile.instructure.com/courses/3168649/assignments/32478249/submissions/7884899",
      },
      {
        name: "NC3",
        weight: 9,
        helper: "(Em grupos)",
        url: "https://escolamobile.instructure.com/courses/3168649/pages/aula-42-31-slash-05-historia-fim-do-imperio-romano?module_item_id=72319283",
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
      { name: "P3", weight: 30 },
    ],
  },
  "lingua-producao": {
    name: "Língua e Produção",
    grades: [
      {
        name: "R1",
        weight: 8,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/31680102",
      },
      {
        name: "R2 (P1)",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      {
        name: "R3",
        weight: 12,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/32342426",
      },
      {
        name: "R4",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/32649521",
      },
      {
        name: "P2",
        weight: 25,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
      { name: "P3", weight: 25 },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      {
        name: "AA1",
        helper: "(Dissertativa * 0.7 + testes)",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168652/pages/aula-de-algebra-24-de-fevereiro-atividade-avaliativa-01?module_item_id=69428418s",
      },
      {
        name: "AA2",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168652/pages/aula-de-algebra-29-de-abril-inequacoes-e-nota-de-classe?module_item_id=71593218",
      },
      {
        name: "AA3",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168652/pages/aula-de-algebra-27-de-maio-atividade-avaliativa-03?module_item_id=72255648",
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
      { name: "P3", weight: 30 },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      { name: "Lab 1", weight: 2 },
      { name: "Lab 2", weight: 2 },
      { name: "lab 3", weight: 2 },
      { name: "Lab 4", weight: 2 },
      { name: "Lab 5", weight: 2 },
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168654/pages/aula-12-16-slash-03-nota-de-classe?module_item_id=70045934",
      },
      {
        name: "NC2",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168654/pages/aula-21-22-slash-04-leis-ponderais?module_item_id=71444141",
      },
      {
        name: "NC3",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168654/pages/aula-31-08-slash-06-mol-e-estequiometria-+-nota-de-classe-3?module_item_id=72576152",
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
      { name: "P3", weight: 30 },
    ],
  },
  "ingles-i1": {
    name: "Inglês (I1)",
    grades: [
      { name: "NC1", weight: 10 },
      { name: "NC2", weight: 15 },
      { name: "P1", weight: 15 },
      { name: "P2", weight: 30 },
      { name: "P3", weight: 30 },
    ],
  },
  "ingles-i2": {
    name: "Inglês (I2)",
    grades: [
      {
        name: "NC1",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3180751/assignments/32067037",
      },
      {
        name: "NC2",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3180751/assignments/32336320",
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
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/987070",
      },
    ],
  },
};

export default templates;
