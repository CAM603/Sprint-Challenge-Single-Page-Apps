import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loading from './Loading';

// Components
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {

    // Set state for location api
    const [locations, setLocations] = useState([])
    // Set state for specific location
    const [location, setLocation] = useState('')
    // Set state for loading
    const [loading, setLoading] = useState(true)

    // Function to set specific location
    const searchLocation = (location) => {
        setLocation(location);
    }

    useEffect(() => {
        setLoading(true)
        let cancel
        axios
        .get(`https://rickandmortyapi.com/api/location/?name=${location}`, {cancelToken: new axios.CancelToken(c => cancel = c)})
        .then(response => {
            setLoading(false)
            setLocations(response.data.results)
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()

    }, [location])

    if (loading) return <Loading/>
    
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
