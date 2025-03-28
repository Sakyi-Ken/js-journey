class Car {
  constructor(brand) {
    console.log("The Car constructor has been called.");
    this.brand = brand;
  }
}

let myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increaseScore() {
    this.score++;
  }
}

let player1 = new Player("John", 0);
player1.increaseScore();

console.log(player1.name);
console.log(player1.score);