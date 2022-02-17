export class GameMap {
  constructor(height, width) {
    this.height = height - 1
    this.width = width - 1
    this.grid = null
  }

  buildEmptyGrid() {
    const grid = []
    const rows = Array.from(new Array(this.height))
    const columns = Array.from(new Array(this.width))

    rows.forEach((_, y) => {
      grid.push([])

      columns.forEach(() => {
        grid[y].push(null)
      })
    })

    this.grid = grid
  }

  addEntitiesToGrid(entities) {
    entities.forEach((entity) => {
      this.grid[entity.coords.y][entity.coords.x] = entity
    })
  }
}
