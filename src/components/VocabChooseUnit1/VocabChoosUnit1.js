import React from "react";
import VocabChooseComponent from "../VocabChooseComponent/VocabChooseComponent";
import './VocabChooseUnit1.css' 

const VocabChooseUnit1 = (props) => {
    const keyList = ['C', 'E', 'D', 'A', 'F', 'B']

    return <div className="VocabChooseUnit1" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="container" style={{width: '67%'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>1</span>
                    <span > Some people can </span>
                    <span style={{fontWeight: '600'}}>remember</span>
                    <span> conversations</span>
                    <span style={{fontWeight: '600'}}> word for word.</span>
                </div>
                <VocabChooseComponent keyValue={keyList[0]} length={6}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>2</span>
                    <span > People need to </span>
                    <span style={{fontWeight: '600'}}>jog my memory</span>
                    <span> about things like that.</span>
                </div>
                <VocabChooseComponent keyValue={keyList[1]} length={6}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>3</span>
                    <span > I tend to </span>
                    <span style={{fontWeight: '600'}}>block out memories</span>
                    <span> of things that upset me.</span>
                </div>
                <VocabChooseComponent keyValue={keyList[2]} length={6}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>4</span>
                    <span > I don't </span>
                    <span style={{fontWeight: '600'}}>commit</span>
                    <span> faces </span>
                    <span style={{fontWeight: '600'}}> to memory.</span>
                </div>
                <VocabChooseComponent keyValue={keyList[3]} length={6}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>5</span>
                    <span > My sister said I had a </span>
                    <span style={{fontWeight: '600'}}>selective memory.</span>
                </div>
                <VocabChooseComponent keyValue={keyList[4]} length={6}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'8px'}}>
                <div>
                    <span style={{fontWeight: '600'}}>6</span>
                    <span > A pair of eyes can </span>
                    <span style={{fontWeight: '600'}}>trigger a memory</span>
                    <span>  of someone I've seen before. </span>
                </div>
                <VocabChooseComponent keyValue={keyList[5]} length={6}/>
            </div>
        </div>
    </div>
}

export default VocabChooseUnit1