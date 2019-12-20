import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState('')

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/?name=${location}`)
        .then(response => {
            console.log(response.data.results)
            setLocations(response.data.results)
        })
        .catch(error => console.log(error))
    }, [location])
    return (
        <section>
            {locations.map(location => (
                <LocationCard key={location.id} location={location}/>
            ))}
        </section>
    )
}
