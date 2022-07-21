import React from "react"
import {Item, Return} from './useLocalStorage.models'

const useLocalStorage = (itemName: string, initialValue: Item[]): Return => {
    const [error, setError] = React.useState<boolean | unknown>(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;

          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
    
          setItem(parsedItem);
          setLoading(false)

        } catch(error) {
          setError(error)
        }
      }, 1000)
    }, [])
  
    const saveItem = (newItem: Item[]) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      } catch(error) {
        setError(error)
      }
  
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export { useLocalStorage }