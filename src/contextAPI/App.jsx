import React from 'react';
import { createContext } from 'react';
import ComponetA from './ComponetA';

const Fname = createContext();
const Lname = createContext();

function App(){
    return(
        <>
            <Fname.Provider value={"Dezy"}>
                <Lname.Provider value={"Mohanty"}>
              <ComponetA/>
            </Lname.Provider>
            </Fname.Provider>
                
        </>
    );
}
export default App;
export {Fname,Lname};