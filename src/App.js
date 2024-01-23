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
            value: { min: 0.3, max: 0.9 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 4 }
          },
          move: {
            direction: "bottom-right",
            enable: true,
            speed: { min: 3, max: 5 },
            straight: false
          },
          collisions: { 
            enable: false 
          }
        }
      }} init={initParticles} />)}
      <Home />
    </div >
  );
}

export default App
