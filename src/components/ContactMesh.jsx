import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";
import LinkedInModel from "./models/LinkedIn.jsx";
import GmailModel from "./models/Gmail.jsx";
import MyNumberModel from "./models/MyNumber.jsx";


const ContactMesh = (modelName) => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenScale2 = null;
        let screenPosition = [0, -6.5, -43];
        let screenPosition2 = [0, -6.5, -43];

        let rotation = [0.25,0.25,0];

        if (window.innerWidth <= 1024) {
            screenScale = [0.13, 0.15, 0.13];
            screenScale2 = [0.45, 0.45, 0.45];
            screenPosition = [0,1,-1];
            screenPosition2 = [0,-1,-1];
        } else if (window.innerWidth <= 1280) {
            screenScale = [0.15, 0.17, 0.15];
            screenScale2 = [0.55, 0.55, 0.55];
            screenPosition = [0,1,-1];
            screenPosition2 = [0,-1,-1];
        } else if (window.innerWidth <= 1366) {
            screenScale = [0.155, 0.18, 0.155];
            screenScale2 = [0.56, 0.56, 0.56];
            screenPosition = [0,1,-1];
            screenPosition2 = [0,-1,-1];
        } else if (window.innerWidth <= 1600) {
            screenScale = [0.16, 0.19, 0.16];
            screenScale2 = [0.6, 0.6, 0.6];
            screenPosition = [0,1,-1];
            screenPosition2 = [0,-1,-1];
        } else {
            screenScale = [0.17,0.17,0.17];
            screenScale2 = [0.7,0.7,0.7];
            screenPosition = [0,1,-1];
            screenPosition2 = [0,-1,-1];
        }

        return [screenScale, screenPosition, rotation, screenScale2, screenPosition2];
    }
    const [mesh1Scale, mesh1Position, mesh1Rotation, mesh2Scale, mesh2Position] = adjustMeshForScreenSize();


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
                        position={mesh1Position}
                        scale={mesh1Scale}
                        rotation={mesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <MyNumberModel
                        position={mesh2Position}
                        scale={mesh2Scale}
                        rotation={mesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}
export default ContactMesh;