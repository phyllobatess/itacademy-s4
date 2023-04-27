// Exercise 1: Get the array of all directors.
// npm run test:watch      : Para ejecutar los tests
function getAllDirectors(array) {
  let result = [];
  result = array.map((e) => e.director);
  //console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = [];
  result = array.filter((e) => e.director == director);
  //console.log('EXERCISE 2', result);
  return result;
}
function calculateAverage(array) {
  let suma = array.reduce((sum, currentValue) => {
    let total = sum + currentValue.score
    return total;
  }, 0);
  console.log("funcion average suma", suma);
  return suma;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayDirector = getMoviesFromDirector(array, director);
  let suma = calculateAverage(arrayDirector);
  return Number(suma / (arrayDirector.length).toFixed(2));
}


// Exercise 4:  Alphabetic order by title only the first 20 films:
function orderAlphabetically(array) {
  let result = [];
  result = array
    .map((item) => item.title)
    .sort()
    .slice(0, 20);
  //console.log('EXERCISE 4', result);
  return result;
}

// Exercise 5: Order by year, ascending. If they have the same year, they should be ordered by their tittle
function orderByYear(array) {
  let newArray = [...array];
  let result = newArray
    .sort((a, b) => {
      if (a.title < b.title) return -1;
    })
    .sort((a, b) => a.year - b.year);

  //console.log('EXERCISE 5', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let arrayGenre = array.filter((e) => e.genre.includes(category));
   let sumaArrayGenre = arrayGenre.reduce(
     (sum, currentValue) => sum + currentValue.score,
     0
   );
  let totalElemento = arrayGenre.length;
  // let index = arrayGenre.find(elem => elem.score == "")
  // if (index != undefined) {
  //   totalElemento--;
  //   arrayGenre.splice(index,1)
  // }
  
  for (let i = 0; i < arrayGenre.length; i++){
    if (arrayGenre[i].score == "") {
      totalElemento--;
    }
  }
  let average = Number(
    (sumaArrayGenre / (totalElemento)).toFixed(2)
  );
  // console.log(arrayGenre);
  // console.log('EXERCISE 6: La media', average);
  return average;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
