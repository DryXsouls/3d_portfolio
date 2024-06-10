import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import art_scene from '../../assets/hobby/Art-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Art = ({isRotating, setIsRotating, ...props}) => {
    const artRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(art_scene)

    AutoRotationSetting(artRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={artRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.ModelPlocha.geometry}
                material={materials['Material.002']}
            />
            <group position={[0, 3.91, 0]} rotation={[-0.262, 0, 0]} scale={[2.079, 1.359, 0.133]}>
                <mesh
                    geometry={nodes.Cube003_1.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    geometry={nodes.Cube003_2.geometry}
                    material={materials.Ornaments}
                />
            </group>
            <mesh
                geometry={nodes.Cube001.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Cube002.geometry}
                material={materials['SVGMat.023']}
                position={[0, 6.621, -0.885]}
                rotation={[-0.262, 0, 0]}
                scale={[0.81, 0.152, 0.074]}
            />
            <mesh
                geometry={nodes.Cube003.geometry}
                material={materials['SVGMat.023']}
                position={[0, 2.427, 0.354]}
                rotation={[-0.262, 0, 0]}
                scale={[2.466, 0.152, 0.074]}
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials['SVGMat.023']}
                position={[0, 6.323, -1.044]}
                rotation={[-0.262, 0, 0]}
                scale={[0.364, 0.152, 0.074]}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={materials['SVGMat.023']}
                position={[0, 6.021, -1.044]}
                rotation={[0.373, 0, 0]}
                scale={[0.364, 0.152, 0.074]}
            />
        </a.group>
    )
}

export default Art;
