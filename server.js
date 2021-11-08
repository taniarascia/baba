import { Game } from './Game.js'
import { GameMap } from './GameMap.js'
import { GameInterface } from './GameInterface.js'
import { LEVEL_0_MAP } from './maps/level-0.js'

export const map = new GameMap(20, 20)
export const gameInterface = new GameInterface(map)
export const game = new Game(map, LEVEL_0_MAP, gameInterface)

game.init()
