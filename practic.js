// function removeFirstTwo(list) {
//   return list;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// const [a, b, ...arr] = sourceWithoutFirstTwo;
// console.log(arr);
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Змініть код лише під цим рядком
//   const { success, failure, skipped } = result;
//   const failureItems = [];
//   for (let i = 0; i < failure.length; i++) {
//     failureItems.push(`<li class="text-warning">${failure[i]}</li>`);
//   }
//   // Змініть код лише над цим рядком

//   return console.log(failureItems);
// }

// const failuresList = makeList(result.failure);
<<<<<<< Updated upstream
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     } else {
//       return onSuccess(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return pizzaName;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

orderedItems.forEach(function collback(number,index){
  console.log(totalPrice+=number);
});
  // Change code above this line
  return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4]) // повертає 138
calculateTotalPrice([164, 48, 291])//повертає 503
calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116
=======
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      console.log(onSuccess(pizzaName));
    } else {
      console.log(
        onError(
          `Error! There is no pizza with a name ${pizzaName} in the assortment.`
        )
      );
    }
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return error;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
>>>>>>> Stashed changes
