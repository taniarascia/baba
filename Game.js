import { textTypes, actionTypes, directionTypes } from './constants.js'
import {
  findAdjacentRule,
  progress,
  getEntities,
  checkIsOutOfBounds,
  isPlayer,
  isWin,
  last,
  clone,
  log,
} from './helpers.js'
import { UnitEntity } from './Entity.js'

export class Game {
  constructor(mapEditor, entities, screenInterface) {
    this.mapEditor = mapEditor
    this.interface = screenInterface
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

  populateGameOver() {
    this.interface.renderGameOver()
  }

  populateLevelComplete() {
    this.interface.renderLevelComplete()
  }

  step() {
    this.entities = getEntities(this.mapEditor.grid)
    this.findCurrentRulesOnGrid()
    this.findPlayer()

    this.checkForGameOver()
    if (this.gameOver) {
      this.populateGameOver()
      return
    }

    this.checkForLevelComplete()
    if (this.levelComplete) {
      this.populateLevelComplete()
      return
    }

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

      const isOutOfBounds = checkIsOutOfBounds(newPlayerEntity, this.mapEditor)

      if (isOutOfBounds) {
        return
      }

      // Set the previous cell to whatever it was in the previous state
      const previousGrid = last(this.mapEditor.previousGrids)
      this.mapEditor.grid[playerEntity.coords.y][playerEntity.coords.x] =
        previousGrid[playerEntity.coords.y][playerEntity.coords.x]
      this.mapEditor.grid[newPlayerEntity.coords.y][newPlayerEntity.coords.x] = newPlayerEntity
    })

    this.step()
  }

  checkForLevelComplete() {
    // If rules including you and win don't both exist, win is impossible
    if (!this.youRule || !this.winRule) return

    // Win condition 1: X IS YOU and X IS WIN are both true
    if (this.youRule.noun === this.winRule.noun) {
      this.levelComplete = true
    }
    const previousEntities = getEntities(last(this.mapEditor.previousGrids))
    // Win condition 2: YOU action is at the same coordinates as the WIN action was in the previous step
    const winEntity = previousEntities.find((entity) => isWin(entity, this.winRule))
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
