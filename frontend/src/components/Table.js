import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeModel from '../models/employeeModel';



import '../styles/Table.css'

function Table({ data }) {
    const navigate = useNavigate()

    const handleEdit = () => {
        //navigate(`/update/${data._id}`, { state: data, replace: true })
    }

    const handleDelete = async (e) => {

        await employeeModel.deleteOneEmployee(e.target.value)

    }




    return (



        <tr >

            <td><Link to={`/anstallda/${data.workingNumber}`} state={data}>{data.workingNumber}</Link></td>
            <td>    <button className="button-5" onClick={handleEdit}>Redigera</button>
                <button className="button-5" value={data._id} onClick={handleDelete} >
                    Radera
                </button></td>

            <td>{data.personalNumber}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.address}</td>
            <td>{data.country}</td>
            <td>{data.salary}</td>
            <td>{data.accountNumber}</td>
            <td>{data.bank}</td>

        </tr>



    )
}

export default Table