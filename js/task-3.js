console.log("=========================")
console.log("Задача 3. Фільтрація масиву чисел")
console.log("===========================")

// яка приймає масив чисел (numbers) та значення (value) як параметри. 
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, 
// які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
//  и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value){
    let  newArrayBiggerValue = [];

    for (const myNumbers of numbers){

        if (myNumbers > value){
            newArrayBiggerValue.push(myNumbers);
        }
        
    }
    
    return newArrayBiggerValue;
}

//* Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//* У консоль будуть виведені результати її роботи.

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]