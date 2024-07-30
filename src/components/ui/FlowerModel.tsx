import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Sphere003: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    Plane005_2: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane008_1: THREE.Mesh;
    Plane008_2: THREE.Mesh;
    Plane009_1: THREE.Mesh;
    Plane009_2: THREE.Mesh;
    Plane010_1: THREE.Mesh;
    Plane010_2: THREE.Mesh;
    Plane011_1: THREE.Mesh;
    Plane011_2: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane012_1: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane011: THREE.Mesh;
    Vert001: THREE.Mesh;
    Vert002: THREE.Mesh;
    Vert003: THREE.Mesh;
  };
  materials: {
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | 'Empty|Empty|EmptyAction.001'
  | 'Plane.013|Plane.013|EmptyAction.001';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function FlowerModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF('/flower.glb') as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty">
          <group name="Empty001" position={[9.321, 0, 0]} />
          <mesh
            name="Sphere003"
            geometry={nodes.Sphere003.geometry}
            material={materials['Material.007']}
            position={[0.671, 3.301, 0.648]}
            rotation={[Math.PI, -1.247, Math.PI]}
            scale={1.422}
          />
        </group>
        <group name="Plane013" position={[0, 1.677, 0]} />
        <group name="Plane" rotation={[-0.12, -0.032, -0.097]}>
          <mesh
            name="Plane005_1"
            geometry={nodes.Plane005_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane005_2"
            geometry={nodes.Plane005_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials['Material.003']}
          position={[0, -0.205, 0]}
          rotation={[-0.107, -0.33, -0.02]}
          scale={1.489}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials['Material.002']}
          position={[0, -0.292, 0]}
          rotation={[-0.437, 0.605, 0.24]}
          scale={[1.016, 1.902, 1.016]}
        />
        <group name="Plane003" rotation={[0.037, -0.983, -0.068]}>
          <mesh
            name="Plane008_1"
            geometry={nodes.Plane008_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane008_2"
            geometry={nodes.Plane008_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group name="Plane004" rotation={[2.908, -0.889, 2.958]}>
          <mesh
            name="Plane009_1"
            geometry={nodes.Plane009_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane009_2"
            geometry={nodes.Plane009_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group name="Plane005" rotation={[-3.036, 0.022, 2.97]}>
          <mesh
            name="Plane010_1"
            geometry={nodes.Plane010_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane010_2"
            geometry={nodes.Plane010_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group name="Plane006" rotation={[-3.019, 0.976, 2.927]}>
          <mesh
            name="Plane011_1"
            geometry={nodes.Plane011_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane011_2"
            geometry={nodes.Plane011_2.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group name="Plane007" rotation={[0.223, 0.987, -0.171]}>
          <mesh
            name="Plane012"
            geometry={nodes.Plane012.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane012_1"
            geometry={nodes.Plane012_1.geometry}
            material={materials['Material.005']}
          />
        </group>
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials['Material.003']}
          position={[0, -0.205, 0]}
          rotation={[3.123, -0.517, 3.007]}
          scale={1.489}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials['Material.003']}
          position={[0, -0.205, 0]}
          rotation={[-0.773, 1.36, 0.874]}
          scale={1.489}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={materials['Material.002']}
          position={[0, -0.292, 0]}
          rotation={[-1.237, -1.245, -1.17]}
          scale={[1.016, 1.902, 1.016]}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={materials['Material.002']}
          position={[0, -0.292, 0]}
          rotation={[-2.543, 0.898, 2.655]}
          scale={[1.016, 1.902, 1.016]}
        />
        <mesh
          name="Vert001"
          geometry={nodes.Vert001.geometry}
          material={materials['Material.001']}
          rotation={[3.078, -0.161, 3.062]}
        />
        <mesh
          name="Vert002"
          geometry={nodes.Vert002.geometry}
          material={materials['Material.001']}
          rotation={[-0.093, -0.023, 0.041]}
        />
        <mesh
          name="Vert003"
          geometry={nodes.Vert003.geometry}
          material={materials['Material.001']}
          rotation={[-3.103, -0.156, -3.083]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/flower.glb');
