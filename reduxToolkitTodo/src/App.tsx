import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {


  return (
    <>
      <div className="container mx-auto p-4 text-center">
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App
