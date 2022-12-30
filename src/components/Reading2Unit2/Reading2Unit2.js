import React, { useState } from "react";
import InputTenseComponent from "../InputTenseComponent/InputTenseComponent";
import VocabChooseComponent from "../VocabChooseComponent/VocabChooseComponent";

const Reading2Unit2 = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const keyList=Array(10).fill('a')
    const desList = ['people who are not familiar with (sth) (paragraph A)',
'listening intently (paragraph A)',
'deal successfully with a difficult situation (paragraph A)',
'significantly (paragraph B)',
'saying or doing things to confuse a person (paragraph B)',
'trying to reach the same standard as someone else (paragraph C)',
'performing dance steps (paragraph D)',
'for a very short time (paragraph D)',
'not suitable for people without confidence (paragraph D)',
'not because of (paragraph D)']

    return <div className="Reading2Unit2" style={{display: "flex", flexDirection: 'column'}}>
        <div>
            <span>Read the contributions again. For questions 1-10, choose from the contributors (A-D). The contributors may be chosen more than once.</span>
        </div>
        <div>
            <span>Which contributor:</span>
        </div>
        <div className="chooseFormContainer" style={{display: 'flex', flexDirection: 'column', width: '67%'}}>
            {desList.map((des, index) => <div className="chooseContainer" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>{index+1} </span>
                    <span>{des}</span>
                </div>
                <InputTenseComponent width="100px" isSubmitted={isSubmitted} keyList={[keyList[index]]}/>
            </div>)}
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setIsSubmitted(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default Reading2Unit2