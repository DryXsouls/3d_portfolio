import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import figma_scene from '../../assets/skills/Figma-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const Figma = ({isRotating, setIsRotating, ...props}) => {
    const figmaRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(figma_scene)

    autoRotationSetting(figmaRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={figmaRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.path0_fill.geometry}
                material={materials['SVGMat.027']}
            />
            <mesh
                geometry={nodes.path1_fill.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.path1_fill_1_.geometry}
                material={materials['SVGMat.024']}
            />
            <mesh
                geometry={nodes.path2_fill.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.path3_fill.geometry}
                material={materials['SVGMat.025']}
            />
            <mesh
                geometry={nodes.path0_fill001.geometry}
                material={materials['SVGMat.027']}
            />
            <mesh
                geometry={nodes.path1_fill001.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.path1_fill_1_001.geometry}
                material={materials['SVGMat.024']}
            />
            <mesh
                geometry={nodes.path2_fill001.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.path3_fill001.geometry}
                material={materials['SVGMat.025']}
            />
            <mesh geometry={nodes.Cube.geometry} material={materials.LogoBg} />
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

export default Figma;
