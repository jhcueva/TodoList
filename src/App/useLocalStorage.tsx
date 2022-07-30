import React from "react"
import { useReducer } from "react"
import { Item, Return } from './useLocalStorage.models'

enum actionTypes {
  ERROR,
  SUCCESS,
  SAVE,
  SYNCHRONIZED_ITEM,
}

interface actionError {
  type: actionTypes.ERROR
  payload: unknown
}

interface actionSuccess {
  type: actionTypes.SUCCESS
  payload: Item | Item[]
}

interface actionSave {
  type: actionTypes.SAVE
  payload: Item | Item[]
}

interface actionSynchronize {
  type: actionTypes.SYNCHRONIZED_ITEM
  // payload: boolean
}

const useLocalStorage = (itemName: string, initialValue: Item[]): Return => {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))

  const {
    error,
    loading,
    item,
    synchronizedItem,
  } = state

  //ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.ERROR, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.SUCCESS, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item })
  const onSynchronize = () => dispatch({ type: actionTypes.SYNCHRONIZED_ITEM})

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 6000)
  }, [synchronizedItem])

  const saveItem = (newItem: Item[]) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }

  const synchronizeItem = () => {
    onSynchronize()
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
  synchronizedItem: true
})

const reducer = (state, action: actionError | actionSuccess | actionSave | actionSynchronize) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return {
        ...state,
        error: true,
      }
    case actionTypes.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        synchronizedItem: true,
        item: action.payload
      }
    case actionTypes.SAVE:
      return {
        ...state,
        item: action.payload
      }
    case actionTypes.SYNCHRONIZED_ITEM:
      return {
        ...state,
        synchronizedItem: false,
        loading: true
      }
    default:
      return {
        ...state
      }
  }
}

export { useLocalStorage }