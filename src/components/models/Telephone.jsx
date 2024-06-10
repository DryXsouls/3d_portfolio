import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import telephone_scene from '../assets/Telephone.glb';
import {a} from '@react-spring/three';

const TelephoneModel = ({isRotating, setIsRotating, ...props}) => {
    const telephoneRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(telephone_scene)

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = useRef(0.95);

    const handlePointerDown = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        //figure out if it's mouse event or touch screen event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
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

            const delta = (clientX - lastX.current) / viewport.width;

            telephoneRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            telephoneRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            telephoneRef.current.rotation.y += 0.01 * Math.PI;
        }
    }
    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key ==='ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(telephoneRef.current){
            telephoneRef.current.rotation.y += 0.01;
        }
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0;
            } else {
                const rotation = telephoneRef.current.rotation.y;

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
        <a.group ref={telephoneRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials['Material.001']}
                position={[-0.783, -0.211, 0]}
                rotation={[-Math.PI, -1.571, 0]}
                scale={0.411}
            />
            <mesh
                geometry={nodes.Cube001.geometry}
                material={materials['Material.002']}
            />
            <group position={[-0.026, -0.108, 0]} rotation={[0, 0, -0.512]} scale={0.598}>
                <mesh
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials.Material}
                />
            </group>
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials['Material.002']}
                position={[0.01, 0.489, 0.047]}
                rotation={[0, 0, -0.509]}
                scale={0.344}
            />
            <mesh
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                position={[0.153, 0.788, -0.212]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text001.geometry}
                material={nodes.Text001.material}
                position={[0.07, 0.788, -0.025]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text002.geometry}
                material={nodes.Text002.material}
                position={[0.123, 0.788, 0.17]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text003.geometry}
                material={nodes.Text003.material}
                position={[0.288, 0.788, 0.321]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text004.geometry}
                material={nodes.Text004.material}
                position={[0.509, 0.788, 0.353]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text005.geometry}
                material={nodes.Text005.material}
                position={[0.724, 0.788, 0.285]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text006.geometry}
                material={nodes.Text006.material}
                position={[0.866, 0.788, 0.117]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text007.geometry}
                material={nodes.Text007.material}
                position={[0.875, 0.788, -0.083]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text008.geometry}
                material={nodes.Text008.material}
                position={[0.765, 0.788, -0.257]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Text009.geometry}
                material={nodes.Text009.material}
                position={[0.554, 0.788, -0.351]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.173}
            />
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials['Material.002']}
                position={[-0.696, -0.334, 0.679]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.046}
            />
            <mesh

                geometry={nodes.Cylinder003.geometry}
                material={materials['Material.002']}
                position={[-0.791, 0.475, 1.564]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.046}
            />
            <mesh
                geometry={nodes.Circle.geometry}
                material={materials['Material.001']}
            />
        </a.group>
    )
}

export default TelephoneModel;