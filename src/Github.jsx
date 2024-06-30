import { useState, useEffect } from 'react'
import './App.css'

function Github() {
  const [repos, setRepos] = useState([])
  const [repoName, setRepoName] = useState('react');


  const fetchRepos = () => {
    fetch('https://api.github.com/search/repositories?q='+repoName)
    .then(response => response.json())
    .then(resData => setRepos(resData.items))
    .catch(err => console.error(err))
  }

  const inputChanged = (event) => {
    setRepoName(event.target.value);
  }

  useEffect(fetchRepos, []); 

  return (
    <>
    <h2>Repositories</h2>
    <input placeholder="react" name="repoName" value={repoName} onChange={inputChanged} />
    <button onClick={fetchRepos}>Search</button>

    <table>
        <tbody>
        <tr>
            <th>Name</th>
            <th>URL</th>
        </tr>
        {
          repos.map((repo) => 
           <tr key={repo.id}>
             <td>{repo.full_name}</td>
             <td><a href={repo.html_url}>{repo.html_url}</a></td>
           </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default Github
