import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import employeeModel from '../models/employeeModel'

import '../styles/Buttons.css'
import '../styles/Form.css'


function UpdateEmployee() {
    const { state } = useLocation()
    console.log(state)

    const navigate = useNavigate()
    const [informa, setInforma] = useState({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phoneNumber: state.phoneNumber,
        address: state.address,
        country: state.country,
        personalNumber: parseInt(state.personalNumber),
        coordinationNumber: parseInt(state.coordinationNumber),
        workingNumber: parseInt(state.workingNumber),
        salary: parseInt(state.salary),
        accountNumber: parseInt(state.accountNumber),
        bank: state.bank,

    })

    const { firstName, lastName, email,
        phoneNumber,
        address,
        country,
        personalNumber,
        coordinationNumber,
        workingNumber,
        salary,
        accountNumber,
        bank, } = informa

    const handleForm = (e) => {
        setInforma((stateInfo) => ({
            ...stateInfo,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await employeeModel.updateEmployee(informa, state._id)
            navigate('/anstallda')

        } catch (err) {
            alert("something wrong")
        }

    }



    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Förnamn</label>
                <input type="text" placeholder="förnamn" id="firstName" name="firstName" value={firstName} onChange={handleForm} />

                <label htmlFor="lastname">Efternamn</label>
                <input type="text" placeholder="efternamn" id="lastName" name="lastName" value={lastName} onChange={handleForm} />


                <label htmlFor="email">Email</label>
                <input type="text" placeholder="email" id="email" name="email" value={email} onChange={handleForm} />

                <label htmlFor="phoneNumber">Mobil</label>
                <input type="text" placeholder="mobil" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleForm} />

                <label htmlFor="address">Adress</label>
                <input type="text" placeholder="adress" id="address" name="address" value={address} onChange={handleForm} />

                <label htmlFor="country">Land</label>
                <input type="text" placeholder="land" id="country" name="country" value={country} onChange={handleForm} />

                <label htmlFor="personalNumber">Personnummer</label>
                <input type="text" placeholder="person nummer" id="personalNumber" name="personalNumber" value={personalNumber} onChange={handleForm} />
                <label htmlFor="coordinationNumber">Samordningsnummer</label>
                <input type="text" placeholder="samordnings nummer" id="coordinationNumber" name="coordinationNumber" value={coordinationNumber} onChange={handleForm} />
                <label htmlFor="workingNumber">Arbets Nummer</label>
                <input type="text" placeholder="Arbets nummmer" id="workingNumber" name="workingNumber" value={workingNumber} onChange={handleForm} />

                <label htmlFor="salary">Grundlön</label>
                <input type="text" placeholder="lön kr/tim" id="salary" name="salary" value={salary} onChange={handleForm} />


                <label htmlFor="accountNumber">Konto Nr</label>
                <input type="text" placeholder="konto nummer" id="accountNumber" name="accountNumber" value={accountNumber} onChange={handleForm} />

                <label htmlFor="bank">Bank</label>
                <input type="text" placeholder="bank" id="bank" name="bank" value={bank} onChange={handleForm} />

                <button className="btn big">Ändra</button>
            </form>


        </div>

    )
}

export default UpdateEmployee