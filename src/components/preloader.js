import React from 'react'
import './preloader.css'
import {motion} from 'framer-motion'

const preloader = () => {
    return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default preloader