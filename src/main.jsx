import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import AuthProvider from './AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Tasks from './Pages/Tasks/Tasks.jsx'
import TaskDetails from './Pages/Tasks/TaskDetails.jsx'
import Update from './Pages/Update/Update.jsx'
import ToDo from './Pages/ToDo/ToDo.jsx'
import AddTask from './Pages/Add Task/AddTask.jsx'
import PrivateRoute from './Pages/Private Route/PrivateRoute.jsx'
import { ToastContainer } from 'react-toastify'

const client = new QueryClient()

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/tasks',
        element:<Tasks></Tasks>
      },
      {
        path:'/taskdetails/:id',
        element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/api/v1/tasks/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/api/v1/tasks/${params.id}`)
      },
      {
        path:'/todo',
        element:<PrivateRoute><ToDo></ToDo></PrivateRoute>
      },
      {
        path:'/add',
        element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
