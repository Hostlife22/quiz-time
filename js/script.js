'use strict';

const main = document.querySelector('.main');
const selection = document.querySelector('.selection');
const title = document.querySelector('.main__title');

const getData = () => {
  const dataBase = [
    {
      id: '01',
      theme: 'Tema01 тестовая',
      result: [
        [40, 'Есть задатки, нужно развиваться'],
        [80, 'JОчень хорошо, но есть пробелы'],
        [100, 'Отличный результат'],
      ],
      list: [
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
          correct: 0,
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный3',
            'неправильный',
          ],
          correct: 3,
        },
      ],
    },
    {
      id: '02',
      theme: 'Tema02 тестовая',
      result: [
        [30, 'Есть задатки, нужно развиваться'],
        [60, 'JОчень хорошо, но есть пробелы'],
        [100, 'Отличный результат'],
      ],
      list: [
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный',
            'неправильный',
          ],
          correct: 2,
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
          correct: 1,
        },
        {
          type: 'radio',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'неправильный',
            'неправильный',
            'неправильный',
          ],
        },
        {
          type: 'checkbox',
          question: 'Вопрос',
          answers: [
            'правильный1',
            'правильный2',
            'неправильный3',
            'неправильный',
          ],
          correct: 3,
        },
      ],
    },
  ];

  return dataBase;
};

const hideElem = (elem) => {
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');

  const animation = () => {
    opacity -= 0.05;
    elem.style.opacity = opacity;

    if (opacity > 0) {
      requestAnimationFrame(animation);
    } else {
      elem.style.display = 'none';
    }
  };

  requestAnimationFrame(animation);
};

const renderTheme = (themes) => {
  const list = document.querySelector('.selection__list');
  list.textContent = '';

  const buttons = [];

  for (let i = 0; i < themes.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'selection__item';

    const button = document.createElement('button');
    button.className = 'selection__theme';
    button.dataset.id = themes[i].id;
    button.textContent = themes[i].theme;

    li.append(button);
    list.append(li);

    buttons.push(button);
  }

  return buttons;
};

const createAnswer = (data) => {
  const type = data.type;

  return data.answers.map((item) => {
    const label = document.createElement('label');
    label.className = 'answer';
    const input = document.createElement('input');
    input.type = type;
    input.name = 'answer';
    input.className = `answer__${type}`;

    const text = document.createTextNode(item);

    label.append(input, text);

    return label;
  });
};

const renderQuiz = (quiz) => {
  hideElem(title);
  hideElem(selection);

  const questionBox = document.createElement('div');
  questionBox.className = 'main__box main__box_question';

  main.append(questionBox);

  let questionCount = 0;

  const showQuestion = () => {
    const data = quiz.list[questionCount];
    questionCount += 1;

    questionBox.textContent = '';

    const form = document.createElement('form');
    form.className = 'main__form-question';
    form.dataset.count = `${questionCount}/${quiz.list.length}`;

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.className = 'main__subtitle';
    legend.textContent = data.question;

    const answers = createAnswer(data);

    const button = document.createElement('button');
    button.className = 'main__btn question__next';
    button.type = 'submit';
    button.textContent = 'Подтвердить';

    fieldset.append(legend, ...answers);
    form.append(fieldset, button);

    questionBox.append(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let ok = false;
      const answer = [...form.answer].map((input) => {
        if (input.checked) {
          ok = true;
        }
        return input.checked ? input.value : false;
      });

      if (ok) {
        console.log(answer);
      } else {
        console.error('не выбран не один ответ');
      }
    });
  };

  showQuestion();
};

const addClick = (buttons, data) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const quiz = data.find((item) => item.id === btn.dataset.id);
      renderQuiz(quiz);
    });
  });
};

const initQuiz = () => {
  const data = getData();

  const buttons = renderTheme(data);

  addClick(buttons, data);
};

initQuiz();
