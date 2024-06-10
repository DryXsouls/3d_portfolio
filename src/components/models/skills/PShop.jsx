import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import pShop_scene from '../../assets/skills/PS-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const PShop = ({isRotating, setIsRotating, ...props}) => {
    const pShopRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(pShop_scene)

    autoRotationSetting(pShopRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={pShopRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['SVGMat.028']}
            />
            <mesh
                geometry={nodes.Curve002.geometry}
                material={materials['SVGMat.028']}
            />
            <mesh
                geometry={nodes.Curve003.geometry}
                material={materials['SVGMat.028']}
            />
            <mesh
                geometry={nodes.Curve004.geometry}
                material={materials['SVGMat.028']}
            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.LogoBg}
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

export default PShop;
