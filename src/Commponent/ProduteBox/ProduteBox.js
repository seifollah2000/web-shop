import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/ContextProduct'
export default function ProduteBox(props) {
    const dataContext = useContext(ProductContext)

    const addCartHandler = (informition) => {

        let findProduct = dataContext.userCart.filter(item => {
            return item.id === informition.id
        })

        if (findProduct.length === 0) {
            const newProductCart = {
                id: informition.id,
                title: `Make Bock Are${informition.id}`,
                price: 2300,
                count: 1,
                img: '/images/1.jpg'
            }
            dataContext.setUserCart(prev => [...prev, newProductCart])

        } else {
            let addPrice = {
                id: findProduct[0].id,
                title: findProduct[0].title,
                count: findProduct[0].count + 1,
                price: 2300 * (findProduct[0].count + 1),
                img: findProduct[0].img
            }

            let filterProduct = dataContext.userCart.filter(item => {
                return item.id !== informition.id
            })
            dataContext.setUserCart([...filterProduct, addPrice])

        }




    }
    return (
        <div className=' col-lg-4 col-md-6 col-sm-12 mt-5'>
            <div className='card py-3 px-3'>
                <div className='col-12 text-center'>
                    <img src='/images/1.jpg' alt='web-shop' className='m-auto card-img-top w-75' />
                </div>
                <div className='card-body text-center'>
                    <p className='card-text'>Make Bock Are {props.id}</p>
                    <p className='price'>
                        <h6 className='price_text'>
                            2,300 $
                        </h6>
                    </p>
                    <a href='javascript:void(0)' className='btn btn-danger' onClick={() => addCartHandler(props)}>Add To Cord</a>
                    <Link to='/ProductInfo/iphone13' className='btn btn-outline-dark mx-2 my-2 text-capitalize '>More Information...</Link>
                    <p className='number'>Stock in stock:34</p>
                </div>
            </div>
        </div>
    )
}
