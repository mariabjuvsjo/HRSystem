import React from 'react';
import { useState, useEffect } from 'react';

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
        <div>
            <h1>{message}</h1>
        </div>

    )
}

export default Home