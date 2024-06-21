import {Canvas} from '@react-three/fiber'
import {useState, Suspense, useEffect} from "react";
import Loader from "./Loader.jsx";
import MyModel from "./models/MyModel.jsx";

const AboutMesh = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.25, 5.8, 0];

        if (window.innerWidth <= 1020) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth < 1064) {
            screenScale = [1, 1, 1];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1152) {
            screenScale = [1.3, 1.3, 1.3];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1280) {
            screenScale = [1.4, 1.4, 1.4];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1366) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1480) {
            screenScale = [2, 2, 2];
            screenPosition = [0, 0, -0.5];
        } else if (window.innerWidth <= 1680) {
            screenScale = [1.6, 1.6, 1.6];
            screenPosition = [0, 0, -0.5];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, 0, -5];
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
                    <MyModel
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
export default AboutMesh;
