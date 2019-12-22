import React from 'react';

// Style
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function EpisodeCard({episode}) {
    console.log(episode)
    return (
        <div className="episode-card">
            <Card>
                <CardHeader>Name: {episode.name}</CardHeader>
                <CardBody>
                    <CardText>Episode: {episode.episode}</CardText>
                    <CardText>Air Date: {episode.air_date}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}