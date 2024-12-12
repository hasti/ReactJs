import { 
  useState, 
  useCallback,
  useEffect,
  useRef,
} from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState('')
 // use ref hook to store the password input
  const passwordRef = useRef<HTMLInputElement>(null)

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  },[password])

 const passwordGenerator = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    const number = "0123456789"
    const special = "!@#$%^&*()_+"
    if (numberAllowed) characters += number
    if (specialAllowed) characters += special

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length + 1)
      pass += characters.charAt(randomIndex)
    }

    setPassword(pass)

  }, [length, numberAllowed, specialAllowed, setPassword])

 

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadown-md rounded-lg py-5 px-5 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center font-bold mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            className='outline-none w-full py-1 px-3'
            value={password}
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(Number(e.target.value))}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            id='numbersId'
            checked={numberAllowed}
            onChange={() => {setNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor='numbersId'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            id='specialId'
            checked={specialAllowed}
            onChange={() => {setSpecialAllowed((prev) => !prev)}}
          />
          <label htmlFor='specialId'>Characters</label>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
