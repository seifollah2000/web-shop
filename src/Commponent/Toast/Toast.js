import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Context/ContextProduct'
export default function Toast() {
  const [show, setShow] = useState(false)
  const context = useContext(ProductContext)
  const closeHandler = () => {
    setShow(prev => !prev)
  }
  useEffect(() => {
    setShow(prev => !prev)
    setTimeout(() => {
      setShow(prev => !prev)
    }, 2000)
  }, [context.userCart])
  return (
    <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
      <div className={show ? 'toast show align-items-center text-white bg-primary' : 'toast align-items-center text-white bg-primary'}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='toast-body'>Add to Cart succesful</div>
          <button type='button' className='btn-close btn-close-wsite ms-3' onClick={closeHandler}></button>
        </div>
      </div>

    </div>
  )
}
