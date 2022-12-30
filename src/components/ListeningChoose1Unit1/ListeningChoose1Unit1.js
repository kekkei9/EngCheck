import React from "react";
import VocabChooseComponent from '../VocabChooseComponent/VocabChooseComponent'

const ListeningChoose1Unit1 = (props) => {
    const keyList= ['A', 'C', 'F', 'D', 'B']

    return <div className="ListeningChoose1Unit1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {keyList.map((keyValue, index) => (
            <div style={{display: 'flex', flexDirection: 'row', width: '250px', justifyContent: 'space-between', marginTop: '8px'}}>
                <span>Speaker {index+1}</span>
                <VocabChooseComponent keyValue={keyValue} length={8} />
            </div>
        ))}
    </div>
}

export default ListeningChoose1Unit1