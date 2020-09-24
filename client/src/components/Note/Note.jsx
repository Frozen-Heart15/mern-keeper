import React, {useContext} from 'react';
import styles from './Note.module.css';
import {GlobalContext} from '../../context/GlobalState';

function Note(props) {
    
    const {deleteNote} = useContext(GlobalContext);

        return (
            <div className={styles.note}>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
              <button className={styles.delete} onClick={()=>deleteNote(props.id)}>DELETE</button>  
            </div>
        )
    
}

export default Note;
