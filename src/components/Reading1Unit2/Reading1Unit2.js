import React from "react";
import VocabChooseComponent from "../VocabChooseComponent/VocabChooseComponent";

const Reading1Unit2 = (props) => {
    const keyList=['B', 'C', 'A', 'D', 'B', 'D', 'A', 'B', 'A', 'C']
    const desList = ['points out the need for physical fitness?',
'advises participants not to be affected by early errors?',
'questions the justification for a negative attitude?',
'mentions the importance of each spectator\'s opinion?',
'exemplifies how psychology can affect a contest?',
'describes how a challenger can instil uncertainty during a contest?',
'corrects a mistaken belief?',
'presents a comparison between two different contest environments?',
'emphasises the benefit of engaging with the spectators?',
'suggests that even a negative experience can lead to a need to repeat it?']

    return <div className="Reading1Unit2">
        <div>
            <span>Read the contributions again. For questions 1-10, choose from the contributors (A-D). The contributors may be chosen more than once.</span>
        </div>
        <div>
            <span>Which contributor:</span>
        </div>
        <div className="chooseFormContainer" style={{display: 'flex', flexDirection: 'column'}}>
            {desList.map((des, index) => <div className="chooseContainer" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>{index+1} </span>
                    <span>{des}</span>
                </div>
                <VocabChooseComponent keyValue={keyList[index]} length={4}/>
            </div>)}
        </div>
    </div>
}

export default Reading1Unit2