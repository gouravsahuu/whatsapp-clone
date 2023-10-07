import React, { useState, useEffect } from 'react';

function Dashboard() {

    const url = "";

    let [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setUserData(data);
        })
    },[])

    return (
        <>
            <div>
                WhatsUp
                <div>
                    
                </div>
            </div>
            <div>

            </div>
        </>
    );
}