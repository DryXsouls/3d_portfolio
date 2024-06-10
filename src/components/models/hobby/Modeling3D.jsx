import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import modeling3D_scene from '../../assets/hobby/3DHobby-model.glb';
import {a} from '@react-spring/three';
import RotationSetting from "../../RotationSettings.jsx";
import AutoRotationSetting from "../../AutoRotationSetting.jsx";

const Modeling3D = ({isRotating, setIsRotating, ...props}) => {
    const modeling3dRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(modeling3D_scene)

    AutoRotationSetting(modeling3dRef, isRotating, setIsRotating, viewport)

    return (
        <a.group ref={modeling3dRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.ModelPlocha.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Pc.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Klavesnica.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Klavesy.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.Klavesy001.geometry}
                material={materials['SVGMat.026']}
            />
            <mesh
                geometry={nodes.Text.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube004_1.geometry}
                material={materials.Ornaments}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube005_1.geometry}
                material={materials['Material.003']}
            />
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                geometry={nodes.Cube006_1.geometry}
                material={materials['Material.002']}
            />
            <mesh geometry={nodes.Mesh049.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh049_1.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh048.geometry}
                material={materials['Mat.2']}
            />
            <mesh geometry={nodes.Mesh048_1.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh048_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Mesh048_3.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                geometry={nodes.Mesh046.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh046_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh geometry={nodes.Mesh046_2.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh047.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh047_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh geometry={nodes.Mesh047_2.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Mesh054.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh054_1.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh053.geometry}
                material={materials['Mat.2']}
            />
            <mesh geometry={nodes.Mesh053_1.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh053_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Mesh053_3.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                geometry={nodes.Mesh050.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh050_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh geometry={nodes.Mesh050_2.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh051.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh051_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh geometry={nodes.Mesh051_2.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh052.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh052_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh geometry={nodes.Mesh052_2.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Mesh044.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh044_1.geometry}
                material={materials['Mat.4']}
            />
            <mesh
                geometry={nodes.Mesh044_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_1_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_4_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_5_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Cube_6_3.geometry}
                material={materials['Mat.2']}
            />
            <mesh geometry={nodes.Cube_6_4.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Cube_7_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Cube_8_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_9_3.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_9_4.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cylinder_2.geometry}
                material={materials.Mat}
            />
            <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_4.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_5.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Cube_6.geometry}
                material={materials['Mat.2']}
            />
            <mesh geometry={nodes.Cube_6_2.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Cube_7.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Cube_8.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_9.geometry}
                material={materials['Mat.002']}
            />
            <mesh
                geometry={nodes.Cube_9_2.geometry}
                material={materials['Mat.002']}
            />
            <mesh geometry={nodes.Cylinder.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh045.geometry}
                material={materials['Mat.002']}
            />
            <mesh geometry={nodes.Mesh045_1.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Mesh045_2.geometry}
                material={materials['Mat.2']}
            />
            <mesh
                geometry={nodes.Mesh045_3.geometry}
                material={materials['Glass-Simple']}
            />
            <mesh
                geometry={nodes.Mesh045_4.geometry}
                material={materials['Mat.3']}
            />
            <mesh geometry={nodes.Cube_4_5.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Cube_4_6.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Cube_4_7.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Cube_4_8.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Cube_4_9.geometry} material={materials.Mat} />
            <mesh
                geometry={nodes.Cube_5_5.geometry}
                material={nodes.Cube_5_5.material}
            />
            <mesh
                geometry={nodes.Cube_5_6.geometry}
                material={nodes.Cube_5_6.material}
            />
            <mesh
                geometry={nodes.Cube_5_7.geometry}
                material={nodes.Cube_5_7.material}
            />
            <mesh
                geometry={nodes.Cube_5_8.geometry}
                material={nodes.Cube_5_8.material}
            />
            <mesh
                geometry={nodes.Cube_5_9.geometry}
                material={nodes.Cube_5_9.material}
            />
            <mesh
                geometry={nodes.Cube_6_10.geometry}
                material={nodes.Cube_6_10.material}
            />
            <mesh
                geometry={nodes.Cube_6_11.geometry}
                material={nodes.Cube_6_11.material}
            />
            <mesh
                geometry={nodes.Cube_6_9.geometry}
                material={materials['Mat.2']}
            />
        </a.group>
    )
}

export default Modeling3D;
