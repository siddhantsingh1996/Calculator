import React, { useReducer } from 'react'

import './App.css';
import Calculator from "./components/calculator/calculator";


const initialState = "0";
const reducer = (state, action) => {   // intitalize a function called reducer this will perfom actions on state
	switch (action) {
    case 1:
			return state+"1"
    case 2:
      return state+"2"
    case 3:
      return state+"3"
    case 4:
      return state+"4"  
    case 5:
      return state+"5"
    case 6:
      return state+"6"  
    case 7:
      return state+"7"
    case 8:
      return state+"8"  
    case 9:
      return state+"9"
    case 0:
      return state+"0"
    case "plus":
      return state+"+"
    case "minus":
      return state+"-"
    case "divide":
      return state+"/"
    case "multiply":
      return state+"*"
		case "result":
      if(state[state.length-1]==="+" || state[state.length-1]==="-" || state[state.length-1]==="/" || state[state.length-1]==="%" ){
        return state
      }
      if (state[0]==="0"){
       return eval(state.substring(1));
      }
     return eval(state)
		case 'reset':
			return initialState
    case 'cancel':
      
			return  Number.isFinite(state)?"":state.slice(0,-1)   
		default:
			return state
	}
}


export const UserContext = React.createContext()



function App() {

  const [display, dispatch] = useReducer(reducer, initialState) 
 
  return (
    <UserContext.Provider value={{ displayState:display,resultDispatch: dispatch }}>
   <div className="container">
     <Calculator/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
