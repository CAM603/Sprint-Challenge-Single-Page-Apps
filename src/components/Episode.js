import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from'axios';

export default function Episode() {

    // Set state for loading
    const [loading, setLoading] = useState(true);
    const [episode, setEpisode] = useState({});
    const [characters, setCharacters] = useState([]);
    

    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        let cancel
    
        axios
        .get(`https://rickandmortyapi.com/api/episode/${id}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            console.log(response.data);
            setLoading(false);
            setEpisode(response.data)
            
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return 'Loading...'
    return (
        <div>
            <h1>{episode.name}</h1>
            <h1>{episode.episode}</h1>
            <h1>{episode.air_date}</h1>
            <h1>{}</h1>
        </div>
    )
}