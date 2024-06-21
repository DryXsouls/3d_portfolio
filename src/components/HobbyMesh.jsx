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
            let screenRotation2 = [0,0,0];

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

            if (window.innerWidth <= 1020) {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1, 1];
                screenScale2 = [0.4,0.4,0.4];
                screenScale3 = [0.32,0.32,0.32];
                screenScale4 = [0.32,0.32,0.32];
                //Likes position
                meshPosition1 = [-8,1.5,0];
                meshPosition2 = [-3,1.5,0];
                meshPosition3 = [0,1.5,0];
                meshPosition4 = [3,1.5,0];
                meshPosition5 = [8,0.5,0];
                //Hobby position
                hMeshPosition1 = [-6,-2.2,0];
                hMeshPosition2 = [-2,-2.2,0];
                hMeshPosition3 = [2,-2.2,0];
                hMeshPosition4 = [6,-2.2,0];
            } else if (window.innerWidth <= 1024) {
               screenPosition = [0,-1,-1.5];
               screenScale = [1,1,1];
               screenScale2 = [0.15,0.15,0.15];
               screenScale3 = [0.13,0.13,0.13];
               screenScale4 = [0.13,0.13,0.13];
               //Likes position
               meshPosition1 = [-3,0.25,0];
               meshPosition2 = [-1.5,0.25,0];
               meshPosition3 = [0,0.25,0];
               meshPosition4 = [1.5,0.25,0];
               meshPosition5 = [3.5,0.25,0];
               //Hobby position
               hMeshPosition1 = [-3,-2.5,0];
               hMeshPosition2 = [-1,-2.5,0];
               hMeshPosition3 = [1,-2.5,0];
               hMeshPosition4 = [3.5,-2.5,0];
           } else if (window.innerWidth <= 1152) {
               screenPosition = [0,-1,-1.5];
               screenScale = [1,1,1];
               screenScale2 = [0.15,0.15,0.15];
               screenScale3 = [0.13,0.13,0.13];
               screenScale4 = [0.13,0.13,0.13];
               //Likes position
               meshPosition1 = [-3,0.25,0];
               meshPosition2 = [-1.5,0.25,0];
               meshPosition3 = [0,0.25,0];
               meshPosition4 = [1.5,0.25,0];
               meshPosition5 = [3.5,0.25,0];
               //Hobby position
               hMeshPosition1 = [-3,-2.5,0];
               hMeshPosition2 = [-1,-2.5,0];
               hMeshPosition3 = [1,-2.5,0];
               hMeshPosition4 = [3.5,-2.5,0];

            } else if (window.innerWidth <= 1280) {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1,1];
                screenScale2 = [0.2,0.2,0.2];
                screenScale3 = [0.18,0.18,0.18];
                screenScale4 = [0.18,0.18,0.18];
                //Likes position
                meshPosition1 = [-4,0.25,0];
                meshPosition2 = [-2,0.25,0];
                meshPosition3 = [0,0.25,0];
                meshPosition4 = [2,0.25,0];
                meshPosition5 = [4,0.25,0];
                //Hobby position
                hMeshPosition1 = [-4,-2.5,0];
                hMeshPosition2 = [-1.5,-2.5,0];
                hMeshPosition3 = [1.5,-2.5,0];
                hMeshPosition4 = [4,-2.5,0];
            } else if (window.innerWidth <= 1366) {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1,1];
                screenScale2 = [0.2,0.2,0.2];
                screenScale3 = [0.18,0.18,0.18];
                screenScale4 = [0.18,0.18,0.18];
                //Likes position
                meshPosition1 = [-4,0.25,0];
                meshPosition2 = [-2,0.25,0];
                meshPosition3 = [0,0.25,0];
                meshPosition4 = [2,0.25,0];
                meshPosition5 = [4,0.25,0];
                //Hobby position
                hMeshPosition1 = [-4,-2.5,0];
                hMeshPosition2 = [-1.5,-2.5,0];
                hMeshPosition3 = [1.5,-2.5,0];
                hMeshPosition4 = [4,-2.5,0];
            } else if (window.innerWidth <= 1480) {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1,1];
                screenScale2 = [0.2,0.2,0.2];
                screenScale3 = [0.18,0.18,0.18];
                screenScale4 = [0.18,0.18,0.18];
                //Likes position
                meshPosition1 = [-4,0.25,0];
                meshPosition2 = [-2,0.25,0];
                meshPosition3 = [0,0.25,0];
                meshPosition4 = [2,0.25,0];
                meshPosition5 = [4,0.25,0];
                //Hobby position
                hMeshPosition1 = [-4,-2.5,0];
                hMeshPosition2 = [-1.5,-2.5,0];
                hMeshPosition3 = [1.5,-2.5,0];
                hMeshPosition4 = [4,-2.5,0];
            } else if (window.innerWidth <= 1680) {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1,1];
                screenScale2 = [0.23,0.23,0.23];
                screenScale3 = [0.22,0.22,0.22];
                screenScale4 = [0.22,0.22,0.22];
                //Likes position
                meshPosition1 = [-6,0.25,-0.25];
                meshPosition2 = [-3,0.25,-0.25];
                meshPosition3 = [0,0.25,-0.25];
                meshPosition4 = [3,0.25,-0.25];
                meshPosition5 = [6,0.25,-0.25];
                //Hobby position
                hMeshPosition1 = [-5.7,-2.5,-0.25];
                hMeshPosition2 = [-2,-2.5,-0.25];
                hMeshPosition3 = [2,-2.5,-0.25];
                hMeshPosition4 = [6,-2.5,-0.25];

            } else {
                screenPosition = [0,-1,-1.5];
                screenScale = [1,1,1];
                screenScale2 = [0.3,0.3,0.3];
                screenScale3 = [0.22,0.22,0.22];
                screenScale4 = [0.22,0.22,0.22];
                //Likes position
                meshPosition1 = [-6.5,0.25,0];
                meshPosition2 = [-3,0.25,0];
                meshPosition3 = [0,0.25,0];
                meshPosition4 = [3,0.25,0];
                meshPosition5 = [6.5,-0.4,0];
                //Hobby position
                hMeshPosition1 = [-6.5,-2.5,-0.25];
                hMeshPosition2 = [-2,-2.5,0];
                hMeshPosition3 = [2,-2.5,0];
                hMeshPosition4 = [6.5,-2.5,0];
            }

            return [screenScale, screenPosition, rotation, screenScale2,screenScale3, screenScale4, screenRotation1, screenRotation2, meshPosition1, meshPosition2, meshPosition3, meshPosition4, meshPosition5, hMeshPosition1, hMeshPosition2, hMeshPosition3, hMeshPosition4];
    }
    const [meshScale1, meshPosition, meshRotation1, meshScale2, meshScale3, meshScale4, meshRotation2, meshRotation3, likePosition1, likePosition2, likePosition3, likePosition4, likePosition5, hobbyPosition1, hobbyPosition2, hobbyPosition3, hobbyPosition4] = adjustMeshForScreenSize();

    return(
        <section className='w-full h-full  relative'>
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