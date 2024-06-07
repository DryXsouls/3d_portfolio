import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";

import GmailModel from "./models/Gmail.jsx";

const GmailContactMesh = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0,-6.5,-43];
        let rotation = [0.25,0,0]

        if(window.innerWidth <768){
            screenScale = [1, 1, 1];
            screenPosition = [0,-1, -0.5];
        }
        if(window.innerWidth <431) {
            screenScale = [1, 1, 1];
            screenPosition = [0, -1, -0.5];
        }
        else {
            screenScale = [0.25,0.25,0.25];
            screenPosition = [0,-1,-2.5];
        }
        return [screenScale,screenPosition, rotation];
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

                    <GmailModel
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
export default GmailContactMesh;