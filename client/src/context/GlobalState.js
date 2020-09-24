import React, {createContext,useReducer} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const initialState = {
    notes:[],
    error:null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState)
    
     function getNotes() {
        try{
            const res =  axios.get('/notes');
            dispatch({
                type:'GET_NOTES',
                payload:res.data.data
            })
        }catch(e){
            console.log(e);
        }
    }

   async function addNote(newNote){
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.post('/notes',newNote,config);
            dispatch({
                type:'ADD_NOTE',
                payload:res.data.data
            })

    }catch(e){
        console.log(e);
    }    
    
      }
    
   async function deleteNote(id){
       try{
        await axios.delete(`/notes/${id}`);

        dispatch({
            type:'DELETE_NOTE',
            payload: id
        })

       }catch(e){
        console.log(e);
       }
      }

    return (
        <GlobalContext.Provider 
        value={{
            notes:state.notes,
            getNotes,
            deleteNote,
            addNote,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

