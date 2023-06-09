
import { useNavigate } from 'react-router-dom'

import '../styles/App.css'
import '../styles/Form.css'
import '../styles/Buttons.css'
import { useState } from 'react'
import employeeModel from '../models/employeeModel'

function NewEmployee() {
    const navigate = useNavigate()
    const [informa, setInforma] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        country: '',
        personalNumber: parseInt(0),
        coordinationNumber: parseInt(0),
        workingNumber: parseInt(0),
        salary: parseInt(0),
        accountNumber: parseInt(0),
        bank: '',

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
            await employeeModel.addNewEmployee(informa)
            navigate('/anstallda')

        } catch (err) {
            alert("something wrong")
        }

        setInforma({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            country: '',
            personalNumber: 0,
            workingNumber: 0,
            salary: 0,
            accountNumber: 0,
            bank: '',
        })

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
                <input type="text" placeholder="personnummer" id="personalNumber" name="personalNumber" value={personalNumber} onChange={handleForm} />

                <label htmlFor="coordinationNumber">Samordnings nummer</label>
                <input type="text" placeholder="person/samordnings nummer" id="coordinationNumber" name="coordinationNumber" value={coordinationNumber} onChange={handleForm} />

                <label htmlFor="workingNumber">Arbets Nummer</label>
                <input type="text" placeholder="Arbets nummmer" id="workingNumber" name="workingNumber" value={workingNumber} onChange={handleForm} />

                <label htmlFor="salary">Grundlön</label>
                <input type="text" placeholder="lön kr/tim" id="salary" name="salary" value={salary} onChange={handleForm} />


                <label htmlFor="accountNumber">Konto Nr</label>
                <input type="text" placeholder="konto nummer" id="accountNumber" name="accountNumber" value={accountNumber} onChange={handleForm} />

                <label htmlFor="bank">Bank</label>
                <input type="text" placeholder="bank" id="bank" name="bank" value={bank} onChange={handleForm} />

                <button className="btn big">Lägg till</button>
            </form>

        </div>

    )
}

export default NewEmployee