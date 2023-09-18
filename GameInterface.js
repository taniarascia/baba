const entityColorMap = {
  BABA: '#ffffff',
  WALL: '#212737',
  ROCK: '#BFA154',
  FLAG: '#ECE392',
}

const textColorMap = {
  BABA: '#C9456B',
  WALL: '#747474',
  ROCK: '#8B6942',
  FLAG: '#ECE392',
  IS: '#ffffff',
}

const actionBackgroundColorMap = {
  YOU: '#C9456B',
  STOP: '#4D5B22',
  PUSH: '#8B6942',
  WIN: '#ECE392',
}

const multiplier = 30

export class GameInterface {
  constructor(map) {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = map.width * multiplier
    this.canvas.height = map.height * multiplier

    this.context = this.canvas.getContext('2d')
  }

  render(grid) {
    grid.forEach((row, y) => {
      row.forEach((entity, x) => {
        if (entity) {
          this.context.clearRect(
            x * multiplier,
            y * multiplier,
            this.canvas.width,
            this.canvas.height
          )
          if (!entity.isText) {
            this.context.fillStyle = entityColorMap[entity.noun]
            this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
          } else {
            if (actionBackgroundColorMap[entity.noun]) {
              this.context.fillStyle = actionBackgroundColorMap[entity.noun]
              this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
            }
            this.context.font = '40px Arial'
            this.context.fillStyle = textColorMap[entity.noun] || '#000000'
            this.context.fillText(
              entity.noun,
              x * multiplier,
              y * multiplier + multiplier,
              multiplier,
              multiplier
            )
          }
        } else {
          this.context.clearRect(
            x * multiplier,
            y * multiplier,
            this.canvas.width,
            this.canvas.height
          )
        }
      })
    })
  }
}
