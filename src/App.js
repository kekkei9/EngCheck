import './App.css';
import { Routes, Route } from 'react-router';
import ConditionalPara1 from './components/ConditionalPara1/ConditionalPara1'
import Grammar1Component from './components/Grammar1/Grammar1';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <ConditionalPara1/> } />
        <Route exact path='/unit1/grammar/1' element={ <ConditionalPara1/> } />
        <Route exact path='/unit1/grammar/2' element={ <Grammar1Component/> } />
      </Routes>
    </div>
  );
}

export default App;
