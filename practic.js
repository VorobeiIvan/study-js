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
// <<<<<<< Updated upstream
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

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// orderedItems.forEach(function collback(number,index){
//   console.log(totalPrice+=number);
// });
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]) // повертає 138
// calculateTotalPrice([164, 48, 291])//повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116
// =======
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       console.log(onSuccess(pizzaName));
//     } else {
//       console.log(
//         onError(
//           `Error! There is no pizza with a name ${pizzaName} in the assortment.`
//         )
//       );
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return error;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// >>>>>>> Stashed changes

// function changeEven(numbers, value) {
//   const newNumbers = numbers.map((number) => {
//     if (number % 2 === 0) {
//       return number + value;
//     } else {
//       return number;
//     }
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //  повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //  повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив [144, 13, 81, 192, 136, 154]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => {
//   return planet;
// });

// const getUserNames = (users) => {
//   return users.flatMap((user) => user.name);
// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// console.log(getUserNames(users));
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// console.log(getUserEmails(users));
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = (numbers) => {
//   numbers.filter((number) => number % 2 === 0);
// };
// const oddNumbers = (numbers) => {
//   numbers.filter((number) => number % 1 === 0);
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAge = users.filter(
//     (user) => user.age >= minAge && user.age <= maxAge
//   );
//   return userAge;
// };

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   const usersFriends = users.filter((user) =>
//     user.friends.includes(friendName)
//   );
//   return usersFriends;
// };

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter((friend, index, array) => {
//     return array.indexOf(friend) === index;
//   });
//   return uniqueFriends;
// };
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// console.log(getFriends(users));
// Change code below this line
// Change code below this line
// const getUserWithEmail = (users, email) => {
//   const userEmail = users.find((user) => user.email === email);

//   return userEmail.name;
// };

// // Change code above this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(
//   (element) => element % 2 === 0
// );
// console.log();
// const eachElementInFirstIsOdd = firstArray.every(
//   (element) => !element % 2 === 0
// );

// const eachElementInSecondIsEven = secondArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (element) => !element % 2 === 0
// );

// const eachElementInThirdIsEven = thirdArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInThirdIsOdd = thirdArray.every(
//   (element) => !element % 2 === 0
// );

// / Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Den`,
//     language: `html`,
//   },
//   {
//     name: `Petro`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Max`,
//     language: `html`,
//   },
//   {
//     name: `Olga`,
//     language: `css`,
//   },
//   {
//     name: `Kate`,
//     language: `js`,
//   },
//   {
//     name: `Ivan`,
//     language: `html`,
//   },
// ];

// // створити масив
// // фільтрувати масив filtr
// // перебрати масив  map
// const getUsersByLanguage = (users, language) => {
//   // const filterUsers = students.filter((user) => user.language === language);
//   // const names = filterUsers.map((user) => user.name);
//   return (filterUsers = students
//     .filter((user) => user.language === language)
//     .filterUsers.map((user) => user.name));
// };

// console.log(getUsersByLanguage(students, "js"));

// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [Alex],
//   },
// ]; //Not found
// const people2 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Jhon
// function getNarcis(arr) {
//     const filteredItems = arr.filter(({ know }) => !know.length);// know.length === 0
//     if (filteredItems.length !== 1) {
//         return 'Not found';
//     };
//     const narcis = filteredItems[0]['name'];
//     const isNarcis = arr.every((people) => people.know.includes(narcis) || people.name === narcis);
//     return isNarcis ? narcis : 'Not found';
// };
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
// ];
// let counter = 0;
// // for (let i = 0; i < products.length; i += 1) {
// //   for (let j = products.length - 1; i < j; j -= 1) {
// //     if (products[i].id === products[j].id) {
// //       products[i].qty += products[j].qty;
// //       products.splice(j, 1);
// //     }
// //     counter += 1;
// //   }
// // }

// console.time("start");
// for (let i = 0; i < products.length; i += 1) {
//   for (let j = i + 1; j < products.length; j += 1) {
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);

//       j -= 1;
//     }
//     counter += 1;
//   }
// }
// console.timeEnd("start");
// // console.log("products-->", products);
// // start: 0.31494140625 ms
// console.log("counter-->", counter);

// Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги
// Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги

// const cars = [
//   {
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//   },
//   {
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//   },
//   {
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//   },
//   {
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//   },
//   {
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//   },
// ];

// const findCars = (cars, min, max) => {
//   const filteredCars = cars.filter(({ price }) => price >= min && price <= max);
//   return filteredCars.reduce(
//     (acc, { car, type }, idx) => {
//       return acc + `${idx + 1}. ${car} ${type}\n`;
//     },
//     filteredCars.length
//       ? `Кількість знайдених автомобілів ${filteredCars.length}: \n`
//       : "Вибачте але за вашим пошуком жодного авто не було знайдено."
//   );
// };

// console.log(findCars(cars, 7000, 9000));
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line
// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) =>
//     b.friends.length.(a.friends.length)
//   );
// };
// Change code above this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line

// const getSortedFriends = (users) => {
//   return users
//     .flatMap(({ friends }) => friends)
//     .reduce(
//       (acc, friend) => (!acc.includes(friend) ? acc.concat(friend) : acc),
//       []
//     )
//     .sort((a, b) => a.localeCompare(b));
// };
// // Change code above this line
// console.log(getSortedFriends(users));
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order("Smoked")); //повертає рядок "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); // повертає рядок "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); // повертає рядок "Sorry, there is no pizza named «Viennese»"
