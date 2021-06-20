import React, { useState } from 'react';
import './Calc.css';
function App(){
    const [num, setNum] =  useState("");
    const numChange=(event)=>{
        // console.log(event);
        setNum(num+event.target.name);
    }
    function result(){
        setNum(eval(num));
    }
    function Clear(){
        setNum("");
    }
    function TClear(){
        setNum(num.toString().slice(0,-1));
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>Calculator</h1>
                    <br/>
                    <p className="box" type= "text" value={num}>{num}</p>
                    <button name ="1"  onClick={numChange} >1</button>
                    <button name ="2" onClick={numChange}>2</button>
                    <button name ="3" onClick={numChange}>3</button>
                    <button name ="4" onClick={numChange}>4</button>
                    <button name ="5" onClick={numChange}>5</button>
                    <button name ="6" onClick={numChange}>6</button>
                    <button name ="7" onClick={numChange}>7</button>
                    <button name ="8" onClick={numChange}>8</button>
                    <button name ="9" onClick={numChange}>9</button>
                    <button name ="0" onClick={numChange}>0</button>
                    <button name ="+" onClick={numChange}>+</button>
                    <button name ="-" onClick={numChange}>-</button>
                    <button name ="/" onClick={numChange}>/</button>
                    <button name ="*" onClick={numChange}>*</button>
                    <button onClick={TClear}>CE</button>
                    <button onClick={Clear}>C</button>
                    <button onClick={result}>=</button>
                </div>
            </div>
        </>
    )
}

export default App;