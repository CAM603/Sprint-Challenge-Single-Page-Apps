import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

// Styles
import { Card, CardBody, CardText, CardHeader, Button } from 'reactstrap';

export default function Location() {

    // Set state for loading
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);
    const [residents, setResidents] = useState([])
    

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
            setLocation(response.data);
            setResidents(response.data.residents)
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return <Loading />


    return (
        <div className="characterContainer">
            <div className="characterCard" style={{width : '400px'}}>
                <Card className="text-center" >
                    <CardHeader>
                        <h1>{location.name}</h1>
                    </CardHeader>
                    <CardBody>
                        <CardText>Type: {location.type}</CardText>
                        <CardText>Dimension: {location.dimension}</CardText>
                        <CardText>Residents: {residents.length}</CardText>
                        <Link to="/locations">
                            <Button color="danger">Back</Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
