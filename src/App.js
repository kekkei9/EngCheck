import './App.css';
import { Routes, Route } from 'react-router';
import ConditionalPara1 from './components/ConditionalPara1/ConditionalPara1'
import Grammar1Component from './components/Grammar1/Grammar1';
import VocabChooseUnit1 from './components/VocabChooseUnit1/VocabChoosUnit1';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <ConditionalPara1/> } />
        <Route exact path='/unit1/grammar/1' element={ <ConditionalPara1/> } />
        <Route exact path='/unit1/grammar/2' element={ <Grammar1Component/> } />
        <Route exact path='/unit1/vocab/1' element={<VocabChooseUnit1 />} />
      </Routes>
    </div>
  );
}

export default App;
