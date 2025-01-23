import "./styles.css";

function Lesson06() {

  // Типы переменных указываются после названия через двоеточие

  // 1. Типизация строк

  let userName: string = "Tom";
  userName = "Mary";
  // userName = true; // Ошибка типов
  userName = "";
  userName = "John";
  
  let fullName: string = `${userName} Smith`;

  let result: string = 1 + 2 + '3';
  console.log(result); // 33
  
  // 2. Типизация чисел - number

  let luckyNumber: number = 23;
  // luckyNumber = '2';
  luckyNumber = Infinity;
  luckyNumber = 98.3;
  luckyNumber = -10;
  luckyNumber = NaN;
  // luckyNumber = 23 - '4';
  
  // 3. Типизация логического типа - boolean

  let isAdmin: boolean = true;
  isAdmin = 2 > 1;                  // true
  isAdmin = !1;                     // false
  isAdmin = userName === 'John';    // true
  console.log(isAdmin);

  // 4. Типизация null - null
  
  let emptyValue: null = null;
  // emptyValue = 0;            // операция невозможна
  // emptyValue = undefined;    // операция невозможна

  // 5. Типизация undefined - undefined

  let data: undefined = undefined;
  // data = null;  // операция невозможна
  // data = 0;     // операция невозможна

  // 6. Типизация BigInt - bigint

  let bigN: bigint = 123778889002n;
  bigN = 1233333333333333333333333333333n;
  // bigN = 123; // без постфикса n присвоение невозможно

  // 7. Типизация Symbol - symbol

  let uniq: symbol = Symbol('descriprtion');
  // uniq = 23;    // операция невозможна
  //   {
  //     [uniq]: 123
  //   }

  // 8. Типизация массива - указываем тип данных, которые будет содержать массив, затем квадратные скобки

  const colors: string[] = ['red', 'black', '123'];
  // colors.push(true); // операция невозможна
  // colors[0] = 0001;  // операция невозможна
  colors[2] = 'green';
  console.log(colors);  // ['red', 'black', 'green']

  // 9. Кортеж (tupel) - указываем в квадратных скобках структуру массива, а вместо элементов подставляем типы

  const fruits: [string, number] = ['apple', 4];
  fruits.push('cherry');    // после создания массива можно добавлять в массив элементы любой структуры
  console.log(fruits);      // ['apple', 4, 'cherry']
  
  // 10. Типизация возвращаемого значения - тип подставляется после круглых скобок:
  
  // - если функция ничего не возвращает, типищируем возврат как void:
  const showMesage = (): void => {
    console.log('Hello');
    colors[1] = 'pink';
  }

  // - если функция возвращает значение, то после двоеточия мы указываем нужный тип
  const getSum = (): number => {
    // const sum: number = 2 + 4 + '4';
    const sum: number = 2 + 4;
    return sum;
  }

  // 11. Типизация параметров функции - тип подставляется после каждого параметра через двоеточие

  const getUserData = (firstName: string, age: number = 18): string => {
    return `${firstName} - ${age}`;
  }

  console.log(getUserData('Nick', 23)); // "Nick - 23"
  getUserData('Tom', 34);
  console.log(getUserData('Mary'));     // "Mary - 18"

  // 12. Автоматическое определение типов, происходит только при задании значения, т.к. тип может быть сразу определён

  let name = 'Bob';
  // name = true; // операция невозможна

  const numbers = [2, 3, 54, 9];
  numbers.push(23);
  // numbers.push('34'); // операция невозможна

  const getNumber = (num = 2) => {
    return num;
  }

  // 13. Union-типы позволяют указывать несколько типов - типы указываются через знак |
  
  let color: string | number = 'red';
  color = 2341;
  // color = true; // операция невозможна

  const example: (string|boolean)[] = ['fruit', true];

  return (
    <div className="lesson06-wrapper">
      Lesson06 - TypeScript Introduction
      {fullName}
    </div>
  );
}
export default Lesson06;