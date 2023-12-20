console.log("Задача 1. Генератор slug")
console.log("===========================")

function  slugify(title) {
    const normalezidTitle = title.toLowerCase();
    const slug = normalezidTitle.replaceAll(" ", "-")

    return slug;
}
// =================== or like that=====================
// function slugify(title) {
//     const normalezidTitle = title.toLowerCase().split(" ");
//     const slug = normalezidTitle.join("-");
//     return slug;
//   }    
    
  

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"