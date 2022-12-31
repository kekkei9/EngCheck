import React, { useState } from 'react'
import InputTenseComponent from '../InputTenseComponent/InputTenseComponent'

const FurtherUnit2 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const keyList = [
        'What are you hoping to do with all the prize money?',
        'I’ve been playing chess for quite some time now.',
        'Have you seen any of the questions yet?',
        'They’ve got quite a few more players than us.',
        'We had a little more of the food to give us energy.'
    ]

    return <div className='FurtherUnit2' style={{display: "flex", flexDirection: 'column'}}>
        {keyList.map((key, index) =><div>
            <span style={{fontWeight: '600'}}>{index + 1} </span>
            <InputTenseComponent keyList={[key]} isSubmitted={isSubmitted} width='400px' maxLength={60}/>
        </div>)}
         <button 
        className="primary-btn"
        onClick={() => {
            setIsSubmitted(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default FurtherUnit2