import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

import './App.css';

function App() {
  const company = window.location.hostname
  console.log("comp ", company)
  const { loginWithRedirect } = useAuth0();

  const [apiResult, setApiResult] = useState()
  useEffect(() => {
    axios.get(`https://58e19b48-9800-417b-a391-e30c7d189ff6.mock.pstmn.io/api/v1/org/byurl/${company}`)
      .then(res => {
        const data = res.data;
        console.log("data:", data)
        setApiResult({ data });
      });
      loginWithRedirect()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>YOLOOO</h1>
      </header>
    </div>
  );
}

export default App;
