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
            let screenPosition = null;
            let rotation = [0.25, 0, 0];
            let screenRotation1 = [0.25,0.25,0];
            let screenRotation2 = [0.25,-0.25,0];

            let screenScale2 = null;
            let screenScale3 = null;
            let screenScale4 = null;

            let meshPosition1 = null;
            let meshPosition2 = null;
            let meshPosition3 = null;
            let meshPosition4 = null;
            let meshPosition5 = null;


            let hMeshPosition1 = null;
            let hMeshPosition2 = null;
            let hMeshPosition3 = null;
            let hMeshPosition4 = null;

            if (window.innerWidth <= 1024) {
                screenPosition = [0,-1,-1.5];
                screenScale = [0.6,0.6, 0.6];
                screenScale2 = [0.1,0.1,0.1];
                screenScale3 = [0.07,0.07,0.07];
                screenScale4 = [0.08,0.08,0.08];
                //Likes position
                meshPosition1 = [-3.0,-0.45,-0.25];
                meshPosition2 = [-2.25,-0.45,-0.25];
                meshPosition3 = [-1.50,-0.45,-0.25];
                meshPosition4 = [-0.9,-0.45,-0.25];
                meshPosition5 = [-0.15,-0.75,-0.25];
                //Hobby position
                hMeshPosition1 = [0.65,-0.75,-0.25];
                hMeshPosition2 = [1.5,-0.75,-0.25];
                hMeshPosition3 = [2.25,-0.75,-0.25];
                hMeshPosition4 = [3,-0.75,-0.25];
            } else if (window.innerWidth <= 1280) {
                screenPosition = [0,-1,-1.5];
                screenScale = [0.6,0.6, 0.6];
                screenScale2 = [0.1,0.1,0.1];
                screenScale3 = [0.07,0.07,0.07];
                screenScale4 = [0.08,0.08,0.08];
                //Likes position
                meshPosition1 = [-3.0,-0.45,-0.25];
                meshPosition2 = [-2.25,-0.45,-0.25];
                meshPosition3 = [-1.50,-0.45,-0.25];
                meshPosition4 = [-0.9,-0.45,-0.25];
                meshPosition5 = [-0.15,-0.75,-0.25];
                //Hobby position
                hMeshPosition1 = [0.65,-0.75,-0.25];
                hMeshPosition2 = [1.5,-0.75,-0.25];
                hMeshPosition3 = [2.25,-0.75,-0.25];
                hMeshPosition4 = [3,-0.75,-0.25];

            } else if (window.innerWidth <= 1366) {
                screenPosition = [0,-1,-1.5];
                screenScale = [0.6,0.6, 0.6];
                screenScale2 = [0.1,0.1,0.1];
                screenScale3 = [0.07,0.07,0.07];
                screenScale4 = [0.08,0.08,0.08];
                //Likes position
                meshPosition1 = [-3.0,-0.45,-0.25];
                meshPosition2 = [-2.25,-0.45,-0.25];
                meshPosition3 = [-1.50,-0.45,-0.25];
                meshPosition4 = [-0.9,-0.45,-0.25];
                meshPosition5 = [-0.15,-0.75,-0.25];
                //Hobby position
                hMeshPosition1 = [0.65,-0.75,-0.25];
                hMeshPosition2 = [1.5,-0.75,-0.25];
                hMeshPosition3 = [2.25,-0.75,-0.25];
                hMeshPosition4 = [3,-0.75,-0.25];

            } else if (window.innerWidth <= 1600) {
                screenPosition = [0,-1,-1.5];
                screenScale = [0.6,0.6, 0.6];
                screenScale2 = [0.1,0.1,0.1];
                screenScale3 = [0.07,0.07,0.07];
                screenScale4 = [0.08,0.08,0.08];
                //Likes position
                meshPosition1 = [-3.0,-0.45,-0.25];
                meshPosition2 = [-2.25,-0.45,-0.25];
                meshPosition3 = [-1.50,-0.45,-0.25];
                meshPosition4 = [-0.9,-0.45,-0.25];
                meshPosition5 = [-0.15,-0.75,-0.25];
                //Hobby position
                hMeshPosition1 = [0.65,-0.75,-0.25];
                hMeshPosition2 = [1.5,-0.75,-0.25];
                hMeshPosition3 = [2.25,-0.75,-0.25];
                hMeshPosition4 = [3,-0.75,-0.25];

            } else {
                screenPosition = [0,-1,-1.5];
                screenScale = [0.6,0.6, 0.6];
                screenScale2 = [0.1,0.1,0.1];
                screenScale3 = [0.07,0.07,0.07];
                screenScale4 = [0.08,0.08,0.08];
                //Likes position
                meshPosition1 = [-3.0,-0.45,-0.25];
                meshPosition2 = [-2.25,-0.45,-0.25];
                meshPosition3 = [-1.50,-0.45,-0.25];
                meshPosition4 = [-0.9,-0.45,-0.25];
                meshPosition5 = [-0.15,-0.75,-0.25];
                //Hobby position
                hMeshPosition1 = [0.65,-0.75,-0.25];
                hMeshPosition2 = [1.5,-0.75,-0.25];
                hMeshPosition3 = [2.25,-0.75,-0.25];
                hMeshPosition4 = [3,-0.75,-0.25];
            }

            return [screenScale, screenPosition, rotation, screenScale2,screenScale3, screenScale4, screenRotation1, screenRotation2, meshPosition1, meshPosition2, meshPosition3, meshPosition4, meshPosition5, hMeshPosition1, hMeshPosition2, hMeshPosition3, hMeshPosition4];
    }
    const [meshScale1, meshPosition, meshRotation1, meshScale2, meshScale3, meshScale4, meshRotation2, meshRotation3, likePosition1, likePosition2, likePosition3, likePosition4, likePosition5, hobbyPosition1, hobbyPosition2, hobbyPosition3, hobbyPosition4] = adjustMeshForScreenSize();

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
                        scale={meshScale1}
                        rotation={meshRotation1}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <Gym
                        position={likePosition1}
                        scale={meshScale2}
                        rotation={meshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />

                    <Car
                        position={likePosition2}
                        scale={meshScale3}
                        rotation={meshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Travel
                        position={likePosition3}
                        scale={meshScale2}
                        rotation={meshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Walk
                        position={likePosition4}
                        scale={meshScale4}
                        rotation={meshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Movie
                        position={likePosition5}
                        scale={meshScale2}
                        rotation={meshRotation2}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />


                    <Book
                        position={hobbyPosition1}
                        scale={meshScale2}
                        rotation={meshRotation3}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Art
                        position={hobbyPosition2}
                        scale={meshScale2}
                        rotation={meshRotation3}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Modeling3D
                        position={hobbyPosition3}
                        scale={meshScale2}
                        rotation={meshRotation3}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <PlasticModel
                        position={hobbyPosition4}
                        scale={meshScale2}
                        rotation={meshRotation3}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />





                </Suspense>
            </Canvas>
        </section>
    );
}
export default HobbyMesh;