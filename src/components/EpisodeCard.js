import React from 'react';

// Style
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function EpisodeCard({episode}) {
    console.log(episode)
    return (
        <div className="episode-card">
            <Card>
                <CardHeader>{episode.name}</CardHeader>
                <CardBody>
                    <CardText>{episode.episode}</CardText>
                    <CardText>{episode.air_date}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}