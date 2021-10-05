import React,{useContext} from 'react'
import "./keypad.css";
import {  UserContext} from '../../App';
export default function Keypad() {
    const result = useContext(UserContext);
    console.log("console",UserContext.displayState);
    return (
        <div className="container">
           <div className="first-line">
             <button className="btn" onClick={()=>result.resultDispatch(1)}>1</button>
             <button className="btn" onClick={()=>result.resultDispatch(2)}>2</button>
             <button className="btn" onClick={()=>result.resultDispatch(3)}>3</button>
           </div>
           <div className="first-line">
             <button className="btn" onClick={()=>result.resultDispatch(4)}>4</button>
             <button className="btn" onClick={()=>result.resultDispatch(5)}>5</button>
             <button className="btn" onClick={()=>result.resultDispatch(6)}>6</button>
           </div>
           <div className="first-line">
             <button className="btn" onClick={()=>result.resultDispatch(7)}>7</button>
             <button className="btn" onClick={()=>result.resultDispatch(8)}>8</button>
             <button className="btn" onClick={()=>result.resultDispatch(9)}>9</button>
           </div>
           <div className="first-line">
            <button className="btn" onClick={()=>result.resultDispatch(0)}>0</button>
            <button className="btn" onClick={()=>result.resultDispatch("cancel")}>C</button>
           </div>
           <div className="first-line">
             <button className="btn" onClick={()=>result.resultDispatch("plus")}>+</button>
             <button className="btn" onClick={()=>result.resultDispatch("minus")}>-</button>
             <button className="btn" onClick={()=>result.resultDispatch("multiply")}>*</button>
           </div>
           <div className="first-line">
             <button className="btn" onClick={()=>result.resultDispatch("divide")}>%</button>
             <button className="btn" onClick={()=>result.resultDispatch("result")}>=</button>
             <button className="btn" onClick={()=>result.resultDispatch("reset")}>Reset</button>
           </div>
            
        </div>
    )
}
