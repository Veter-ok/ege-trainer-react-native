import { ICourse, ISubject } from "../types/courses";

export const subjects:ISubject[] = [
    {
        id: 0,
        title: "Русс. язык"
    },
    {
        id: 1,
        title: "Математика"
    },
    {
        id: 2,
        title: "Информатика"
    },
]

export const courses:ICourse[] = [
    {
        id: 0,
        subject: 0,
        title: "Задание 4",
        description: "Ударения",
        path: "rus/task4"
    },
    {
        id: 1,
        subject: 0,
        title: "Задание 9",
        description: "Орфограммы в корне слова",
        path: "rus/task9",
    },
    {
        id: 2,
        subject: 0,
        title: "Задание 10",
        description: "Орфограммы в приставке",
        path: "rus/task10"
    },
    {
        id: 10,
        subject: 1,
        title: "Задание 5",
        description: "Уравнения",
        path: "math/task5"
    },
    {
        id: 20,
        subject: 2,
        title: "Задание 7",
        description: "...",
        path: "inf/task7"
    }
]