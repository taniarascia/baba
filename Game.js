export class Game {
  constructor(map, entities) {
    this.map = map
    this.entites = entities
    this.rules = []
  }

  init() {
    this.map.buildEmptyGrid()
  }

  isWin() {
    // check win condition
  }

  isDefeat() {
    // check defeat condition
  }
}
