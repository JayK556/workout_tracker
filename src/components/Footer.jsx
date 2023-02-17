import React, { useEffect, useState } from "react";

export default function Footer() {
    const [date, setDate] = useState();

    function getYear() {
        setDate( new Date().getFullYear());
    }

    useEffect(()=> {
        getYear()
    });

    return (
        <footer>
        <p>Joshua King &copy; Copyright {date}</p>
            
        </footer>
    );
}