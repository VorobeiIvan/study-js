// // **************************************** Практика ****************************** //

// // Task - 1
// // Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// // const apple = '🍎';
// // const appleQuantity = 8;
// // const applePrice = 34;
// // Total purchase, price ...



// // const cherry = '🍒';
// // const cherryQuantity = 3;
// // const cherryPrice = 72;
// // ... total cost ...


// // Task - 2
// // Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// // 70 покаже 01:10
// // 450 покаже 07:30
// // 1441 покаже 24:01

// // Task - 3

// // Виконай рефакторинг коду щоб уникнути помилок

// // const name = 'Harry'
// // const message = Hello my name is ...


// // const delivery = 25;
// // const price = 190;
// // Total purchase, price ...;


// // Task - 4
// // Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// // const incomingValue = null;
// // const defaultValue = 10;


// // const message = prompt('Enter your name')



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

// // if () {;}

// // switch () {;}


// // Task - 2
// // Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// // Створи функцію яка буде приймати 2 параметри
// // 1 параметр це текст загадки
// // 2 вірна відповідь

// // Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// // Функція має повертати булеве значення з результатом відповіді (true/false)

// // Тестові дані
// // Хоч не літак, а крилатий, Без крил не може працювати.// (Вітряк)
// // Через воду він проводить,А сам з місця вік не сходить.// (Міст)

// // Task - 3
// // Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// // функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// // за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// // для вирішення завдання використовуй цикл while

// // 42 м, виповзе за 8 днів
// // 17 м, виповзе за 3 дні
// // 18 м, виповзе за 4 дні

// // Task - 4
// // Порахуй скільки голосних літер у реченні.
  
// // console.log(countVowel("HELLO WORLD")); // 3
// // console.log(countVowel("Junior Web Developer")) // 8


// // Task-1
// // Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// // const arr = [true, 3, "Hello", null, 42, false];


// // Task-2
// // Потрібно створити функцію яка буде приймати 1 параметр
// // Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// // console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17,19]));

// // Task-3
// //Потрібно створити функцію яка буде приймати 2 параметри
// //1 параметр це масив всіх юзерів
// //2 параметр це масив з чоловічими іменами.
// //Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// // const users = [ "Artem", "Anna","Larisa","Maksim","Svetlana","David","Roman","Olga"];
// // const men = ["Artem", "Maksim", "David", "Roman"];


// // Task-4 - Масиви та рядки
// // Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// // const string = 'Welcome to the future';

// // Task-5
// // Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// // якщо ні то замінювати елементи на вірнi
// // const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// // const numbers = [11, 2, 3, 1, 55, 6, 1, 71, 9];


// // Task-6
// // Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// // Функцію має повернути текст, як вказано у прикладах:

// // []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// // Практика

// // Task-1;
// // Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// // 1 - Масив чисел
// // 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// // Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// // const numbers = [25, 12, 67, 40, 18];

// // Застосування функції + патерн раннє повернення

// // Task-2
// // Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// // 1 - масив значень
// // 2 - потрібну кількість елементіа в масиві
// //  Функція повертає масив масивів

// // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// // Example 3 - Площа прямокутника
// // Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// // Task-4
// // Напишіть функції для роботи з колекцією навчальних курсів courses:

// // addCourse(name) - додає курс до кінця колекції
// // removeCourse(name) - видаляє курс із колекції
// // updateCourse(oldName, newName) - змінює ім'я на нове

// // const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];


// // function removeCourse(name) {
// // idx indexOf
// // includes

// // removeCourse("React");
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'


// // ****************Практика**************** \\
// // Task - 1
// // Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// // 1 Назва продукту
// // 2 Кількість одиниць
// // 3 Ціна за 1 одиницю товару
// // Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// // console.log(createBasket('pizza', 3, 120));
// // console.log(createBasket('apple', 13, 1200));


// // Task - 2
// // Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// // Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// // const players = {
// //   Den: 60,
// //   Kate: 130,
// //   William: 45,
// //   Matthew: 120,
// //   Ethan: 40,
// //   David: 55,
// // };

// // Task - 3
// // 1 Створити функцію яка буде приймати 2 параметри
// //    1 параметр масив
// //    2 параметр назва книги
// // Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// // 2 Порахувати вік всіх юзерів у яких є ключ age.

// // const friends = [
// //   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
// //   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
// //   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
// //   {
// //     name: "Oleksii",
// //     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
// //     age: 26,
// //   },
// // ];

// // console.log(getUsers(friends, "Harry Potter"));

// // Task - 4
// // 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// // 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// // const hogvarts = {
// //   griffindor: [
// //     {
// //       name: "Harry",
// //       points: 17,
// //     },
// //     {
// //       name: "Hermiona",
// //       points: 19,
// //     },
// //     {
// //       name: "Ron",
// //       points: 14,
// //     },
// //   ],
// //   slizerin: [
// //     {
// //       name: "Draco",
// //       points: 17,
// //     },
// //     {
// //       name: "Goyl",
// //       points: 14,
// //     },
// //     {
// //       name: "Crabbe",
// //       points: 5,
// //     },
// //   ],
// // };

// // console.log(hogvarts.getUserList("griffindor"));
// // console.log(hogvarts.getUserList("slizerin"));
// // console.log(hogvarts.getUserList("slitherin"));

// // console.log(hogvarts.getTotalPoints("griffindor"));
// // console.log(hogvarts.getTotalPoints("slizerin"));
// // console.log(hogvarts.getTotalPoints("slitherin"));


// // _______________________________________________________________________________________________________________
// // 1.

// // Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

// // назва - рядок "Droid";
// // ціна за штуку - число 2000.
// // Оголошена змінна productName
// // Значення змінної productName - це рядок "Droid"
// // Оголошена змінна pricePerItem
// // Значення змінної pricePerItem - це число 2000

// // // Change code below this line

// // // console.log(productName);
// // // 'Droid'
// // const productName = "Droid";
// // // console.log(pricePerItem);
// // // 2000
// // const pricePerItem = 2000;
// // _______________________________________________________________________________________________________________
// // 2.
// // Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// // Змінна pricePerItem оголошена за допомогою let
// // При оголошенні змінної pricePerItem присвоєно значення — число 2000
// // Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// // Змінна productName оголошена за допомогою let
// // При оголошенні змінної productName присвоєно значення — рядок "Droid"
// // Змінній productName присвоєно нове значення — рядок "Repair droid"

// // let productName = "Droid";
// // let pricePerItem = 2000;

// // // Change code below this line

// // pricePerItem = 3500;
// // productName = "Repair droid";
// // _______________________________________________________________________________________________________________
// 3,
// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.
// Оголошена змінна topSpeed
// Значення змінної topSpeed - це число 160
// Оголошена змінна distance
// Значення змінної distance - це число 617.54
// Оголошена змінна login
// Значення змінної login - це рядок "mango935"
// Оголошена змінна isOnline
// Значення змінної isOnline - це буль true
// Оголошена змінна isAdmin
// Значення змінної isAdmin - це буль false

// // Change code below this line
// const topSpeed = 160;
// const distance=617.54;
// const login= "mango935";
// const isOnline=true;
// const isAdmin=false;
// _______________________________________________________________________________________________________________
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 4
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 14000
// Використаний оператор *

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = (pricePerItem*orderedQuantity);
// console.log(totalPrice);

// _______________________________________________________________________________________________________________
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної price - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked Droid, price per item is 3500 credits`
// _______________________________________________________________________________________________________________
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6
// Оголошена змінна pricePerDroid
// Значення змінної pricePerDroid - це число 800
// Оголошена змінна deliveryFee
// Значення змінної deliveryFee - це число 50
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 4850
// Оголошена змінна message
// Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);

// const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// _______________________________________________________________________________________________________________

// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")

// Після оголошення є виклик функції sayHi
// // Change code below this line
// function sayHi () {
//     console.log("Hello, this is my first function!")
//   }
  
//   sayHi ();
//   _______________________________________________________________________________________________________________

//   Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Оголошена функція add(a, b, c)
// Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

// // Change code below this line
// function add(a,b,c) {
//     console.log(`Addition result equals ${a+b+c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

//   _______________________________________________________________________________________________________________
//   Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// Оголошена функція add(a, b, c)
// У функції add є оператор return
// Виклик add(15, 27, 10) повертає 52
// Виклик add(10, 20, 30) повертає 60
// Виклик add(5, 10, 15) повертає 30
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// function add(a, b, c) {
//     // Change code below this line
  
//   return (a + b + c);
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

//   _______________________________________________________________________________________________________________
//   Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// Увага
// Зверни увагу на те, що в коді відсутній виклик функції makeMessage. З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. Результат наших перевірок ти побачиш у блоці Результати під редактором коду.

// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };
  
//   const name = "Radar";
//   const price = 6150;
//   _______________________________________________________________________________________________________________

//   Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = (orderedQuantity*pricePerItem);
  
//     // Change code above this line
//     return totalPrice;
//   };
//   calculateTotalPrice(3, 400);
//   _______________________________________________________________________________________________________________

//   Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   }
  
//   const message1 = makeOrderMessage(2, 100, 50); 
//   const message2 = makeOrderMessage(4, 300, 100);
//   const message3 = makeOrderMessage(10, 70, 200);
  
//   console.log(message1);
//   console.log(message2);
//   console.log(message3);
  
//   _______________________________________________________________________________________________________________
//   Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true

// function isAdult(age) {
//     // Change code below this line
//     const passed = age>=18;
  
//     // Change code above this line
//     return passed;
//   }
//   _______________________________________________________________________________________________________________
//   Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = (password === SAVED_PASSWORD );
  
//     // Change code above this line
//     return isMatch;
//   }

//   _______________________________________________________________________________________________________________

//   Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"

// function checkAge(age) {
//     let message;
  
//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
//   _______________________________________________________________________________________________________________
//   Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".
// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"


// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if(available>ordered) {
//     message = "Order is processed, our manager will contact you.";
  
//   }
//     else {
//       message = "Not enough goods in stock!"
  
//     }
//     // Change code above this line
//     return message;
//   }
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));

//   _______________________________________________________________________________________________________________

//   Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a+=2;
// b-=4;
// c*=3;
// d /=10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// _______________________________________________________________________________________________________________

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
// Оголошена функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
// Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
// Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice=pricePerDroid*orderedQuantity;
//     if (customerCredits>=totalPrice) {
//       message=`You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
//     }
//     // Change code below this line
//   else 
//       message="Insufficient funds!";
//     // Change code above this line
//     return message;
//   }
  
//   _______________________________________________________________________________________________________________

//   Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password===null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password===ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

//   _______________________________________________________________________________________________________________

//   Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(70, 0)повертає "There are no products in the order!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(150, 0) повертає "There are no products in the order!"

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if(ordered === 0){
//     message="There are no products in the order!"
//   }
//     else if(available < ordered){
//       message="Your order is too large, there are not enough items in stock!"
//     }
//     else {
//       message="The order is accepted, our manager will contact you"
      
//     }
  
//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

//   _______________________________________________________________________________________________________________
//   Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// У виразі перевірки використаний оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// function isNumberInRange(start, end, number) {
//     const isInRange = number>=start&&number<=end; // Change this line
  
//     return isInRange;
//   }
//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

//   _______________________________________________________________________________________________________________

//   Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

// Оголошена функція checkIfCanAccessContent(subType)
// У виразі перевірки використаний оператор ||
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false
// Виклик checkIfCanAccessContent("vip") повертає true
// Виклик checkIfCanAccessContent("free") повертає false

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";
    
//     // Change this line
  
//     return canAccessContent;
//   }
//   console.log(checkIfCanAccessContent("pro"));
//   console.log(checkIfCanAccessContent("starter"));
//   console.log(checkIfCanAccessContent("vip"));
//   console.log(checkIfCanAccessContent("free"));

//   _______________________________________________________________________________________________________________

//   Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

// Оголошена функція isNumberNotInRange(start, end, number)
// У виразі використаний оператор !
// Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true
// Виклик isNumberNotInRange(20, 50, 24) повертає false
// Виклик isNumberNotInRange(20, 50, 76) повертає true

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange ; // Change this line
  
//     return isNotInRange;
//   }

//   _______________________________________________________________________________________________________________

//   Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// Оголошена функція getDiscount(totalSpent)
// Виклик getDiscount(137000) повертає 0.1
// Виклик getDiscount(46900) повертає 0.05
// Виклик getDiscount(8250) повертає 0.02
// Виклик getDiscount(1300) повертає 0
// Виклик getDiscount(5000) повертає 0.02
// Виклик getDiscount(20000) повертає 0.05
// Виклик getDiscount(50000) повертає 0.1

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
  
//     if (totalSpent >= 50000) {
//       discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000) {
//       discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000) {
//       discount = BRONZE_DISCOUNT;
//     } else {
//       discount = BASE_DISCOUNT;
//     }
  
//     return discount;
//   }
  
//   console.log(getDiscount(137000)); 
//   console.log(getDiscount(46900));  
//   console.log(getDiscount(8250));   
//   console.log(getDiscount(1300));   
//   console.log(getDiscount(5000));   
//   console.log(getDiscount(20000));  
//   console.log(getDiscount(50000));  

//   _______________________________________________________________________________________________________________

//   Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  
//     // Change code above this line
//     return message;
//   }
  
//   console.log (checkStorage(100, 50));
//   console.log (checkStorage(100, 130));
//   console.log (checkStorage(200, 20));
//   console.log (checkStorage(200, 150));
//   console.log (checkStorage(150, 180));

//   _______________________________________________________________________________________________________________
//   Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Використаний тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed":"Access denied, wrong password!"
//     // Change code above this line
//     return message;
//   }
//   _______________________________________________________________________________________________________________

//   Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// Оголошена функція getSubscriptionPrice(type)
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional":// Change this line
//         price = 20; // Change this line
//         break;
  
//      case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }
//   console.log(getSubscriptionPrice("professional"));
//   console.log(getSubscriptionPrice("organization"));
//   console.log(getSubscriptionPrice("starter"));
//   _______________________________________________________________________________________________________________

//   Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     switch(password) {
//       case null: 
//       message = "Canceled by user!";
//       break;
      
//       case ADMIN_PASSWORD: 
//       message = "Welcome!";
//       break;
        
//       default:
//       message = "Access denied, wrong password!";
   
//     }
  
//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword(null));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

//   _______________________________________________________________________________________________________________

//   Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;
//     let price;
//     // Change code below this line
//   switch (country) {
//       case "China":
//       price = 100;
//      console.log(message = `Shipping to ${country} will cost ${price} credits`);
//       break;
//     case "Chile":   
//       price = 250;
//      console.log(message = `Shipping to ${country} will cost ${price} credits`);
//       break;
//     case "Australia":  
//       price = 170;
//      console.log(message = `Shipping to ${country} will cost ${price} credits`);
//       break;
//     case "Jamaica":  
//       price = 120;
//      console.log(message = `Shipping to ${country} will cost ${price} credits`);
//       break;
//    default:
//       message = "Sorry, there is no delivery to your country";
      
  
  
      
//   }
//     // Change code above this line
//     return message;
//   }


// _______________________________________________________________________________________________________________

// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
//     return message;
  
  
//   console.logo(getNameLength("Poly"));
//   console.logo(getNameLength("Harambe"));
//   console.logo(getNameLength("Billy"));
//   console.logo(getNameLength("Joe"));
  
//   }

//   _______________________________________________________________________________________________________________

//   Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// console.log( courseTopicLength);
//   console.log(firstElement);
//     console.log(lastElement);

// // Change code above this line

// _______________________________________________________________________________________________________________

// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

// function getSubstring(string, length) {
 
//     const substring = string.slice(0,length); // Change this line
    
  
  
//     return substring;
  
//   getSubstring("Hello world", 3);
//   getSubstring("Hello world", 6);
//   getSubstring("Hello world", 8);
//   getSubstring("Hello world", 11);
//   getSubstring("Hello world", 0);
  
//   }
//   _______________________________________________________________________________________________________________

//   Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.
// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message; 
//   } else {
//     result = message.slice(0, maxLength) + "..."; 
//   }
//   // Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); 
// console.log(formatMessage("Curabitur ligula sapien", 23)); 
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// _______________________________________________________________________________________________________________

// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }

//   _______________________________________________________________________________________________________________

//   Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// Оголошена функція checkForName(fullname, name).
// Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
// Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
// Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
// Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
// Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false

// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     return result;
//   }
//   _______________________________________________________________________________________________________________
  
//   Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true


// function checkForSpam(message) {
//     let result;
//     const lowerCaseMessage = message.toLowerCase();
//     // Change code below this line
  
//     result =
//       lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
  
//     // Change code above this line
//     return result;
//   }
//   console.log(checkForSpam("Latest technology news"));
//   console.log(checkForSpam("JavaScript weekly newsletter"));
//   console.log(checkForSpam("Get best sale offers now!"));
//   console.log(checkForSpam("Amazing SalE, only tonight!"));
//   console.log(checkForSpam("Trust me, this is not a spam message"));
//   console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//   console.log(checkForSpam("[SPAM] How to earn fast money?"));

//   _______________________________________________________________________________________________________________

//   Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

// function checkAge(age) {
//     if (age>=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

//   _______________________________________________________________________________________________________________

//   Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";}
  
  
//     return "Access denied, wrong password!";
//     // Change code above this line
//   }
//   _______________________________________________________________________________________________________________
//   Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {
//     // Change code below this line
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } 
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
//     // Change code above this line
//   }

//   _______________________________________________________________________________________________________________

//   Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// // Change code below this line
// const fruits=["apple","plum","pear","orange"];

// _______________________________________________________________________________________________________________

// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement=fruits[0];
// const secondElement=fruits[1];
// const lastElement=fruits[fruits.length-1];
// _______________________________________________________________________________________________________________

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];


// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// _______________________________________________________________________________________________________________

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// _______________________________________________________________________________________________________________

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1;
// const lastElement= fruits[lastElementIndex];
// _______________________________________________________________________________________________________________

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]


// function getExtremeElements(array) {
//     // Change code below this line
  
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     const result = [firstElement, lastElement];
  
//     return result;
//     // Change code above this line
//   }
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//   console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// _______________________________________________________________________________________________________________

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words=message.split(delimiter);
//     // Change code above this line
//     return words;
//   }
//   _______________________________________________________________________________________________________________

//   Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     const array = message.split(" ");
//     const total = array.length * pricePerWord;
  
//     // Change code above this line
//     return total;
//   }
//   _______________________________________________________________________________________________________________
  
//   Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
  
//   string=array.join(delimiter);
  
//     // Change code above this line
//     return string;
//   }

//   _______________________________________________________________________________________________________________

//   Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//     // Change code below this line
//     const lowerCaseTitle = title.toLowerCase();
//     const slug = lowerCaseTitle.split(" ").join("-");
  
//     return slug;
  
  
//     // Change code above this line
//   }

//   _______________________________________________________________________________________________________________
  
//   Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);;
// const lastThreeEls =fruits.slice(-3); ;

// _______________________________________________________________________________________________________________
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line
// _______________________________________________________________________________________________________________

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
  
//     const allArray = firstArray.concat(secondArray);
  
//     const newLengthAllArray = allArray.length - maxLength;
//     const sliceAllArray = allArray.slice(0, maxLength);
//     return sliceAllArray;
  
//     // Change code above this line
//   }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//   _______________________________________________________________________________________________________________

//   Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i =start; i <=end ; i += 1) { // Change this line
//   console.log(i);
// }

// _______________________________________________________________________________________________________________

// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i += 1) { 
//       total += i;
//     }
  
//     return total;
//   }
  
//   console.log(calculateTotal(1));  // Повертає 1
//   console.log(calculateTotal(3));  // Повертає 6
//   console.log(calculateTotal(7));  // Повертає 28
//   console.log(calculateTotal(18)); // Повертає 171
//   console.log(calculateTotal(24)); // Повертає 300
//   console.log(calculateTotal());    // Повертає NaN, оскільки параметр не вказаний
//   _______________________________________________________________________________________________________________

//   Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// _______________________________________________________________________________________________________________
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i=0; i<order.length; i+=1){
//     total +=order[i];
//   }
//     // Change code above this line
//     return total;
//   }
//    console.log(calculateTotalPrice([12, 85, 37, 4]));// повертає 138
//    console.log(calculateTotalPrice([164, 48, 291]));// повертає 503
//    console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116
//    console.log(calculateTotalPrice([1, 1, 1, 1, 1]));
// _______________________________________________________________________________________________________________

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//     const array = string.split(" ");
//     let maxWord = "";
  
//     for (let i = 0; i < array.length; i++) {
//       let word = array[i];
  
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     }
  
//     return maxWord;
//   }
  
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Повертає "jumped"
//   console.log(findLongestWord("Google do a roll")); // Повертає "Google"
//   console.log(findLongestWord("May the force be with you")); // Повертає "force"
// _______________________________________________________________________________________________________________

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
  
//     for(i = min; i <= max; i ++){
//     numbers.push(i)}
  
//     return numbers;
//   }
//   console.log(createArrayOfNumbers(1, 3));// повертає [1, 2, 3]);
//   console.log(createArrayOfNumbers(14, 17)); //повертає [14, 15, 16, 17]);
//   console.log(createArrayOfNumbers(29, 34));// повертає [29, 30, 31, 32, 33, 34]);
  
// _______________________________________________________________________________________________________________
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
    
    
//     return fruits.includes(fruit)// Change this line
//   }
  

// _______________________________________________________________________________________________________________

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//     let totalArray = [];
//     for (let i = 0; i < array1.length; i++) {
//       if (array2.includes(array1[i])) {
//         totalArray.push(array1[i]);
//       }
//     }
//     return totalArray
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));// повертає [2]
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));// повертає [12, 27, 3]
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає [10, 30, 40]
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// повертає []

// _______________________________________________________________________________________________________________
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const number of order) {
//       total += number;
//     }
  
//     // Change code above this line
//     return total;
//   }
  
//    console.log(calculateTotalPrice([12, 85, 37, 4]));//повертає 138
//     console.log(calculateTotalPrice([164, 48, 291]));// повертає 503
//     console.log(calculateTotalPrice([412, 371, 94, 63, 176]));// повертає 1116
//     console.log(calculateTotalPrice([]));// повертає 0

// _______________________________________________________________________________________________________________

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (const newArray of numbers) {
//       const number = newArray;
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  
// _______________________________________________________________________________________________________________

// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// // Change code below this line
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7 ;
// const e = 8 % 6;
// _______________________________________________________________________________________________________________

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив


// function getEvenNumbers(start, end) {
 
//     const numbers = [];
//      if (start % 2 !== 0) {start++;}
//       if (end % 2 !== 0) { end--; }
//       for (let i = start; i <= end; i += 2) {
//       numbers.push(i);
//       }
    
//       return numbers;
//     }
    
//     console.log(getEvenNumbers(2, 5));// повертає [2, 4]
//     console.log(getEvenNumbers(3, 11));// повертає [4, 6, 8, 10]
//     console.log(getEvenNumbers(6, 12));// повертає [6, 8, 10, 12]
//     console.log(getEvenNumbers(8, 8));// повертає [8]
//     console.log(getEvenNumbers(7, 7));// повертає []
// _______________________________________________________________________________________________________________

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number;



// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break 
//   }
// }

// _______________________________________________________________________________________________________________

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return number;
//       }
//     }
  
   
//     // Change code above this line
//   }
  

// _______________________________________________________________________________________________________________

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === value) {
//         return true;
//       }
//     }
//     return false;
  
//   }
//   console.log(includes([1, 2, 3, 4, 5], 3));// повертає true
//   console.log(includes([1, 2, 3, 4, 5], 17));// повертає false
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));// повертає true
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));// повертає false
//   console.log(includes(["apple", "plum", "pear", "orange"], "plum"));// повертає true
//   console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));// повертає false

// _______________________________________________________________________________________________________________

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив ["premium", "promoted", "top"]

// const apartment ={
//     imgUrl:"https://via.placeholder.com/640x480",
//     descr:"Spacious apartment in the city center",
//     rating:4,
//     price:2153, 
//     tags:["premium", "promoted", "top"]
//   } ;

  
// _______________________________________________________________________________________________________________

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//     }
//   };
  

// _______________________________________________________________________________________________________________
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
  

// _______________________________________________________________________________________________________________


// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
// Значення змінної lastTag - це "top"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Change code above this line
  
// _______________________________________________________________________________________________________________

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це ["premium", "promoted", "top"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];
//   // Change code above this line
  
// _______________________________________________________________________________________________________________

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.price=5000;
//   apartment.rating=4.7;
//   apartment.owner.name="Henry Sibola";
//   apartment.tags.push("trusted");
  
  
  
//   // Change code below this line
  
// _______________________________________________________________________________________________________________
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.area = 60;
//   apartment.rooms=3;
//   apartment.location={};
//   apartment.location.country="Jamaica";
//   apartment.location.city="Kingston";
  
  
  
//   // Change code below this line
  

// _______________________________________________________________________________________________________________

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name, price, image,tags
//   // Change code above this line
// };

// _______________________________________________________________________________________________________________
// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]:"henry.carter@aptmail.com",
// [passwordInputName]:"jqueryismyjam"
//   // Change code above this line
// };


// _______________________________________________________________________________________________________________

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   for(key in apartment){
//     console.log(keys.push(key));
//    console.log(values.push(apartment[key]));
//   }
  

// _______________________________________________________________________________________________________________
// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }

//   // Change code above this line
// }


// _______________________________________________________________________________________________________________

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object){
//   if (object.hasOwnProperty(key)){
//     propCount=propCount+1;
//   }
//     }
//     // Change code above this line
//     return propCount;
//   }
  
// _______________________________________________________________________________________________________________

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//     const keys = Object.keys(apartment);
//   for (const key of keys){
  
//     values.push(apartment[key]);
//   }
  
// _______________________________________________________________________________________________________________

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//   const keys = Object.keys(object);
//     for (const key of keys) {
//       if (true) {
//         propCount += 1;
//       }
//     }
  
//     return propCount;
//     // Change code above this line
//   }
  

// _______________________________________________________________________________________________________________

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  

// // _______________________________________________________________________________________________________________
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//   let values = Object.values(salaries);
//     for (let i=0; i<values.length; i+=1){
//       totalSalary += values[i] 
    
//     }
//      return totalSalary;
//     // Change code above this line
    
//   }
  
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
  
// _______________________________________________________________________________________________________________

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  

// _______________________________________________________________________________________________________________



// _______________________________________________________________________________________________________________


// _______________________________________________________________________________________________________________


// _______________________________________________________________________________________________________________



// _______________________________________________________________________________________________________________


// _______________________________________________________________________________________________________________


// _______________________________________________________________________________________________________________