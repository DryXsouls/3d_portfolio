import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import aIllustrator_scene from '../../assets/skills/AI-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const AIllustrator = ({isRotating, setIsRotating, ...props}) => {
    const aIllustratorRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(aIllustrator_scene)

    autoRotationSetting(aIllustratorRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={aIllustratorRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['SVGMat.031']}
            />
            <mesh
                geometry={nodes.Curve002.geometry}
                material={materials['SVGMat.031']}
            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['SVGMat.030']}
            />
            <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials['Rim Color']}
            />
            <mesh
                geometry={nodes.Cube_2.geometry}
                material={materials.Material}
            />
        </a.group>
    )
}

export default AIllustrator;
