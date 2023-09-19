/***** Оголошення змінних *****/

/***** Примітивні типи даних ****/
Number 
String
Типи рядків '' "" ``
Boolean (true, false)
undefined
 null
  console.log(localStorage.getItem('number'));
  перевірка типу даних з яким працюємо метод typeof

  /***** Комунікація з користувачем та можливість відображення якогось результату *****/

  alert('Привіт вчи JS')
const message = prompt("Введіть і'мя")
console.log(message);
const result = confirm('Будеш вчити JS ?');
/***** Основні оператори *****/
>
<
==
===
<=
>=
!=
!==



/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

 0 (число нуль)
"" (порожній рядок)
NaN
undefined
null
false


// /***** Логічні оператори *****/
||

?? реагує лише на null та undefined

&&




/***** Методи для роботки з числами (тип даних Number) *****/
Number.parseInt()

Number.parseFloat()

Number.isNaN()  та метод isNaN()

Класс Math

Math.floor();

Math.ceil();

Math.round()


// /***** Методи та властивості для роботки з рядками (тип даних String) *****/

length
toLowerCase()
toUpperCase()
indexOf()
includes
endsWith()
startsWith()
replace()
replaceAll()
slice()



Lesson2
/***** Інструкція if та її варіації *****/


if () {}


/***** Інструкція switch *****/

switch () {
case :
break;
default:
}

/***** Тернарний оператор *****/

condition ? true : false

/***** Області видимості *****/ //(Обов'язково !!!)

Глобальна та локальна

Глобальна та функціональна

/***** Цикл for *****/

for (initialization; condition; post-expression) {
statements
}

/***** Цикл while *****/

/***** Цикл do while *****/



// Lesson 3 
Що таке масив


Перевірка масиву
typeof array
Array.isArray(array)

Перший та останій елемент масиву
array[0];
array.length - 1;
array[lastIdx];

Перебір масиву

Цикл for

Цикл for of

Присвоєння за посиланням та за значенням

Примітивні типи даних - за значенням

Складні типи даних - за посиланням

toString()
Array.from();
...
concat()

Методи для роботи з масивом

push 
pop
unshift 
shift
slice
splice
includes
indexOf
concat


Lesson 4
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
Function expression
Function declaration
hoisting https://codeguida.com/post/199

Псевдомасив arguments
Array.from(arguments);
[...arguments]


Області видимості, присвоєння за посиланням та значенням

Початковий 
Мутований 


Lesson 5
****************Об'єкт**************** \\


// ****************Звернення до властивостей об'єкта**************** \\

// ****************Зміна значення властивості**************** \\


// ****************Object.freeze**************** \\
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

Object.freeze();

// ****************Методи об'єкта**************** \\
this


// ****************Цикл for...in**************** \\

Object.create()


// ****************Метод Object.keys()**************** \\
Object.keys();

// ****************Метод Object.values()**************** \\

Object.values();

// ****************Метод Object.entries()**************** \\
Object.entries();

JSON.parse(JSON.stringify(obj))
join()
isArray()
!!~idx
