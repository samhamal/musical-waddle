import { useState, useEffect } from 'react'
import './App.css'

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(resData => setUsers(resData.data))
    .catch(err => console.error(err))
  }, []);

  return (
    <>
    <table>
        <tbody>
        {
          users.map((user) => 
           <tr key={user.id}>
             <td>{user.first_name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
             <img src={user.avatar}></img>
           </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default UserList
