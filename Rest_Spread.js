//rest and spread

//traditional

const sum = (numbers) => {
  return numbers.reduce((sum, number) => number + sum, 0);
};

console.log(sum([1, 2, 3, 4, 5]));

//or

const sum2 = (a, b, c) => {
  const numbers = [a, b, c];
  return numbers.reduce((sum, number) => number + sum, 0);
};

console.log(sum2(1, 2, 3));

//ES6 using rest

const sum3 = (...numbers) => {
  return numbers.reduce((sum, number) => number + sum, 0);
};

console.log(sum3(1, 2, 3, 56, 7, 8, 9, 56, 123));

//example

shoppingList = (...slist) => {
  newList = slist.indexOf("milk") < 0 ? [...slist, "milk"] : slist;
  return newList;
};

console.log(shoppingList("bread", "corn", "milk"));
console.log(shoppingList("bread", "corn", "potato"));

//example

const shop = {
  books: ["Elequent Javascript", "Head First Java", "ML FOR DUMMIES"],
  games: ["GTA5", "TOMB RAIDER", "MAFIA3", "HITMAN"],
  totalProducts() {
    return [...this.books, ...this.games];
  },
  traditionalTotalProducts() {
    return this.books.concat(this.games);
  },
};

console.log(shop.totalProducts());
console.log(shop.traditionalTotalProducts());

//example

const mathLibrary = {
  calculate(...args) {
    let sum = args.reduce((sum, number) => number + sum, 0);
    console.log("THE SUM METHOD IS DEPRECATED, NOW WE USE MULTIPLY");
    console.log(`SUM IS:${sum}`);
    return this.calculateMultiply(...args);
  },
  calculateMultiply(...args) {
    console.log("MULTIPLY METHOD CALLED");
    return args.reduce((sum, number) => number * sum, 1);
  },
};

console.log(mathLibrary.calculate(12, 2, 3));
