import { Entity, TextEntity } from '../Entity.js'
import { nounTypes, actionTypes, connectorTypes } from '../constants.js'

const entities = []
const textEntities = [
  new TextEntity(nounTypes.BABA, { x: 4, y: 7 }),
  new TextEntity(connectorTypes.IS, { x: 5, y: 7 }),
  new TextEntity(actionTypes.YOU, { x: 6, y: 7 }),

  new TextEntity(nounTypes.FLAG, { x: 13, y: 7 }),
  new TextEntity(connectorTypes.IS, { x: 14, y: 7 }),
  new TextEntity(actionTypes.WIN, { x: 15, y: 7 }),

  new TextEntity(nounTypes.WALL, { x: 4, y: 11 }),
  new TextEntity(connectorTypes.IS, { x: 5, y: 11 }),
  new TextEntity(actionTypes.STOP, { x: 6, y: 11 }),

  new TextEntity(nounTypes.ROCK, { x: 13, y: 11 }),
  new TextEntity(connectorTypes.IS, { x: 14, y: 11 }),
  new TextEntity(actionTypes.PUSH, { x: 15, y: 11 }),
]

export const LEVEL_0_MAP = [...entities, ...textEntities]
