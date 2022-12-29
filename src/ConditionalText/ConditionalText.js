import React, { useState } from "react";
import './ConditionalText.css'

const ConditionalTextComponent = ({textList, truthyIndex}) => {
    const [isChosen, setIsChosen] = useState(-1)

    return <span className="ConditionalText">
        {textList.map((text, index)=> <span>
            {index > 0 && <span> / </span>}
            <span className={`${isChosen >= 0 ? "chosen" : "text"}`}
            style={{color: `${isChosen >= 0  && (truthyIndex.includes(isChosen) ? 
                truthyIndex.includes(index) ? "green" : "" :truthyIndex.includes(index) ? "green" : "red")}`}}
            onClick={isChosen === -1 ? () => setIsChosen(index) : () => {}}>{text}</span>
        </span>)}
    </span>
}


export default ConditionalTextComponent