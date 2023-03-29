import React from 'react'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Btn from '../../Commponent/Btn/Btn'
import Input from '../../Commponent/Input/Input'
import './Register.css'
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom'


export default function Register() {
    const clickHandler = () => {

    }
    return (
        <>
            <Header />
            <div className='register_body'>

                <div className='register'>
                    <h3 className='grouping_title'>Register</h3>
                    <Input labelText='Name' />
                    <Input labelText="UserName" />
                    <Input labelText="Email" />
                    <Input labelText="Password" />

                    <Btn classBtn='btnRegster' clickHandler={clickHandler} icon={<Person />} title="Register" />
                    <div className='go-page-login'>
                        <span>You have an account  </span>
                        <Link to='/login'>Login</Link>
                    </div>
                </div >
            </div>
            <Footer />
        </>

    )
}
