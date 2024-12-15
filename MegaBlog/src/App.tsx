import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AuthService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const authService = new AuthService()
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }else {
        dispatch(logout())
      }      
    }).finally(() => {
      setLoading(false)
    })
   }, [])
  
   return !loading ? (
    <div className='min-h-sc m-auto flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <div className='container mx-auto'>
            TODO: <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
