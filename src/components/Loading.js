import React from 'react';
import { Spinner } from 'reactstrap';

export default function Loading() {
    return (
        <div className="spinner">
            <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
        </div>
    )
}