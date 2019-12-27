import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Location() {

    // Set state for loading
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);
    

    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        let cancel
    
        axios
        .get(`https://rickandmortyapi.com/api/location/${id}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            console.log(response.data);
            setLoading(false)
            setLocation(response.data)
            
            
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return 'Loading...'

    return (
        <div>Location</div>
    )
}
