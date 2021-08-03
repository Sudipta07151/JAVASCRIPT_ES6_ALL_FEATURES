//generator

//a short example code snippet _for breakdown

function* goToBeach(sum) {
  //exit from hotel
  var amt = sum;
  console.log(`EXIT hotel with Rs:${amt}`);

  //ride a tuk tuk
  console.log("riding tuk tuk");

  //pay driver
  console.log(`Paid driver`);
  const amount = yield "paid";

  //swimming in the sea
  console.log(`Swimming in the sea`);

  //rent towel
  const rentTowel = "returned";

  //return to hotel
  return { amount: "paid to driver", rentTowel };
}

const gen = goToBeach(50);
console.log(gen);
console.log(gen.next());
console.log(gen.next());

//example

function* colorsValues() {
  yield "red", yield "green", yield "orange";
}

corList = [];
corList.push(colorsValues().next());
corList.push(colorsValues().next());
corList.push(colorsValues().next());
console.log(corList);

//or

colList = [];
for (let color of colorsValues()) colList.push(color);

//example
const testingTeam = {
  lead: "Amanda",
  tester: "Shaun",
};

const team = {
  members: 5,
  subject: "JAVA EE",
  lead: "Schoff",
  dev: "Leo",
  prod: "Krista",
  designer: "Lim",
  testingTeam,
};

function* testingTeamMembers(testingTeam) {
  yield testingTeam.lead, yield testingTeam.tester;
}

function* teamMerbers(team) {
  yield team.dev, yield team.prod, yield team.lead, yield team.designer;
  yield* testingTeamMembers(team.testingTeam);
}

for (let member of teamMerbers(team)) {
  console.log(member);
}
