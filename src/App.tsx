import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Header from "./components/header";
import CounterComponent from "./components/counter-component";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CounterComponent />
    </>
  );
}

export default App
