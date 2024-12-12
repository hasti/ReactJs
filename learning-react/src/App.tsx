import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [ alertVisible, setAlertVisibility] = useState (false);
  const [ counter, setCounter] = useState(3);
 


  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    

  }

  return (
    <>
      Counter Value: {counter} <br />
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>}
      <Button color="primary" onClick={() => increment()}>Add Value</Button>
       <Button color="secondary" onClick={() => decrement()}>Subtract Value</Button>
     <Button color="info" onClick={() => setAlertVisibility(true)}>Hello</Button></>
  );
}

export default App;