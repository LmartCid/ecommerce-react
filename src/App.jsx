
import MenuLayout from './Components/MenuLayout'
import Home from './Components/Home'
import DetailProduct from './Components/DetailProduct'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'


function App() {

    return (
        <Routes>
            <Route path='/' element={<MenuLayout />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/detail/:id' element={<DetailProduct />} />
            </Route>
        </Routes>
    )
}

export default App




