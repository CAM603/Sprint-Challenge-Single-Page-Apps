import React, { useEffect, useState } from "react";
import axios from 'axios';

// Components
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {

    // Set state for location api
    const [locations, setLocations] = useState([])
    // Set state for specific location
    const [location, setLocation] = useState('')

    // Function to set specific location
    const searchLocation = (location) => {
        setLocation(location);
    }

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
        <div>
            <h1 className="title">Locations</h1>
            <SearchForm 
            searchLocation={searchLocation}
            />
            <section className="location-list">
            {locations.map(location => (
                <LocationCard key={location.id} location={location}/>
            ))}
        </section>
        </div>
    )
}
