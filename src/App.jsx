import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
   

 
 let [length, setLength] = useState(8)
 let [nums, setNums] = useState(false)
 let [chars, setChars] = useState(false)
 let [passd, setPassd] = useState("")

 let passGen = useCallback(()=>{
  let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(nums) str += "1234567890"
  if(chars) str += "!@#$%^&*()_+{}|:"
  
  for (let i = 1; i < length; i++) {
    const char = Math.round(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }
   setPassd(pass)
 }, [length, nums, chars, setPassd])

useEffect(()=>{
passGen()
}, [length, nums, chars, passGen])
let passref = useRef(null)
let cptoclip = useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(passd)
}, [passd])
  return (
     <div className='flex items-center justify-center'>
    <div className=' m-50 h-50 h w-55 bg-gray-700'>
      <input 
      type="text"
      value={passd}
      className='bg-amber-700 '
      ref={passref}
      readOnly
      />
      <button onClick={cptoclip} className='bg-blue-600 hover:bg-amber-500'>Copy</button>
      <input type="range" min={6} max={50} value={length} onChange={(e)=>(setLength(e.target.value))}/>
      <label>Length {length}</label><br />
      <input checked={nums} type="checkbox" onChange={()=>{setNums((prev)  => !prev)}}/>
      <label>Numbers</label><br/>
      <input checked={chars} type="checkbox" onChange={()=>{setChars((prev)  => !prev)}}/>
      <label>Characters</label>
    </div>
    </div>
  )
}

export default App
