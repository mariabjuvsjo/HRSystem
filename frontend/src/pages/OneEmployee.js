import React from 'react'
import { useLocation } from 'react-router-dom'

function OneEmployee() {
    const location = useLocation()
    console.log(location)
    return (
        <div>OneEmployee</div>
    )
}

export default OneEmployee