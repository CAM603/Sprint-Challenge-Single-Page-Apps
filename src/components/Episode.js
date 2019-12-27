import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from'axios';
import Loading from './Loading';
// Styles
import {
    Card, CardText, CardBody, CardHeader,
    Button
} from 'reactstrap';

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
            setEpisode(response.data);
            setCharacters(response.data.characters)
            
        })
        .catch(error => console.log(error))
        // Cleanup function
        return () => cancel()
    
    }, [id]);
    
        if (loading) return <Loading />
    return (
        <div className="characterContainer">
            <div className="characterCard" style={{width : '400px'}}>
                <Card className="text-center">
                    <CardHeader>
                        <h1>{episode.name}</h1>
                    </CardHeader>
                    
                    <CardBody>
                        <CardText>Status: {episode.name}</CardText>
                        <CardText>Species: {episode.episode}</CardText>
                        <CardText>Gender: {episode.air_date}</CardText>
                        <CardText>Characters in episode: {characters.length}</CardText>
                        <Link to="/characters">
                            <Button color="danger">Back</Button>
                        </Link>
                    </CardBody>

                </Card>
            </div>
        </div>
    )
}