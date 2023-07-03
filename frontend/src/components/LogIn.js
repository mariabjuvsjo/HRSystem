import React, { useState } from 'react'
import '../styles/Home.css'
import '../styles/Buttons.css'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const navigate = useNavigate()
    const [informa, setInforma] = useState({
        username: '',
        password: ''
    })

    const { username, password } = informa

    const handleForm = (e) => {
        setInforma((stateInfo) => ({
            ...stateInfo,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log("fix login functionality")
            navigate('/anstallda')

        } catch (err) {
            alert("no username or password")
        }
    }

    return (
        <div className='login_container'>
            <h2 className='login_title'>Welcome</h2>
            <form onSubmit={handleSubmit} className='login_form'>

                <input className='form_input' type="text" placeholder="Email" id="username" name="username" value={username} onChange={handleForm} />


                <input className='form_input' type="password" placeholder="Password" id="password" name="password" value={password} onChange={handleForm} />

                <button className="btn big">Logga In</button>

            </form>
        </div>
    )
}

export default LogIn