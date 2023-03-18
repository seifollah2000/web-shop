import React, { useContext } from 'react'
import './ProductsSection.css'
import { ProductContext } from '../../Context/ContextProduct'
export default function ProductsSection() {
    const dataContext = useContext(ProductContext)
    const addCartHandler = (data) => {
        const searchDataNoRepite = dataContext.userCart.find(item => {
            return item.title === data.title
        })

        if (searchDataNoRepite) {
            let dataUser=[...dataContext.userCart]
         dataUser.map(item => {
                if (item.title === data.title) {
                    item.count += 1
                    item.price=item.price*item.count
                    return true
                }

            })
       
            dataContext.setUserCart(dataUser)
        } else {
            const newProduct = {
                id: dataContext.userCart.length + 1,
                title: data.title,
                img: data.img,
                price: data.price,
                count: 1
            }
            dataContext.setUserCart(prev => [...prev, newProduct])
        }
    }
 
    return (
        <>
            {dataContext.allProducts.map(item => (
                <div key={item.id} className='row justify-content-center mt-5 '>
                    <h3 className='text-center grouping'>
                        <span className='grouping_title'>{item.title}</span>
                        </h3>
                    {item.infos.map(product => (
                        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
                            <div className='card py-3 px-3'>
                                <div className='col-12 text-center'>
                                    <img src={product.img} alt='web-shop' className='m-auto card-img-top w-75' />
                                </div>
                                <div className='card-body text-center'>
                                    <p className='card-text'>{product.title}</p>
                                    <p className='price'>
                                        <h6 className='price_text'>
                                        {(product.price).toLocaleString()} $
                                        </h6>
                                        </p>
                                    <a href='javascript:void(0)' className='btn btn-danger' onClick={() => addCartHandler(product)}>Add To Cord</a>
                                    <a href='javascript:void(0)' className='btn btn-outline-dark mt-3 text-capitalize '>More Information...</a>
                                    <p className='number'>Stock in stock:{product.count}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>

    )
}
