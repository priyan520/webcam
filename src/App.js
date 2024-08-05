import logo from './logo.svg';
import './App.css';
//import React from 'react';
import Webcam from 'react-webcam';
import { useRef } from 'react';

function App() {

  const webref = useRef();

  return (
    <>
      <Webcam ref={webref}  audio={true} mirrored={true} style={{height: "500px", width: "650px" , margin: "0px auto"}} />

    </>
  )

}

export default App;
