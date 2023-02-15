const CarGameController = require('./controllers/CarGameController');

class App {
  #CarGameController;

  play() {
    this.#CarGameController = new CarGameController();
    this.#CarGameController.playGame();
  }
}

module.exports = App;