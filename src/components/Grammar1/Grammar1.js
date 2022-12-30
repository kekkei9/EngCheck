import React, { useState } from "react";
import './Grammar1.css'
import InputTenseComponent from "../InputTenseComponent/InputTenseComponent";


const Grammar1Component = (props) => {

    const [submitList, setSubmitList] = useState(Array(14).fill(false))

    const InputData = [
        {
            keyList:  ['would check', 'used to check'],
            hint: 'check'
        },
        {
            keyList: ['faded'],
            hint: 'fade'
        },
        {
            keyList: ['started'],
            hint: 'start'
        },
        {
            keyList: ['recorded'],
            hint: 'record'
        },
        {
            keyList: ['had never experienced'],
            hint: 'never/experience'
        },
        {
            keyList: ['began'],
            hint: 'begin'
        },
        {
            keyList: ['hadn’t been watching'],
            hint: 'watch'
        },
        {
            keyList: ['hadn’t been drinking'],
            hint: 'drink'
        },
        {
            keyList: ['had warned'],
            hint: 'warn'
        },
        {
            keyList: ['arrived'],
            hint: 'arrive'
        },
        {
            keyList: ['used to start', 'started'],
            hint: 'start'
        },
        {
            keyList: ['was lying'],
            hint: 'lie'
        },
        {
            keyList: ['woke up'],
            hint: 'wake'
        },
        {
            keyList: ['had disturbed'],
            hint: 'disturb'
        }
    ]

    return <div className="Grammar1" style={{display: "flex", flexDirection: 'column'}}>
        <div className="para1">
            <span>Ethan loved dreaming. Last thing at night he </span>
            <InputTenseComponent {...InputData[0]} isSubmitted= {submitList[0]}/>
            <span> that his notebook was there on his bedside table, ready for him to record the latest dream in minute detail in the morning, before it </span>
            <InputTenseComponent {...InputData[1]} isSubmitted= {submitList[1]}/>
            <span>. That was before the nightmares </span>
            <InputTenseComponent {...InputData[2]} isSubmitted= {submitList[2]}/>
            <span> after that he never to that night he </span>
            <InputTenseComponent {...InputData[3]} isSubmitted= {submitList[3]}/>
            <span> a dream again. Prior to that night he </span>
            <InputTenseComponent {...InputData[4]} isSubmitted= {submitList[4]}/>
            <span> a full-on bad dream. And there was no real explanation as to why they suddenly </span>
            <InputTenseComponent {...InputData[5]} isSubmitted= {submitList[5]}/>
            <span>. He </span>
            <InputTenseComponent {...InputData[6]} isSubmitted= {submitList[6]}/>
            <span> some terrifying movie on TV and he </span>
            <InputTenseComponent {...InputData[7]} isSubmitted= {submitList[7]}/>
            <span> any strong coffee just before bedtime as his mother </span>
            <InputTenseComponent {...InputData[8]} isSubmitted= {submitList[8]}/>
            <span> him not to. The dream </span>
            <InputTenseComponent {...InputData[9]} isSubmitted= {submitList[9]}/>
            <span> out of nowhere and haunted him throughout the following day. He couldn't flush away the unwanted memory of it.</span>
        </div>
        <div className="para2">
            <span>It always </span>
            <InputTenseComponent {...InputData[10]} isSubmitted= {submitList[10]}/>
            <span> in the same way. In his dream, he </span>
            <InputTenseComponent {...InputData[11]} isSubmitted= {submitList[11]}/>
            <span> in bed and he </span>
            <InputTenseComponent {...InputData[12]} isSubmitted= {submitList[12]}/>
            <span> because some noise </span>
            <InputTenseComponent {...InputData[13]} isSubmitted= {submitList[13]}/>
            <span> him. Then...</span>
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setSubmitList(Array(14).fill(true))
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}


export default Grammar1Component