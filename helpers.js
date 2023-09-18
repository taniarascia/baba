import { nouns, actions, connectors, directionTypes } from './constants.js'
import { Rule } from './Rule.js'

export function getEntities(grid) {
  return grid.flat().filter((row) => row)
}

export function isPlayer(entity, youRule) {
  return !entity.isText && entity.noun === youRule?.noun
}

export function isWin(entity, winRule) {
  return !entity.isText && entity.noun === winRule?.noun
}

export function log(that) {
  // console.log('map', that.map)
  // console.log('rules', that.rules)
  // console.log('player', that.player)
  // console.log('game over', that.gameOver)
  // console.log('level complete', that.levelComplete)
}

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

export function findAdjacentRule(grid, cell, direction) {
  const adjacentCell2 = grid[progress(cell.coords, direction).y][progress(cell.coords, direction).x]
  console.log(adjacentCell2)
  const adjacentCell3 =
    grid[progress(cell.coords, direction, 2).y][progress(cell.coords, direction, 2).x]
  console.log(adjacentCell3)

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
