import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card name="Hastimal Shah" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="This is about Hastimal Shah., He is expert in WordPress"/>
      <Card name="Paresh Panchal" imageUrl="" description="This is about Paresh Panchal., He is expert in CraftCMS"/>
    </>
  )
}

export default App
