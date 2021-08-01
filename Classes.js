function Car(options) {
  this.title = options.title;
}

//prototypal methods
Car.prototype.start = function () {
  return "vroom...vroom....";
};

//prototypal inheritence
//traditional approach
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return "beeppp...beepp....";
};

const carObj = {
  title: "VESTA",
};
const car = new Car(carObj);
console.log(car.title);
console.log(car.start());

const toyota = new Toyota({ color: "red" });
console.log(toyota.color);
console.log(toyota.honk());

//ES6 [easy peasy approach] ;)

class Duck {
  constructor({ name }) {
    this.name = name;
  }
  fly() {
    console.log(`${this.name} Flying......`);
  }
}

class Luffy extends Duck {
  constructor(obj) {
    super(obj);
  }
  quack() {
    console.log(`quacking......`);
  }
}

const duckObj = new Duck({ name: "Duffy" });
duckObj.fly();

const luffyObj = new Luffy({ name: "Luffy" });
luffyObj.quack();
luffyObj.fly();
