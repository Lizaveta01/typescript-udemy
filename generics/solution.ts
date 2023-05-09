// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

export const player1: PlayerData<number> = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};

export const player2: PlayerData<string> = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};

export const player3: PlayerData<IHoursData> = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};

interface IHoursData {
    total: number;
    inMenu: number;
}
interface PlayerData<T> {
    game: string | number;
    hours: T;
    server: string;
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
}
enum FiguresNames {
    RECT = "rect",
    CIRCLE = "triangle",
    TRIANGLE = "circle",
    LINE = "line",
}

interface IFigure{
    name: FiguresNames;
}

function calculateAmountOfFigures<T extends IFigure>(figure: T[]): AmountOfFigures {
    let figures: AmountOfFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };

    for (let i = 0; i < figure.length; i++) {
        if (figure[i].name === FiguresNames.RECT) {
            figures.squares++;
        }
        if (figure[i].name === FiguresNames.TRIANGLE) {
            figures.triangles++;
        }
        if (figure[i].name === FiguresNames.CIRCLE) {
            figures.circles++;
        }
        if (figure[i].name === FiguresNames.LINE) {
            figures.others++;
        }
    }

    return figures;
}

const data = [
    {
        name: FiguresNames.RECT,
        data: { a: 5, b: 10 },
    },
    {
        name:  FiguresNames.RECT,
        data: { a: 6, b: 11 },
    },
    {
        name:  FiguresNames.TRIANGLE,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FiguresNames.LINE,
        data: { l: 15 },
    },
    {
        name: FiguresNames.CIRCLE,
        data: { r: 10 },
    },
    {
        name: FiguresNames.CIRCLE,
        data: { r: 5 },
    },
    {
        name:  FiguresNames.RECT,
        data: { a: 15, b: 7 },
    },
    {
        name: FiguresNames.TRIANGLE,
    },
];

console.log(calculateAmountOfFigures(data));
