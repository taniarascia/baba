import { GameMap } from './GameMap.js'
import { Game } from './Game.js'

export const map = new GameMap(20, 20)
export const game = new Game(map)

game.init()
