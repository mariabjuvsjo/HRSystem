import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeModel from '../models/employeeModel';
import '../styles/Table.css'


function Table({ data }) {
    const navigate = useNavigate()

    const handleEdit = () => {


        navigate(`/anstallda/uppdatera/${data.workingNumber}`, { state: data })
    }

    const handleDelete = async (e) => {

        e.preventDefault();

        await employeeModel.deleteOneEmployee(e.target.value)

        window.location.reload(false);

    }
    return (
        <tr >

            <td><Link to={`/anstallda/${data.workingNumber}`} state={data}>{data.workingNumber}</Link></td>
            <td>    <button className="btn small" onClick={handleEdit}>Ändra</button>
                <button className="btn small" value={data._id} onClick={handleDelete} >
                    Radera
                </button></td>

            <td>{data.personalNumber}</td>
            <td>{data.coordinationNumber}</td>
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