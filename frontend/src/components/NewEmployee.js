import React from 'react'

function NewEmployee() {


    const handleAddNew = async (e) => {

        console.log("hej")

    }
    return (
        <div><button onClick={handleAddNew}>Ny Anställd</button></div>
    )
}

export default NewEmployee