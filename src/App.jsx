import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({firstname: '', lastname: '', email: '', phone: ''});

  const inputChanged = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const formSubmitted = (event) => {
    var missing = false;
    if(user.firstname.length == 0) missing = true;
    if(user.lastname.length == 0) missing = true;
    if(user.email.length == 0) missing = true;
    if(user.phone.length == 0) missing = true;

    if(missing) alert("All fields are required");
    else alert(`Welcome ${user.firstname} ${user.lastname}`);
    event.preventDefault();
  }

  return (
    <>
    {/* <p>Name: {user.firstname} {user.lastname} Email: {user.email}</p> */}
    <form onSubmit={formSubmitted}>
      <input placeholder="First name" name="firstname" value={user.firstname} onChange={inputChanged} />
      <br /><input placeholder="Last name" name="lastname" value={user.lastname} onChange={inputChanged} />
      <br /><input placeholder="Email" name="email" value={user.email} onChange={inputChanged} />
      <br /><input placeholder="Phone" name="phone" value={user.phone} onChange={inputChanged} />
      <br /><input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
