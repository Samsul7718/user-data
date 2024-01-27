import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm';
import ReactJson from 'react-json-view';

function App() {
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <UserForm setFormData={setFormData} />
      <ReactJson src={formData} theme="monokai" />
    </div>
  );
}

export default App;
