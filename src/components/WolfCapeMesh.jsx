import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";

import AIllustrator from "./models/skills/AIlustrator.jsx";
import PShop from "./models/skills/PShop.jsx";
import HtmlMesh from "./models/skills/HtmlMesh.jsx";
import CssMesh from "./models/skills/CssMesh.jsx";
import JsMesh from "./models/skills/JsMesh.jsx";
import ReactMesh from "./models/skills/ReactMesh.jsx";

const WolfCapeMesh = () => {
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
            screenScale = [0.5,0.5, 0.5];
            screenPosition = [0,-1,-1.5];
        }
        return [screenScale,screenPosition, rotation];
    }
    const [meshScale, meshPosition, meshRotation] = adjustMeshForScreenSize();
    const [skillMesh1Scale, skillMesh1Position, skillMesh1Rotation] = [[0.25,0.25,0.25],[-8,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh2Scale, skillMesh2Position, skillMesh2Rotation] = [[0.5,0.5,0.5],[-10,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh3Scale, skillMesh3Position, skillMesh3Rotation] = [[0.5,0.5,0.5],[-5,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh4Scale, skillMesh4Position, skillMesh4Rotation] = [[0.5,0.5,0.5],[-1,-0.45,-1],[0.25,0.25,0]];
    const [skillMesh5Scale, skillMesh5Position, skillMesh5Rotation] = [[0.5,0.5,0.5],[-0.35,-0.45,0],[0.25,0.25,0]];
    const [skillMesh6Scale, skillMesh6Position, skillMesh6Rotation] = [[0.5,0.5,0.5],[0.1,-0.45,0],[0.25,0.25,0]];

    const [skillGMeshScale, skillGMeshPosition, skillGMeshRotation] = [[0.5,0.5,0.5],[0.75,-0.45,0],[0.25,-0.25,0]];
    const [skillGMesh2Scale, skillGMesh2Position, skillGMesh2Rotation] = [[0.5,0.5,0.5],[1.2,-0.45,0],[0.25,-0.25,0]];
    const [skillGMesh3Scale, skillGMesh3Position, skillGMesh3Rotation] = [[0.5,0.5,0.5],[1.65,-0.45,0],[0.25,-0.25,0]];
    const [skillGMesh4Scale, skillGMesh4Position, skillGMesh4Rotation] = [[0.075,0.075,0.075],[2.1,-0.45,0],[0.25,-0.25,0]];  //rot mid -1.5
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
                        scale={skillMesh1Scale}
                        rotation={skillMesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <CssMesh
                        position={meshPosition}
                        scale={meshScale}
                        rotation={meshRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <JsMesh
                        position={skillMesh3Position}
                        scale={skillMesh3Scale}
                        rotation={skillMesh3Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <ReactMesh
                        position={skillMesh4Position}
                        scale={skillMesh4Scale}
                        rotation={skillMesh4Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <PShop
                        position={skillGMesh2Position}
                        scale={skillGMesh2Scale}
                        rotation={skillGMesh2Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <AIllustrator
                        position={skillGMesh3Position}
                        scale={skillGMesh3Scale}
                        rotation={skillGMesh3Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}
export default WolfCapeMesh;