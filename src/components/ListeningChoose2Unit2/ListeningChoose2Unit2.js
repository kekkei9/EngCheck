import React from "react";
import VocabChooseComponent from "../VocabChooseComponent/VocabChooseComponent";

const ListeningChoose2Unit2 = () => {
    const keyList= ['C', 'E', 'D', 'A', 'F', 'B']
    const desList = ['Many factors go into being successful.',
'It\'s down to how much you practise.',
'You need to face up to the fact.',
'It\'s where I ended up.',
'I\'m going to come back to my original point.',
'My performance switched up a gear'
]
    return <div className="ListeningChoose2Unit2">
        {keyList.map((keyValue, index) => (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>{index+1} </span>
                    <span>{desList[index]}</span>
                </div>
                <VocabChooseComponent keyValue={keyValue} length={6} />
            </div>
        ))}
    </div>
}

export default ListeningChoose2Unit2