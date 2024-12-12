import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Contact, User, Github } from './components/Index'
import { githubInfoLoader } from './components/Github/Github'

/*const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      }

    ]
  }
])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Home/>} />
       <Route path='/About' element={<About/>} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/user/:userid' element={<User/>} />
       <Route 
       loader={githubInfoLoader}
       path='/github' 
       element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)