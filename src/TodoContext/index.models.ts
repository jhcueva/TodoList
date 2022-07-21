import {Item} from './useLocalStorage.models'

export interface TodoContextProps {
	loading: boolean
	error: any
	totalTodos: number
	completedTodos: number
	searchValue: string
	searchedTodos: Item[]
	setSearchValue: string | string[]
	notFound: string
	addTodo: (text: string) => void
	editTodo: (text: string, newText: string) => void
	completeTodo: (text: string) => void
	deleteTodo: (text: string) => void
	openModal: boolean
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
	task: string
	editTask: any
}

export interface BaseLayoutProps {
  children?: React.ReactNode;
}