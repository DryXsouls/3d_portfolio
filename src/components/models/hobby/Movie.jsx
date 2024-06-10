import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import movie_scene from '../../assets/hobby/Movie-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Movie = ({isRotating, setIsRotating, ...props}) => {
    const movieRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(movie_scene)

    AutoRotationSetting(movieRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={movieRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.ModelPlocha.geometry}
                material={materials['Material.008']}
            />
            <mesh
                geometry={nodes.Cube003.geometry}
                material={materials['Material.007']}
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                geometry={nodes.Cube007.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                geometry={nodes.Cube008.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube009.geometry}
                material={materials['Material.007']}
            />
            <mesh
                geometry={nodes.Cube010.geometry}
                material={materials['Material.007']}
            />
            <mesh
                geometry={nodes.Cube011.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube012.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube013.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube014.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={materials['SVGMat.001']}
            />
            <mesh
                geometry={nodes.Cube015.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Sphere001.geometry}
                material={materials['Material.005']}
            />
            <mesh
                geometry={nodes.Cube016.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Sphere002.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Sphere003.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Cube019.geometry}
                material={materials['Material.006']}
            />
            <mesh
                geometry={nodes.Sphere004.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Sphere005.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Salama.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Salama001.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                geometry={nodes.Cube003_1.geometry}
                material={materials['Material.007']}
            />
            <mesh
                geometry={nodes.Cube003_2.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube004_1.geometry}
                material={materials['Material.007']}
            />
            <mesh
                geometry={nodes.Cube004_2.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube005_1.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube005_2.geometry}
                material={materials['Material.009']}
            />
            <mesh
                geometry={nodes.Cube021_1.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube021_2.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cube022.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cube022_1.geometry}
                material={materials['Material.004']}
            />
            <mesh
                geometry={nodes.Cube022_2.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube024.geometry}
                material={materials['Material.006']}
            />
            <mesh
                geometry={nodes.Cube024_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cube025.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Cube025_1.geometry}
                material={materials['Material.006']}
            />
            <mesh
                geometry={nodes.Cylinder005.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cylinder005_1.geometry}
                material={materials['Ornaments.001']}
            />
            <mesh
                geometry={nodes.Cylinder007.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cylinder007_1.geometry}
                material={materials['Ornaments.001']}
            />
        </a.group>
    )
}

export default Movie;
