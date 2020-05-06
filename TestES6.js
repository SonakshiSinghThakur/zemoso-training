const Strawberry = {name:"strawberry",quantity:15, Price:10 };
const pineapple ={ name: "pineapple",quantity:10, Price:40};
const apple ={ name:"apple",quantity:6, Price:20};
const mango ={ name: "mango",quantity:12, Price:50};
const pear ={name: "pear",quantity:10, Price:80};

const fruits=[Strawberry, pineapple, apple, mango, pear];
let i;
getFruitsWithPricemoreThan250 =(fruits) =>  //Arrow function
{
    for(i=0; i<fruits.length; i++) {

        if (fruits[i].quantity*fruits[i].Price>250) {
            console.log("Fruits greater than 250:" +fruits[i].name);
        }
    }
}
getFruitsWithPricemoreThan250(fruits);
