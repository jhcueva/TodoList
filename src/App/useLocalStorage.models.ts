export interface Item {
  text: string
  completed: boolean 
}

export interface Return {
  item: Item[]
  saveItem: (newItem: Item[]) => void
  loading: boolean
  error: boolean
  synchronizeItem: () => void
}