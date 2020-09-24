import React, { useState, useContext} from 'react';
import styles from './AddNote.module.css';
import {GLobalContext, GlobalContext} from '../../context/GlobalState';

function AddNote() {
    
    const {addNote} = useContext(GlobalContext);

    const [note,setNote] = useState({
        title:"",
        content:""
    })
    
    
    
   const handleTitle = (event)=>{
        setNote((prevNote)=>{
            return{
                ...prevNote,
                title : event.target.value
            }
            
        })
    }

    const handleContent = (event)=>{
        setNote((prevNote)=>{
            return{
                ...prevNote,
                content : event.target.value
            }
            
        })
    }

   const submitNote=(event)=>{
        addNote(note);
        setNote(()=>{
            return{
                title : '',
                content:''
            }
            
        })
        event.preventDefault();
    }

        return (
            <div className="add">
               <form>
                <input type="text" name="title" value={note.title} onChange={handleTitle} placeholder="Title" required/><br/>
                <textarea name="content" rows="3" value={note.content} onChange={handleContent} placeholder="Take a note..." required></textarea><br/>
                <button onClick={submitNote}>Add</button>
               </form> 
            </div>
        )
    
}

export default AddNote;
