import { entityColorDictionary, textColorDictionary, actionBgColorDictionary } from './constants.js'

const multiplier = 30

export class GameInterface {
  constructor(mapEditor) {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = mapEditor.width * multiplier
    this.canvas.height = mapEditor.height * multiplier

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
            this.context.fillStyle = entityColorDictionary[entity.word]
            this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
          } else {
            if (actionBgColorDictionary[entity.word]) {
              this.context.fillStyle = actionBgColorDictionary[entity.word]
              this.context.fillRect(x * multiplier, y * multiplier, multiplier, multiplier)
            }
            this.context.font = '40px Arial'
            this.context.fillStyle = textColorDictionary[entity.word] || '#000000'
            this.context.fillText(
              entity.word,
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
