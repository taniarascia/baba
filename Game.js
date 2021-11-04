export class Game {
  constructor(map, entities) {
    this.map = map
    this.entities = entities
    this.rules = []
  }

  init() {
    this.map.buildEmptyGrid()
    this.map.addEntitiesToGrid(this.entities)
  }

  setRules() {}

  isWin() {
    // check win condition
  }

  isDefeat() {
    // check defeat condition
  }
}
