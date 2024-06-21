import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";
import TelephoneModel from "./models/Telephone.jsx";


const ContactTelephoneMesh = (modelName) => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.25,5.2,0];


        if (window.innerWidth <= 1000) {
            screenScale = [1.75, 1.75, 1.75];
            screenPosition = [0, 0, -0.5];

        } else if (window.innerWidth <= 1024) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, 0, 0];
        } else if (window.innerWidth <= 1280) {
            screenScale = [1.13, 1.13, 1.13];
            screenPosition = [0, 0, 0];
        } else if (window.innerWidth <= 1366) {
            screenScale = [1.2, 1.2, 1.2];
            screenPosition = [0, 0, 0];
        } else if (window.innerWidth <= 1600) {
            screenScale = [1.35, 1.35, 1.35];
            screenPosition = [0, 0, 0];
        } else {
            screenScale = [1.5,1.5,1.5];
            screenPosition = [0, 0, 0];
        }

        return [screenScale, screenPosition, rotation];
    }
    const [meshScale, meshPosition, meshRotation] = adjustMeshForScreenSize();

    return(
        <section className='w-full h-full relative'>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{near:0.1, far:1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight
                        position={[10,10,1]}
                        intensity={1}
                    />
                    <ambientLight
                        intensity={1.5}
                    />
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={5}
                    />
                    <TelephoneModel
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
export default ContactTelephoneMesh;