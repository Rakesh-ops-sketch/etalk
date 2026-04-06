"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

/** Subtle branded shape for demos or hero accents — tune materials per page. */
function GoldIcosahedron() {
  const meshRef = useRef<Mesh>(null);
  const reduceMotion = usePrefersReducedMotion();

  useFrame((_state, delta) => {
    if (reduceMotion) return;
    const m = meshRef.current;
    if (!m) return;
    m.rotation.x += delta * 0.12;
    m.rotation.y += delta * 0.18;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#d4af37"
        metalness={0.55}
        roughness={0.28}
        emissive="#5c4a10"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

export default function ThreeSceneInner({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ touchAction: "none" }}
      role="img"
      aria-label="Decorative 3D accent"
    >
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 4]} intensity={1.1} />
        <pointLight position={[-3, -2, 3]} intensity={0.35} color="#fcf6ba" />
        <GoldIcosahedron />
      </Canvas>
    </div>
  );
}
