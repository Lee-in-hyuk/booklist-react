import Buttons from './components/Buttons';
import Lists from './components/Lists';
import booksdata from './data/data.json';
import { useState } from 'react';
import './App.css';

function App() {
  const [ bookLists, setBookLists ] = useState(booksdata.lists);
  function onButton(e){
    const dataset = e.target.dataset;
    const { value } = dataset;
    console.log(value);

    const b_lists = booksdata.lists.filter(b=>b['year'] === value);
    setBookLists(b_lists);
  }
  return (
    <div className="App">
      <h1>booklist</h1>
      <Buttons onButton={onButton}/>
      <Lists bookLists={bookLists}/>
    </div>
  );
}

export default App;
