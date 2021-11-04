import { GameMap } from './GameMap.js'
import { Game } from './Game.js'

const map = new GameMap(20, 20)
const game = new Game(map)

game.init()
