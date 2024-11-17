import { useCallback, useState , useEffect, useRef } from 'react'

function Passwordenerator() {
  const [length , setLength] = useState(8)
  const [checkNumber , setChecknumber] = useState(false)
  const [checkChar , setCheckchar] = useState(false)
  const [password , setPassword] = useState("")


  //use ref hook
  const passwordRef = useRef(null) 

  const copypassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (checkNumber) str += "0123456789";
    if (checkChar) str += "?!@#$%^&*(){}~";

    for (let i = 1; i <= length; i++) {
        const charIndex = Math.floor(Math.random() * str.length); // Fixes the index issue
        pass += str.charAt(charIndex); // Append each character to pass
    }

    console.log(pass); // Replace debug.log with console.log
    setPassword(pass); // Sets the generated password
}, [length, checkNumber, checkChar, setPassword]);


  useEffect(() =>{
  passwordGenerator()
  },[length , checkNumber , checkChar , passwordGenerator])




  return (
    <>
  
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-40  text-orange-700  bg-gray-800'>

    <h1 className="text-center  text-white">Password Generator</h1>

      <div className="flex shadow-md rounded-lg overflow-hidden mb-4 ">
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copypassword}
        className='outline-none bg-blue-500 text-white py-2  shrink-0'
        >
        copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 text-white '>
          <input 
  
          type="range" 
          min={6} 
          max= {100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength (e.target.value)}} />
          <label>Length: {length}</label> 
        </div>
    
      <div className="flex items-center gap-x-1 text-white">
        <input type="checkbox"
        defaultChecked={checkNumber}
        id="numberInput"
        onChange={()=> {
          setChecknumber((prev) => !prev);
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1 text-white">
        <input type="checkbox"
        defaultChecked={checkChar}
        id="charInput"
        onChange={()=> {
          setCheckchar((prev) => !prev);
        }} />
        <label htmlFor="charInput">Characters</label>
      </div>



      </div>
    </div>
    </>
  )
}

export default Passwordenerator
