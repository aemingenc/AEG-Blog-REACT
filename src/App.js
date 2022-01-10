

import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './routers/Router';


function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider> */}

      <AppRouter/>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
