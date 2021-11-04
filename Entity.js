export class Entity {
  constructor(noun, coords = { x: 0, y: 0 }) {
    this.noun = noun
    this.coords = coords
  }
}

export class TextEntity extends Entity {
  constructor(noun, coords) {
    super(noun, coords)

    this.isText = true
  }
}
