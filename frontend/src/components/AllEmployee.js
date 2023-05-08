import React, { useEffect, useState } from 'react'
import employeeModel from '../models/employeeModel'

function AllEmployee() {
    const [employee, setEmployee] = useState()

    useEffect(() => {

        const fetchEmployee = async () => {

            setEmployee(await employeeModel.getAllEmployee())

        }

        fetchEmployee()


    }, [])


    return (
        <div>{employee}</div>
    )
}

export default AllEmployee