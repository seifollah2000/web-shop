import React, { useContext, useState, useRef, useEffect, useMemo, memo } from 'react'
import './Header.css'
import { BsBag } from 'react-icons/bs'
import { ProductContext } from '../../Context/ContextProduct'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import ModalMenu from '../ModalMenu/ModalMenu'
import { FaSearch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'

const Header = memo(() => {
  const [showMenus, setShowMenus] = useState(false)
  const showcard = useContext(ProductContext)
  const tagModal = useRef()
  console.log('header render')
  const closeModalHandler = () => {
    tagModal.current.classList.add("closeModal")
    setTimeout(() => {
      setShowMenus(false)
      tagModal.current.classList.remove("closeModal")

    }, 1000);
  }
  return (
    <>

      <nav className='navbar navbar-expend-sm py-3 d-flex'>
        <div className='container'>
          <div className='menu_phone' onClick={() => setShowMenus(true)}>
            <GiHamburgerMenu />
          </div>
          <Link to='/' className='navbar-brand'>
            Web Shop
          </Link>
          <ul className='navbar-nav me-auto ms-3'>
            <li className='nav-item'>
              <Link to='/category/phone' className='nav-link'>
                Phone
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/category/laptop' className='nav-link'>
                Laptop
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/category/television' className='nav-link'>
                TV
              </Link>
            </li>
          </ul>
          <div className='bag-box d-flex'>
            <Link to='/login' className='user_link' title='login'>
              <FaUserAlt />
            </Link>
            <a href='#' className='bag' onClick={e => showcard.setIsShowCart(true)}>
              <BsBag className="text-white" />
              <span className='bag-products-counter'>{showcard.userCart.length}</span>
            </a>
          </div>
        </div>
        {/* ! menu responsive */}
        {
          showMenus &&
          <ModalMenu >
            <div className="modal_menu " ref={tagModal}>
              <MdClose onClick={closeModalHandler} />

              <h6 className="modal_menu-title">Web Shop</h6>

              <div className='modal_menu-body'>
                <div className='modal_menu-search d-flex px-3 align-items-center'>
                  <input type='text' placeholder='search Product ...' className='modal_menu-search-input' />
                  <FaSearch />
                </div>
                <ul className='modal_menu-lists mt-5'>
                  <li className='modal_menu-list'>
                    <Link to='/category/phone' className='modal_menu-link'>
                      Phone
                    </Link>
                  </li>
                  <li className='modal_menu-list'>
                    <Link to='/category/laptop' className='modal_menu-link'>
                      Laptop
                    </Link>
                  </li>
                  <li className='modal_menu-list'>
                    <Link to='/category/television' className='modal_menu-link'>
                      TV
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='footer-menu'>
                All the affairs are for <span>Web Shop</span> © 2023
              </div>
            </div>

          </ModalMenu>
        }

      </nav>

    </>
  )
})
export default Header