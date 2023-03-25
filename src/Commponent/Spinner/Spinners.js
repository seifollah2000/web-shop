import React from 'react'
import { Spinner } from 'react-bootstrap';
import './Spinner.css'
export default function Spinners() {
    return (
        <div className='spinner w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" variant="danger" size="sm" />
            <Spinner animation="border" variant="danger" />
        </div>
    )
}
