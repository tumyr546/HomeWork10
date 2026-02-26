// Завдання 2: Калькулятор з операціями 

// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.



// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції
// Початковий код:

// Функція calculate тут
const calculate = (a, b, operation) => {
  return operation(a, b);
};

// Стрілкові функції для операцій тут
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'ділення на нуль!';
  }
  return a / b;
};

// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку