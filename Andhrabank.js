import React from 'react'

export default function Andhrabank(props) {
    return (
        <div>
            <h1>Andhrabank is located at {props.location} with account name of {props.data.name} with age of {props.data.age}</h1>
        </div>
    )
}
