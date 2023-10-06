import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {
    return (
        <>
            <h2>You have been log out</h2>
            <Link to="/">Login Again</Link>
        </>
    )
}

export default LogOut