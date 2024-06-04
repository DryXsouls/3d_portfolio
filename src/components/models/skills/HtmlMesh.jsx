import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import htmlMesh_scene from '../../assets/skills/HTML-logo.glb';
import {a} from '@react-spring/three';

const HtmlMesh = ({isRotating, setIsRotating, ...props}) => {
    const htmlRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(htmlMesh_scene)

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

            htmlRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            htmlRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            htmlRef.current.rotation.y += 0.01 * Math.PI;
        }
    }
    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key ==='ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0;
            } else {
                const rotation = htmlRef.current.rotation.y;

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
        <a.group ref={htmlRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve004.geometry}
                material={materials['SVGMat.026']}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve.geometry}
                    material={materials['SVGMat.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve001.geometry}
                    material={materials['SVGMat.023']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve002.geometry}
                    material={materials['SVGMat.024']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve003.geometry}
                    material={materials['SVGMat.025']}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve009.geometry}
                material={materials['SVGMat.026']}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve005.geometry}
                    material={materials['SVGMat.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve006.geometry}
                    material={materials['SVGMat.023']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve007.geometry}
                    material={materials['SVGMat.024']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve008.geometry}
                    material={materials['SVGMat.025']}
                />
            </mesh>
            <mesh castShadow
                  receiveShadow
                  geometry={nodes.Cube.geometry}
                  material={materials.LogoBg} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials['Rim Color']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={materials.Material}
            />
        </a.group>
    )
}

export default HtmlMesh;