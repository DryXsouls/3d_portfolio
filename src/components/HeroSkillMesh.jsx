import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";

import HeroSkillShelf from "./models/HeroSkillShelf.jsx";
import AIllustrator from "./models/skills/AIlustrator.jsx";
import PShop from "./models/skills/PShop.jsx";
import Blender from "./models/skills/Blender.jsx";
import Figma from "./models/skills/Figma.jsx";
import HtmlMesh from "./models/skills/HtmlMesh.jsx";
import CssMesh from "./models/skills/CssMesh.jsx";
import JsMesh from "./models/skills/JsMesh.jsx";
import ReactMesh from "./models/skills/ReactMesh.jsx";
import ThreeJsMesh from "./models/skills/ThreeJsMesh.jsx";
import MySqlMesh from "./models/skills/MySqlMesh.jsx";

const HeroSkillMesh = () => {
    const [isRotating, setIsRotating] = useState(false);

    const adjustMeshForScreenSize = () => {
        let screenScale = null;
        let screenScale2 = null;
        let screenPosition = [0,1,-1.5];
        let rotation = [0.5,0,0];
        let screenRotation1 = [0.5,0.25,0];
        let screenRotation2 = [0.5,-0.25,0];

        let meshPosition1 = null;
        let meshPosition2 = null;
        let meshPosition3 = null;
        let meshPosition4 = null;
        let meshPosition5 = null;
        let meshPosition6 = null;

        let gMeshPosition1 = null;
        let gMeshPosition2 = null;
        let gMeshPosition3 = null;
        let gMeshPosition4 = null;

        if (window.innerWidth <= 1024) {
            screenScale = [0.33, 0.33, 0.33];
            screenScale2 = [0.085,0.085,0.085];
            //Program skill position
            meshPosition1 = [-1.25,1.25,0];
            meshPosition2 = [-0.75,1.25,0];
            meshPosition3 = [-0.255,1.25,0];
            meshPosition4 = [0.255,1.25,0];
            meshPosition5 = [0.75,1.25,0];
            meshPosition6 = [1.25,1.25,0];
            //Graphic skill position
            gMeshPosition1 = [-0.75,2,0];
            gMeshPosition2 = [-0.255,2,0];
            gMeshPosition3 = [0.255,2,0];
            gMeshPosition4 = [0.75,2,0];
        } else if (window.innerWidth <= 1280) {
            screenScale = [0.4, 0.4, 0.4];
            screenScale2 = [0.1,0.1,0.1];
            //Program skill position
            meshPosition1 = [-1.5,1.25,0];
            meshPosition2 = [-0.9,1.25,0];
            meshPosition3 = [-0.3,1.25,0];
            meshPosition4 = [0.3,1.25,0];
            meshPosition5 = [0.9,1.25,0];
            meshPosition6 = [1.5,1.25,0];
            //Graphic skill position
            gMeshPosition1 = [-0.9,2,0];
            gMeshPosition2 = [-0.3,2,0];
            gMeshPosition3 = [0.3,2,0];
            gMeshPosition4 = [0.9,2,0];

        } else if (window.innerWidth <= 1366) {
            screenScale = [0.4, 0.4, 0.4];
            screenScale2 = [0.1,0.1,0.1];
            //Program skill position
            meshPosition1 = [-1.5,1.25,0];
            meshPosition2 = [-0.9,1.25,0];
            meshPosition3 = [-0.3,1.25,0];
            meshPosition4 = [0.3,1.25,0];
            meshPosition5 = [0.9,1.25,0];
            meshPosition6 = [1.5,1.25,0];
            //Graphic skill position
            gMeshPosition1 = [-0.9,2,0];
            gMeshPosition2 = [-0.3,2,0];
            gMeshPosition3 = [0.3,2,0];
            gMeshPosition4 = [0.9,2,0];

        } else if (window.innerWidth <= 1600) {
            screenScale = [0.4, 0.4, 0.4];
            screenScale2 = [0.065,0.065,0.065];
            //Program skill position
            meshPosition1 = [-1.85,1.2,0];
            meshPosition2 = [-1.45,1.2,0];
            meshPosition3 = [-1.05,1.2,0];
            meshPosition4 = [-0.65,1.2,0];
            meshPosition5 = [-0.25,1.2,0];
            meshPosition6 = [0.15,1.2,0];
            //Graphic skill position
            gMeshPosition1 = [0.65,1.2,0];
            gMeshPosition2 = [1.05,1.2,0];
            gMeshPosition3 = [1.45,1.2,0];
            gMeshPosition4 = [1.85,1.2,0];

        } else {
            screenScale = [0.5,0.5, 0.5];
            screenScale2 = [0.075,0.075,0.075];
            screenPosition = [0,1,-1.5];
            //Program skill position
            meshPosition1 = [-2.15,1.25,0];
            meshPosition2 = [-1.7,1.25,0];
            meshPosition3 = [-1.25,1.25,0];
            meshPosition4 = [-0.8,1.25,0];
            meshPosition5 = [-0.35,1.25,0];
            meshPosition6 = [0.1,1.25,0];
            //Graphic skill position
            gMeshPosition1 = [0.75,1.25,0];
            gMeshPosition2 = [1.2,1.25,0];
            gMeshPosition3 = [1.65,1.25,0];
            gMeshPosition4 = [2.1,1.25,0];
        }

        return [screenScale, screenPosition, rotation, screenScale2,screenRotation1, screenRotation2, meshPosition1, meshPosition2, meshPosition3, meshPosition4, meshPosition5, meshPosition6,  gMeshPosition1, gMeshPosition2, gMeshPosition3, gMeshPosition4];
    }

    const [meshScale, meshPosition, meshRotation, skillMeshScale, skillMeshRotation1, skillMeshRotation2,skillMesh1Position,skillMesh2Position,skillMesh3Position,skillMesh4Position,skillMesh5Position,skillMesh6Position,skillGMesh1Position,skillGMesh2Position,skillGMesh3Position,skillGMesh4Position] = adjustMeshForScreenSize();

    return(
        <section className='w-half h-screen relative'>
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
                    <HeroSkillShelf
                        position={meshPosition}
                        scale={meshScale}
                        rotation={meshRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <HtmlMesh
                        position={skillMesh1Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <CssMesh
                        position={skillMesh2Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <JsMesh
                        position={skillMesh3Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <ReactMesh
                        position={skillMesh4Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <ThreeJsMesh
                        position={skillMesh5Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <MySqlMesh
                        position={skillMesh6Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />



                    <Blender
                    position={skillGMesh1Position}
                    scale={skillMeshScale}
                    rotation={skillMeshRotation2}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    />
                    <PShop
                        position={skillGMesh2Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <AIllustrator
                        position={skillGMesh3Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Figma
                        position={skillGMesh4Position}
                        scale={skillMeshScale}
                        rotation={skillMeshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />




                </Suspense>
            </Canvas>
        </section>
    );
}
export default HeroSkillMesh;