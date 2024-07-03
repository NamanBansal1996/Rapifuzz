import React, { useState } from 'react';
import './interview.css'

export default function Interview() {

    const[isColourChanged, SetColorChanged] = useState({bordercolor:'red'});
    const[isPasswordChecked, SetisPasswordChecked]= useState("");
    const[showPassword , setShowPaswword]= useState(false)
    

    function passwordShown(){
      setShowPaswword(true);
    }

 function scorechecked(e){
    // for(let i=0;i<password.length; i++)
    //     {
    //         if( password.length>8){
    //             count++
    //         }
        
    // }
    let new_pass = e.target.value;
    SetisPasswordChecked(new_pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
       SetisPasswordChecked("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
       SetisPasswordChecked("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
       SetisPasswordChecked("Password should contains numbers also!");
    } else if (new_pass.length < 10) {
       SetisPasswordChecked("Password length should be more than 10.");
    } else {
       SetisPasswordChecked("Password is strong!"); 
    }
 }
 
    

    // function colorChanged(){
    //     scorechecked();

    //     score>5?SetColorChanged ("green") ?SetColorChanged("orange") :SetColorChanged("red") }
        
  return (
    <div>
      <input type={showPassword?'text':'password'}  name="passwd" onChange={scorechecked} value={isPasswordChecked}
       
      
       style={{isColourChanged}}/>
      <label >Show password </label>
      <input type='checkbox' onClick={setShowPaswword} name='checkbox'/>
    </div>
  )
}
