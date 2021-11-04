import { GameMap } from './GameMap.js'
import { Game } from './Game.js'
import { LEVEL_0_MAP } from './maps/level-0.js'

export const map = new GameMap(20, 20)
export const game = new Game(map, LEVEL_0_MAP)

game.init()
