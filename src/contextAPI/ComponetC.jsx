import React from 'react';
import { Fname, Lname } from './App';


function ComponetA() {
    return (
        <>
            <Fname.Consumer>
                {(firstname) => {
                    return (
                        <Lname.Consumer>
                            {(lastname) => {
                                return <h1>My Name is {firstname} {lastname}</h1>
                            }}
                        </Lname.Consumer>
                    )
                }}
            </Fname.Consumer>



        </>
    );
}
export default ComponetA;