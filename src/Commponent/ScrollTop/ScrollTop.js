import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function ScrollTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [pathname])
    console.log(pathname)
    return (
        <Helmet>
            <title>{pathname === '/' ? 'Web Shop' : 'Web shop' + pathname}</title>
        </Helmet>
    )
}