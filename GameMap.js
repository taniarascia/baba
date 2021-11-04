export class GameMap {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.grid = null
  }

  buildEmptyGrid() {
    const grid = []
    const rows = Array.from(new Array(this.height))
    const columns = Array.from(new Array(this.width))

    rows.forEach((_, y) => {
      grid.push([])

      columns.forEach(_ => {
        grid[y].push(null)
      })
    })

    this.grid = grid
  }

  addEntitiesToGrid(entities) {
    entities.forEach(entity => {})
  }
}
