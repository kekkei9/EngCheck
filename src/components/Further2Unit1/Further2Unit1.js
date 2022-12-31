import React, {useState} from "react";
import InputTenseComponent from '../InputTenseComponent/InputTenseComponent'

const Further2Unit1 = () => {
    const [submitList, setSubmitList] = useState(false)


    const keyList = [
        ['had gone', 'had been sold by the time'],
        ['no sooner had he posted'],
        ['after having told'],
        ['realised my account had been hacked'],
        ['did was close my account']
    ]

    const desList = [
        'None of the tickets were left when we got to the cinema.',
        'Immediately after Sam posted the Snapchat story, he got over 100 likes.',
        'It was only after telling everyone he\'d made a vlog that Mike got lots of views.',
        'My account was hacked and then became quite worried.',
        'I took the only option open to me and closed my account.'
    ]

    const hintList = [
        'TIME',
        'SOONER',
        'HAVING',
        'RELEASED',
        'DID'
    ]

    const senList = [
        ['All the tickets ', ' we got to the cinema.'],
        ['Sam found that ', 'the Snapchat story than he got 100 likes.'],
        ['Mike only got lots of views ', ' everyone he\'d made a vlog'],
        ['When I ', ' I became quite worried.'],
        ['What I ', ', which was the only option open to me.']
    ]

    return <div className="Further2Unit1" style={{display: "flex", flexDirection: 'column'}}>
        <div><span>Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. Use between three and six words</span></div>

        {keyList.map((key, index) => <div style={{marginTop: '16px'}}>
            <div>
                <span>{index + 1} </span>
                <span>{desList[index]}</span>
            </div>
            <div><span style={{fontWeight: '600'}}>{hintList[index]}</span></div>
            <div>
                <span>{senList[index][0]}</span>
                <InputTenseComponent keyList={key} isSubmitted={submitList}/>
                <span>{senList[index][1]}</span>
            </div>
        </div>)}
        <button 
        className="primary-btn"
        onClick={() => {
            setSubmitList(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default Further2Unit1