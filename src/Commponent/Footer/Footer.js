import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'

export default function Footer() {
  return (
    <>
      <div className='footer row '>

        <div className='abutUs col-md-3 col-ms-6 mt-md-5'>
          <h6 className='footer_title'>Abut Us</h6>
          <p className='abutUs_text'>
            React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.          </p>
        </div>

        <div className='handFast col-md-3 col-ms-6 mt-md-5'>
          <h6 className='footer_title'>
            Fast access
          </h6>
          <div className='footer-link d-flex justify-content-between my-5'>

            <Link to='/category/laptap'>
              Laptap
            </Link>
            <Link to='/category/Phone'>
              Phone
            </Link>
            <Link to='/category/tv'>
              TV
            </Link>
          </div>
        </div>

        <div className='contactUs col-md-3 col-ms-6 mt-md-5'>
          <h6 className='footer_title'>contact Us</h6>
          <div className="contact_icon w-50 d-flex mt-5">
            <BsInstagram />
            <FaTelegram />
            <ImWhatsapp />
          </div>
          <div className="contact_email d-flex my-3 align-items-center">
            <MdEmail />
            <span className="contact_email-text">seifollah2001@gmail.com</span>
          </div>
          <div className="contact_phone d-flex my-3 align-items-center">
            <MdPhone />
            <span className="contact_phone-text">09925918619</span>
          </div>
        </div>

      </div>
      <div className='security'>
        All the affairs are for <span>Web Shop</span> © 2023
      </div>
    </>
  )
}
