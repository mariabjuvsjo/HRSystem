import React, { useState, useEffect } from 'react'
import moment from 'moment'
import hourRaportModel from '../models/hourRaportModel';

const MONTH = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

function TimeCard() {
    const [selectedOption, setSelectedOption] = useState();
    const [informa, setInforma] = useState({
        employee: '',
        year: 0,
        month: 0,
        monthRaport: [],
    })
    const [raports, setRaports] = useState()

    const { employee, year, month, monthRaport } = informa


    const selectedMouth = MONTH.map((month, index) => {
        return (
            <option key={index} value={index}>{month}
            </option>
        )
    })

    useEffect(() => {

        const fetchRaport = async () => {

            setRaports(await hourRaportModel.getAllRaportFromEmployee("645df5e99b9b8d96349ec74b"))



        }

        fetchRaport()


    }, [])

    const handleChange = async (e) => {


        const year1 = moment().year()

        const month1 = e.target.value

        setInforma({
            employee: "645df5e99b9b8d96349ec74b",
            year: year1,
            month: month1,

        })


    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await hourRaportModel.addNewRaport(informa)

        } catch (err) {
            alert("something wrong")
        }

        console.log(raports)
    }
    return (
        <div> <form onSubmit={handleSubmit}>
            <label>Skapa ny månad?
                <select value={selectedOption} onChange={handleChange}>
                    {selectedMouth}
                </select></label>
            <button>Skapa</button>
        </form>
            <div>
                <h3>EJ inskickade</h3>
                <p>länkar för skapade timrapporter</p>
                <h3>Inskickade</h3>
                <p>länkar för inskickade timrapporter som ej blivit godkända av Tomas</p>
                <h3>Godkända</h3>
                <p>länkar för godkända timrapporter</p>


            </div>




        </div>
    )
}

export default TimeCard