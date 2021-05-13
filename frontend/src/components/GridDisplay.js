import React, { useState, useRef, useEffect } from 'react'
import './styles/GridDisplay.css'
import Ship from './Ship'
const GridDisplay = (props) => {




    return (
            <div className="grid-display" >
                {props.children}
            </div>
    )
}

export default GridDisplay
