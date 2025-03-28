class Animal {
  constructor(name, sound) {
    console.log("An instance of Animal is being created.");
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} ${this.sound}s.`);
  }
}
class Cat extends Animal {}

class Dog extends Animal {
  constructor(name, breed, sound) {
    super(name);
    console.log("An instance of Dog is being created.");
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    super.speak();
    console.log(`${this.name} doesn't ${this.sound}.`);
  }
}

//let whiskers = new Cat("Whiskers");
//whiskers.speak(); // Whiskers makes a noise.

let spot = new Dog("Spot", "Dalmatian", "bark");

spot.speak(); // Spot makes a noise.

class VideoGame {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }
  displayInfo() {
    console.log(`Title: ${this.title}, Genre: ${this.genre}`);
  }
}

class ArcadeGame extends VideoGame {
  constructor(title, genre, platform) {
    super(title, genre);
    this.platform = platform;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`Platform: ${this.platform}`);
  }
}
//let game1 = new VideoGame("Super Mario Bros", "Platformer");  // Title: Super Mario Bros, Genre: Platformer
//game1.displayInfo();  // Title: Super Mario Bros, Genre: Platformer
let game2 = new ArcadeGame("Street Fighter", "Fighting", "Arcade");   // Title: Street Fighter, Genre: Fighting, Platform: Arcade                                                     
game2.displayInfo();  // Title: Street Fighter, Genre: Fighting, Platform: Arcade

let racingGame = new VideoGame("Need for Speed", "Racing");
racingGame.displayInfo(); // Title: Need for Speed, Genre: Racing
let arcadeRacingGame = new ArcadeGame("Outrun", "Racing", "Arcade");
arcadeRacingGame.displayInfo(); // Title: Outrun, Genre: Racing, Platform: Arcade