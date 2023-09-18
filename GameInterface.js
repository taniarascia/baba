import { entityColorDictionary, textColorDictionary, actionBgColorDictionary } from './constants.js'

const multiplier = 30

export class GameInterface {
  constructor(mapEditor) {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = mapEditor.width * multiplier
    this.canvas.height = mapEditor.height * multiplier

    this.screen = this.canvas.getContext('2d')
  }

  render(grid) {
    grid.forEach((row, y) => {
      row.forEach((entity, x) => {
        if (entity) {
          this.screen.clearRect(
            x * multiplier,
            y * multiplier,
            this.canvas.width,
            this.canvas.height
          )
          if (!entity.isText) {
            this.screen.fillStyle = entityColorDictionary[entity.word]
            this.screen.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
          } else {
            if (actionBgColorDictionary[entity.word]) {
              this.screen.fillStyle = actionBgColorDictionary[entity.word]
              this.screen.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
            }
            this.screen.font = '40px Arial'
            this.screen.fillStyle = textColorDictionary[entity.word] || '#000000'
            this.screen.fillText(
              entity.word,
              x * multiplier,
              y * multiplier + multiplier,
              multiplier,
              multiplier
            )
          }
        } else {
          this.screen.clearRect(
            x * multiplier,
            y * multiplier,
            this.canvas.width,
            this.canvas.height
          )
        }
      })
    })
  }

  renderGameOver() {
    this.screen.clearRect(0, 0, this.canvas.width * multiplier, this.canvas.height * multiplier)

    this.screen.font = '60px Arial'
    this.screen.fillStyle = textColorDictionary.BABA
    this.screen.textBaseline = 'middle'
    this.screen.textAlign = 'center'
    this.screen.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2)
  }
}
