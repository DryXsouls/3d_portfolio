import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import modeling3D_scene from '../../assets/hobby/3DHobby-model.glb';
import {a} from '@react-spring/three';

const Modeling3D = ({isRotating, setIsRotating, ...props}) => {
    const modeling3dRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(modeling3D_scene)

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

            modeling3dRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            modeling3dRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            modeling3dRef.current.rotation.y += 0.01 * Math.PI;
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
                const rotation = modeling3dRef.current.rotation.y;

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
        <a.group ref={modeling3dRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ModelPlocha.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pc.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Klavesnica.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Klavesy.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Klavesy001.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_1.geometry}
                material={materials.Ornaments}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005_1.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006_1.geometry}
                material={materials['Material.002']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh049.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh049_1.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh048.geometry}
                material={materials['Mat.2']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh048_1.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh048_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh048_3.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh046.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh046_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh046_2.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh047.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh047_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh047_2.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Mesh054.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh054_1.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh053.geometry}
                material={materials['Mat.2']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh053_1.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh053_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh053_3.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh050.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh050_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh050_2.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh051.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh051_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh051_2.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh052.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh052_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh052_2.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Mesh044.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh044_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh044_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_3.geometry}
                material={materials['Mat.2']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Cube_6_4.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_8_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_9_3.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_9_4.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_2.geometry}
                material={materials.Mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6.geometry}
                material={materials['Mat.2']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Cube_6_2.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_8.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_9.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_9_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh045.geometry}
                material={materials['Mat.002']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Mesh045_1.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh045_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh045_3.geometry}
                material={materials['Glass-Simple']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh045_4.geometry}
                material={materials['Mat.3']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4_5.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4_6.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4_7.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4_8.geometry} material={materials.Mat} />
            <mesh castShadow receiveShadow geometry={nodes.Cube_4_9.geometry} material={materials.Mat} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_5.geometry}
                material={nodes.Cube_5_5.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_6.geometry}
                material={nodes.Cube_5_6.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_7.geometry}
                material={nodes.Cube_5_7.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_8.geometry}
                material={nodes.Cube_5_8.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_9.geometry}
                material={nodes.Cube_5_9.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_10.geometry}
                material={nodes.Cube_6_10.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_11.geometry}
                material={nodes.Cube_6_11.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_9.geometry}
                material={materials['Mat.2']}
            />
        </a.group>
    )
}

export default Modeling3D;
