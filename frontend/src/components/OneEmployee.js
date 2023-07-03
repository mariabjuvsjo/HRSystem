import React from 'react'
import { useLocation } from 'react-router-dom'

function OneEmployee() {
    const { state } = useLocation()

    return (
        <div>
            <h2>Personuppgifter för {state.firstName} {state.lastName} </h2>
            <p><b>Arbets Nummer: </b>{state.workingNumber}</p>
            <p><b>Förnamn: </b>{state.firstName}</p>
            <p><b>Efternamn: </b>{state.lastName}</p>
            <p><b>Email Adress: </b>{state.email}</p>
            <p><b>Mobil nummmer: </b>{state.phoneNumber}</p>
            <p><b>Adress: </b>{state.address}</p>
            <p><b>Arbets Nummer: </b>{state.country}</p>
            <p><b>Personnummer: </b>{state.personalNumber}</p>
            <p><b>Samordningsnummer: </b>{state.coordinationNumber}</p>
            <p><b>Lön kr/tim: </b>{state.salary}</p>
            <p><b>KontoNummer: </b>{state.accountNumber}</p>
            <p><b>Bank: </b>{state.bank}</p>

        </div>
    )
}

export default OneEmployee