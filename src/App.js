import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './components/Header/Header';

const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
};

export default App;
