import React, { useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { ProductContext } from '../../Context/ContextProduct'
import './Cart.css'
export default function Cart() {
    const [totals, setTotals] = useState(0)
    const showcard = useContext(ProductContext)
    useEffect(() => {
        someTotal()
    }, [showcard.userCart])
    const removeProduct = (productID) => {
        let deleteProduct = showcard.userCart.filter((product) => product.id !== productID)
        showcard.setUserCart(deleteProduct)
    }
    const someTotal = () => {
        console.log(showcard.userCart)
        const total = showcard.userCart.reduce((prev, next) => {
            return { price: prev.price + next.price }
        }, { price: 0 })
        setTotals(total.price)
    }
    return (
        <aside className={showcard.isShowCart ? 'bag-sidebar active' : 'bag-sidebar '}>
            <h3 className='bag-title'>
                <span>
                    <BsBag />
                    Bag
                </span>
                <span onClick={e => showcard.setIsShowCart(false)}>
                    <AiOutlineClose className='close-icon' />
                </span>
            </h3>
            <div className='row bag-wrapper'>
                {showcard.userCart.map(item => (

                    <div key={item.id} className='col-12 mt-5 Cart_product'>
                        <span className='removeProductCart' onClick={e => removeProduct(item.id)}>
                            <AiOutlineClose className='close-icon' />
                        </span>
                        <div className='card py-3 px-3'>
                            <div className='col-12 text-center'>
                                <img src={item.img} alt='Product Image' className='m-auto cart-img-top w-75 ' />
                            </div>
                            <div className='row card-body d-flex flex-column justify-content-center align-items-center'>
                                <p className='card-text col-12'>{item.title}</p>
                                <p className='price col-6'>{(item.price).toLocaleString()} $</p>
                                <br />
                                <p className='Number col-6'>Count : {item.count}</p>

                            </div>

                        </div>
                    </div>
                ))}

                <div className='alltotal'>
                    {
                        showcard.userCart.length === 0 ? (
                            <h6 className='number'>There are no products in the shopping cart :/</h6>
                        ) : (
                            <>
                                <h6 className='number'>Total purchase : {totals.toLocaleString()}$</h6>
                                <a href='#' className='btn btn-denger btn_buy col-12'>Buy</a>
                            </>
                        )
                    }
                </div>

            </div>
        </aside>
    )
}
