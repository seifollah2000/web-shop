import React from 'react'
import './Product-Info.css'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Cart from '../../Commponent/Cart/Cart'
import { BiLike } from 'react-icons/bi'
import { BiErrorCircle } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
export default function ProductInfo() {
  return (
    <>
      <Header />
      <div className='informition-product row  container mx-auto py-5'>
        <div className="shownImg-raight col-6">
          <div className="box_img-product w-75 ">
            <img src="/images/phone13.jpg" className='rounded-3' alt="web shop" />
          </div>
        </div>
        <div className="descProduct col-6">
          <div className="berdCram py-2">
            <a href='#'>Apple</a> / <a href='#'>iPhone 13</a>

          </div>
          <div className="titleProduct py-3">
            <h6>Apple iPhone 13 Mini 128GB And 4GB RAM Mobile Phone</h6>
          </div>
          <div className='pointOfView d-flex py-2 align-items-center'>
            <BiLike className='text-success' />
            <span>75% (20 people) of buyers have suggested this product</span>
          </div>
          <div className='them-product py-2'>
            <span>color:Blue </span>
            <div className='d-flex'>

              <div className="them_blue them_active"></div>
              <div className="them_red"></div>
              <div className="them_pink"></div>
              <div className="them_yellow"></div>
            </div>
          </div>
          <div className='property_product py-2'>
            <h6>Property :</h6>
            <ul>
              <li>Screen technology:<span>Super Retina XDR OLED</span></li>
              <li>Size :<span>5.4</span></li>
              <li>Photo resolution:<span>12 megapixels</span></li>
              <li>Operating system version :<span> iOS 15</span></li>

            </ul>
            <div className='error-product py-2'>
              <p className="error_Product-text">The possibility of returning the goods in the mobile group with the reason of "cancellation of the purchase" is accepted only if the seal of the goods has not been opened. All Web shop phones have a registry guarantee. If there is a registry problem, you can return the purchased phone after the legal deadline of 30 days.</p>
              <BiErrorCircle />
            </div>
          </div>
          <div className='send_product py-2'>
            <div className='send__top d-flex py-1 align-items-center '>
              <TiStarFullOutline className='text-warning' />
              <span>Free shipping of orders for WebPlus members</span>
            </div>
            <h6>4$ Shipping cost to all over USD non-webplus users</h6>
          </div>
        </div>
      </div>
      <Cart />
      <Footer />
    </>
  )
}
