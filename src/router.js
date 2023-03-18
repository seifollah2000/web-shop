import MainPage from './Page/MainPage/MainPage'
import ProductInfo from './Page/MainPage/Product-Info/Product-Info'
import Category from './Page/Category/Category'
let router = [
    { path: '/', element: <MainPage /> },
    { path: '/ProductInfo/:product', element: <ProductInfo /> },
    { path: '/category/:value', element: <Category /> }
]

export default router