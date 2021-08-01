var expense = {
  type: "Business",
  amount: 45000,
};

//----------------Traditional method--------------
// var type=expense.type
// var amount = expense.amount

//--------------ES6----------------

// const {type} = expense
// const {amount} = expense

// console.log(type,amount)

//or we can do (name of vaiable should be same/identical to property name)

const { type, amount } = expense;

console.log(type, amount);

//example2

var savedFiles = {
  extension: "jpg",
  name: "mario",
  size: 3567,
};

// traditional approaach

function fileSummary(file) {
  return `The file is ${file.extension} ${file.name} ${file.size}`;
}

console.log(fileSummary(savedFiles));

// ES6 way

function fileSummaryES6({ extension, size, name }) {
  return `The file is ${extension} ${name} ${size}`;
}

console.log(fileSummaryES6(savedFiles));

//example
const companies = ["Samsung", "Apple", "Honor"];

const [name, name2] = companies;

//  traditional
console.log(companies[0]);

//ES6
console.log(name);
console.log(name2);

//or
const [name0, ...rest] = companies;

console.log(rest);

//example
const companiesList = [
  { name: "Samsung", loc: "South Korea" },
  { name: "Apple", loc: "America" },
  { name: "Honor", loc: "China" },
];

const [{ loc }] = companiesList;

console.log(loc);

const Apple = {
  locs: ["Cupertino", "California", "United States"],
};

//get California
const {
  locs: [_, l2],
} = Apple;
console.log(l2);

//example

//------------what we have------------
const points = [
  [3, 5],
  [4, 6],
  [6, 8],
];

//---------what we want--------
// const points=[
//   {x:3,y:5},
//   {x:4,y:6},
//   {x:6,y:8}
// ]

const newPoints = points.map(([x, y]) => {
  return { x, y };
});

console.log(newPoints);
