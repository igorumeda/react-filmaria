import React from 'react';
import './styles.css';
import Rotas from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app'>
      <Rotas/>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
