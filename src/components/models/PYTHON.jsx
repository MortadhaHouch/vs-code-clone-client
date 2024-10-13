/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function PYTHON(props) {
    const { nodes, materials } = useGLTF("../../assets/3d/python_programming_language.glb")
    let groupRef = useRef();
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001 // Adjust the rotation speed as needed
        }
    })
    return (
        <group scale={.5} ref={groupRef} {...props} dispose={null} rotateX={30} rotateZ={30}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material}
            position={[-0.002, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.501}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['.001']}
            position={[-0.002, 0, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={2.501}
        />
        </group>
    )
}

useGLTF.preload("../../assets/3d/python_programming_language.glb")
