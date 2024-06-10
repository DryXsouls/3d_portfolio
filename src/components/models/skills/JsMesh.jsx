import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import jsMesh_scene from '../../assets/skills/js-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const JsMesh = ({isRotating, setIsRotating, ...props}) => {
    const jsRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(jsMesh_scene)

    autoRotationSetting(jsRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={jsRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials.SVGMat}
            />
            <mesh
                geometry={nodes.Curve002.geometry}
                material={materials.SVGMat}
            />
            <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials['SVGMat.002']}
            />
            <mesh
                geometry={nodes.Cube_2.geometry}
                material={materials['Rim Color']}
            />
            <mesh
                geometry={nodes.Cube_3.geometry}
                material={materials.Material}
            />
        </a.group>
    )
}

export default JsMesh;
