import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

export default function EpisodeCard({episode}) {
    console.log(episode)
    return (
        <div>
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