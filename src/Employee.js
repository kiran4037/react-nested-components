import React from 'react';
import Address from './Address';
export default function Employee(){
  //state: data inside the variables
  let id="101";
  let name="deepak";
  //useState()=>Used to change the state
  return (
      <div id="c1">
        <h4>Employee component</h4>
        <p>
          
          {id},{name}
        </p>
        <Address/>
      </div>
  )
}
