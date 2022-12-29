import logo from './logo.svg';
import './App.css';
import ConditionalTextComponent from './ConditionalText/ConditionalText';

function App() {
  const ChooseData = [
    {
      textList: ['would', 'used to'],
      truthyIndex: [1]
    },
    {
      textList: ['would', 'used to'],
      truthyIndex: [0, 1]
    },
    {
      textList: ['followed', 'd been following'],
      truthyIndex: [0,1]
    },
    {
      textList: ['watched', 'was watching'],
      truthyIndex: [1]
    },
    {
      textList: ['poured', 'had been pouring'],
      truthyIndex: [1]
    },
    {
      textList: ['started', 'was starting'],
      truthyIndex: [0]
    },
    {
      textList: ['ordered', 'was ordering'],
      truthyIndex: [0]
    },
    {
      textList: ['found', 'had found'],
      truthyIndex: [0]
    }, 
    {
      textList: ['stayed', 'was actually staying'],
      truthyIndex: [1]
    }
  ]

  const ChooseData2 = [

  ]

  return (
    <div className="App">
      <div className='Paragraph1'>
        <span>A: Oh yes, there's one really weird one. When I was a child </span> 
        <ConditionalTextComponent {...ChooseData[0]}/>
        <span> love watching nature documentaries. I </span> 
        <ConditionalTextComponent {...ChooseData[1]}/>
        <span> never miss one. That November I'd </span> 
        <ConditionalTextComponent {...ChooseData[2]}/>
        <span> a series of programmes about animals on TV and I </span>
        <ConditionalTextComponent {...ChooseData[3]}/>
        <span> the final one- about hippopotamuses. It </span>
        <ConditionalTextComponent {...ChooseData[4]}/>
        <span> with rain for days and water suddenly </span>
        <ConditionalTextComponent {...ChooseData[5]}/>
        <span> to gush under the front door. Dad </span>
        <ConditionalTextComponent {...ChooseData[6]}/>
        <span> us all out. Later I </span>
        <ConditionalTextComponent {...ChooseData[7]}/>
        <span> out that when our house was flooded actually </span>
        <ConditionalTextComponent {...ChooseData[8]}/>
        <span> with my cousins!</span>
      </div>
    </div>
  );
}

export default App;
