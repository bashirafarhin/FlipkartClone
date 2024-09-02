import { Box } from '@mui/material'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import DataProvider from './context/DataProvider'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import DetailView from './components/Details/DetailView'

//pages
import RootLayout from './pages/RootLayout'
import Cart from './components/Cart/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/product/:id" element={<DetailView/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
)

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App;