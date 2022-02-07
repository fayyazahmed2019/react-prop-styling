import React from 'react';


const Check =(prop) =>{

let name = "fayyaz ahmed"

const check=() =>{

let echeck = document.getElementById("echeck").value;
console.log(echeck)

if (echeck === "fayyaz"){
    alert("success")
}else{
    alert("failed")
}

}

return (
<> 
<input type="text" placeholder="type name" id="echeck"></input>
<button onClick={check}>click me</button>

<h1>Prop {prop.name}</h1>
<h1>Prop {prop.class}</h1>
<h1>Prop {name}</h1>


</>    

)

}


export default Check;