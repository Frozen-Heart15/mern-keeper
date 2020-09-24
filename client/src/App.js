import React , {useContext, useEffect} from 'react';
import './App.css';
import {Navbar, AddNote, Note} from './components'
import {GlobalProvider, GlobalContext} from './context/GlobalState';



function App() {
  const {notes, getNotes} = useContext(GlobalContext);
  useEffect(()=>{
    getNotes();
  },[]);

  return (
    <GlobalProvider>
    <div className="App">
      <Navbar/>
      <AddNote />
      {notes.map((note,index)=>{
        return(
          <Note
           key={note._id}
           id={note._id}
           title={note.title}
           content={note.content} 
          />
        )
      })}
    </div>
    </GlobalProvider>
  );
}

export default App;
