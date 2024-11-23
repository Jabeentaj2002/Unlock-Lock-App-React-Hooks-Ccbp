// Write your code here
import {useState} from 'react'

import {
  UnclockContainer,
  LockImg,
  LockStatusText,
  LockButton,
  LockAndTextContainer,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLock] = useState(false)

  const lockImage = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = lockStatus ? 'unlock' : 'lock'

  const lockStatusText = lockStatus
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const LockBtnText = lockStatus ? 'Lock' : 'Unlock'


  const onToggleLock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <UnclockContainer>
      <LockAndTextContainer>
        <LockImg src={lockImage} alt={altText}></LockImg>
        <LockStatusText>{lockStatusText}</LockStatusText>
      </LockAndTextContainer>
      <LockButton onClick={onToggleLock}>{LockBtnText}</LockButton>
    </UnclockContainer>
  )
}

export default Unlock
