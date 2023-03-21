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

export default function Category() {
  const getCategory = useParams()
  const dataContext = useContext(ProductContext)
  const [showProducts, setShowProducts] = useState(dataContext.allProducts[0])
  let products = dataContext.allProducts

  useEffect(() => {
    const dataProduct = products.filter(product => {
      return (product.title).toUpperCase() === (getCategory.value).toUpperCase()
    })
    setShowProducts(dataProduct[0])
  }, [getCategory.value])

  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(+(event.target.id));
    switch (+(event.target.id)) {
      case 0: {
        return setShowProducts(dataContext.allProducts[0])
      }
      case 1: {
        return setShowProducts(dataContext.allProducts[1])
      }
      case 2: {
        return setShowProducts(dataContext.allProducts[2])
      }
      default: {
        return setShowProducts([])
      }
    }
  };

  return (
    <>
      <Header />
      <div className='category mx-md-4 my-3 p-md-2'>
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
              <Tab label="TV" id='1' />
              <Tab label="Laptap" id='2' />
            </Tabs>
          </Box>

          <div className='category_search d-flex'>
            <input type='text' placeholder='search Product....' className='category_search-input' />
            <BiSearch />
          </div>
        </div>
        <div className='category_body row m-auto mb-5 justify-content-center'>
          {
            showProducts.infos.map(product => (
              <ProduteBox key={product.id} {...product} />
            ))
          }
        </div>
        <div className='pagnition_category'>
          <Stack spacing={2}>
            <Pagination count={3} variant="outlined" color="primary" />
          </Stack>
        </div>
      </div>
      <Cart />
      <Footer />
    </>
  )
}
