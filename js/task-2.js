console.log("=========================")
console.log("Задача 2. Форматування повідомлення")
console.log("===========================")

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.

// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.


function  formatMessage(message, maxLength) {

    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + `...`;
    }
}


// =========================================================================================================
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"