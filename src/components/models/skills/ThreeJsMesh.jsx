import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import threeJsMesh_scene from '../../assets/skills/Three-js-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const ThreeJsMesh = ({isRotating, setIsRotating, ...props}) => {
    const threeJsRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(threeJsMesh_scene)

    autoRotationSetting(threeJsRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={threeJsRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve.geometry}
                material={materials.SVGMat}>
                <mesh
                    geometry={nodes.Curve001.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve002.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve003.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve004.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve005.geometry}
                    material={materials.SVGMat}
                />
            </mesh>
            <mesh
                  geometry={nodes.Curve006.geometry}
                  material={materials.SVGMat}>
                <mesh
                    geometry={nodes.Curve007.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve008.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve009.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve010.geometry}
                    material={materials.SVGMat}
                />
                <mesh
                    geometry={nodes.Curve011.geometry}
                    material={materials.SVGMat}
                />
            </mesh>
            <mesh
                  geometry={nodes.Cube.geometry}
                  material={materials.LogoBg} />
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

export default ThreeJsMesh;
