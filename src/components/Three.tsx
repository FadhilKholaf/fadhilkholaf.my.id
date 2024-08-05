import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ASCII, EffectComposer } from '@react-three/postprocessing';

export default function Three() {
  return (
    <section className="fixed left-0 top-0 -z-20 hidden h-screen w-screen lg:block">
      <Canvas performance={{ max: 0.1 }}>
        <PerspectiveCamera makeDefault position={[2, 1.5, 0]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableDamping={false}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <mesh scale={1}>
          <icosahedronGeometry args={[1, 2]} />
          <meshNormalMaterial />
        </mesh>
        <EffectComposer>
          <ASCII
            characters=" .:*-+'!@#$%^&TRISNAmahasiwi"
            color="#F5F5F5"
            fontSize={40}
          />
        </EffectComposer>
      </Canvas>
    </section>
  );
}
