import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Character() {

    console.log(useParams())
    return (

        <h1>Character</h1>
    )
}