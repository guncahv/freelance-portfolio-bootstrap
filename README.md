# Портфолио фриланс-разработчика — React + React Bootstrap

Лабораторная работа №23 «Стилизация React/Angular/Vue-приложения с использованием компонентов Bootstrap или Material Design».
Вариант 1 — «Портфолио фриланс-разработчика».

Выполнил: Рахманкулов А., группа 310101.

Проект — продолжение ЛР №19 (React). Интерфейс переведён на библиотеку **React Bootstrap** (Bootstrap 5.3):
кастомные кнопки, поля ввода и карточки заменены компонентами библиотеки, макет построен на сетке `Container / Row / Col`.

## Стек

- React 19 + Vite
- React Bootstrap 2 + Bootstrap 5.3 (CSS подключён в `src/main.jsx`)
- PropTypes

## Запуск проекта

Нужен [Node.js](https://nodejs.org/) 20.19 или новее.

```bash
git clone https://github.com/guncahv/freelance-portfolio-bootstrap.git
cd freelance-portfolio-bootstrap
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

Production-сборка:

```bash
npm run build
npm run preview
```

## Что заменено на компоненты React Bootstrap

| Было (ЛР №19) | Стало (ЛР №23) | Компоненты библиотеки |
|---|---|---|
| `Button` + CSS Module | `AppButton` | `Button` (`primary`, `outline-primary`) |
| `InputField` + CSS Module | `FormField` | `Form.Group`, `Form.Label`, `InputGroup`, `Form.Control`, `Form.Control.Feedback`, `Form.Text` |
| `ProjectCard` + CSS Module | `ProjectCard` | `Card`, `Card.Img`, `Card.Body`, `Card.Title`, `Card.Text`, `Card.Footer`, `Badge`, `Stack` |
| `Header` + CSS Module | `Header` | `Navbar`, `Navbar.Toggle`, `Navbar.Collapse`, `Nav`, `Badge`, `Image` |
| — | `About`, сообщение об отправке | `Row`, `Col`, `Card`, `Badge`, `Alert` |

Данные по-прежнему передаются через `props`, локальное состояние (`isFavorite`, `activeId`, значение поля) сохранено.

## Адаптивная сетка

Список проектов: `<Row xs={1} md={2} lg={3} className="g-4">`

- телефон (< 768 px) — 1 колонка;
- планшет (≥ 768 px) — 2 колонки;
- десктоп (≥ 992 px) — 3 колонки.

Меню на экранах уже 992 px сворачивается в кнопку-«бургер». Отступы и выравнивание заданы утилитарными классами
Bootstrap (`py-5`, `g-4`, `d-flex`, `gap-3`, `text-lg-start` …); собственный CSS (`src/index.css`) только переопределяет
цвета и шрифты темы.

## Как проверить интерактивность

1. Нажмите на сердечко на карточке — проект добавится в избранное.
2. Выберите пункт меню — он станет активным; на телефоне меню закроется.
3. Введите неверный email и нажмите «Отправить» — появится ошибка под полем; с корректным адресом появится сообщение об успешной отправке. Значение поля выводится в консоль (F12 → Console).
