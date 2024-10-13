/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Diego G. (https://sketchfab.com/empty_mirror)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/voxel-web-development-50ad959d6c6b4799806c45bfa46ca550
Title: Voxel Web Development
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function WorkStation(props) {
    const { nodes, materials } = useGLTF("../../assets/3d/voxel_web_development.glb")
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
            material={materials.palette}
            rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['palette.001']}
            rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['palette.002']}
            rotation={[Math.PI / 2, 0, 0]}
        />
        </group>
    )
}

useGLTF.preload("../../assets/3d/voxel_web_development.glb");
