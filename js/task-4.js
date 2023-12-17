console.log("===========================")
console.log("Задача 4. Доставка товару: ")
console.log("===========================")

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

function getShippingCost(country){
   
    // ! Просто для практического теста.
    //* let price;
    //* if(country.includes(" ")){
    //*     country = country.replaceAll(" ", "");
    //* }

    switch (country.toLowerCase()){
        case `china`:
            price = 100;
            break;
        case `chile`:
            price = 250;
            break;
        case `australia`:
            price = 170;
            break;
        case `jamaica`:
            price = 120;
            break;
            
    
        default:
            return `Sorry, there is no delivery to your country`
    }
    return `Shipping to ${country} will cost ${price} credits`
}


// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"