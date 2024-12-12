import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:" Learning Reactjs",
            completed: false,
        }
    ],
    addTodo: (todo: { id: number; todo: string; completed: boolean }) => {
        console.log(todo);
    },
    updateTodo: (id: number, todo: { id: number; todo: string; completed: boolean }) => {
        console.log(id, todo);
    },
    deleteTodo: (id: number) => {
        console.log(id);
    },
    toggleComplete: (id: number) => {
        console.log(id);
    },
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
