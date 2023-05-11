import React, { useEffect, useState, useMemo } from 'react'
import employeeModel from '../models/employeeModel'
import NewEmployee from './NewEmployee';


import Table from './Table';
import '../styles/Table.css'

function AllEmployee() {
    const [datas, setDatas] = useState([])

    useEffect(() => {

        const fetchEmployee = async () => {

            setDatas(await employeeModel.getAllEmployee())



        }

        fetchEmployee()


    }, [datas])

    let employeeTable = datas.map((data) => {
        return <Table data={data} key={data.id} />
    })

    return (
        <>
            <table className='employee_table'>
                <thead>
                    <tr >
                        <th>Arbets Nr</th>
                        <th>Hantera</th>
                        <th>Person/samordnings Nr</th>
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
            <NewEmployee />
        </>
    )
}

export default AllEmployee