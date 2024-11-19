import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    isFollowing: true
  }
]



export function App() {
  const format = (userName) => `@${userName}`
  return (
    //<> </> same as <React.Fragment> </React.Fragment>
    <section className="App">
      { // this is vanilla javascript
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName} //always use a unique key when renderizing multiple components to identify them (for default React uses 'index' but is not the best practices)
              formatUserName={format}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
  )
}

export default App
