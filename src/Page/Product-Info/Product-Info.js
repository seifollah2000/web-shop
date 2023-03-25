import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Product-Info.css'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Cart from '../../Commponent/Cart/Cart'
import { BiLike } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
import ThemColor from '../../Commponent/themColor/ThemColor'
import Spinners from '../../Commponent/Spinner/Spinners'

export default function ProductInfo() {
  const themsColor = useRef()
  const imgZoom = useRef()
  const moveBox = useRef()
  const [dataProuduct, setDataProuduct] = useState([])
  const [colorProduct, setColorProduct] = useState('red')
  const [showSpinners, setShowSpinners] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(result => {
      setShowSpinners(false)
      setDataProuduct(result)
    })
  }, [])

  const selectedHandlerColor = (eve) => {
    setColorProduct(eve.target.id)
    // ! find Class active and remove
    let allThemColor = (themsColor.current.children)
    const dataPure = []
    Object.entries(allThemColor).forEach(item => {
      dataPure.push(item[1])
    })

    dataPure.filter(item => {
      if (item.classList[1]) {
        item.classList.remove('them_active')
      }
    })
    eve.target.classList.add('them_active')
  }
  // zoom photo product 
  const zoomPhotoHandler = (eve) => {
    let xPos = eve.clientX - eve.target.offsetLeft
    let yPos = eve.clientY - eve.target.offsetTop
    imgZoom.current.style = `transform-origin:${xPos * .6}px ${yPos * 1.4}px;`
    moveBox.current.style = `transform: translate(${xPos}px, ${yPos}px);`

  }
  return (
    <>

      {

        showSpinners ? (
          <>
            <Spinners />
          </>
        ) : (
          <>
            <Header />
            <div className='informition-product row  container mx-auto py-5'>
              <div className="shownImg-raight col-md-6">
                <div className="box_img-product  ">
                  <img src="/images/phone13.jpg" className='rounded-3' alt="web shop" onMouseMove={(event) => zoomPhotoHandler(event)} />
                  <div className='box_zoom'>
                    <div className="box_img-product-zoom " ref={imgZoom}>
                      <img src="/images/phone13.jpg" className='rounded-3' alt="web shop" />
                    </div>
                  </div>
                  <div ref={moveBox} className='muoseMove'>

                  </div>
                </div>
              </div>
              <div className="descProduct col-md-6 ">
                <div className="berdCram py-2">
                  <a href='#'>Apple</a> / <a href='#'>iPhone 13</a>

                </div>
                <div className="titleProduct py-3">
                  <h6>{dataProuduct.title}</h6>
                </div>
                <div className='pointOfView d-flex py-2 align-items-center'>
                  <BiLike className='text-success' />
                  <span>75% (20 people) of buyers have suggested this product</span>
                </div>
                <div className='them-product py-2'>
                  <span>color:{colorProduct} </span>
                  <div className='d-flex' ref={themsColor}>


                    <ThemColor id='blue' selectedHandler={selectedHandlerColor} classThem='them_blue them_active' />
                    <ThemColor id='red' selectedHandler={selectedHandlerColor} classThem='them_red' />
                    <ThemColor id='pink' selectedHandler={selectedHandlerColor} classThem='them_pink' />
                    <ThemColor id='yellow' blue selectedHandler={selectedHandlerColor} classThem='them_yellow' />



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
                      <p className="error_Product-text">{dataProuduct.body}</p>

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
            </div>
            <Cart />
            <Footer />
          </>
        )
      }

    </>
  )
}
