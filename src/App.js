import React, { useCallback } from "react";
import Home from "./components/home/index";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"


function App() {
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <div
      style={{
        backgroundColor: "#d8f9ff",
      }}
    >
      <Particles options={{
        particles: {
          color: {
            value: "#bebebe"
          },
          number: {
            value: 100
          },
          opacity: {
            value: { min: 0.3, max: 1 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          },
          move: {
            direction: "bottom-right",
            enable: true,
            speed: { min: 3, max: 5 },
            straight: true
          }
        }
      }} init={init} />
      <Home />
    </div >
  );
}

export default App
