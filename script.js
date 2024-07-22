// 1. Замена всех отрицательных чисел
// Есть массив из чисел `[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]`.
// Напиши код, который все отрицательные значения элементов массива заменит на нолик.

const numbers = [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2];

const modifiedNumbers = numbers.map((item) => {
    return item < 0 ? 0 : item
})
console.log(modifiedNumbers);


// 2. Избавляемся от близнецов
//    Дан массив из объектов:
//     `const elements = [` 
//     `{ a: 2, b: 12 },` 
//     `{ a: 0.1, b: 0.1 },` 
//     `{ a: 0, b: 1 },` 
//     `{ a: 100, b: 1000 },` 
//     `{ a: 4, b: 4 }` 
//    `];` 
// Обработай массив так, чтобы в итоге остались только те элементы, у которых значения свойств `a` и `b` не совпадают.

const elements = [
    { a: 2, b: 12 },
    { a: 0.1, b: 0.1 },
    { a: 0, b: 1 },
    { a: 100, b: 1000 },
    { a: 4, b: 4 }
];
const filteredElements = elements.filter((item) => {
    return item.a !== item.b
})
console.log(filteredElements);


// 3. Поиск близнеца

// Напиши код, который в массиве из предыдущего задания найдет какого-нибудь близнеца (объекта, у которого значения обеих свойств равны) и вернет сумму этих значений.

const findElements = elements.find((item) => {
    return item.a === item.b
})
let sum = findElements.a + findElements.b
console.log(findElements);
console.log(sum);