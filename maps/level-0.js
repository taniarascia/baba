import { Entity, TextEntity } from '../Entity.js'
import { nounTypes, actionTypes, connectorTypes } from '../constants.js'

const entities = [
  new Entity(nounTypes.WALL, { x: 4, y: 7 }),
  new Entity(nounTypes.WALL, { x: 5, y: 7 }),
  new Entity(nounTypes.WALL, { x: 6, y: 7 }),
  new Entity(nounTypes.WALL, { x: 7, y: 7 }),
  new Entity(nounTypes.WALL, { x: 8, y: 7 }),
  new Entity(nounTypes.WALL, { x: 9, y: 7 }),
  new Entity(nounTypes.WALL, { x: 10, y: 7 }),
  new Entity(nounTypes.WALL, { x: 11, y: 7 }),
  new Entity(nounTypes.WALL, { x: 12, y: 7 }),
  new Entity(nounTypes.WALL, { x: 13, y: 7 }),
  new Entity(nounTypes.WALL, { x: 14, y: 7 }),

  new Entity(nounTypes.BABA, { x: 5, y: 9 }),

  new Entity(nounTypes.ROCK, { x: 9, y: 8 }),
  new Entity(nounTypes.ROCK, { x: 9, y: 9 }),
  new Entity(nounTypes.ROCK, { x: 9, y: 10 }),

  new Entity(nounTypes.FLAG, { x: 13, y: 9 }),

  new Entity(nounTypes.WALL, { x: 4, y: 11 }),
  new Entity(nounTypes.WALL, { x: 5, y: 11 }),
  new Entity(nounTypes.WALL, { x: 6, y: 11 }),
  new Entity(nounTypes.WALL, { x: 7, y: 11 }),
  new Entity(nounTypes.WALL, { x: 8, y: 11 }),
  new Entity(nounTypes.WALL, { x: 9, y: 11 }),
  new Entity(nounTypes.WALL, { x: 10, y: 11 }),
  new Entity(nounTypes.WALL, { x: 11, y: 11 }),
  new Entity(nounTypes.WALL, { x: 12, y: 11 }),
  new Entity(nounTypes.WALL, { x: 13, y: 11 }),
  new Entity(nounTypes.WALL, { x: 14, y: 11 }),
]
const textEntities = [
  new TextEntity(nounTypes.BABA, { x: 4, y: 5 }),
  new TextEntity(connectorTypes.IS, { x: 5, y: 5 }),
  new TextEntity(actionTypes.YOU, { x: 6, y: 5 }),

  new TextEntity(nounTypes.FLAG, { x: 12, y: 5 }),
  new TextEntity(connectorTypes.IS, { x: 13, y: 5 }),
  new TextEntity(actionTypes.WIN, { x: 14, y: 5 }),

  new TextEntity(nounTypes.WALL, { x: 4, y: 13 }),
  new TextEntity(connectorTypes.IS, { x: 5, y: 13 }),
  new TextEntity(actionTypes.STOP, { x: 6, y: 13 }),

  new TextEntity(nounTypes.ROCK, { x: 12, y: 13 }),
  new TextEntity(connectorTypes.IS, { x: 13, y: 13 }),
  new TextEntity(actionTypes.PUSH, { x: 14, y: 13 }),
]

export const LEVEL_0_MAP = [...entities, ...textEntities]
