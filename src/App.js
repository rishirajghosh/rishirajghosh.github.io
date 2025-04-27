import React, { useEffect, useCallback, useState } from "react";
import Home from "./components/home/index";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function App() {
  const [startParticles, setStartParticles] = useState(false);

  const initParticles = useCallback(async (engine) => {
    await loadFull(engine)
  }, []);

  useEffect(() => {
    // Delay starting particles by 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setStartParticles(true);
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ backgroundColor: "#d8f9ff", }}>
      {startParticles && (<Particles options={{
        particles: {
          color: {
            value: "#bebebe"
          },
          number: {
            value: window.innerWidth >= 768 ? 80 : 20
          },
          opacity: {
            value: { min: 0.1, max: 0.8 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          },
          move: {
            direction: "top",
            enable: true,
            speed: { min: 2, max: 3 },
            straight: false
          },
          collisions: { 
            enable: true 
          }
        }
      }} init={initParticles} />)}
      <Home />
    </div >
  );
}

export default App
