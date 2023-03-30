import React from 'react'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Btn from '../../Commponent/Btn/Btn'
import Input from '../../Commponent/Input/Input'
import './Register.css'
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { emailInputAction, passwordInputAction, nameInputAction, nameUserInputAction } from '../../Redux/Input/InputSlice'

export default function Register() {
    const dispatch = useDispatch()
    const stateInput = useSelector(state => state)
    const clickHandler = () => {
        console.log(stateInput.input.value)
        let newUser = {
            firstName: stateInput.input.value.name,
            lastName: "Monkey",
            message: "One Piece",
            mobile: 123456,
            country: "Japan",
            edm: false
        }
        fetch('https://myfakeapi.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => console.log(res))
    }
    return (
        <>
            <Header />
            <div className='register_body'>

                <div className='register'>
                    <h3 className='grouping_title'>Register</h3>
                    <Input labelText='Name' changeHandler={(event) => dispatch(nameInputAction({ title: event.target.value }))} />
                    <Input labelText="UserName" changeHandler={(event) => dispatch(nameUserInputAction({ title: event.target.value }))} />
                    <Input labelText="Email" changeHandler={(event) => dispatch(emailInputAction({ title: event.target.value }))} />
                    <Input labelText="Password" changeHandler={(event) => dispatch(passwordInputAction({ title: event.target.value }))} />

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
