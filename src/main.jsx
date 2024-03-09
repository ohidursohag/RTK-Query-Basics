import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './Routes/Router.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={myCreatedRoutes} />
    </Provider>
  </React.StrictMode>,
)
