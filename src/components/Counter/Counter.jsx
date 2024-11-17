import { useState } from 'react'

function Counter() {

 let [counter , setCounter ]= useState(0)

 let [inputValue , SetInput] = useState("Kashan");
 
  //let counter = 5

  const  addValue = () => {
  if(counter < 22) {
    counter = counter + 1
    setCounter(counter)
  }
  }
    

  const removeValue = () => {
    if (counter > 0){
      counter = counter - 1 
      setCounter(counter)
    }

  }
    //    const onChange = (event) =>{
    //     const changevalue = event.target.value;
    //     SetInput(changevalue)
    //     console.log(changevalue)


//   }


  return (
    <>
    {/* {/* <h1>Hooks</h1>
    <h1>{inputValue}</h1>*/}
    <h2>Counter {counter}</h2>  

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>


    {/* <div>
      <input type="text" value ={inputValue}  placeholder=''  onChange={onChange} />
    </div>  */}
</>
  )
}

export default Counter
