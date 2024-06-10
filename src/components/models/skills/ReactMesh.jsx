import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import reactMesh_scene from '../../assets/skills/React-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const ReactMesh = ({isRotating, setIsRotating, ...props}) => {
    const reactRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(reactMesh_scene)

    autoRotationSetting(reactRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={reactRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Middle.geometry}
                material={materials['SVGMat.004']}
            />
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['SVGMat.004']}
            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['SVGMat.002']}
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

export default ReactMesh;
