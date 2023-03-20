import React, { useState, useEffect } from "react";

function GetAllRooms() {
    const [data, setData] = useState(null);
    const [loading, setLoading] =useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("localhost:3002/rooms/")
        .then((res)=> res.json())
        .then(
            (result => {
            setData(result);
            setLoading(false)
        },
        (error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        }

            ))
}
);
}[];