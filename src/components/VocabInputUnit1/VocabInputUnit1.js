import React, { useState } from "react";
import './VocabInputUnit1.css'
import InputTenseComponent from '../InputTenseComponent/InputTenseComponent'

const VocabInputUnit1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const keyList = [
        'commit', 'blocked' , 'jog', 'word for word', 'triggers',
'selective'
    ]

    return <div className="VocabInputUnit1" style={{display: 'flex', flexDirection: 'column'}}>
        <div>
            <span>My family have very different types of memories.</span>
        </div>
        <div style={{marginTop: '16px'}}>
            <span>My brother has a very </span>
            <InputTenseComponent keyList={[keyList[0]]} isSubmitted={isSubmitted}/>
            <span> memory. He </span>
            <InputTenseComponent keyList={[keyList[1]]} isSubmitted={isSubmitted}/>
            <span> things like when he's out partying or times of sports events on TV, but cannot for the life of him </span>
            <InputTenseComponent keyList={[keyList[2]]} isSubmitted={isSubmitted}/>
            <span> my birthday (my mum always has to </span>
            <InputTenseComponent keyList={[keyList[3]]} isSubmitted={isSubmitted}/>
            <span> him) or where he put the DVD lent him yesterday. My dad has a really sharp memory- particularly about when my homework's due! He can remember conversations we've had </span>
            <InputTenseComponent keyList={[keyList[4]]} isSubmitted={isSubmitted}/>
            <span> so there's no way I can ever pretend I've said stuff that I haven't. My grandfather is amazing. A photograph or a song will immediately </span>
            <InputTenseComponent keyList={[keyList[5]]} isSubmitted={isSubmitted}/>
            <span> memories from forty years ago and he comes out with wonderful stories! </span>
        </div>
        <div style={{marginTop: '16px'}}>
            <span>
                How about your family?
            </span>
        </div>

        <button 
        className="primary-btn"
        onClick={() => {
            setIsSubmitted(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default VocabInputUnit1