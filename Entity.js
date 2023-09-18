export class Entity {
  constructor(word, coords = { x: 0, y: 0 }) {
    this.word = word
    this.coords = coords
  }
}

export class UnitEntity extends Entity {
  constructor(word, coords) {
    super(word, coords)

    this.isUnit = true
  }
}

export class TextEntity extends Entity {
  constructor(word, coords, textType) {
    super(word, coords)

    this.isText = true
    this.type = textType
  }
}
