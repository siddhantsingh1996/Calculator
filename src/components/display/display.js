import React, {useContext} from 'react'
import "./display.css";
import {  UserContext} from '../../App';

export default function Display() {
    const result = useContext(UserContext)
    return (
        <>
          <input className="input-tag" value={result.displayState}>
          </input>  
        </>
    )
}
