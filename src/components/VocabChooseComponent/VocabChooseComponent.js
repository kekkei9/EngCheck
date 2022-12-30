import React, { useState } from "react";
import './VocabChooseComponent.css'
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const VocabChooseComponent = ({keyValue}) => {
    const [isTrue, setIsTrue] = useState(-1);

    return (<div className="VocabChooseComponent">
    <Select 
    style={{ width: 60 }}
      onChange={(value) => setIsTrue(keyValue === value ? 1 : 0)}
      disabled={isTrue !== -1}
      options={[
        {
          value: 'A',
          label: 'A',
        },
        {
          value: 'B',
          label: 'B',
        },
        {
          value: 'C',
          label: 'C',
        },
        {
          value: 'D',
          label: 'D',
        },
        {
          value: 'E',
          label: 'E',
        },
        {
          value: 'F',
          label: 'F',
        },
      ]}/>
      {isTrue === 1 && <FontAwesomeIcon icon={faCircleCheck} style={{color: 'green'}}/> }
      {isTrue === 0 && <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}}/>}
    </div>)
}

export default VocabChooseComponent