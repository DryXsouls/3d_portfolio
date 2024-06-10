import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import plasticModel_scene from '../../assets/hobby/Plastic-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const PlasticModel = ({isRotating, setIsRotating, ...props}) => {
    const plasticModelRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(plasticModel_scene)

    AutoRotationSetting(plasticModelRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={plasticModelRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Zvarac.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Ruky.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Obilie.geometry}
                material={materials['Ornaments.001']}
            />
            <mesh
                geometry={nodes.Nohy.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Kladivo.geometry}
                material={materials['Ornaments.001']}
            />
            <mesh
                geometry={nodes.Jetpack.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Hviezda.geometry}
                material={materials['Ornaments.001']}
            />
            <mesh
                geometry={nodes.HeadJoin.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Head004.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Head003.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.CutterSheath.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Cutter.geometry}
                material={materials['SVGMat.022']}>
                <mesh
                    geometry={nodes.Cylinder004.geometry}
                    material={materials['SVGMat.026']}
                />
                <mesh
                    geometry={nodes.Cylinder005.geometry}
                    material={materials['SVGMat.022']}>
                    <mesh
                        geometry={nodes.Cylinder.geometry}
                        material={materials['SVGMat.026']}
                    />
                    <mesh
                        geometry={nodes.Cylinder001.geometry}
                        material={materials['SVGMat.026']}
                    />
                    <mesh
                        geometry={nodes.Cylinder002.geometry}
                        material={materials['SVGMat.023']}
                    />
                </mesh>
            </mesh>
            <mesh
                geometry={nodes.Chodidla.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.ChestF.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.BezierCurve.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Abdomen.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Plane001.geometry}
                material={materials['Material.004']}
            />
            <mesh
                geometry={nodes.Plane001_1.geometry}
                material={materials['Material.003']}
            />
        </a.group>
    )
}

export default PlasticModel;
