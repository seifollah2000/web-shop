import React from 'react'
import { Link } from 'react-router-dom'

export default function ProduteBox(props) {
    return (
        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
            <div className='card py-3 px-3'>
                <div className='col-12 text-center'>
                    <img src={props.img} alt='web-shop' className='m-auto card-img-top w-75' />
                </div>
                <div className='card-body text-center'>
                    <p className='card-text'>{props.title}</p>
                    <p className='price'>
                        <h6 className='price_text'>
                            {(props.price).toLocaleString()} $
                        </h6>
                    </p>
                    <a href='javascript:void(0)' className='btn btn-danger' onClick={() => props.addCartHandler(props)}>Add To Cord</a>
                    <Link to='/ProductInfo/iphone13' className='btn btn-outline-dark mt-3 text-capitalize '>More Information...</Link>
                    <p className='number'>Stock in stock:{props.count}</p>
                </div>
            </div>
        </div>
    )
}
