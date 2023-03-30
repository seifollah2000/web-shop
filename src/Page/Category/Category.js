import React, { useContext, useEffect, useState } from 'react';
import './Category.css'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Cart from '../../Commponent/Cart/Cart'
import { BiSearch } from 'react-icons/bi'
import { Box } from '@mui/material'
import { Tab } from '@mui/material'
import { Pagination } from '@mui/material';
import { Tabs } from '@mui/material'
import { Stack } from '@mui/material';
import ProduteBox from '../../Commponent/ProduteBox/ProduteBox';
import { ProductContext } from '../../Context/ContextProduct';
import { useParams } from 'react-router-dom';
import Spinners from '../../Commponent/Spinner/Spinners';


export default function Category() {

  const getCategory = useParams()
  const dataContext = useContext(ProductContext)
  const [shownSpinner, setShownSpinner] = useState(true)
  const [dataProductCategory, setAllDataProductCategory] = useState([])
  const [shownProduct, setShownProduct] = useState([])
  const [value, setValue] = useState(0);
  let products = dataContext.allProducts
  const countShownProduct = 6

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => {
      setShownSpinner(false)
      setAllDataProductCategory(result)
      setShownProduct(result.slice(0, 6))
    })
  }


  useEffect(() => {
    const dataProduct = products.filter(product => {
      return (product.title).toUpperCase() === (getCategory.value).toUpperCase()
    })
    switch (dataProduct[0].title.toUpperCase()) {
      case 'PHONE': {
        setValue(0);
        break
      }
      case 'LAPTOP': {
        setValue(1)
        break
      }
      case 'TELEVISION': {
        setValue(2)
        break
      }
      default: {
        setValue(0)
        break
      }
    }
  }, [getCategory.value])

  const handleChange = (event) => {
    setValue(+(event.target.id));

  }
  const changaPagnition = (event) => {
    let regexPagnition = /\d+/g
    console.log(event.target)
    let numberPage = regexPagnition.exec(event.target.ariaLabel)

    let endShownProduct = countShownProduct * (+numberPage[0])
    let startShownProduct = endShownProduct - countShownProduct
    setShownProduct(dataProductCategory.slice(startShownProduct, endShownProduct))

  }

  return (
    <>

      {
        shownSpinner ? (
          <Spinners />

        ) : (

          <>
            <Header />
            <div className='category mx-md-4 my-3 p-md-2 px-md-5' >
              <div className="topCatery_top container d-flex justify-content-between  my-5 p-md-3 align-items-center">

                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="Phone" id='0' />
                    <Tab label="Laptap" id='1' />
                    <Tab label="TV" id='2' />
                  </Tabs>
                </Box>

                <div className='category_search '>
                  <input type='text' placeholder='search Product....' className='category_search-input' />
                  <BiSearch />
                </div>
                <div className='category_search-phone'>
                  <BiSearch />
                </div>
              </div>
              <div className='container category_body row m-auto mb-5 justify-content-center'>
                {
                  dataProductCategory.length === 0 ? (
                    <div className='alert alert-danger text-center'>
                      No product found :(
                    </div>
                  ) : (
                    shownProduct.map(product => (
                      <ProduteBox key={product.id} {...product} />
                    ))
                  )

                }
              </div>
              <div className='pagnition_category'>
                <Stack spacing={1}>
                  <Pagination onClick={changaPagnition} count={Math.ceil(dataProductCategory.length / countShownProduct)} variant="outlined" color="primary" />
                </Stack>
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
