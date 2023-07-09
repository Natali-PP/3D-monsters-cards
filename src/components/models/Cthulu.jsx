/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/models/Cthulhu.gltf -o src/components/models/Cthulu.jsx -r public/
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useCursor } from '@react-three/drei'

export function Cthulhu(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Cthulhu.gltf')
  const { actions } = useAnimations(animations, group)
  const [hovered, setHovered] = useState(false)

  useCursor(hovered);
  useEffect(() => {
    actions['Flying'].reset().fadeIn(0.5).play();
    return () => actions['Flying'].fadeOut(0.5)
  }, [])

  useEffect(() => {
    if (hovered) {
      actions['Bite_Front'].reset().fadeIn(0.5).play();
      return () => actions['Bite_Front'].fadeOut(0.5)
    }
  }, [hovered])
  return (
    <group ref={group} {...props} dispose={null} onPointerOver={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <group name="Scene">
        <group name="MonsterArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.Head} />
          <skinnedMesh name="Cthulhu003" geometry={nodes.Cthulhu003.geometry} material={materials.Texture} skeleton={nodes.Cthulhu003.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Cthulhu.gltf')
