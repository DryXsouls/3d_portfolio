import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import travel_scene from '../../assets/hobby/Travel-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Travel = ({isRotating, setIsRotating, ...props}) => {
    const travelRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(travel_scene)

    AutoRotationSetting(travelRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={travelRef} {...props} dispose={null}>
            <mesh geometry={nodes.Sphere.geometry} material={materials.Earth} />
            <mesh
                geometry={nodes.Cylinder004.geometry}
                material={materials['Material.010']}
            />
            <mesh
                geometry={nodes.Cylinder004_1.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cylinder004_2.geometry}
                material={materials.Material}
            />
        </a.group>
    )
}

export default Travel;
