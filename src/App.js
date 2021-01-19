import './App.css';
import { StartScreen } from './Components/StartScreen';
import { useState } from 'react';
import { GameScreen } from './Components/GameScreen';

function App() {

const [game, setGame] = useState('gamephase1');

const start = () => {
  setGame('gamephase2');
}

return (
<div>
{
game === 'gamephase1' ? <StartScreen func={start}/> : <GameScreen />
}
</div>
);
}

export default App;