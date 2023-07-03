import React, { useEffect, useState, useMemo } from 'react'
import employeeModel from '../models/employeeModel'
import { useNavigate } from 'react-router-dom';


import Table from './Table';
import '../styles/Table.css'
import '../styles/Buttons.css'

function AllEmployee() {
    const [datas, setDatas] = useState([])


    const navigate = useNavigate()


    const handleAddNew = async (e) => {

        navigate('/anstallda/skapa')

    }

    useEffect(() => {

        const fetchEmployee = async () => {

            setDatas(await employeeModel.getAllEmployee())



        }

        fetchEmployee()


    }, [])

    let employeeTable = datas.map((data) => {
        return <Table data={data} key={data._id} />
    })

    return (
        <>  <button className='btn big' onClick={handleAddNew}>Ny anställd</button>
            <table className='employee_table'>
                <caption>Alla Anställda</caption>
                <thead>
                    <tr >
                        <th>Arbets Nr</th>
                        <th>Hantera</th>
                        <th>Person Nr</th>
                        <th>Samordnings Nr</th>
                        <th>Förnamn</th>
                        <th>Efternamn</th>
                        <th>Email</th>
                        <th>Mobil</th>
                        <th>Adress</th>
                        <th>Land</th>
                        <th>Lön kr/tim</th>
                        <th>Konto Nr</th>
                        <th>Bank</th>

                    </tr>
                </thead>
                <tbody >

                    {employeeTable}
                </tbody>
            </table>

        </>
    )
}

export default AllEmployee