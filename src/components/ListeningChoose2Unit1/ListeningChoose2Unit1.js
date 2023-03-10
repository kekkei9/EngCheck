import React from "react";
import VocabChooseComponent from '../VocabChooseComponent/VocabChooseComponent'

const ListeningChoose2Unit1 = (props) => {
    const keyList= ['B', 'H', 'F', 'A', 'C']
    

    return <div className="ListeningChoose2Unit1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {keyList.map((keyValue, index) => (
            <div style={{display: 'flex', flexDirection: 'row', width: '250px', justifyContent: 'space-between', marginTop: '8px'}}>
                <span>Speaker {index+1}</span>
                <VocabChooseComponent keyValue={keyValue} length={8} />
            </div>
        ))}
    </div>
}

export default ListeningChoose2Unit1