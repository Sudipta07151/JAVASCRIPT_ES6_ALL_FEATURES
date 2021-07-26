//ArrowFunction

//traditional function

function max(a, b, c) {
  const maxNum = a > b ? (a > c ? a : c) : b > c ? b : c;
  return maxNum;
}

console.log(max(223, 324, 234));

//ES6 function

const arrowFuncMax = (a, b, c) => {
  const maxNum = a > b ? (a > c ? a : c) : b > c ? b : c;
  return maxNum;
};
console.log(arrowFuncMax(223, 24, 34));

//for single line expression we can remove the return keyword

const FuncMax = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);
console.log(FuncMax(223, 24, 34));

//for single parameter we can remove the return keyword + bracket

const welcomeMsg = (age) => `Hello Sudipta you are ${age} years old`;
console.log(welcomeMsg(23));

//example (why use arrow function)

const team = {
  members: ["Jane", "Bill"],
  teamName: "Susper Squad",
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is of team ${this.teamName}`;
    });
  },
};
console.log(team.teamSummary());
