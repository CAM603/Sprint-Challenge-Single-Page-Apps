import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
// Styles
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    Button
} from 'reactstrap';

export default function Character() {
    
    // Set state for loading
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);
    const [origin, setOrigin] = useState([]);
    const [location, setLocation] = useState([]);
    const [episodes, setEpisodes] = useState([]);

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
            setLocation(response.data.location);
            setEpisodes(response.data.episode);
            
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return <Loading/>

    return (
        <div className="characterContainer">
            <div className="characterCard" style={{width : '400px'}}>
                <Card body className="text-center" >
                    <CardHeader>
                        <h1>{character.name}</h1>
                    </CardHeader>
                    <CardImg src={character.image}/>
                    <CardBody>
                        <CardText>Status: {character.status}</CardText>
                        <CardText>Species: {character.species}</CardText>
                        <CardText>Gender: {character.gender}</CardText>
                        <CardText>Species: {character.species}</CardText>
                        <CardText>Origin: {origin.name}</CardText>
                        <CardText>Location: {location.name}</CardText>
                        <CardText>Appears in: {episodes.length} episodes</CardText>
                        <Link to="/characters">
                            <Button color="danger">Back</Button>
                        </Link>
                    </CardBody>

                </Card>
            </div>
        </div>
    )
}