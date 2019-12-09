import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import TrackballControl from '../../shared/trackball-control'
import useStudioCubeTexture from '../../shared/studio-cube-texture'
import Canvas from '../../shared/three-canvas'
import Button from '../../shared/button'
import Hand from '../../icons/hand/draw/fill'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
`

const Filler = styled.div`
  padding-bottom: 125%;

  ${up('sm')} {
    padding-bottom: 53.3%;
  }
`

export const GridFinMesh = ({ url }) => {
  const [gltf, setGltf] = useState()

  const textureCube = useStudioCubeTexture()

  useEffect(() => {
    const loader = new GLTFLoader()

    loader.load(url, gltf => {
      const mesh = gltf.scene.children[0]

      mesh.material.envMap = textureCube
      mesh.material.envMapIntensity = 2.75

      setGltf(gltf)
    })
  }, [textureCube, url])

  if (!gltf) return null

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    />
  )
}

const buttonPosition = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  ${up('md')} {
    bottom: 30px;
  }
`

const Animation = ({ gridFinGLTF }) => {
  return (
    <Wrapper>
      <Filler />
      <Canvas>
        <GridFinMesh url={gridFinGLTF} />
        <TrackballControl
          initialPosition={[2, 0, 0]}
          autoRotationSpeed={[0, 0.4, 0]}
          cameraUp={[0, 1, 0]}
        />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
      <Button css={buttonPosition} as={Link} to="/playground/grid-fin">
        <Hand css="margin-right: 15px;" />
        Interact
      </Button>
    </Wrapper>
  )
}

export default Animation
