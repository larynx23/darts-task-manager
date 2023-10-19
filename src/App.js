import './App.css';
import { useEffect } from 'react';
import { Store } from './storage_service/idb_service';
import { SetupDBData } from './storage_service/setup_data';


function App() {
  useEffect(() => {
    Store.init();
    SetupDBData.init();
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
