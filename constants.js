export const nounTypes = {
  BABA: 'BABA',
  ROCK: 'ROCK',
  WALL: 'WALL',
  FLAG: 'FLAG',
}

export const actionTypes = {
  YOU: 'YOU',
  PUSH: 'PUSH',
  STOP: 'STOP',
  WIN: 'WIN',
}

export const connectorTypes = {
  IS: 'IS',
}

export const directionTypes = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

export const nouns = Object.keys(nounTypes)
export const actions = Object.keys(actionTypes)
export const connectors = Object.keys(connectorTypes)
export const directions = Object.keys(directionTypes)
