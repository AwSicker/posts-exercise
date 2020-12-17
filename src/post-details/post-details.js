import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

export const PostDetails = () => {

    const [info, setInfo] = useState([])
    const {id} = useParams()
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            setInfo(data);
        }
        fetchData();
    }, )

    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text">{info.name}</p>
                <p className="card-text">{info.phone}</p>
                <p className="card-text">{info.email}</p>
            </div>
        </div>
    )
}
