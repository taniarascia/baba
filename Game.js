import { actionTypes, directionTypes } from './constants.js'
import { findAdjacentRule, isPlayer, isWin, log } from './helpers.js'

export class Game {
  constructor(map, entities, gameInterface) {
    this.map = map
    this.interface = gameInterface
    this.entities = entities

    // Rules
    this.rules = []
    this.youRule = null
    this.winRule = null

    // Player
    this.player = []
    this.moves = []

    // Game state
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
    this.interface.render(this.entities)
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
    this.winRule = this.rules.find(rule => rule.action === actionTypes.WIN)
  }

  findPlayer() {
    this.entities.forEach(entity => {
      if (isPlayer(entity, this.youRule)) {
        this.player.push(entity)
      }
    })
  }

  checkForLevelComplete() {
    // // If rules including you and win don't both exit, win is impossible
    if (!this.youRule || !this.winRule) return

    // Win condition 1: X IS YOU and X IS WIN are both true
    if (this.youRule.noun === this.winRule.noun) {
      this.levelComplete = true
    }

    // Win condition 2: YOU action is at the same coordinates as the WIN action
    const winEntity = this.entities.find(entity => isWin(entity, this.winRule))

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
    if (!this.youRule) {
      this.gameOver = true
    }
  }
}
