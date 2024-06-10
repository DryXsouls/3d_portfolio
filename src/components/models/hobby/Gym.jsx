import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import gym_scene from '../../assets/hobby/Gym-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Gym = ({isRotating, setIsRotating, ...props}) => {
    const gymRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(gym_scene)

    AutoRotationSetting(gymRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={gymRef} {...props} dispose={null}>
            <group rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                    geometry={nodes.Cylinder.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials.Material}
                />
            </group>
            <mesh
                geometry={nodes.BigPlate.geometry}
                material={materials['Material.002']}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.MediumPlate.geometry}
                material={materials['Material.001']}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.SmallPlate.geometry}
                material={materials['Material.002']}
                rotation={[0, 0, -Math.PI / 2]}
            />
        </a.group>
    )
}

export default Gym;
