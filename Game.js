import { textTypes, actionTypes, directionTypes } from './constants.js'
import {
  findAdjacentRule,
  progress,
  getEntities,
  isPlayer,
  isWin,
  last,
  clone,
  log,
} from './helpers.js'
import { UnitEntity } from './Entity.js'

export class Game {
  constructor(mapEditor, entities, gameInterface) {
    this.mapEditor = mapEditor
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
    this.populateMap()
    this.step()
  }

  populateMap() {
    this.mapEditor.buildEmptyGrid()
    this.mapEditor.addEntitiesToGrid(this.entities)
    this.populateFirstPreviousMap()
  }

  populateFirstPreviousMap() {
    const previousMap = clone(this.mapEditor.grid)
    previousMap[9][5] = null // clear player entity
    this.mapEditor.addPreviousGrid(previousMap)
  }

  step() {
    this.entities = getEntities(this.mapEditor.grid)
    this.findCurrentRulesOnGrid()
    this.findPlayer()
    this.checkForGameOver()
    this.checkForLevelComplete()

    log(this)
    this.interface.render(this.mapEditor.grid)
  }

  findCurrentRulesOnGrid() {
    const rules = []

    this.entities.forEach((entity) => {
      if (entity.isText && entity.type === textTypes.NOUN) {
        const horizontalRule = findAdjacentRule(this.mapEditor.grid, entity, directionTypes.RIGHT)
        const verticalRule = findAdjacentRule(this.mapEditor.grid, entity, directionTypes.DOWN)

        if (horizontalRule) rules.push(horizontalRule)
        if (verticalRule) rules.push(verticalRule)
      }
    })

    this.rules = rules
    this.youRule = this.rules.find((rule) => rule.action === actionTypes.YOU)
    this.winRule = this.rules.find((rule) => rule.action === actionTypes.WIN)
  }

  findPlayer() {
    this.player = []

    this.entities.forEach((entity) => {
      if (isPlayer(entity, this.youRule)) {
        this.player.push(entity)
      }
    })
  }

  movePlayer(direction) {
    // temporary, until function actually checks for validity and collisions
    this.player.forEach((playerEntity) => {
      const newPlayerEntity = new UnitEntity(
        playerEntity.word,
        progress(playerEntity.coords, direction)
      )
      this.mapEditor.grid[playerEntity.coords.y][playerEntity.coords.x] = last(
        this.mapEditor.previousGrids
      )[playerEntity.coords.y][playerEntity.coords.x]
      this.mapEditor.grid[newPlayerEntity.coords.y][newPlayerEntity.coords.x] = newPlayerEntity
    })

    this.step()
  }

  checkForLevelComplete() {
    // If rules including you and win don't both exit, win is impossible
    if (!this.youRule || !this.winRule) return

    // Win condition 1: X IS YOU and X IS WIN are both true
    if (this.youRule.word === this.winRule.word) {
      this.levelComplete = true
    }

    // Win condition 2: YOU action is at the same coordinates as the WIN action
    const winEntity = this.entities.find((entity) => isWin(entity, this.winRule))

    if (winEntity) {
      this.player.forEach((playerEntity) => {
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
