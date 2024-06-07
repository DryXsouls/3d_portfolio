import {Canvas} from '@react-three/fiber'
import {useState, Suspense} from "react";
import Loader from "./Loader.jsx";

import HobbyShelf from "./models/HobbyShelf.jsx";
import Modeling3D from "./models/hobby/Modeling3D.jsx";
import Art from "./models/hobby/Art.jsx";
import PlasticModel from "./models/hobby/PlasticModel.jsx";
import Book from "./models/hobby/Book.jsx";
import Gym from "./models/hobby/Gym.jsx";
import Movie from "./models/hobby/Movie.jsx";
import Walk from "./models/hobby/Walk.jsx";
import Travel from "./models/hobby/Travel.jsx";
import Car from "./models/hobby/CarHobby.jsx";


const HobbyMesh = () => {
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
            screenScale = [0.65,0.65, 0.65];
            screenPosition = [0,-1,-1.5];
        }
        return [screenScale,screenPosition, rotation];
    }
    const [meshScale, meshPosition, meshRotation] = adjustMeshForScreenSize();
    const [likeMesh1Scale, likeMesh1Position, likeMesh1Rotation] = [[0.1,0.1,0.1],[-3.0,-0.45,-0.25],[0.25,0.25,0]];
    const [likeMesh2Scale, likeMesh2Position, likeMesh2Rotation] = [[0.07,0.07,0.07],[-2.25,-0.45,-0.25],[0.25,0.25,0]];
    const [likeMesh3Scale, likeMesh3Position, likeMesh3Rotation] = [[0.1,0.1,0.1],[-1.50,-0.45,-0.25],[0.25,0.25,0]];
    const [likeMesh4Scale, likeMesh4Position, likeMesh4Rotation] = [[0.08,0.08,0.08],[-0.9,-0.45,-0.25],[0.25,0.25,0]];
    const [likeMesh5Scale, likeMesh5Position, likeMesh5Rotation] = [[0.1,0.1,0.1],[-0.15,-0.75,-0.25],[0.25,0.25,0]];


    const [hobbyMesh1Scale, hobbyMesh1Position, hobbyMesh1Rotation] = [[0.1,0.1,0.1],[0.65,-0.75,-0.25],[0.25,-0.25,0]];
    const [hobbyMesh2Scale, hobbyMesh2Position, hobbyMesh2Rotation] = [[0.1,0.1,0.1],[1.5,-0.75,-0.25],[0.25,-0.25,0]];
    const [hobbyMesh3Scale, hobbyMesh3Position, hobbyMesh3Rotation] = [[0.1,0.1,0.1],[2.25,-0.75,-0.25],[0.25,-0.25,0]];
    const [hobbyMesh4Scale, hobbyMesh4Position, hobbyMesh4Rotation] = [[0.1,0.1,0.1],[3,-0.75,-0.25],[0.25,-0.25,0]];  //rot mid -1.5
    return(
        <section className='w-half h-screen relative '>
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
                    <HobbyShelf
                        position={meshPosition}
                        scale={meshScale}
                        rotation={meshRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <Gym
                        position={likeMesh1Position}
                        scale={likeMesh1Scale}
                        rotation={likeMesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <Car
                        position={likeMesh2Position}
                        scale={likeMesh2Scale}
                        rotation={likeMesh2Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Travel
                        position={likeMesh3Position}
                        scale={likeMesh3Scale}
                        rotation={likeMesh3Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Walk
                        position={likeMesh4Position}
                        scale={likeMesh4Scale}
                        rotation={likeMesh4Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Movie
                        position={likeMesh5Position}
                        scale={likeMesh5Scale}
                        rotation={likeMesh5Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />


                    <Book
                        position={hobbyMesh1Position}
                        scale={hobbyMesh1Scale}
                        rotation={hobbyMesh1Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Art
                        position={hobbyMesh2Position}
                        scale={hobbyMesh2Scale}
                        rotation={hobbyMesh2Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Modeling3D
                        position={hobbyMesh3Position}
                        scale={hobbyMesh3Scale}
                        rotation={hobbyMesh3Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <PlasticModel
                        position={hobbyMesh4Position}
                        scale={hobbyMesh4Scale}
                        rotation={hobbyMesh4Rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />





                </Suspense>
            </Canvas>
        </section>
    );
}
export default HobbyMesh;