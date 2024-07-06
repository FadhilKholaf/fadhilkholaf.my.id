import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FlowerModel } from './ui/FlowerModel';
import { ASCII, EffectComposer } from '@react-three/postprocessing';

export default function Flower() {
  return (
    <section
      className="fixed left-0 top-0 -z-20 h-screen w-screen"
      data-scroll
      data-scroll-speed="0.3"
    >
      <Canvas performance={{ max: 0.1 }}>
        <PerspectiveCamera makeDefault position={[3, 1, 0]} />
        <ambientLight intensity={3} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableDamping={false}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <FlowerModel position={[0, -1.5, 0]} scale={[0.7, 0.7, 0.7]} />
        <EffectComposer>
          <ASCII color="#F5F5F5" characters=" 10*#;" />
        </EffectComposer>
      </Canvas>
    </section>
  );
}
