import { nouns, actions, connectors, directionTypes } from './helpers.js'
import { Rule } from './Rule.js'

export function progress({ x, y }, direction, steps = 1) {
  switch (direction) {
    case directionTypes.UP:
      return { x, y: y - steps }
    case directionTypes.DOWN:
      return { x, y: y + steps }
    case directionTypes.LEFT:
      return { x: x - steps, y }
    case directionTypes.RIGHT:
      return { x: x + steps, y }
  }
}

export function findAdjacentRule(grid, cell, coords, direction) {
  const adjacentCell2 = grid[progress(coords, direction).y][progress(coords, direction).x]
  const adjacentCell3 = grid[progress(coords, direction, 2).y][progress(coords, direction, 2).x]

  if (cell.isText && nouns.includes(cell.noun)) {
    // See if the next item is a connector
    if (adjacentCell2?.isText && connectors.includes(adjacentCell2.noun)) {
      // See if the next item is an action
      if (adjacentCell3?.isText && actions.includes(adjacentCell3.noun)) {
        // Congratulations, you found a rule
        const rule = new Rule(cell.noun, adjacentCell3.noun)

        return rule
      }
    }
  }
}
