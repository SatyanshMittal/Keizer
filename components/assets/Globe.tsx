
  'use client'

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function App() {
  const canvasRef = useRef(null); // Initialize with null

  useEffect(() => {
    let phi = 0;

    // Check if canvasRef is not null before using it
    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 1200 * 2,
        height: 1200 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [0.7, 0.7, 0.7],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 }
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        }
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <div  className="flex justify-center items-center">
    
     
      <canvas
        ref={canvasRef}
        style={{ width: 1100, height: 1100, aspectRatio: 1 }}
      />
    </div>
  );
}