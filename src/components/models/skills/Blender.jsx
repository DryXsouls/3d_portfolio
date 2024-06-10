import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import blender_scene from '../../assets/skills/Blender-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const Blender = ({isRotating, setIsRotating, ...props}) => {
    const blenderRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(blender_scene)

    autoRotationSetting(blenderRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={blenderRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve002.geometry}
                material={materials['SVGMat.013']}
            />
            <mesh
                geometry={nodes.Curve003.geometry}
                material={materials['SVGMat.014']}
            />
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['SVGMat.013']}
            />
            <mesh
                geometry={nodes.Curve004.geometry}
                material={materials['SVGMat.014']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.LogoBg} />
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

export default Blender;
