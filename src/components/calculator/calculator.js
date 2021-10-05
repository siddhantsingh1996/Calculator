import React from 'react'
import './calculator.css';
import Display from"../display/display";
import Keypad  from '../keypad/Keypad';

export default function Calculator() {
    return (
        <div className="calcy-card">
           <Display/> 
           <Keypad/>
        </div>
    )
}
