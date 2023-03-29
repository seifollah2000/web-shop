import React from 'react'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import { ExitToApp } from '@mui/icons-material'
import Input from '../../Commponent/Input/Input'
import Btn from '../../Commponent/Btn/Btn'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { emailInputAction, passwordInputAction } from '../../Redux/Input/InputSlice'

export default function Login() {

    const dispatch = useDispatch()
    const stateInput = useSelector(state => state)
    const clickHandler = () => {
        console.log(stateInput)
    }
    return (
        <>
            <Header />

            <div className='register'>
                <h3 className='grouping_title'>Login</h3>
                <Input labelText="Email" changeHandler={(event) => dispatch(emailInputAction({ title: event.target.value }))} />
                <Input labelText="Password" changeHandler={(event) => dispatch(passwordInputAction({ title: event.target.value }))} />
                <Btn classBtn='btnRegster' clickHandler={clickHandler} icon={<ExitToApp />} title="Login" />
                <div className='go-page-login'>
                    <span>You do not have an account  </span>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
            <Footer />
        </>

    )
}
