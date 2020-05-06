var Strawberry = {name: "strawberry", quantity: 15, Price: 10};
var pineapple = {name: "pineapple", quantity: 10, Price: 40};
var apple = {name: "apple", quantity: 6, Price: 20};
var mango = {name: "mango", quantity: 12, Price: 50};
var pear = {name: "pear", quantity: 10, Price: 80};

var fruits = [Strawberry, pineapple, apple, mango, pear];
var i;

function getFruitsWithPriceMoreThan250(fruits) {
    for (i = 0; i < fruits.length; i++) {

        if (fruits[i].quantity * fruits[i].Price > 250) {
            console.log(fruits[i].name);
        }
    }
}

getFruitsWithPriceMoreThan250(fruits);
