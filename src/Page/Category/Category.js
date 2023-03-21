import React from 'react'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Cart from '../../Commponent/Cart/Cart'
import { BiSearch } from 'react-icons/bi'
export default function Category() {
  return (
    <>
      <Header />
      <div className='category'>
        <div className="topCatery_top container d-flex justify-content-between">
          <select>
            <option value="default">default</option>
            <option value="default">iPhone</option>
            <option value="default">SAMSUNG</option>
            <option value='lenovo'>lenovo</option>
            <option value='shyami'>shyami</option>
            <option value='huvavi'>huvavi</option>

          </select>
          <div className='category_search d-flex'>
            <input type='text' placeholder='search Product....' />
            <BiSearch />
          </div>
        </div>
      </div>
      <Cart />
      <Footer />
    </>
  )
}
