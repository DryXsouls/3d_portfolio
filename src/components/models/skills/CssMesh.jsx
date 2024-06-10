import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import cssMesh_scene from '../../assets/skills/Css-logo.glb';
import {a} from '@react-spring/three';
import autoRotationSetting from "../../AutoRotationSetting.jsx";

const CssMesh = ({isRotating, setIsRotating, ...props}) => {
    const cssRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(cssMesh_scene)

    autoRotationSetting(cssRef, isRotating, setIsRotating, viewport);

    return (
        <a.group ref={cssRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.path2999.geometry}
                material={materials['SVGMat.003']}>
                <mesh
                    geometry={nodes.path3001.geometry}
                    material={materials['SVGMat.003']}
                />
                <mesh
                    geometry={nodes.path3003.geometry}
                    material={materials['SVGMat.003']}
                />
                <mesh
                    geometry={nodes.polygon2993.geometry}
                    material={materials['SVGMat.007']}
                />
                <mesh
                    geometry={nodes.polygon2995.geometry}
                    material={materials['SVGMat.008']}
                />
                <mesh
                    geometry={nodes.polygon2997.geometry}
                    material={materials['SVGMat.009']}
                />
                <mesh
                    geometry={nodes.polygon3005.geometry}
                    material={materials['SVGMat.010']}
                />
                <mesh
                    geometry={nodes.polygon2989_1.geometry}
                    material={materials['SVGMat.005']}
                />
                <mesh
                    geometry={nodes.polygon2989_2.geometry}
                    material={materials['SVGMat.006']}
                />
            </mesh>
            <mesh
                geometry={nodes.path2999001.geometry}
                material={materials['SVGMat.003']}>
                <mesh
                    geometry={nodes.path3001001.geometry}
                    material={materials['SVGMat.003']}
                />
                <mesh
                    geometry={nodes.path3003001.geometry}
                    material={materials['SVGMat.003']}
                />
                <mesh
                    geometry={nodes.polygon2993001.geometry}
                    material={materials['SVGMat.007']}
                />
                <mesh
                    geometry={nodes.polygon2995001.geometry}
                    material={materials['SVGMat.008']}
                />
                <mesh
                    geometry={nodes.polygon2997001.geometry}
                    material={materials['SVGMat.009']}
                />
                <mesh
                    geometry={nodes.polygon3005001.geometry}
                    material={materials['SVGMat.010']}
                />
                <mesh
                    geometry={nodes.polygon2989001_1.geometry}
                    material={materials['SVGMat.005']}
                />
                <mesh
                    geometry={nodes.polygon2989001_2.geometry}
                    material={materials['SVGMat.006']}
                />
            </mesh>
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

export default CssMesh;
