import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';


const App = () => {
  const [username, setUsername] = useState('')

  const handleChangeUsername = (newName: string) : void => {    
    setUsername(newName);
  }

  return (
    <div className='app'>
      <PlayerCard 
        username={username}
        handleChangeUsername={handleChangeUsername}
      />
    </div>
  );
}

export default App;
