import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import my_scene from '../assets/MyPhotos.glb';
import {a} from '@react-spring/three';

const MyModel = ({isRotating, setIsRotating, ...props}) => {
    const myRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(my_scene)

    const lastX = useRef(0);
    const lastY = useRef(0);
    const lastZ = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = useRef(0.95);

    const handlePointerDown = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        //figure out if it's mouse event or touch screen event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        lastX.current = clientX;
        lastY.current = clientY;
        lastZ.current = clientZ;
    }
    const handlePointerUp = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }
    const handlePointerMove = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        if(isRotating){
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const deltaX = (clientX - lastX.current) / viewport.width;


            myRef.current.rotation.y += deltaX * 0.01 * Math.PI;
            myRef.current.rotation.x += deltaX * 0.01 * Math.PI;
            myRef.current.rotation.z += deltaX * 0.01 * Math.PI;

            lastX.current = clientX;
            lastZ.current = clientZ;
            lastY.current = clientY;
            rotationSpeed.current = deltaX * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            myRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            myRef.current.rotation.y += 0.01 * Math.PI;
        }

    }
    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key ==='ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if (myRef.current) {
            myRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0;
            } else {
                const rotation = myRef.current.rotation.y;



                /**
                 * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
                 * The goal is to ensure that the rotation value remains within a specific range to
                 * prevent potential issues with very large or negative rotation values.
                 *  Here's a step-by-step explanation of what this code does:
                 *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
                 *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
                 *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
                 *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
                 *     This is done to ensure that the value remains positive and within the range of
                 *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
                 *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
                 *     modulo operation to the value obtained in step 2. This step guarantees that the value
                 *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
                 *     circle in radians.
                 */
                const normalizedRotation =
                    ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

                // Set the current stage based on the island's orientation
                switch (true) {
                    case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                        break;
                    case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                        break;
                    case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                        break;
                    case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                        break;
                    default:
                }
            }
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown',handlePointerDown)
        canvas.addEventListener('pointerup',handlePointerUp)
        canvas.addEventListener('pointermove',handlePointerMove)
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown',handlePointerDown);
            canvas.removeEventListener('pointerup',handlePointerUp);
            canvas.removeEventListener('pointermove',handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    },[gl,handlePointerDown,handlePointerUp,handlePointerMove]);

    return (
        <a.group ref={myRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube_2.geometry}
                material={materials['Material.002']}
            />
            <mesh
                geometry={nodes.Cube_3.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cube_4.geometry}
                material={materials['Material.004']}
            />
            <mesh
                geometry={nodes.Cube_5.geometry}
                material={materials['Material.005']}
            />
            <mesh
                geometry={nodes.Cube_6.geometry}
                material={materials['Material.006']}
            />
            <mesh
                geometry={nodes.Cube_7.geometry}
                material={materials['Material.007']}
            />
        </a.group>
    )
}

export default MyModel;