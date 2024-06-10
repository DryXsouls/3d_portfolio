import React, {useRef, useEffect, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import linkedIn_scene from '../assets/Linked-In-model.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../AutoRotationSetting.jsx";

const LinkedInModel = ({isRotating, setIsRotating, ...props}) => {
    const linkedInRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(linkedIn_scene);

    autoRotationSetting(linkedInRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={linkedInRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.path18.geometry}
                material={materials['Material.004']}
            />
            <mesh
                geometry={nodes.path18001.geometry}
                material={materials['Material.004']}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                geometry={nodes.Cube005_1.geometry}
                material={materials['Rim Color.001']}
            />
            <mesh
                geometry={nodes.Cube005_2.geometry}
                material={materials['Material.005']}
            />
        </a.group>
    )
}

export default LinkedInModel;