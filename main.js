// --- Task 1: Using forEach() ---
let favoriteCities = ["Philadelphia", "Tokyo", "Paris", "Dakar", "Kyoto"];

favoriteCities.forEach(city => {
  console.log(city.toUpperCase());
}); // iterate through each and log them


// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares);
// Expected Output:[1, 4, 9, 16, 25]

//Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];

let highScores = scores.filter(score => score >= 80);

console.log(highScores);
// Expected Output:[85, 90, 100]

// Task 4: Finding with find() and findIndex()
let favoriteFood = ["Fufu", "Ramen", "Suya", "Sushi", "Biryani", "Dosa"];

let fourLetterFood = favoriteFood.find(food => food.length > 4);
let foodIndex = favoriteFood.findIndex(food => food.length > 4);

console.log("Food:", fourLetterFood);
console.log("Index:", foodIndex);
// Expected Output: Food: Ramen
// Index: 1

// Task 5: Checking conditions with some() and every()
let temperatures = [68, 72, 75, 65, 70]; // A typical Philly forecast!

let hasHotDays = temperatures.some(temp => temp > 90);
let allMildDays = temperatures.every(temp => temp > 50);

console.log([hasHotDays, allMildDays]);
// Expected Output:[false, true]


//Task 6: Reducing with reduce()
let totalBudget = 200;
let prices = [25, 50, 30, 45]; // 4 gift items

// We pass the totalBudget as the initial value for the accumulator
let remainingBudget = prices.reduce((accumulator, currentPrice) => {
  return accumulator - currentPrice;
}, totalBudget);

console.log("Remaining Budget:", remainingBudget);
// Expected Output: Remaining Budget: 50