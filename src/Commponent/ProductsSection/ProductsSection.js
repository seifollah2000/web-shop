import React, { useContext, useEffect, useState } from 'react'
import './ProductsSection.css'
import { ProductContext } from '../../Context/ContextProduct'
import ProduteBox from '../ProduteBox/ProduteBox'
import Spinners from '../Spinner/Spinners'

export default function ProductsSection() {
    const dataContext = useContext(ProductContext)
    const [allDataProduct, setAllDataProduct] = useState([])
    const [shownSpinner, setShownSpinner] = useState(true)


    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => {
            setShownSpinner(false)
            setAllDataProduct(result)
        })
    }

    const addCartHandler = () => {

    }

    return (
        <>
            {
                shownSpinner ? (
                    <Spinners />
                ) : (
                    <>
                        <div className='row justify-content-center mt-5 '>
                            <h3 className='text-center grouping'>
                                <span className='grouping_title'>Phone</span >
                            </h3 >
                            {
                                allDataProduct.slice(0, 6).map(product => (
                                    <ProduteBox {...product} key={product.id} addCartHandler={addCartHandler} />
                                ))
                            }
                        </div >

                        <div className='row justify-content-center mt-5 '>
                            <h3 className='text-center grouping'>
                                <span className='grouping_title'>Laptop</span>
                            </h3>
                            {
                                allDataProduct.slice(0, 6).map(product => (
                                    <ProduteBox {...product} key={product.id} addCartHandler={addCartHandler} />
                                ))
                            }
                        </div>

                        <div className='row justify-content-center mt-5 '>
                            <h3 className='text-center grouping'>
                                <span className='grouping_title'>Television</span>
                            </h3>
                            {
                                allDataProduct.slice(0, 6).map(product => (
                                    <ProduteBox {...product} key={product.id} addCartHandler={addCartHandler} />
                                ))
                            }
                        </div>
                    </>
                )
            }


        </>

    )
}
