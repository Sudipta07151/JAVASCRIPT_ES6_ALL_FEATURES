const colors = ["red", "blue", "purple"];
for (let color of colors) {
  console.log(color);
}

const numbers = [{ num: 32 }, { num: 12 }, { num: 10 }];
let sum = 0;
for (let number of numbers) {
  const { num } = number;
  sum += num;
}
console.log(sum);
