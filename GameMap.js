import { findAdjacentRule } from './helpers.js'
import { directionTypes } from './constants.js'

export class GameMap {
  constructor(height, width) {
    this.height = height - 1
    this.width = width - 1
    this.grid = null
  }

  buildEmptyGrid() {
    const grid = []
    const rows = Array.from(new Array(this.height))
    const columns = Array.from(new Array(this.width))

    rows.forEach((_, y) => {
      grid.push([])

      columns.forEach(_ => {
        grid[y].push(null)
      })
    })

    this.grid = grid
  }

  addEntitiesToGrid(entities) {
    entities.forEach(entity => {
      this.grid[entity.coords.y][entity.coords.x] = entity
    })
  }

  findCurrentRulesOnGrid() {
    const entities = this.grid.flat().filter(row => row)
    const rules = []

    entities.forEach(entity => {
      const horizontalRule = findAdjacentRule(this.grid, entity, directionTypes.RIGHT)
      const verticalRule = findAdjacentRule(this.grid, entity, directionTypes.DOWN)

      if (horizontalRule) rules.push(horizontalRule)
      if (verticalRule) rules.push(verticalRule)
    })

    return rules
  }
}
