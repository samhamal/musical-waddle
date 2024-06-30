import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AgeCheck() {
  const [user, setUser] = useState({name: '', age: 0})
  
  const inputChanged = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const formSubmitted = (event) => {
    if(Number(user.age) >= 18) {
      alert(`Hello ${user.name}`);
    } else {
      alert("You are too young");
    }
    event.preventDefault();
  }

  return (
    <>
    {/* <p>Name: {user.firstname} {user.lastname} Email: {user.email}</p> */}
    <form onSubmit={formSubmitted}>
      <input placeholder="Name" name="name" value={user.name} onChange={inputChanged} />
      <input placeholder="age" name="age" value={user.age} onChange={inputChanged} />
      <input type="submit" value="Check age" />
      </form>
    </>
  )
}

export default AgeCheck
