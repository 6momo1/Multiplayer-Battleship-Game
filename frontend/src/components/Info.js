import React from 'react'
import Button from './Button'
const Info = ({toggleHorizontal}) => {
    return (
        <div>
            <Button text="Start Game"/>
            <button onClick={toggleHorizontal}>Rotate your ships</button>
            <Button text="Next" />
            <h3>Information</h3>
        </div>
    )
}

export default Info
