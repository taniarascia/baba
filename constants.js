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
export const horizontalDirections = [directionTypes.LEFT, directionTypes.RIGHT]
export const verticalDirections = [directionTypes.UP, directionTypes.DOWN]

export const entityColorDictionary = {
  BABA: '#ffffff',
  WALL: '#212737',
  ROCK: '#BFA154',
  FLAG: '#ECE392',
}

export const textColorDictionary = {
  BABA: '#C9456B',
  WALL: '#747474',
  ROCK: '#8B6942',
  FLAG: '#ECE392',
  IS: '#ffffff',
}

export const actionBgColorDictionary = {
  YOU: '#C9456B',
  STOP: '#4D5B22',
  PUSH: '#8B6942',
  WIN: '#ECE392',
}
