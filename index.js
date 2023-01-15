// Задача 1
// Создать функцию которая будет удалять людей из массива по индексу, 
// который мы передадим параметром. 

const arr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, i) => arr.splice(i, 1);

removeUser(arr, 1);
console.log(arr); /// ['Vasya', 'Alexey']

// Задача 2
// Создать функцию которая вернет все ключи обьекта переданного параметром

const obj = { name: 'Vasya', age: 1};

const getAllKeys = (obj) => Object.keys(obj);

console.log(getAllKeys(obj)); /// ["name", "age"]

// Задача 3
// Создать функцию которая вернет все значения объекта переданного параметром

const getAllValues = (obj) => Object.values(obj);

console.log(getAllValues(obj)); /// ["Vasya", 1]

// Задача 4
// Содать функцию,где мы первым параметром передадим объект с новым кандидатом, 
// а вторым параметром - id любого кандидата в массиве, который передаем 3-м параметром. 
// Функция должна будет вставить кандидата переданного через первый параметр в массив 
// перед кондидатом у которого id равно тому что передали во-втором параметре

const obj1 = {
    id: 3,
    name: 'Vasya'
};

const arr1 = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (obj, id, arr) => {
    const i = arr.findIndex((e) => e.id === id);
    return arr.splice(i, 0, obj);
};

insertIntoarr(obj1, 2, arr1);
console.log(arr1);

// Задача 5
// Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. 
// Добавить метод с именем state который вернет шатат в котором живает наш кондидат. 
// Информация о штате находится в свойстве address и это третья запись после запятой.

class Condidate {
    constructor(obj) {
        Object.assign(this, obj);
    }

    state() {
        return this.address.split(', ')[2];
    }
}

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state());

// Задача 6
// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. 
// Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr

const getCompanyNames = (arr) => {
    const result = [];
    arr.forEach((obj) => result.push(obj.company));
    return result.filter((e, i, a) => i === a.indexOf(e));
}

const arr2 = [
    {
        id: 1,
        name: 'Kolya',
        company: 'Sony'
    },
    {
        id: 2,
        name: 'Petya',
        company: 'Apple'
    },
    {
        id: 3,
        name: 'Vasya',
        company: 'Apple'
    },
];

console.log(getCompanyNames(arr2));
console.log(getCompanyNames(condidateArr));

// Задача 7
// Создать функцию которая выведет мне массив id всех кондидатов, которые были 
// зарагестрированны в том же году что и год указанный в параметре.

const getUsersByYear = (year, arr) => {
    const result = [];
    arr.forEach((obj) => {
        if (obj.registered.slice(0, 4) === year.toString()) {
            result.push(obj._id);
        }
    });
    return result;
}

console.log(getUsersByYear(2017, condidateArr));

// Задача 8
// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по 
// кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в 
// строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
// Все так же используем массив candidateArr

const getCondidatesByUnreadMsg = (number) => {
    return condidateArr.filter((obj) => obj.greeting.split(' ')[5] === number.toString());
}

console.log(getCondidatesByUnreadMsg(4));

// Задача 9
// Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr

const getCondidatesByGender = (gender) => {
    return condidateArr.filter((obj) => obj.gender === gender);
}

console.log(getCondidatesByGender('male'));

// Задача 10*
// Создать функцию reduce, join самому как на занятии создавали forEach, map, find, 
// filter и т.д.

Array.prototype.cReduce = function(callback, acc) {
    acc = acc === undefined ? 0 : acc;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

const reduceResult = [1, 2, 3, 4, 5].cReduce((a, b) => a + b);
console.log(reduceResult);

Array.prototype.cJoin = function(separator) {
    separator = separator === undefined ? ',' : separator;
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
}

const joinResult = [1, 2, 3, 4, 5].cJoin('');
console.log(joinResult);