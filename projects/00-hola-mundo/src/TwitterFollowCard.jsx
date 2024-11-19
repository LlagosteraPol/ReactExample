import { useState } from 'react'

export function TwitterFollowCard ({formatUserName, userName, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  /*
  // Previous line is the same as the following 3 lines
  const state = useState(false) //default value: this returns an array of two values (state value, how to update the value)
  const isFollowing = state[0] // we name the positions
  const setIsFollowing = state[1]
  */
	const imageSrc = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

 const handleClick = () => {
    setIsFollowing(!isFollowing)
 }

  return(
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img 
				className='tw-followCard-avatar'
				alt="El avatar de midudev" 
				src={imageSrc} />
				<div className='tw-followCard-info'>
				<strong>{name}</strong>
				<span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
				</div>
			</header>
			<aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
			</aside>
		</article>
	)
}