import {Canvas} from '@react-three/fiber'
import {useState, Suspense, useEffect} from "react";
import Loader from "./Loader.jsx";
import NissanGTR from "./models/hobby/CarHobby.jsx";

const HeroMesh = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.25, 5.8, 0];

        if (window.innerWidth <= 1020) {
            screenScale = [0.28, 0.28, 0.28];
            screenPosition = [0, -1, -0.5];
        } else if (window.innerWidth < 1064) {
            screenScale = [0.35, 0.35, 0.35];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1152) {
            screenScale = [0.4, 0.4, 0.4];
            screenPosition = [0, -1, -0.5];
        } else if (window.innerWidth <= 1280) {
            screenScale = [0.42, 0.42, 0.42];
            screenPosition = [0, -1, -0.5];
        } else if (window.innerWidth <= 1366) {
            screenScale = [0.46, 0.46, 0.46];
            screenPosition = [0, -1, -0.5];
        } else if (window.innerWidth <= 1480) {
            screenScale = [0.48, 0.48, 0.48];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1680) {
            screenScale = [0.48, 0.48, 0.48];
            screenPosition = [0, -1, -0.5];
        }  else {
            screenScale = [1, 1, 1];
            screenPosition = [0, 0, -6];
        }

        return [screenScale, screenPosition, rotation];
    }
    const [meshScale, meshPosition, meshRotation] = adjustMeshForScreenSize();
    return(
        <section className='w-full h-screen relative'>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near:0.1, far:1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight
                        position={[10,10,1]}
                        intensity={5}
                    />
                    <ambientLight
                        intensity={0.5}
                    />
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={5}
                    />
                    <NissanGTR
                        position={meshPosition}
                        scale={meshScale}
                        rotation={meshRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}
export default HeroMesh;
