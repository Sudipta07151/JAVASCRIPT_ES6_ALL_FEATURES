//enhanced object literal

//traditional approach

function createGameShop(gameDeck) {
  return {
    gameDeck: gameDeck,
    totalDeckValue: function () {
      return this.gameDeck.reduce((sum, game) => sum + game.price, 0);
    },
    findgame: function (title) {
      return this.gameDeck.find((game) => game.title === title);
    },
  };
}

gameDeck = [
  { title: "Days Gone", price: 2999 },
  { title: "GTA V", price: 3999 },
  { title: "PES 2021 UPDATE", price: 3499 },
];

const gameShop = createGameShop(gameDeck);
console.log(gameShop.totalDeckValue());
console.log(gameShop.findgame("Days Gone"));

//ES6 approach

function createGameShopNew(gameDeckNew) {
  return {
    gameDeckNew,
    totalDeckValue() {
      return this.gameDeckNew.reduce((sum, game) => sum + game.price, 0);
    },
    findgame(title) {
      return this.gameDeckNew.find((game) => game.title === title);
    },
  };
}

gameDeckNew = [
  { title: "MAFIA 3", price: 4999 },
  { title: "FIFA 2021", price: 3999 },
  { title: "PES 2021 UPDATE", price: 3499 },
];

const gameShopNew = createGameShopNew(gameDeckNew);
console.log(gameShopNew.totalDeckValue());
console.log(gameShopNew.findgame("MAFIA 3"));
