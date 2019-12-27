import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

export default function EpisodeCard({episode}) {
    const id = episode.id;
    return (
        <div className="episode-card">
            <Card>
                <Link to={`episodes/${id}`}>
                    <CardHeader>Name: {episode.name}</CardHeader>
                </Link>
                <CardBody>
                    <CardText>Episode: {episode.episode}</CardText>
                    <CardText>Air Date: {episode.air_date}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}