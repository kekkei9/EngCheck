import React, {useState} from "react";
import InputTenseComponent from "../InputTenseComponent/InputTenseComponent";

const Further1Unit1 = () => {
    const [submitList, setSubmitList] = useState(false)

    const keyList = [
        ['remember', 'recall'],
        ['charismatic', 'inspirational'],
        ['commit'],
        ['stick'],
        ['recognise'],
        ['inspirational'],
        ['reassuring'],
        ['marked'],
        ['memorise'],
        ['paved']
    ]

    return <div className="Further1Unit1" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="para1">
            <span>I </span>
            <InputTenseComponent keyList = {keyList[0]} isSubmitted= {submitList}/>
            <span> when I first started learning German at primary school it really wasn't that interesting. The teacher was and everyone loved him, but he wasn't, I think on reflection, a particularly good teacher. We had to </span>
            <InputTenseComponent keyList = {keyList[1]} isSubmitted= {submitList}/>
            <span> long lists of words to memory every week and endure regular tests. I didn't </span>
            <InputTenseComponent keyList = {keyList[2]} isSubmitted= {submitList}/>
            <span> to German for long and gave it up as soon as possible. Today I still </span>
            <InputTenseComponent keyList = {keyList[3]} isSubmitted= {submitList}/>
            <span> some of the words from those lists, but I certainly don't remember their meanings!</span>
        </div>
        <div className="para2">
            <span>However, when I started Italian at secondary school, we had a(n) </span>
            <InputTenseComponent keyList = {keyList[4]} isSubmitted= {submitList}/>
            <span> teacher who made us really want to learn. She was always </span>
            <InputTenseComponent keyList = {keyList[5]} isSubmitted= {submitList}/>
            <span> when we made mistakes and the results of every student in her class showed a(n) </span>
            <InputTenseComponent keyList = {keyList[6]} isSubmitted= {submitList}/>
            <span> improvement at the end of the school year. We never had to. </span>
            <InputTenseComponent keyList = {keyList[7]} isSubmitted= {submitList}/>
            <span> vocabulary out of context and that learning experience </span>
            <InputTenseComponent keyList = {keyList[8]} isSubmitted= {submitList}/>
            <span> the way for my future career.</span>
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setSubmitList(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button></div>
}

export default Further1Unit1