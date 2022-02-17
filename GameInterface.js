const colorMap = {
  BABA: 'blue',
  WALL: 'gray',
  ROCK: 'brown',
  FLAG: 'yellow',
}

const multiplier = 15

export class GameInterface {
  constructor(map) {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = map.width * multiplier
    this.canvas.height = map.height * multiplier

    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = 'black'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  render(grid) {
    grid.forEach((row, y) => {
      row.forEach((entity, x) => {
        if (entity) {
          this.context.fillStyle = entity.isText ? 'white' : colorMap[entity.noun]
          this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
        } else {
          this.context.fillStyle = 'black'
          this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
        }
      })
    })
  }
}
