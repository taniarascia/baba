import { UnitEntity, TextEntity } from '../Entity.js'
import { textTypes, nounTypes, actionTypes, connectorTypes } from '../constants.js'

const entities = [
  new UnitEntity(nounTypes.WALL, { x: 4, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 5, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 6, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 7, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 8, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 9, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 10, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 11, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 12, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 13, y: 7 }),
  new UnitEntity(nounTypes.WALL, { x: 14, y: 7 }),

  new UnitEntity(nounTypes.BABA, { x: 5, y: 9 }),

  new UnitEntity(nounTypes.ROCK, { x: 9, y: 8 }),
  new UnitEntity(nounTypes.ROCK, { x: 9, y: 9 }),
  new UnitEntity(nounTypes.ROCK, { x: 9, y: 10 }),

  new UnitEntity(nounTypes.FLAG, { x: 13, y: 9 }),

  new UnitEntity(nounTypes.WALL, { x: 4, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 5, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 6, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 7, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 8, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 9, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 10, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 11, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 12, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 13, y: 11 }),
  new UnitEntity(nounTypes.WALL, { x: 14, y: 11 }),
]

const textEntities = [
  new TextEntity(nounTypes.BABA, { x: 4, y: 5 }, textTypes.NOUN),
  new TextEntity(connectorTypes.IS, { x: 5, y: 5 }, textTypes.CONNECTOR),
  new TextEntity(actionTypes.YOU, { x: 6, y: 5 }, textTypes.ACTION),

  new TextEntity(nounTypes.FLAG, { x: 12, y: 5 }, textTypes.NOUN),
  new TextEntity(connectorTypes.IS, { x: 13, y: 5 }, textTypes.CONNECTOR),
  new TextEntity(actionTypes.WIN, { x: 14, y: 5 }, textTypes.ACTION),

  new TextEntity(nounTypes.WALL, { x: 4, y: 13 }, textTypes.NOUN),
  new TextEntity(connectorTypes.IS, { x: 5, y: 13 }, textTypes.CONNECTOR),
  new TextEntity(actionTypes.STOP, { x: 6, y: 13 }, textTypes.ACTION),

  new TextEntity(nounTypes.ROCK, { x: 12, y: 13 }, textTypes.NOUN),
  new TextEntity(connectorTypes.IS, { x: 13, y: 13 }, textTypes.CONNECTOR),
  new TextEntity(actionTypes.PUSH, { x: 14, y: 13 }, textTypes.ACTION),
]

export const LEVEL_0_MAP = [...entities, ...textEntities]
