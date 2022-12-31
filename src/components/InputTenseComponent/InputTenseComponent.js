import React, { useEffect, useState } from "react";
import './InputTenseComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const InputTenseComponent = ({keyList, hint, isSubmitted, width = '180px', maxLength = 20}) => {
    const [isTrue, setIsTrue] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
        setIsTrue(isSubmitted && keyList.includes(value.toLowerCase()))
    }, [isSubmitted, keyList, value])

    return <span className="InputTense">
        <span className="inputBox">
            {isSubmitted && !isTrue && <span style={{color: 'green'}}>{keyList.join(' / ')}</span>}
            <input size={4} maxLength={maxLength} disabled={isSubmitted} onInput={(e) => {
                setValue(e.target.value)
            }} style={{width: width}}/>
            {isSubmitted && (isTrue ? 
            <FontAwesomeIcon icon={faCircleCheck} style={{color: 'green'}}/> :
            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}}/>)}  
        </span>
        {hint && <span> ({hint})</span>}
    </span>
}


export default InputTenseComponent