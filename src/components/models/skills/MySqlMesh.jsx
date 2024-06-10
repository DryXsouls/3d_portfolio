import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import mySqlMesh_scene from '../../assets/skills/MySql-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const MySqlMesh = ({isRotating, setIsRotating, ...props}) => {
    const mySqlRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(mySqlMesh_scene)

    autoRotationSetting(mySqlRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={mySqlRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Curve.geometry}
                material={materials['SVGMat.006']}>
                <mesh
                    geometry={nodes.Curve001.geometry}
                    material={materials['SVGMat.007']}
                />
                <mesh
                    geometry={nodes.Curve002.geometry}
                    material={materials['SVGMat.008']}
                />
                <mesh
                    geometry={nodes.Curve003.geometry}
                    material={materials['SVGMat.009']}
                />
                <mesh
                    geometry={nodes.Curve004.geometry}
                    material={materials['SVGMat.010']}
                />
                <mesh
                    geometry={nodes.Curve005.geometry}
                    material={materials['SVGMat.011']}
                />
                <mesh
                    geometry={nodes.Curve006.geometry}
                    material={materials['SVGMat.012']}
                />
                <mesh
                    geometry={nodes.Curve007.geometry}
                    material={materials['SVGMat.013']}
                />
            </mesh>
            <mesh
                geometry={nodes.Curve008.geometry}
                material={materials['SVGMat.006']}>
                <mesh
                    geometry={nodes.Curve009.geometry}
                    material={materials['SVGMat.007']}
                />
                <mesh
                    geometry={nodes.Curve010.geometry}
                    material={materials['SVGMat.008']}
                />
                <mesh
                    geometry={nodes.Curve011.geometry}
                    material={materials['SVGMat.009']}
                />
                <mesh
                    geometry={nodes.Curve012.geometry}
                    material={materials['SVGMat.010']}
                />
                <mesh
                    geometry={nodes.Curve013.geometry}
                    material={materials['SVGMat.011']}
                />
                <mesh
                    geometry={nodes.Curve014.geometry}
                    material={materials['SVGMat.012']}
                />
                <mesh
                    geometry={nodes.Curve015.geometry}
                    material={materials['SVGMat.013']}
                />
            </mesh>
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

export default MySqlMesh;
