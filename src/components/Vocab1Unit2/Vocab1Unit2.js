import React, {useState} from "react";
import InputTenseComponent from "../InputTenseComponent/InputTenseComponent";

const Vocab1Unit2 = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const InputData = [
        {
            keyList:  ['resounding'],
        },
        {
            keyList: ['unprecedented'],
        },
        {
            keyList: ['vast'],
        },
        {
            keyList: ['dismal'],
        },
        {
            keyList: ['unmitigated'],
        },
        {
            keyList: ['colossal'],
        },
        {
            keyList: ['endearing'],
        },
        {
            keyList: ['eternal'],
        },
        {
            keyList: ['burning'],
        },
        {
            keyList: ['lukewarm'],
        },
        {
            keyList: ['futile'],
        }, 
        {
            keyList: ['formidable']
        }
    ]

    return <div className="Vocab1Unit2" style={{display: "flex", flexDirection: 'column'}}>
        <div className="para1">
            <span>South Bay has turned out to be a(n) </span>
            <InputTenseComponent {...InputData[0]} isSubmitted= {isSubmitted} width='120px'/>
            <span> with a(n) </span>
            <InputTenseComponent {...InputData[1]} isSubmitted= {isSubmitted} width='120px'/>
            <span> fourteen million viewers turning in to watch the first episode last week. Critics predicted that with strong competition from a(n) </span>
            <InputTenseComponent {...InputData[2]} isSubmitted= {isSubmitted} width='120px'/>
            <span> number of similar shows, it would be a(n) </span>
            <InputTenseComponent {...InputData[3]} isSubmitted= {isSubmitted} width='120px'/>
            <span> failure. (They cited the soap Surf Beach from two years ago, which was a(n) </span>
            <InputTenseComponent {...InputData[4]} isSubmitted= {isSubmitted} width='120px'/>
            <span> disaster and cost the producers a(n) </span>
            <InputTenseComponent {...InputData[5]} isSubmitted= {isSubmitted} width='120px'/>
            <span> amount of money.) The third episode last night introduced another </span>
            <InputTenseComponent {...InputData[6]} isSubmitted= {isSubmitted} width='120px'/>
            <span> character, Caleb. He appears to be a(n)</span>
            <InputTenseComponent {...InputData[7]} isSubmitted= {isSubmitted} width='120px'/>
            <span> student, now on his third degree course, with a(n) </span>
            <InputTenseComponent {...InputData[8]} isSubmitted= {isSubmitted} width='120px'/>
            <span> ambition to become  a writer. From the </span>
            <InputTenseComponent {...InputData[9]} isSubmitted= {isSubmitted} width='120px'/>
            <span> response of his friends to his latest manuscript, it's clear that his previous attempts at writing have been </span>
            <InputTenseComponent {...InputData[10]} isSubmitted= {isSubmitted} width='120px'/>
            <span> and perhaps he should simply give up on it. Poor Caleb also seems to find maintaining any relationship a(n) </span>
            <InputTenseComponent {...InputData[11]} isSubmitted= {isSubmitted} width='120px'/>
            <span> challenge! His engagement to Lisa Drew lasted exactly eleven days. </span>
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setIsSubmitted(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default Vocab1Unit2