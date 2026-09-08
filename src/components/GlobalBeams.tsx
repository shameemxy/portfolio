'use client';

import React from 'react';
import Beams from './Beams';

interface GlobalBeamsProps {
  lightMode?: boolean;
}

export const GlobalBeams: React.FC<GlobalBeamsProps> = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
        beamColor="#000000"
        backgroundColor="#000000"
        lightMode={false}
      />
    </div>
  );
};
