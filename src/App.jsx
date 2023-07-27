import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  // console.log('puppyList: ', puppyList)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  // console.log('featured pup: ',featuredPup)

  return (
    <>
      <div className='app'>
        {
          <div className='pupDiv'>
          {
          puppies.map((puppy) => {
            return <p className='pupName' onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            })
          }
          </div>
        }
        {
        featPupId && (
          <div className='pupCard'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              <li> <img src={featuredPup.photo} /> </li>
            </ul>
          </div>
        )
        }
        
      </div>
    </>
  )
}

export default App
