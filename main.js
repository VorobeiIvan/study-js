// // lesson1

// // https://www.freecodecamp.org/

// /***** Оголошення змінних *****/
// // const value = 10;

// // let value;
// // console.log(value);

// // value = 10;

// // console.log(value);

// // value = 'Hello world'
// // console.log(value);

// // console.log(value);

// // value = 10;
// // value = 10;
// // value = 10;
// // value = 10;
// // value = 10;

// /***** Примітивні типи даних ****/

// // Number
// // let value = 10.1;

// // String
// // const name = 'Student ${}'
// // value = "I`m Hello ${name}"
// // value = `Hello I am ${name}` // `Hello I am Student`
// // console.log(value);

// // Типи рядків '' "" ``

// // Boolean (true, false)

// // const password = 'qwerty111';

// // console.log('qwerty111' === password);

// // undefined
// // let value;
// // console.log(value);

// // null
// // console.log(localStorage.getItem('number'));

// // перевірка типу даних з яким працюємо метод typeof

// // const value = 10
// // console.log(typeof value);
// // console.log(typeof value === Number);

// /***** Комунікація з користувачем та можливість відображення якогось результату *****/

// // console.log('Привіт вчи JS');

// // alert('Привіт вчи JS')

// // const message = prompt("Введіть і'мя")
// // console.log(message);
// // console.log(typeof message);
// // const result = confirm('Будеш вчити JS ?');
// // console.log(result);

// /***** Основні оператори *****/

// // >
// // console.log(25 > 21);

// // <
// // console.log(25 < 24);

// // ==
// // console.log('false' == 0);
// // console.log(false == 0);

// // ===
// // console.log('25' === 25);

// // <=
// // console.log(24 <= 25);
// // console.log(25 <= 25);

// // >=
// // console.log(26 >= 20);
// // console.log(26 >= '26');

// // !=
// // console.log('1' != 1);

// // !==
// // console.log('1' !== 1);

// // Приклади роботи

// // console.log(1 == true);

// // console.log(1 === true);

// // console.log('0' == false);

// // console.log('0' === false);

// // console.log('Papaya' < 'papaya');

// // console.log('a' < 'aAbBc');

// // console.log('Papaya' === 'papaya');

// /***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

// // // 0 (число нуль)
// // console.log(Boolean(0));
// // // "" (порожній рядок)
// // console.log(Boolean(''));
// // // NaN
// // console.log(Boolean(NaN));
// // // undefined
// // console.log(Boolean(undefined));
// // // null
// // console.log(Boolean(null));
// // // false
// // console.log(Boolean(false));

// // const message = prompt()
// // console.log(message.length);

// // if(message){
// //     console.log('OKAY');
// // }else{
// //     console.log('NO VALUE');
// // }

// /***** Логічні оператори *****/

// // ||
// // console.log('' || 0 || 1);

// // ?? реагує лише на null та undefined
// // console.log(0 ?? 1);
// // console.log(null ?? 1);
// // console.log(undefined ?? 10);

// // &&
// // console.log(false && 1);
// // console.log(NaN && 2);

// // console.log(1 && 5 && 23);
// // console.log(1 && 0 && 23);

// // Приклади роботи

// // console.log(true && 3);

// // console.log(false && 3);

// // console.log(true && 4 && 'kiwi');

// // console.log(true && 0 && 'kiwi');

// // console.log(true || 3)

// // console.log(3 || true || 4);

// // console.log('' || false || 7);

// // console.log(null || 2 || undefined);

// // console.log('' ??  4);

// // console.log(false ?? 7);

// // console.log(null ?? 7);

// // console.log(undefined ?? 7);




// /***** Методи для роботки з числами (тип даних Number) *****/

// // const str = '25.7a32px';

// // Number.parseInt()
// // console.log(Number.parseInt(str));

// // Number.parseFloat()
// // console.log(Number.parseFloat(str));


// // console.log(typeof Number(str));
// // console.log(Number(str) === NaN);

// // Number.isNaN()  та метод isNaN()
// // console.log(isNaN(str)); // Number.isNaN(Number(str)) 

// // const num = Number(str) // NaN
// // console.log(Number.isNaN(Number(str))); //'25.7a32px' //NaN






// // const str = '25.7a32px';
// // console.log(typeof str);
// // console.log(Number.isNaN(str));// NaN //String
// // console.log(isNaN(str)); //Number(str) => NaN



// // console.log(isNaN('abc'));
// // // 1 Перетворить до числа
// // // 2 Перевірить чи результат перетворення буде NaN

// // const value = Number('abc')
// // console.log(Number.isNaN(value));





// // Класс Math
// // const value = 11.50;
// // console.log(Math.floor(value));

// // console.log(Math.ceil(value));

// // Math.round()
// // console.log(Math.round(value));
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow?retiredLocale=uk
// // s



// /***** Методи та властивості для роботки з рядками (тип даних String) *****/

// // const str = 'Hello World';

// // length
// // console.log(str.length);

// // toLowerCase()
// // console.log(str.toLowerCase());
// // console.log(str);

// // toUpperCase()
// // console.log(str.toUpperCase());

// // indexOf()
// // console.log(str.indexOf(' '));
// // console.log(str.indexOf('lla'));



// // includes
// // console.log(str.includes('world'));

// // endsWith()
// // console.log(str.endsWith('world'));

// // startsWith()
// // console.log(str.startsWith('H'));

// // replace()
// // console.log(str.replace('l', '🍕'));


// // replaceAll()
// // console.log(str.replaceAll('l','🍟'));

// // slice()
// // const str = 'Hello world';
// // console.log(str.slice(0, str.indexOf(' ')));
// // console.log(str);


// // https://forum.battlebay.net/attachments/unicode-table-png.22584/
// // console.log('ab' === 'aB');
// // 
// // **************************************** Практика ****************************** //

// // Task - 1

// // Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// // const apple = '🍎';

// // const appleQuantity = 8;

// // const applePrice = 34;
// // const total = appleQuantity * applePrice
// // const  appleMessage = `Total purchase, price ${appleQuantity * applePrice}`;
// // console.log(appleMessage);

// // const cherry = '🍒';

// // const cherryQuantity = 3;

// // const cherryPrice = 72;

// // const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// // console.log(cherryMessage);

// // Task - 2

// // Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// // 70 покаже 01:10
// // 450 покаже 07:30
// // 1441 покаже 24:01

// // const totalMinutes = 1441;
// // const hours = Math.floor(totalMinutes / 60);
// // const minutes = totalMinutes % 60;
// // // console.log(minutes);
// // const result = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}`
// // console.log(result);

// // Task - 3

// // Виконай рефакторинг коду щоб уникнути помилок

// // const name = 'Harry'
// // const message = `Hello my name is ${name}`
// // console.log(message);

// // const delivery = 25;
// // const price = 190;
// // const message = `Total purchase, price ${delivery + price}`;
// // console.log(message);

// // Task - 4
// // Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// // const incomingValue = null;
// // const defaultValue = 10;
// // const value = incomingValue ?? defaultValue;
// // console.log(value);


// // const message = prompt('Enter your name')
// // const result = message ?? '😥'
// // console.log(result);

// // Lesson2
// /***** Інструкція if та її варіації *****/
// // const value = 11;

// // if (value === 10) {
// //   console.log("condition is true 😎");
// // }

// // const str = 'Hello world'

// // if(str.includes('world ')){
// //     console.log("condition is true 😎");
// // }

// // 0
// // ''
// // NaN
// // null
// // undefined
// // false
// // const value = 0;
// // if (value) {
// //   console.log("condition is true 😎");
// // }

// // str.includes('world') => //false // true

// // const value = 11;
// // if (value === 10) {
// //   console.log("condition is true 😎");
// // } else {
// //   console.log("condition is false 😱");
// // }

// // console.log("after");
// // // win + v
// // const value = 11;
// // if (value === 9) {
// //   console.log("condition is true 😎 VALUE 9");
// // } else if (value === 10) {
// //   console.log("condition is true 😎 VALUE 10");
// // } else if (value === 11) {
// //   console.log("condition is true 😎 VALUE 11");
// // } else {
// //   console.log("condition is FALSE 😨");
// // }

// /***** Інструкція switch *****/
// // const str = "world";

// // switch (str) {
// //   case "world":
// //     console.log("case 1");

// //   case "hello world":
// //     console.log("case 2");
// //     break;
// //   case "hello":
// //     console.log("case 3");

// //   default:
// //     console.log("default");
// // }

// // ДУЖЕ ПОГАНИЙ ПРИКЛАД!!!!!
// // const str = "hello";

// // switch (true) {
// //   case "world" > str: // false true  === true
// //     console.log("case 1");
// //     break;
// //   case "hello world" < str:
// //     console.log("case 2");
// //     break;
// //   case "hello" === str:
// //     console.log("case 3");
// //     break;
// //   default:
// //     console.log("default");
// // }

// /***** Тернарний оператор *****/

// // condition ? true : false

// // const value = 14;
// // const message = value > 10 && value < 20 ? "CONDITION TRUE" : "CONDITION FALSE";

// // const value = 15;
// // let message;

// // if (value > 10 && value < 20) {
// //   message = "CONDITION TRUE";
// // } else {
// //   message = "CONDITION FALSE";
// // }

// // console.log(message);

// // const value = 15;
// // let message = "CONDITION FALSE";

// // if (value > 10 && value < 20) {
// //   message = "CONDITION TRUE";
// // }

// // console.log(message);

// /***** Області видимості *****/ //(Обов'язково !!!)

// // Глобальна та локальна
// // const
// // let
// // 'use strict'
// // const value = 10;

// // if (true) {
// //   const value = 15;
// //   if (true) {
// //     console.log("local", value);
// //   }
// // }

// // console.log("global", value);

// // function fn(){

// // }

// // let number = 10;

// // if (true) {
// //     number = 22;
// // }
// // console.log(number);

// // let number = 10;

// // if (true) {
// //     number = 22;
// //     if (true) {
// //         number = 35;
// //     }
// // }
// // console.log(number);

// // let number = 10;

// // if (true) {
// //     let number = 22;
// //     if (true) {
// //         number = 35;
// //     }
// // }
// // console.log(number);

// // let number = 10;

// // if (true) {
// //     if (true) {
// //         number = 35;
// //     }
// // let number = 22;
// // }
// // console.log(number);

// //  Глобальна та функціональна

// // if(true){
// //     let value = 15
// // }
// // console.log(value);

// // if(true){
// //     var value = 15
// // }
// // console.log(value);

// // function fn(){
// //     var value = 15
// // }
// // console.log(value);

// /***** Цикл for *****/

// // for (initialization; condition; post-expression) {
// //   // statements
// // }
// // let message = ''
// // for(let i = 0; i < 10; i+=1){
// //     message += 'a'
// //     console.log(message);
// // }

// // const str = "hello world";

// // for(let i = 0; i < str.length; i+=1 ){
// //     console.log(str[i]);
// // }

// /***** Цикл while *****/
// // let i = 0;
// // const str = "hello world";
// // while (i < str.length) {
// //   console.log(str[i]);
// //   i += 1;
// // }

// /***** Цикл do while *****/
// // let i = 10;
// // do {
// //   i += 1;
// //   console.log(i);
// // } while (i < 5);

// // while(i < 5){
// //     i +=1;
// //     console.log(i);
// // }

// // **************************************** Практика ****************************** //

// // Task - 1
// // Потрібно створити світлофор використовуючи конструкцію switch
// // В propmt() юзер вводить колір який він бачить на світлофорі
// // В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// // Можливі 4 стани світлофора
// // 1 - red, action stop
// // 2 - yellow, action ready
// // 3 - green, action go
// // 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// // if (message) {
// //   message = message.toLowerCase();
// // }

// // let message = prompt("color ?");
// // let action;

// // message = message && message.toLowerCase();

// // switch (message) {
// //   case "red":
// //     action = "stop";
// //     break;
// //   case "yellow":
// //     action = "ready";
// //     break;
// //   case "green":
// //     action = "go";
// //     break;
// //   default:
// //     action = "be careful";
// // }
// // console.log(action);

// // Task - 2
// // Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// // Створи функцію яка буде приймати 2 параметри
// // 1 параметр це текст загадки
// // 2 вірна відповідь

// // Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// // Функція має повертати булеве значення з результатом відповіді (true/false)

// // function check(text, answer) {
// //   let message = prompt(text);
// //   message = message && message.toLowerCase().trim();

// //   return message === answer; // true false
// // }

// // console.log(
// //   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// // );
// // console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));
// // Тестові дані
// // Хоч не літак, а крилатий,
// // Без крил не може працювати.
// // (Вітряк)

// // Через воду він проводить,
// // А сам з місця вік не сходить.
// // (Міст)

// // Task - 3
// // Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// // функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// // за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// // для вирішення завдання використовуй цикл while

// // 42 м, виповзе за 8 днів
// // 17 м, виповзе за 3 дні
// // 18 м, виповзе за 4 дні

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;
  
//     while (total < deps) {
//       total += daySpeed;
//       days += 1;
  
//       if(total < deps){
//           total -= nightSpeed;
//       }
//     }
//     console.log(days);
//   }
//   // getDays(42); // 8
//   // getDays(17); // 3
//   // getDays(18); // 4
  
//   // Task - 4
//   // Порахуй скільки голосних літер у реченні.
  
//   function countVowel(str = "") {
//     const vowels = "aeiou";
//     let counter = 0;
  
//     str = str.toLowerCase();
  
//     for (let i = 0; i < str.length; i += 1) {
//       if (vowels.includes(str[i])) {
//         counter += 1;
//       }
//       // counter += vowels.includes(str[i]) ? 1 : 0
//       // counter = vowels.includes(str[i]) ? counter + 1 : counter
//     }
//     return counter
//   }
//   console.log(countVowel("HELLO WORLD")); // 3
//   // console.log(countVowel("Junior Web Developer")) // 8

// Lesson 3 
// Що таке масив
// const array = ["Hello world", null, true, 15, [1,2,3]];

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// // console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray({})) // false

// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl);

// Перебір масиву
const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     // const item = array[i]
//     // console.log(item);
//     if(typeof array[i] === 'boolean'){
//         array[i] = 1;
//     }
// }

// console.log(array);

// Цикл for of
// for (let item of array) {
//   // console.log(item);
//   if (typeof item === "boolean") {
//     item = 1;
//   }
//   console.log(item);
// }
// console.log(array);

// Присвоєння за посиланням та за значенням

// Примітивні типи даних - за значенням

// let a = 1;
// let b = a;
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log('----------------------');

// a = 3;
// console.log('a', a);
// console.log('b', b);
// Складні типи даних - за посиланням

// let a = [1, 2, 3];
// let b = a;

// console.log("a", a);
// console.log("b", b);

// b[0] = 'c';
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log(a === [1, 2, 3]);
// console.log(b === [1, 2, 3]);

// console.log([1,2,3].toString() === [1,2,3].toString());

// console.log([1,2,3].toString());

// let a = [1, 2, 3];
// let b = Array.from(a);
// let c = [...a]
// let d = [].concat(a)

// console.log(d);
// b[0] = 'a'

// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

// console.log(a === d);

// let word = 'Hello world';

// word[0] = 'F'

// console.log(word);

// const arr = [1, 2, 3];
// arr[0] = 'F'
// console.log(arr);

// Методи для роботи з масивом

// const numbers = [1, 2, 3, 4];

// push pop
// const length = numbers.push(5, 6, 7, 8, 9);
// console.log(numbers);
// console.log(length);

// const item = numbers.pop();
// console.log(numbers);
// console.log(item);

// unshift shift

// // const length = numbers.unshift('a', 'b');
// // console.log(numbers);
// // console.log(length);

// const item = numbers.shift()
// console.log(numbers);
// console.log(item);

// const numbers = [1, 2, 3, 4];

//slice
// const items = numbers.slice(88);

// console.log(items);

// splice
// const items = numbers.splice(1,2)
// console.log(numbers);
// console.log(items);

// const items = numbers.splice(1, 1 , 'a', 'b', 'c')
// console.log(numbers);
// console.log(items);

// const items = numbers.splice(2, 0 , 'a')
// console.log(numbers);
// console.log(items);

// const numbers = [1, 2, 3, 4];

// numbers.push(5)
// console.log(numbers);
// numbers.splice()

//includes
// const numbers = [1, 2, 3, 4];
// const result = numbers.includes(3)
// console.log(result);

// DOESN`T WORK
// const numbers = [[1], [2], [3]]
// const result = numbers.includes([2])

//indexOf
// const result = numbers.indexOf(5);
// console.log(result);

// concat

// const numbers = [1, 2, 3, 4];

// const result = numbers.concat([5,6], 7, 'abc')
// console.log(result);

// ПЕРЕРВА ДО 21.00

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [true, 3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
// console.log(typeof null);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17,19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (const user of users) {

//     if (men.includes(user)) {
//       continue;
//     }
//     women.push(user);

//     // if(!men.includes(user)){
//     //     women.push(user)
//     // }
//   }
//   return women
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';

// const result = string.split('').reverse().join('');
// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// const numbers = [11, 2, 3, 1, 55, 6, 1, 71, 9];

// for(let i = 1; i < numbers.length; i+=1){
//     const currentEl = numbers[i];
//     const prevEl= numbers[i - 1]

//     if(prevEl >= currentEl){
//         numbers[i] = prevEl + 1
//     }
// }

// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr = []) {
//   let message;

// //   if(!Array.isArray(arr)){
// //     return 'GIVE ME ARRAY "😈"';
// //   }

//   switch (arr.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }

//   return message;
// }
// console.log(createStr());
// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));


// Lesson 4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// Function expression
// const valC = 15;

// const add = function (valA, valB) {
//   //   const valA = 19;
//   valA = 15;
//   console.log("valA", valA);
//   const sum = valA + valB;
//   return sum;
//   // return valA + valB
// };
// // console.log(sum);
// console.log(add(12, 15));
// console.log(add(152, 153));

// const result = add(12, 15);

// var add = function (valA, valB) {
//   const sum = valA + valB;
//   return sum;

// };

// console.log(result);

// Function declaration
// hoisting https://codeguida.com/post/199

// function add(valA, valB) {
//     const sum = valA + valB;
//     return sum;
// }
// console.log(add(32,44)); // add(32,44) => 76 => console.log(76)

// Псевдомасив arguments
// const arr = [1,2,3];
// console.log(arr);
// function getSum() {
//     // console.log(arguments);
// // const copy = Array.from(arguments);
// // const copy = [...arguments]

// // console.log(copy);
// //   console.log("valA", valA);
// //   console.log("valB", valB);
// //   console.log("valC", valC);

// let total = 0;

// // for(const item of arguments){
// //     console.log(item);
// //     total += item;
// // }
// for(let i = 0; i < arguments.length; i+=1){
//     console.log(arguments[i]);
//     total += arguments[i];
// }

// console.log(total);
// }
// getSum(1, 2, 3, 4, 5);

// function getSum(...args) {
// console.log(args);
// }
// getSum(1, 2, 3, 4, 5);

// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);

// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);

//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);

// // Example 4
// let someValue = 2;

// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// Example 5
// let someValue = 2;

// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// // Example 6
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);
// Початковий - true
// Мутований - false

// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr = Array.from(arr);
//     arr.splice(0,3);
// }

// checkScope(someArray)

// let someArray =1;

// function checkScope(arr) {
//     console.log(arr);
//     // arr = Array.from(arr);
//     // arr.splice(0,3);
// }

// checkScope(someArray)

// console.log(someArray);
// Початковий - true
// Мутований - false

// Перерва до  20.55

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//   //   let message = "Success ✅";

//   //   for (const num of arr) {
//   //     if (num < target) {
//   //       message = "Fail ❌";
//   //       break;
//   //     }
//   //   }
//   //   return message

//   for (const num of arr) {
//     if (target > num) {
//       return "Fail ❌";
//     }
//   }

//   return "Success ✅";
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combinations = arr.slice(i, i + count);
//     if (combinations.length === count) {
//       result.push(combinations);
//     }

//     // result.push(arr.slice(i, i + count))
//   }

//   return result;
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 4)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   // const firstValue = Number(arr[0])
//   // const secondValue = Number(arr[1])

//   // return secondValue * firstValue

//   // return Number(arr[0]) * Number(arr[1])
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//   //   if (!courses.includes(name)) {
//   //     courses.push(name);
//   //   } else {
//   //     alert("Ви вже маєте такий курс");
//   //   }

// //   if (!courses.includes(name)) {
// //     courses.push(name);
// //     return;
// //   }
// //   alert("Ви вже маєте такий курс");
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'
// console.log(courses);

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
// idx indexOf
// includes

//   if (courses.includes(name)) {
//     const idx = courses.indexOf(name);
//     courses.splice(idx, 1);
//   }

//   const idx = courses.indexOf(name);

//   if (idx !== -1) {
//     courses.splice(idx, 1);
//   }

//   const idx = courses.indexOf(name);

//   if (!!~idx) {
//     courses.splice(idx, 1);
//   }

// -(x+1);
// 0 => false
// -1 => true

//   console.log(!!-(0 + 1));
//   console.log(!!-(-1 + 1)); // -0
//   console.log("--------");
//   console.log(!!5);
//   console.log(Boolean(5));
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (!!~idx) { // includes
//     courses[idx] = newName;
//   }
//   console.log(Boolean(~-1));
// //   !! приводимо до Boolean
// //    ~  -(x+1) конвертуємо до вірного буля

// course[idx] ?? (course[idx] = newname)// буде працювати?

// // !!~idx && (courses[idx] = newName);

// // courses[idx] = !!~idx ? newName : oldName

// }

// updateCourse("HTML", "NestJS");
// console.log(updateCourse("qwerty", "NestJS"));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


// console.log(courses.length);// властивість
// console.log(courses.push());// метод


// console.log(~~'rq');
// console.log(Number('rq'));
// console.log(+'rq');

// Lesson 5
// ****************Об'єкт**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
//     city:'Lviv'
// }
// console.log(user);

// ****************Звернення до властивостей об'єкта**************** \\

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);
// console.log(user['skills']['react']);
// console.log(user.skills['react']);
// console.log(user['skills'].react);

// ****************Зміна значення властивості**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);
// // console.log(user.city);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const key = prompt('key')
// const value = prompt('value')
// user[key] = value
// user.key = value
// user.name = 'Kate'
// user['name'] = 'Den'
// console.log(user);
// Object.freeze(user.skills);
// user.name = 'Kate';
// user.city = 'Lviv';
// user.skills.html = true
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     //   console.log(city);
//     //   console.log(this);
//     //   console.log(`Hello my name ${this.name}`);
//     // console.log(user.name);
//     console.log(this);
//     // console.log(this);
//   },
//   getAge(){
//     console.log(this);
//   }
// };
// user.sayHello();
// console.log('-----');
// user.getAge()
// // console.log(user.sayHello);
// const user2 = {
//     name: "Kate",
//     skills: {
//       html: false,
//       css: true,
//       react: false,
//     },
//     sayHello: user.sayHello,
// }

// user2.sayHello();
// ****************Цикл for...in**************** \\
// const userA = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     age: 30
// }

// const userB = Object.create(userA)
// userB.city = 'Lviv'
// console.log(userB);

// for(const key in userB){
//     if(userB.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// for(const key in userA){
//     console.log(key);
//     console.log(user[key]);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const keys = Object.keys(user);
// console.log(keys);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// // const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// ПЕРЕРВА ДО 20.45

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
// // const totalPrice = quantity * price;
// // const productObj = {
// //     name: product,
// //     quantity: quantity,
// //     price: price,
// //     totalPrice: totalPrice,
// // }

// // return productObj

// return {
//     name: product,
//     quantity, // quantity : 3
//     price,
//     totalPrice: quantity * price
// }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('apple', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   //   let totalPlayers = 0;
//   //   let totalTime = 0;

//   //   for (const key in obj) {
//   //     totalPlayers += 1;
//   //     totalTime += obj[key];
//   //   }

//   //   const average = totalTime / totalPlayers;

// //   const keys = Object.keys(obj);
// //   let totalTime = 0;

// //   for (const key of keys) {
// //     totalTime += obj[key];
// //   }

// // //   const average = totalTime / keys.length
// //   return `Count of players ${keys.length}, average time ${
// //     average
// //   }`;

//   //   const values = Object.values(obj);
//   //   let totalTime = 0;

//   //   for (const value of values) {
//   //     totalTime += value;
//   //   }

//   //   return `Count of players ${values.length}, average time ${
//   //     totalTime / values.length
//   //   }`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const reader of arr) {
//     // console.log(reader);
//     // if (reader.age) {
//     //   totalAge += reader.age;
//     // }
//     // console.log(reader.name, 'age' in reader);
//     // if('age' in reader){
//     //     totalAge += reader.age;
//     // }

//     console.log(reader.name, reader.hasOwnProperty("age"));
//     if (reader.hasOwnProperty("age")) {
//       totalAge += reader.age;
//     }
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));
// function getUsers(arr, bookName) {
//   let readers = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       readers.push(user.name);
//     }
//   }
//   console.log(readers);
//   return readers.join(", ");
// }
// console.log(getUsers(friends, "Harry Potter"));
// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   hasFaculty(faculty) {
//     return this.hasOwnProperty(faculty);
//   },
//   getUserList(faculty) {
//     // if (!(faculty in this)) {
//     //   return "Faculty not found 😰";
//     // }
//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }
//     const students = [];

//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }

//     return students.join(", ");
//   },
//   getTotalPoints(faculty) {
//     // if (!this.hasOwnProperty(faculty)) {
//     //   return "Faculty not found 😰";
//     // }

//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }

//     let totalPoints = 0;

//     for (let i = 0; i < this[faculty].length; i += 1) {
//       totalPoints += this[faculty][i].points;
//     }

//     return totalPoints;
//   },
// };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// console.log('hello');

// const numbers = [1, 2, [45, 67, [12]]];

// function add(arr) {
//   let total = 0; // undefined  + 1 ; NaN

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += add(item);
//     } else {
//       total += item;
//     }
//   }
//   return total;
// }
// console.log(add(numbers));

// let value = 25;

// if (true) {
//   value = 24;
//   if (true) {
//     value = 21;
//   }
//   value = 55;
// }

// console.log(value);

// const value = [21, 2, 24, 25];
// //
// // const value = [ 24, 25];
// // 5 === 5 => true
// // 5  => true
// if (true) {
//   //
//   const arr = value;
//   if (true) {
//     arr.splice(0, 1);
//     if (false) {
//       arr.splice(0, 1);
//     }
//   }
//   value.splice(0, 1);
// }

// // console.log(value); // [] // [25, 24] // [24] // [25]
// // console.log(value); // [] // [24,25]
// console.log(value); // [] // [25, 24] // [24] // [25]
// [2, 24, 25]

// const value = [21, 2, 24, 25];
// // const value = [21];
// function fn(arr) {
//  arr = [...arr]
//  arr.splice(1, 1);
//  console.log(arr);
// }

// fn(value);
// fn(value);
// fn(value);
// console.log(value); // [21] [21, 24, 25]

// let total = 0;
// let value;
// do {
//   value = prompt("введіть число");
//   if (!isNaN(value)) {
//     total += Number(value);
//   }
// } while (value !== null);

// console.log(total);

// console.log(total);

// let total = 0;
// function ask() {
//   let value = prompt("введіть число");

//   if (value === null) {
//     return total;
//   }

//   if (!isNaN(value)) {
//     total += Number(value);
//   }
//   return ask();
// }
// console.log(ask());

// let total = 0;
// function ask() {
//   let value = prompt("введіть число");

//   if (value !== null) {
//     if (!isNaN(value)) {
//       total += Number(value);
//     }
//     total += ask();
//   }
//   return total;

// }
// console.log(ask());

// const obj = {
//   name: "User",
//   sayHello() {
//     console.log(this.name);
//   },
//   skills: {
//     js: true,
//   },
// };

// const copy = { ...obj };
// const copy = JSON.parse(JSON.stringify(obj))
// console.log(copy.skills === obj.skills);

