import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import htmlMesh_scene from '../../assets/skills/HTML-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const HtmlMesh = ({isRotating, setIsRotating, ...props}) => {
    const htmlRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(htmlMesh_scene)

    autoRotationSetting(htmlRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={htmlRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve004.geometry}
                material={materials['SVGMat.026']}>
                <mesh
                    geometry={nodes.Curve.geometry}
                    material={materials['SVGMat.022']}
                />
                <mesh
                    geometry={nodes.Curve001.geometry}
                    material={materials['SVGMat.023']}
                />
                <mesh
                    geometry={nodes.Curve002.geometry}
                    material={materials['SVGMat.024']}
                />
                <mesh
                    geometry={nodes.Curve003.geometry}
                    material={materials['SVGMat.025']}
                />
            </mesh>
            <mesh
                geometry={nodes.Curve009.geometry}
                material={materials['SVGMat.026']}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                    geometry={nodes.Curve005.geometry}
                    material={materials['SVGMat.022']}
                />
                <mesh
                    geometry={nodes.Curve006.geometry}
                    material={materials['SVGMat.023']}
                />
                <mesh
                    geometry={nodes.Curve007.geometry}
                    material={materials['SVGMat.024']}
                />
                <mesh
                    geometry={nodes.Curve008.geometry}
                    material={materials['SVGMat.025']}
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

export default HtmlMesh;
