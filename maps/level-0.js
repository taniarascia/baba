import { Entity, TextEntity } from '../Entity.js'
import { nounTypes, actionTypes, connectorTypes } from '../constants.js'

const entities = []
const textEntities = [
  new TextEntity(nounTypes.BABA, { x: 6, y: 6 }),
  new TextEntity(connectorTypes.IS, { x: 7, y: 6 }),
  new TextEntity(actionTypes.YOU, { x: 8, y: 6 }),

  new TextEntity(nounTypes.FLAG, { x: 14, y: 6 }),
  new TextEntity(connectorTypes.IS, { x: 15, y: 6 }),
  new TextEntity(actionTypes.WIN, { x: 16, y: 6 }),

  new TextEntity(nounTypes.WALL, { x: 6, y: 10 }),
  new TextEntity(connectorTypes.IS, { x: 7, y: 10 }),
  new TextEntity(actionTypes.STOP, { x: 8, y: 10 }),

  new TextEntity(nounTypes.ROCK, { x: 14, y: 10 }),
  new TextEntity(connectorTypes.IS, { x: 15, y: 10 }),
  new TextEntity(actionTypes.PUSH, { x: 16, y: 10 }),
]

export const LEVEL_0_MAP = [...entities, ...textEntities]
