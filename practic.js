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
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked")); //повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // повертає рядок "Sorry, there is no pizza named «Viennese»"

// function truncateString(str, num) {
//   if (str.length > num) {
//     const newStr = str.slice(0, num) + "...";
//     return newStr;
//   }
//   return str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // має повертати рядок A-tisket....
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // має повертати рядок Peter Piper....
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// ); // має повертати рядок A-tisket a-tasket A green and yellow basket.
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// ); // має повертати рядок A-tisket a-tasket A green and yellow basket.
// console.log(truncateString("A-", 1)); // має повертати рядок A....
// console.log(truncateString("Absolutely Longer", 2)); // має повертати рядок Ab....
// function findElement(arr, func) {
//   for (let i of arr) {
//     if (func(i)) {
//       return i;
//     }
//   }
//   return undefined;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   })
// );
// console.log(
//   findElement([1, 3, 5, 9], function (num) {
//     return num % 2 === 0;
//   })
// );
// function booWho(bool) {
//   return bool === true || bool === false ? true : false;
// }

// console.log(booWho(null));
// console.log(booWho(true)); // має повертати true.
// console.log(booWho(false)); // має повертати true.
// console.log(booWho([1, 2, 3])); // має повертати false.
// console.log(booWho([].slice)); // має повертати false.
// console.log(booWho({ a: 1 })); // має повертати false.
// console.log(booWho(1)); // має повертати false.
// console.log(booWho(NaN)); // має повертати false.
// console.log(booWho("a")); // має повертати false.
// console.log(booWho("true")); // має повертати false.
// console.log(booWho("false")); //має повертати false.
// function titleCase(str) {
//   let words = str.toLowerCase().split(" "); // Перевести всі букви в рядку в нижній регістр та розділити на слова
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 0) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1); // Перший символ у верхньому регістрі, решта в нижньому регістрі
//     }
//   }
//   return words.join(" "); // З'єднати слова у великий рядок
// }

// console.log(titleCase("I'm a little tea pot"));

// function frankenSplice(arr1, arr2, n) {
//   console.log(...arr1);
//   console.log(...[arr2]);
//   console.log(n);
//   let newArr = [...[arr2]].splice(n, 0, [...arr1]);
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// function getIndexToIns(arr, num) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (num > arr[i]) {
//       newArr.unshift(arr[i]);
//     } else {
//       newArr.push(num);
//     }
//   }

//   return newArr.indexOf(num);
// }

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // має повертати 3.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // має повертати 2.
// console.log(getIndexToIns([40, 60], 50)); // має повертати 1.
// console.log(getIndexToIns([3, 10, 5], 3)); // має повертати 0.
// console.log(getIndexToIns([5, 3, 20, 3], 5)); // має повертати 2.
// console.log(getIndexToIns([2, 20, 10], 19)); // має повертати 2.
// console.log(getIndexToIns([2, 5, 10], 15)); // має повертати 3.
// console.log(getIndexToIns([], 1)); // має повертати 0.
// function mutation(arr) {
//   const wordOne = arr[0].toLowerCase();
//   const wordSecond = arr[1].toLowerCase();

//   for (const letter of wordSecond) {
//     if (wordOne.indexOf(letter) === -1) {
//       return false;
//     }
//   }

//   return true;
// }

// function convertToRoman(num) {
//   if (num <= 0 || num > 1000) {
//     return "Number out of range";
//   }

//   const romanNumerals = {
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII",
//     9: "IX",
//     10: "X",
//     20: "XX",
//     30: "XXX",
//     40: "XL",
//     50: "L",
//     60: "LX",
//     70: "LXX",
//     80: "LXXX",
//     90: "XC",
//     100: "C",
//     200: "CC",
//     300: "CCC",
//     400: "CD",
//     500: "D",
//     600: "DC",
//     700: "DCC",
//     800: "DCCC",
//     900: "CM",
//     1000: "M",
//   };
//   let romanNumber = romanNumerals[num];
//   if (num in romanNumerals) {
//     return romanNumerals[num];
//   } else {
//     for (let i = 11; i <= 1000; i++) {
//       if (!romanNumerals[i]) {
//         const ones = i % 10;
//         const tens = (i - ones) % 100;
//         const hundreds = (i - tens - ones) % 1000;
//         romanNumber =
//           romanNumerals[hundreds] + romanNumerals[tens] + romanNumerals[ones];
//         romanNumerals[i] = romanNumber;
//       }
//     }
//   }
//   return romanNumber;
// }

// console.log(convertToRoman(36)); // "XXXVI"

function rot13(str) {
  const englishAlphabet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  
  let keys = Object.keys(englishAlphabet);
  keys.forEach(function (key) {
    let value = englishAlphabet[key];
    value += 13;
    if (value > 26) {
      value -= 26;
    }
    console.log(key, value);
  });
  return str;
}

console.log(rot13("SERR PBQR PNZC"));
