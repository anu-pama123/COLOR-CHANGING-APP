import React from "react";
import { useEffect, useState } from "react";

import "../colorboxes/colorboxes.css";

const ColorBoxes = () => {
    const [color1, setColor1] = useState('black');
    const [color2, setColor2] = useState('yellow');
    const [row, setRow] = useState('0');
    const [column, setColumn] = useState('0');

    const getOppositeColor = (color) => {
        return color==='yellow'?'black':'yellow';
    }

    const increminator = () => {
        if(column >= 30) {
            setRow((row+1)%6)
        }
        setColumn((column+1)%30)
    }

    useEffect (() => {
        setTimeout(() => {
            increminator();
            if(column >= 29) {
                setColor1(getOppositeColor(color1));
                setColor2(getOppositeColor(color2));
            }
        }, 1000)
    })

    return (
        <div className="box-container">
            <table className="box-table">
                {[...Array(6).keys()].map((value, rowIndex)=>
                <tr className="box-row" key={rowIndex}>
                    {[...Array(30).keys()].map((value, columnIndex)=>
                        <td style={{'backgroundColor': columnIndex<=column? color1:color2}} key={columnIndex} className="box-column"></td>
                    )}
                </tr>)}
            </table>
        </div>
    )
}

export default ColorBoxes;