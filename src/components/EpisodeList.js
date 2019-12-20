import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    const [episode, setEpisode] = useState('')
    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/episode/?name=${episode}`)
        .then(response => {
            console.log(response.data.results)
            setEpisodes(response.data.results)
        })
        .catch(error => console.log(error))
    }, [episode])

    return (
        <div>
            {episodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
        
    )
}