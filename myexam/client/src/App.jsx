import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import Home from './pages/home'
import Foods from './pages/foods'
import Wishlist from './pages/wishlist'
import Add from './pages/add'
import Details from './pages/details'
import NotFound from './pages/notfound'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/foods' element={<Foods/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='*' element={<NotFound/>}/>


    </Route>

    </Routes>
     
    </>
  )
}

export default App
