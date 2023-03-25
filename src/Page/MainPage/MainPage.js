import React from 'react'
import ProductsSection from '../../Commponent/ProductsSection/ProductsSection'
import Cart from '../../Commponent/Cart/Cart'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
export default function MainPage() {

  return (
    <div>
      <Header />
      <div className="App">
        <main className='pb-5'>
          <div className='container'>
            <h1 className='text-center main-title my-3'>All Products</h1>

            <ProductsSection />
          </div>
        </main>

        <Cart />
      </div>
      <Footer />
    </div>
  )
}
