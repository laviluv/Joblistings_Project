import React from 'react';
import {Spinner} from 'react-bootstrap';

interface Props {
    content?: string;
}
export default function LoadingComponent({ content = 'Loading...' }: Props) {
    return (
        <div>
    <Spinner animation="border" role="status" variant="info">
     <span className="sr-only">Loading...</span>
            </Spinner >
            </div>
        )
}