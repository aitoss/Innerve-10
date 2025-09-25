import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import groupImage from "../assets/Logo.png"; // Texture image

const Sphere = ({ position, args }) => {
  const ref = useRef();
  const texture = new TextureLoader().load(groupImage); // Load texture
  const [isHovered, setIsHovered] = useState(false);
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Enable repeating

//   texture.repeat.set(1, 1)
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * (isHovered ? 0.5 : 0.2); // Negative for clockwise rotation
  });

  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={true} rotateSpeed={0.5} autoRotate />
      <group>
        <mesh
          position={position}
          ref={ref}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <sphereGeometry args={args} />
          <meshStandardMaterial
            map={texture}
            side={THREE.FrontSide} // Ensure correct face orientation
          />
        </mesh>
      </group>
    </>
  );
};

export default Sphere;
