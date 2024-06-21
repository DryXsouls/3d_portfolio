import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";

import AIllustrator from "./models/skills/AIlustrator.jsx";
import PShop from "./models/skills/PShop.jsx";
import HtmlMesh from "./models/skills/HtmlMesh.jsx";
import CssMesh from "./models/skills/CssMesh.jsx";
import JsMesh from "./models/skills/JsMesh.jsx";
import ReactMesh from "./models/skills/ReactMesh.jsx";

const PortfolioMesh = (modelName) => {
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
            screenScale = [0.75,0.75, 0.75];
            screenPosition = [0,-1,-1.5];
        }
        return [screenScale,screenPosition, rotation];
    }
    const [meshScale, meshPosition, meshRotation] = adjustMeshForScreenSize();
    const [skillMesh1Scale, skillMesh1Position, skillMesh1Rotation] = [[0.25,0.25,0.25],[-4.4,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh2Scale, skillMesh2Position, skillMesh2Rotation] = [[0.5,0.5,0.5],[0,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh3Scale, skillMesh3Position, skillMesh3Rotation] = [[0.5,0.5,0.5],[4.4,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh4Scale, skillMesh4Position, skillMesh4Rotation] = [[0.5,0.5,0.5],[3.5,-0.45,-1],[0.25,0.25,0]];

    const [skillGMeshScale, skillGMeshPosition, skillGMeshRotation] = [[0.5,0.5,0.5],[8,-0.45,-1],[0.25,0.25,0]];

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

                    <HtmlMesh
                        position={skillMesh1Position}
                        scale={meshScale}
                        rotation={skillMesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <CssMesh
                        position={skillMesh2Position}
                        scale={meshScale}
                        rotation={skillMesh2Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <JsMesh
                        position={skillMesh3Position}
                        scale={meshScale}
                        rotation={skillMesh3Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}
export default PortfolioMesh;