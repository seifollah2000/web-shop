import MainPage from './Page/MainPage/MainPage'
import ProductInfo from './Page/Product-Info/Product-Info'
import Category from './Page/Category/Category'
import Register from './Page/Register/Register'
import Login from './Page/Login/Login'


let router = [
    { path: '/', element: <MainPage /> },
    { path: '/ProductInfo/:product', element: <ProductInfo /> },
    { path: '/category/:value', element: <Category /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },

]

export default router