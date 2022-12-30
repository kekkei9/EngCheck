import logo from './logo.svg';
import './App.css';
import ConditionalTextComponent from './components/ConditionalText/ConditionalText';
import { Routes, Route } from 'react-router';
import ConditionalPara1 from './components/ConditionalPara1/ConditionalPara1'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <ConditionalPara1/> } />

        <Route path={`${process.env.PUBLIC_URL}/conditionalPara1`} element={ <ConditionalPara1/> } />
      </Routes>
    </div>
  );
}

export default App;
