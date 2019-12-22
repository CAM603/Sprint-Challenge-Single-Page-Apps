import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Character() {
    
    // Set state for loading
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);
    const [origin, setOrigin] = useState([]);
    const [location, setLocation] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        let cancel
    
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            console.log(response.data);
            setLoading(false)
            setCharacter(response.data);
            setOrigin(response.data.origin);
            setLocation(response.data.location)
            
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return 'Loading...'

    return (
        <div>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.type}</h3>
            <h3>{character.gender}</h3>
            <h3>{origin.name}</h3>
            <h3>{location.name}</h3>
        </div>
    )
}