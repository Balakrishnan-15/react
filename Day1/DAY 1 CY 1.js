import React from 'react';
const app2=()=>{
  const name1="Bala";
  const name2="Bala";
  const obj1={name:"Bala"}
  const obj2={name:"Bala"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const App=()=>{
  return(
    <div>
      <button onClick={app2}>Click</button>
      {/*<p>This is World Functional Component</p>*/}
    </div>
  )
 }


export default App;
