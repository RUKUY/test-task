import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import { PlayerChangeNameForm } from './components/Player/PlayerChangeNameForm';


const App = () => {
  const [username, setUsername] = useState('')
  const [isNameEditing, setIsNameEditing] = useState(true)

  const handleChangeUsername = (newName: string) : void => {    
    setUsername(newName);
  }

  return (
    <div className='app'>
      { 
        (isNameEditing || !username) ? (
          <PlayerChangeNameForm 
            handleChangeUsername={handleChangeUsername}
            setIsNameEditing={setIsNameEditing}
          />
        ) : (
          <PlayerCard 
            username={username}
            handleChangeUsername={handleChangeUsername}
            setIsNameEditing={setIsNameEditing}
          />
        ) 
      }
    </div>
  );
}

export default App;
