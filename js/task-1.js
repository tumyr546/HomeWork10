// Завдання 1. Лічильник подій 

// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.
// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат


// Початковий код:

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

    
// // Функція countItems тут
function countItems(array, condition) {
  let count = 0;
  for (const item of array) {
    if (condition(item)) {
      count++;
    }
  }
  return count;
}
// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;    

// // Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));
