import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import walk_scene from '../../assets/hobby/Walk-model.glb';
import {a} from '@react-spring/three';

const Walk = ({isRotating, setIsRotating, ...props}) => {
    const walkRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(walk_scene)

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

            walkRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            walkRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            walkRef.current.rotation.y += 0.01 * Math.PI;
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
                const rotation = walkRef.current.rotation.y;

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
        <a.group ref={walkRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere.geometry}
                material={materials['Material.007']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001.geometry}
                material={materials['Material.007']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022_1.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022_2.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022_4.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube022_5.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_1.geometry}
                material={materials['Material.006']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_2.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone004.geometry}
                material={materials['Material.006']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone004_1.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone006.geometry}
                material={materials['Material.006']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone006_1.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere008.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere008_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere008_2.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere008_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_1.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_2.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_4.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_5.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere010.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere010_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere010_2.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere010_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027_1.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027_2.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027_4.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube027_5.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011_2.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_1.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_2.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_3.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_4.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_5.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere012.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere012_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere012_2.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere012_3.geometry}
                material={materials.Material}
            />
        </a.group>
    )
}

export default Walk;
