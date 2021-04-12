import React, { useState } from 'react'

import './styles/Board.css'

const BOARD_SIZE = 10

const Board = () => {

    const [board, setBoard] = useState( createGrid(BOARD_SIZE,BOARD_SIZE) )

    function createGrid(cols, rows){
        var arr = new Array(cols)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows).fill(0)
        }
        console.log(arr);
        return arr
    }


    return (
        <div className="board">

            {board.map( (col,colIdx) => (
                <div key={colIdx} className="row">
                    {col.map( (row,rowIdx) => (
                        <div key={rowIdx} className="cell">
                            {row}
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Board
