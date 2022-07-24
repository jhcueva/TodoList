import React from "react"
import { useReducer } from "react"
import {Item, Return} from './useLocalStorage.models'

enum actionTypes {
  ERROR,
  ITEM,
  LOADING,

}

interface actionError {
  type: actionTypes.ERROR
  payload: unknown
}

interface actionLoading {
  type: actionTypes.LOADING
}

interface actionItem {
  type: actionTypes.ITEM
  payload: Item | Item[]
}

const useLocalStorage = (itemName: string, initialValue: Item[]): Return => {


    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))

    const {
      error,
      loading,
      item,
    } = state

    //ACTION CREATORS
    const onError = (error) => dispatch({ type: actionTypes.ERROR, payload: error })
    const onLoading = () => dispatch({ type: actionTypes.LOADING})
    const onSave = (item) => dispatch({ type: actionTypes.ITEM, payload: item})

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
    
          onSave(parsedItem)
          onLoading()

        } catch(error) {
          onError(error)
        }
      }, 1000)
    }, [])
  
    const saveItem = (newItem: Item[]) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        onSave(newItem)
      } catch(error) {
          onError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  const initialState = ({ initialValue }) => ({
    error: false,
    loading: true,
    item: initialValue,
  })

  const reducer = (state, action: actionError | actionLoading | actionItem) => {
    switch (action.type) {
      case actionTypes.ERROR: 
        return {
          ...state,
          error: true,
        }
      case actionTypes.LOADING:
        return {
          ...state,
          loading: false
        }
      case actionTypes.ITEM:
        return {
          ...state,
          item: action.payload
        }
      default:
        return {
          ...state
        }
    }
  }

export { useLocalStorage }