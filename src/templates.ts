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
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  fisica: {
    name: "Física",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  biologia: {
    name: "Biologia",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  espanhol: {
    name: "Espanhol",
    grades: [
      {
        name: "NC1 (Sondeo)",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P2",
        weight: 20,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P3",
        weight: 20,
      },
      {
        name: "NC2 (EOLP)",
        weight: 15,
      },
      {
        name: "NC3 (Ponencia)",
        weight: 15,
      },
      {
        name: "IOP",
        weight: 5,
        helper: "Interacción oral periódica",
      },
    ],
  },
  "etica-cidadania": {
    name: "Ética e cidadania",
    grades: [
      {
        name: "AC1",
        weight: 10,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 20,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P2 (Redação)",
        weight: 25,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "AC2",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  geografia: {
    name: "Geografia",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  historia: {
    name: "História",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  "lingua-producao": {
    name: "Língua e Produção",
    grades: [
      {
        name: "R1 (Crônica)",
        weight: 8,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/33513510",
      },
      {
        name: "R2 (Crônica)",
        weight: 12,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/33723711",
      },
      {
        name: "R3 (Roteiro Podcast)",
        weight: 8,
        url: "https://escolamobile.instructure.com/courses/3168651/assignments/34408130",
      },
      {
        name: "R4 (Entrega Podcast)",
        weight: 20,
      },
      {
        name: "P1",
        weight: 12,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P2",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P3",
        weight: 25,
      },
    ],
  },
  matematica: {
    name: "Matemática",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  quimica: {
    name: "Química",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
  "ingles-i1": {
    name: "Inglês (I1)",
    grades: [
      {
        name: "NC1",
        weight: 5,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "P1",
        weight: 15,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC2",
        weight: 5,
      },
      {
        name: "P2",
        weight: 30,
        url: "https://escolamobile.instructure.com/courses/3168642/external_tools/1079745",
      },
      {
        name: "NC3",
        weight: 5,
      },
      {
        name: "P3",
        weight: 40,
      },
    ],
  },
};

export default templates;
