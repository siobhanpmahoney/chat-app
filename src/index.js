import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ActionCableProvider} from 'react-actioncable-provider';

<<<<<<< HEAD
ReactDOM.render(
  <ActionCableProvider url={'ws://localhost:3000/cable'}>
    <App />
  </ActionCableProvider>
  , document.getElementById('root'));
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> a20abf5519ce5d8c6f9f66a737f05931d140985d
registerServiceWorker();
