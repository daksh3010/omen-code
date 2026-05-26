
import './App.css'
import {Show, SignInButton, SignOutButton, UserButton } from '@clerk/react'

function App() {
  

  return (
    <>
     <h1>Welcome to the App</h1>

      <Show when="signed-out">
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </Show>
        
      <Show when="signed-in">
        <SignOutButton>
          <button>Sign Out</button>
        </SignOutButton>

      </Show>
        
      

      <UserButton />
     
    </>
  )
}

export default App
