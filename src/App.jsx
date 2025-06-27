import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing'
import Layout from './layout'
import Categories from './components/categories';
import Quiz from './components/quiz';
function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path:'',
          element:<Landing/>
        },
        {
          path:'/categories',
          element:<Categories/>
        },
        {
          path:'/quiz',
          element:<Quiz/>
        }
      ]
    }

  ],
)
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
export default App