import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loading from './Loading';

// Components
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";

export default function EpisodeList() {

    // Set state for episode api
    const [episodes, setEpisodes] = useState([]);
    // Set state for specific episode
    const [episode, setEpisode] = useState('');
    // Set state for loading
    const [loading, setLoading] = useState(true)

    // Function to set specific episode
    const searchEpisode = (episode) => {
        setEpisode(episode);
    }

    useEffect(() => {
        setLoading(true)
        let cancel
        axios
        .get(`https://rickandmortyapi.com/api/episode/?name=${episode}`, {cancelToken: new axios.CancelToken(c => cancel = c)})
        
        .then(response => {
            setLoading(false)
            setEpisodes(response.data.results)
        })
        .catch(error => console.log(error))

        // Cleanup function
        return () => cancel()

    }, [episode])

    if (loading) return <Loading/>

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