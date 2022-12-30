import React, {useState} from "react";
import InputTenseComponent from '../InputTenseComponent/InputTenseComponent'

const GrammarUnit2 = (props) => {
   const [submitList, setSubmitList] = useState(Array(14).fill(false))

    const InputData = [
        {
            keyList:  ['to fail'],
        },
        {
            keyList: ['opting out'],
        },
        {
            keyList: ['to get'],
        },
        {
            keyList: ['retaking'],
        },
        {
            keyList: ['going on to do'],
        },
        {
            keyList: ['getting'],
        },
        {
            keyList: ['try to do'],
        },
        {
            keyList: ['enjoying'],
        },
        {
            keyList: ['feeling'],
        },
        {
            keyList: ['telling'],
        },
    ]

    return <div className="Grammar1" style={{display: "flex", flexDirection: 'column'}}>
        <div className="para1">
            <span>OK, so you need </span>
            <InputTenseComponent {...InputData[0]} isSubmitted= {submitList[0]}/>
            <span> sometimes in order to learn from your mistakes and move onwards and upwards. What's new? Parents, teachers, self-help manuals, etc. have been telling us that for years. But does it really make us stronger? For that last child to be chosen for a school sports team it might mean </span>
            <InputTenseComponent {...InputData[1]} isSubmitted= {submitList[1]}/>
            <span> of sports in the future. For the eighteen-year-old struggling. grades in exams and failing it could involve. </span>
            <InputTenseComponent {...InputData[2]} isSubmitted= {submitList[2]}/>
            <span> top </span>
            <InputTenseComponent {...InputData[3]} isSubmitted= {submitList[3]}/>
            <span> or for some students, even </span>
            <InputTenseComponent {...InputData[4]} isSubmitted= {submitList[4]}/>
            <span> a job he or she hates </span>
            <InputTenseComponent {...InputData[5]} isSubmitted= {submitList[5]}/>
            <span> up for in the morning. We're told that failure makes us </span>
            <InputTenseComponent {...InputData[6]} isSubmitted= {submitList[6]}/>
            <span> something better next time. Right? Mmm, maybe I'm having a glass-half-empty day today, but I can't imagine ever really  </span>
            <InputTenseComponent {...InputData[7]} isSubmitted= {submitList[7]}/>
            <span>failing at something. The buzz you get from success tops the way failure can leave you often experts insist on 10 </span>
            <InputTenseComponent {...InputData[8]} isSubmitted= {submitList[8]}/>
            <span> any time, however </span>
            <InputTenseComponent {...InputData[9]} isSubmitted= {submitList[9]}/>
            <span> us otherwise.</span>
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setSubmitList(Array(14).fill(true))
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default GrammarUnit2