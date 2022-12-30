import React, {useState} from "react";
import InputTenseComponent from "../InputTenseComponent/InputTenseComponent";

const ListeningChoose1Unit2 = (props) => {

   const [submitList, setSubmitList] = useState(false)

    const InputData = [
        {
            keyList:  ['practice'],
        },
        {
            keyList: ['boundaries'],
        },
        {
            keyList: ['track surface'],
        },
        {
            keyList: ['latest equipment'],
        },
        {
            keyList: ['same conditions'],
        },
        {
            keyList: ['body type'],
        },
        {
            keyList: ['swimmer'],
        },
        {
            keyList: ['limit'],
        },
    ]

    return <div className="ListeningChoose1Unit2" style={{display: "flex", flexDirection: 'column'}}>
        <div>
            <span style={{fontWeight: '600'}}>1</span>
            <span> Jed disagrees that success is related to </span>
            <InputTenseComponent {...InputData[0]} isSubmitted={submitList}/>
            <span> for athletes</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>2</span>
            <span> Jed uses the word  </span>
            <InputTenseComponent {...InputData[1]} isSubmitted={submitList}/>
            <span> to describe what he always wants to expand.</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>3</span>
            <span> Jed was surprised that the </span>
            <InputTenseComponent {...InputData[2]} isSubmitted={submitList}/>
            <span> changed the way he performed so much.</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>4</span>
            <span> Jed admits that, like other athletes, he wants to use the </span>
            <InputTenseComponent {...InputData[3]} isSubmitted={submitList}/>
            <span> in order to do better.</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>5</span>
            <span> Jed was annoyed that in one race he was expected to run under the </span>
            <InputTenseComponent {...InputData[4]} isSubmitted={submitList}/>
            <span> as in the past.</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>6</span>
            <span> Jed suggests that successful athletes need to consider if their </span>
            <InputTenseComponent {...InputData[5]} isSubmitted={submitList}/>
            <span> is suitable for their chosen sport.</span>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>7</span>
            <span> Jed was initially disappointed that he didn't manage to become a(n) </span>
            <InputTenseComponent {...InputData[6]} isSubmitted={submitList}/>
        </div>
        <div>
            <span style={{fontWeight: '600'}}>8</span>
            <span> Jed is grateful to his coach for making him work to the </span>
            <InputTenseComponent {...InputData[7]} isSubmitted={submitList}/>
            <span> of his ability.</span>
        </div>
        <button 
        className="primary-btn"
        onClick={() => {
            setSubmitList(true)
        }}
        style={{alignSelf:'center', marginTop: '16px'}}>Submit</button>
    </div>
}

export default ListeningChoose1Unit2