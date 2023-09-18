import { Game } from './Game.js'
import { MapEditor } from './MapEditor.js'
import { GameInterface } from './GameInterface.js'
import { LEVEL_0_MAP } from './maps/level-0.js'

export const mapEditor = new MapEditor(20, 20)
export const gameInterface = new GameInterface(mapEditor)
export const game = new Game(mapEditor, LEVEL_0_MAP, gameInterface)

game.init()
