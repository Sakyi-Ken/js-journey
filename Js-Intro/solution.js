class Game {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }
}

class Console {
  constructor(name, releaseYear) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.games = [];
  }
  addGame(game) {
    this.games.push(game);
  }
  showGames() {
    console.log("List of games coming soon!");
  }
}

let myConsole = new Console("GameStation", 2020);
myConsole.addGame(new Game('Space Adventure', 'Action'));
myConsole.showGames();
myConsole.addGame(new Game('Super Racing', 'Racing'));

console.log(myConsole.games); // [Game { title: 'Space Adventure', genre: 'Action' }, Game { title: 'Super Racing', genre: 'Racing' }]
// console.log(myConsole.games[0].title); // Space Adventure

console.log(myConsole.games[0]); //{title: 'Space Adventure', genre: 'Action'} 
console.log(myConsole.games[1].title); // Super Racing