import { actionTypes, directionTypes } from './constants.js'
import { findAdjacentRule, isPlayer, isWin, log } from './helpers.js'

export class Game {
  constructor(map, entities) {
    this.map = map
    this.entities = entities
    this.rules = []
    this.youRule = null
    this.player = []
    this.moves = []
    this.gameOver = false
    this.levelComplete = false
  }

  init() {
    this.step()
  }

  step() {
    this.map.buildEmptyGrid()
    this.map.addEntitiesToGrid(this.entities)

    this.findCurrentRulesOnGrid()
    this.findPlayer()
    this.checkForGameOver()
    this.checkForLevelComplete()

    log(this)
  }

  findCurrentRulesOnGrid() {
    const rules = []

    this.entities.forEach(entity => {
      const horizontalRule = findAdjacentRule(this.map.grid, entity, directionTypes.RIGHT)
      const verticalRule = findAdjacentRule(this.map.grid, entity, directionTypes.DOWN)

      if (horizontalRule) rules.push(horizontalRule)
      if (verticalRule) rules.push(verticalRule)
    })

    this.rules = rules
    this.youRule = this.rules.find(rule => rule.action === actionTypes.YOU)
  }

  findPlayer() {
    this.entities.forEach(entity => {
      if (isPlayer(entity, this.youRule)) {
        this.player.push(entity)
      }
    })
  }

  checkForLevelComplete() {
    const winRule = this.rules.find(rule => rule.action === actionTypes.WIN)

    // // If rules including you and win don't both exit, win is impossible
    // if (!this.youRule || !winRule) return

    // // Win condition 1: X IS YOU and X IS WIN are both true
    // if (this.youRule.noun === winRule.noun) {
    //   this.levelComplete = true
    // }

    // Win condition 2: YOU action is at the same coordinates as the WIN action
    const winEntity = this.entities.find(entity => isWin(entity, winRule))

    if (winEntity) {
      this.player.forEach(playerEntity => {
        if (
          winEntity.coords.x === playerEntity.coords.x &&
          winEntity.coords.y === playerEntity.coords.y
        ) {
          this.levelComplete = true
        }
      })
    }
  }

  checkForGameOver() {
    // check defeat condition
  }
}
