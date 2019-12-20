import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    const [episode, setEpisode] = useState('');

    const searchEpisode = (episode) => {
        setEpisode(episode);
    }
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
            <h1 className="title">Episodes</h1>
            <SearchForm
            searchEpisode={searchEpisode}
            />
            <section className="episode-list">
            {episodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
            ))}
            </section>
        </div>
        
    )
}