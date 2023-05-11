import React from 'react';
import { useState, useEffect } from 'react';
import LogIn from '../components/LogIn';

function Home() {
    const [message, setMessage] = useState("");

    // Fetching message from backend on mount
    useEffect(() => {
        fetch("http://localhost:8000")
            .then((res) => res.json())
            .then((data) =>
                setMessage(data.msg));
    }, []);
    return (
        <main className='home_container'>
            <LogIn />
        </main>

    )
}

export default Home