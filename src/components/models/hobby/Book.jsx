import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import book_scene from '../../assets/hobby/Book-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Book = ({isRotating, setIsRotating, ...props}) => {
    const bookRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(book_scene)


    AutoRotationSetting(bookRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={bookRef} {...props} dispose={null}>
            <mesh geometry={nodes.Kniha.geometry} material={materials.LogoBg} />
            <mesh
                geometry={nodes.Obal.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh geometry={nodes.Page.geometry} material={materials.LogoBg} />
            <mesh
                geometry={nodes.Zalozka.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cylinder004.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cylinder004_1.geometry}
                material={materials['SVGMat.023']}
            />
        </a.group>
    )
}

export default Book;
