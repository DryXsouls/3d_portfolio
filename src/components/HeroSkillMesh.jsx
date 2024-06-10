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
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.25,0,0];
        let screenRotation1 = [0.25,0.25,0];
        let screenRotation2 = [0.25,-0.25,0];

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
            screenScale = [0.23, 0.23, 0.23];
            screenScale2 = [0.07,0.07,0.07];
            screenPosition = [0, -1, -0.5];
            //Program skill position
            meshPosition1 = [-1.1,-0.5,0];
            meshPosition2 = [-0.65,-0.5,0];
            meshPosition3 = [-0.20,-0.5,0];
            meshPosition4 = [0.20,-0.5,0];
            meshPosition5 = [0.65,-0.5,0];
            meshPosition6 = [1.10,-0.5,0];
            //Graphic skill position
            gMeshPosition1 = [-0.65,0,0];
            gMeshPosition2 = [-0.20,0,0];
            gMeshPosition3 = [0.20,0,0];
            gMeshPosition4 = [0.65,0,0];
        } else if (window.innerWidth <= 1280) {
            screenScale = [0.27, 0.27, 0.27];
            screenScale2 = [0.075,0.075,0.075];
            screenPosition = [0, -1, -0.5];
            //Program skill position
            meshPosition1 = [-1.12,-0.5,0];
            meshPosition2 = [-0.67,-0.5,0];
            meshPosition3 = [-0.22,-0.5,0];
            meshPosition4 = [0.22,-0.5,0];
            meshPosition5 = [0.67,-0.5,0];
            meshPosition6 = [1.12,-0.5,0];
            //Graphic skill position
            gMeshPosition1 = [-0.67,0,0];
            gMeshPosition2 = [-0.22,0,0];
            gMeshPosition3 = [0.22,0,0];
            gMeshPosition4 = [0.67,0,0];

        } else if (window.innerWidth <= 1366) {
            screenScale = [0.3, 0.3, 0.3];
            screenScale2 = [0.075,0.075,0.075];
            screenPosition = [0, -1, -0.5];
            //Program skill position
            meshPosition1 = [-1.12,-0.5,0];
            meshPosition2 = [-0.67,-0.5,0];
            meshPosition3 = [-0.22,-0.5,0];
            meshPosition4 = [0.22,-0.5,0];
            meshPosition5 = [0.67,-0.5,0];
            meshPosition6 = [1.12,-0.5,0];
            //Graphic skill position
            gMeshPosition1 = [-0.67,0,0];
            gMeshPosition2 = [-0.22,0,0];
            gMeshPosition3 = [0.22,0,0];
            gMeshPosition4 = [0.67,0,0];

        } else if (window.innerWidth <= 1600) {
            screenScale = [0.36, 0.36, 0.36];
            screenScale2 = [0.065,0.065,0.065];
            screenPosition = [0, -1, -0.5];
            //Program skill position
            meshPosition1 = [-1.85,-0.5,0];
            meshPosition2 = [-1.45,-0.5,0];
            meshPosition3 = [-1.05,-0.5,0];
            meshPosition4 = [-0.65,-0.5,0];
            meshPosition5 = [-0.25,-0.5,0];
            meshPosition6 = [0.15,-0.5,0];
            //Graphic skill position
            gMeshPosition1 = [0.65,-0.5,0];
            gMeshPosition2 = [1.05,-0.5,0];
            gMeshPosition3 = [1.45,-0.5,0];
            gMeshPosition4 = [1.85,-0.5,0];

        } else {
            screenScale = [0.5,0.5, 0.5];
            screenScale2 = [0.075,0.075,0.075];
            screenPosition = [0,-1,-1.5];
            //Program skill position
            meshPosition1 = [-2.15,-0.45,0];
            meshPosition2 = [-1.7,-0.45,0];
            meshPosition3 = [-1.25,-0.45,0];
            meshPosition4 = [-0.8,-0.45,0];
            meshPosition5 = [-0.35,-0.45,0];
            meshPosition6 = [0.1,-0.45,0];
            //Graphic skill position
            gMeshPosition1 = [0.75,-0.45,0];
            gMeshPosition2 = [1.2,-0.45,0];
            gMeshPosition3 = [1.65,-0.45,0];
            gMeshPosition4 = [2.1,-0.45,0];
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