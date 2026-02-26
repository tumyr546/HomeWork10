// Завдання 4: Кінотеатр (творче та додаткове завдання) ⭐

// Створіть власну функцію обробки списку фільмів, яка може застосовувати різні дії до кожного фільму у колекції.
// Створіть функцію processMovies(movies, action)
// Пройдіться по масиву фільмів циклом for або for...of
// Для кожного фільму викличте action(movie, index) (передайте фільм та його номер)
// Створіть мінімум 3 різні колбек-функції для обробки фільмів
// Протестуйте всі варіанти

function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

const movies = ['Матриця', 'Інтерстеллар', 'Темний лицар', 'Володар перснів'];

// Колбеки:
const logMovie = (movie, index) => console.log(`#${index + 1}: ${movie}`);
const shoutMovie = (movie) => console.log(movie.toUpperCase() + '!');
const movieWithStars = (movie, index) => console.log(`* ${index + 1} — ${movie} *`);

processMovies(movies, logMovie);
processMovies(movies, shoutMovie);
processMovies(movies, movieWithStars);