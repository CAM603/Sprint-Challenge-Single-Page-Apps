import React from 'react';

export default function EpisodeCard({episode}) {
    console.log(episode)
    return (
        <div>
            <h1>{episode.name}</h1>
            <h2>{episode.episode}</h2>
            <h2>{episode.air_date}</h2>
        </div>
    )
}