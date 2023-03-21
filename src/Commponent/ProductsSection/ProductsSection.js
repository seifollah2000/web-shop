import React, { useContext } from 'react'
import './ProductsSection.css'
import { ProductContext } from '../../Context/ContextProduct'
import ProduteBox from '../ProduteBox/ProduteBox'
export default function ProductsSection() {
    const dataContext = useContext(ProductContext)
    const addCartHandler = (data) => {
        const searchDataNoRepite = dataContext.userCart.find(item => {
            return item.title === data.title
        })

        if (searchDataNoRepite) {
            let dataUser = [...dataContext.userCart]
            dataUser.map(item => {
                if (item.title === data.title) {
                    item.count += 1
                    item.price = item.price * item.count
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
                    {
                        item.infos.map(product => (
                            <ProduteBox {...product} key={product.id} addCartHandler={addCartHandler} />
                        ))
                    }
                </div>
            ))}
        </>

    )
}
