import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default App;
