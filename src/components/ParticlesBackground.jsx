import React, { useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three"; // Ensure you import THREE

const ParticlesBackground = () => {
  const vantaRef = useRef(null); // Reference to store the Vanta instance

  useEffect(() => {
    // Initialize Vanta effect
    vantaRef.current = GLOBE({
      el: "#vanta",
      THREE: THREE, // Pass THREE to Vanta
      color: 0x07c1eb,
      backgroundColor: 0x000000,
      mouseControls: false, //
      scaleMobile: 1.0,
    });
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <div
      className="particles-background"
      id="vanta"
      style={{ position: "absolute", width: "100%", height: "100vh" }}
    >
      {/* Additional content can go here */}
    </div>
  );
};

export default ParticlesBackground;
