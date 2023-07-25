export const questions = {
  food: {
    text: "¿Que te apetece comer?",
    options: [
      { id: "italian", text: "Pizza", isCorrect: true },
      { id: "american", text: "Burger", isCorrect: true },
      { id: "spanish", text: "Bocata de Calamares", isCorrect: true },
    ],
  },
  activity: {
    text: "¿Que estas haciendo en este momento?",
    options: [
      { id: "a", text: "Estudiando", isCorrect: true },
      { id: "b", text: "Trabajando", isCorrect: true },
      {
        id: "c",
        text: "Ninguna de las anteriores, quiero fiesta!!!",
        isCorrect: true,
      },
    ],
  },

  friends: {
    text: "¿Cuantos sois?",
    options: [
      { id: "1", text: "Estoy solo, no tengo amigos...", isCorrect: true },
      { id: "2", text: "Yo y mi amig@", isCorrect: true },
      {
        id: "3",
        text: "Un monton!!! no puedo contarlos a todos",
        isCorrect: true,
      },
    ],
  },
};

export const validations = {
  required: "This field is required",
  minLength: {
    value: 4,
    message: "At least 4 length is mandatory",
  },
};
