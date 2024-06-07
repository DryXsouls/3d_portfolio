import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import car_scene from '../../assets/hobby/Car-model.glb';
import {a} from '@react-spring/three';

const Car = ({isRotating, setIsRotating, ...props}) => {
    const carRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(car_scene)

    const lastX = useRef(0);
    const lastY = useRef(0);
    const lastZ = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = useRef(0.95);

    const handlePointerDown = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        //figure out if it's mouse event or touch screen event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }
    const handlePointerUp = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }
    const handlePointerMove = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        if(isRotating){
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            carRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            carRef.current.rotation.y -= 0.01 * Math.PI;
        } else if(e.key ==='ArrowRight'){
            if(!isRotating) setIsRotating(true);
            carRef.current.rotation.y += 0.01 * Math.PI;
        }
    }
    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key ==='ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0;
            } else {
                const rotation = carRef.current.rotation.y;

                /**
                 * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
                 * The goal is to ensure that the rotation value remains within a specific range to
                 * prevent potential issues with very large or negative rotation values.
                 *  Here's a step-by-step explanation of what this code does:
                 *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
                 *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
                 *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
                 *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
                 *     This is done to ensure that the value remains positive and within the range of
                 *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
                 *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
                 *     modulo operation to the value obtained in step 2. This step guarantees that the value
                 *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
                 *     circle in radians.
                 */
                const normalizedRotation =
                    ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

                // Set the current stage based on the island's orientation
                switch (true) {
                    case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                        break;
                    case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                        break;
                    case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                        break;
                    case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                        break;
                    default:
                }
            }
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown',handlePointerDown)
        canvas.addEventListener('pointerup',handlePointerUp)
        canvas.addEventListener('pointermove',handlePointerMove)
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown',handlePointerDown);
            canvas.removeEventListener('pointerup',handlePointerUp);
            canvas.removeEventListener('pointermove',handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    },[gl,handlePointerDown,handlePointerUp,handlePointerMove]);

    return (
        <a.group ref={carRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mirror.geometry}
                material={materials.FarbaKaroserie}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MirrorPart2.geometry}
                material={materials['White light']}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Miror_Reflect.geometry}
                material={nodes.Miror_Reflect.material}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.FarbaKaroserie}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials.FarbaKaroserie}
                position={[0.011, 0.963, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ciernota_grill.geometry}
                material={materials.BLACKNESS}
                position={[0, -0.297, 5.381]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Nadrz.geometry}
                material={materials.BLACKNESS}
                position={[0, -0.905, -4.727]}
                rotation={[0.191, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.podvozok.geometry}
                material={materials.BLACKNESS}
            />
            <group position={[0, 0.034, 4.788]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002.geometry}
                    material={materials['Glass.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_1.geometry}
                    material={materials['Screw.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_2.geometry}
                    material={materials['Material.006']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_3.geometry}
                    material={materials['Material.005']}
                />
            </group>
            <group position={[0, 0.034, 4.788]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003.geometry}
                    material={materials['Glass.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003_1.geometry}
                    material={materials['Screw.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003_2.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003_3.geometry}
                    material={materials['Material.008']}
                />
            </group>
            <group position={[0, 0.034, 4.788]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004.geometry}
                    material={materials['Glass.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_1.geometry}
                    material={materials['Screw.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_2.geometry}
                    material={materials['Material.010']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_3.geometry}
                    material={materials['Material.009']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Horne_svetielko.geometry}
                material={materials['White light']}
                position={[0, 0, 4.717]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Predne_svetlo_konstrukcia.geometry}
                material={materials.Chrome}
                position={[0, 0, 4.717]}
            />
            <group position={[0, -0.024, 4.822]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004.geometry}
                    material={materials.Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004_1.geometry}
                    material={materials.Glass}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SvetloPodKruhmy.geometry}
                material={materials.Chrome}
                position={[0, -0.024, 4.822]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Velke_svetlo003.geometry}
                material={materials.Chrome}
                position={[0, -0.024, 4.822]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-LightGlass'].geometry}
                material={materials.glass}
                position={[0, 0, 3.361]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-smerovka'].geometry}
                material={materials['Material.001']}
                position={[0, 0, 3.361]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-smerovka_Pruzky'].geometry}
                material={materials['Material.001']}
                position={[0, 0, 3.361]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-smerovka_vrch'].geometry}
                material={materials.Material}
                position={[0, 0, 3.361]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Window'].geometry}
                material={materials.Windows}
                position={[0, 0.146, 3.998]}
            />
            <group position={[0, 0, 4.06]}>
                <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.Chrome} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_1.geometry}
                    material={materials['metalic black']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-FogBumber002'].geometry}
                material={materials['Material.002']}
                position={[0, 0, 4.06]}
            />
            <group position={[0, -0.85, 5.301]}>
                <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Screw} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BLACKNESS}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bonet.geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0.146, 3.998]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BonetTrim.geometry}
                material={materials['metalic black']}
                position={[0, 0.146, 3.998]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Fender'].geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, 3.361]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Fender-Trim'].geometry}
                material={materials.Chrome}
                position={[0, 0, 1.922]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Splitter'].geometry}
                material={materials['metalic black']}
                position={[0, 0, 4.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-FogBumber'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, 0, 4.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Grill-Black'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, -0.642, 5.384]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Grid-lower'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, -0.741, 5.252]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Grid-Top'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0.008, -0.175, 5.413]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Grill-Silver'].geometry}
                material={materials.Chrome}
                position={[0, -0.519, 7.552]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['F-Bumber'].geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, 4.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.G002.geometry}
                material={materials.Chrome}
                position={[-0.073, -0.14, 5.415]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T002.geometry}
                material={materials.Chrome}
                position={[-0.047, -0.14, 5.415]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <group position={[-0.027, -0.223, 5.414]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R002_1.geometry}
                    material={materials['č Logo']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R002_2.geometry}
                    material={materials.Chrome}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Gnahradne.geometry}
                material={materials['Chrome.002']}
                position={[0, 0.062, 2.265]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.012, 0.098, 0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tnahradne.geometry}
                material={materials['Chrome.002']}
                position={[0, 0.062, 2.265]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.012, 0.098, 0.012]}
            />
            <group position={[0, -0.022, 2.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.172}>
                <mesh castShadow receiveShadow geometry={nodes.R004.geometry} material={materials.Brzdy} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R004_1.geometry}
                    material={materials['Chrome.002']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Gobe.geometry}
                material={materials.Chrome}
                position={[0, 0.062, 2.265]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tobe.geometry}
                material={materials.Chrome}
                position={[0, 0.062, 2.265]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <group position={[0, -0.022, 2.265]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R003.geometry}
                    material={materials['č Logo']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.R003_1.geometry}
                    material={materials.Chrome}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Dvere.geometry}
                material={materials.FarbaKaroserie}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SideSkirt.geometry}
                material={materials['metalic black']}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Black_details_behind_the_windows.geometry}
                material={materials['Farba Diffuserov']}
                position={[0, 1.727, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Black_part_of_roof.geometry}
                material={materials['Farba Diffuserov']}
                position={[0, 1.447, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DoorWindow.geometry}
                material={materials.Windows}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.top_of_the_roof.geometry}
                material={materials.FarbaKaroserie}
                position={[0, 1.447, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StrechaVycnelok.geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, -1.39]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Bumper'].geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-diffuser'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-diffuserDetail'].geometry}
                material={materials['metalic black']}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-diff-ExhaustPart'].geometry}
                material={materials['plastic black']}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-trunk'].geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-SmallWindow'].geometry}
                material={materials.FarbaKaroserie}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Bumper001'].geometry}
                material={materials.FarbaKaroserie}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-smerovka'].geometry}
                material={materials.Material}
                position={[0, 0, -5.47]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <group position={[0, 0, -5.47]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018.geometry}
                    material={materials['R-svetlo']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_1.geometry}
                    material={materials.Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018_2.geometry}
                    material={materials.glass}
                />
            </group>
            <group position={[0, 0, -5.47]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019.geometry}
                    material={materials.Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019_1.geometry}
                    material={materials['R-svetlo']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019_2.geometry}
                    material={materials.glass}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Exhaust'].geometry}
                material={materials.Chrome}
                position={[0.003, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-exhaustPlast'].geometry}
                material={materials['plastic black']}
                position={[0, -0.892, -4.782]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Trim'].geometry}
                material={materials['Farba Diffuserov']}
                position={[-0.003, 0, -5.597]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-ExhaustGrid'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, -0.765, -5.657]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Diffuser-bottom'].geometry}
                material={materials['Farba Diffuserov']}
                position={[0, -0.749, -5.342]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Diffuser-Silver'].geometry}
                material={materials.Chrome}
                position={[0, -0.439, -5.342]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <group position={[0, 0, -5.47]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022.geometry}
                    material={materials['plastic black']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022_1.geometry}
                    material={materials['White light']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-license'].geometry}
                material={materials['White plate']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Window'].geometry}
                material={materials.Windows}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-Fender'].geometry}
                material={materials.FarbaKaroserie}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['R-SmallWindow001'].geometry}
                material={materials.Windows}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NIssanLogo.geometry}
                material={materials.Chrome}
                position={[0, 0.66, -5.407]}
                rotation={[-1.295, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Nissan-Logo-700x394'].geometry}
                    material={materials['Nissan-Logo-700x394']}
                    position={[0, 0.005, 0.009]}
                    rotation={[3.114, 0, -Math.PI]}
                />
            </mesh>
            <group position={[0, 0.514, -4.977]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005.geometry}
                    material={materials['Glass.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005_1.geometry}
                    material={materials['Screw.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005_2.geometry}
                    material={materials['Material.011']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005_3.geometry}
                    material={materials['Material.012']}
                />
            </group>
            <group position={[0, 0.514, -4.977]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006.geometry}
                    material={materials['Glass.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006_1.geometry}
                    material={materials['Screw.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006_2.geometry}
                    material={materials['Material.014']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006_3.geometry}
                    material={materials['Material.013']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle003.geometry}
                material={materials['Farba Diffuserov']}
                position={[-0.002, -0.795, 3.411]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005.geometry}
                material={materials['Farba Diffuserov']}
                position={[0.002, -0.795, -3.349]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Disk001.geometry}
                material={materials['Chrome.003']}
                position={[0, -0.795, 3.411]}
                rotation={[1.579, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Disk002.geometry}
                material={materials.Chrome}
                position={[0.002, -0.795, -3.349]}
                rotation={[1.579, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brzdiaci_kotuč.geometry}
                material={materials.iron}
                position={[0.005, -0.796, 3.407]}
                rotation={[-1.521, 0, -Math.PI / 2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Calliper.geometry}
                    material={materials.Brzdy}
                    position={[-0.017, -0.006, 0]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brzdiaci_kotuč001.geometry}
                material={materials['iron.001']}
                position={[0.005, -0.796, -3.339]}
                rotation={[-1.521, 0, -Math.PI / 2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Calliper001.geometry}
                    material={materials.Brzdy}
                    position={[-0.018, -0.007, 0]}
                />
            </mesh>
        </a.group>
    )
}

export default Car;
