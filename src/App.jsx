import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <>
      <h1>Sign Up for the Hackathon</h1>
      <div className="form">
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {/* Add more input fields as necessary */}
        <button onClick={() => alert(`Signed up: ${name}, ${email}`)}>
          Submit
        </button>
      </div>
    </>
  )
}

export default App
