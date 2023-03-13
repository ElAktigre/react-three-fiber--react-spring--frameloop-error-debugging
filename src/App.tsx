import { config, SpringValue, useChain, useSpring, UseSpringProps, useSpringRef } from '@react-spring/three'
import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'
import './App.css'
import { useState } from 'react'
import * as THREE from 'three'
import { Vector, Vector3 } from 'three'

export default function App() {
	const relativeRightPosition = 1
	const relativeLeftPosition = -1
	const relativeMiddlePosition = 0
	const slideDistance = 3
	// const [relativePosition, setRelativePosition] = useState(relativeMiddlePosition)
	const cubeSpringSlideRightRef = useSpringRef()
	const cubeSpringSlideLeftRef = useSpringRef()

	// const cubeSpringDefaultProps: UseSpringProps = {
	// 	loop: {
	// 		reverse: true,
	// 	},
	// 	config: config.stiff,
	// 	from: {
	// 		position: new THREE.Vector3(relativeMiddlePosition, 0, 0),
	// 	}
	// }

	// const [cubeSpringSlideRight, cubeSpringSlideRightApi] = useSpring(() => ({
	// 	...cubeSpringDefaultProps,
	// 	ref: cubeSpringSlideRightRef,
	// 	to: {
	// 		position: new THREE.Vector3(relativeRightPosition * slideDistance, 0, 0)
	// 	}
	// }), [])

	// const [cubeSpringSlideLeft, cubeSpringSlideLeftApi] = useSpring(() => ({
	// 	...cubeSpringDefaultProps,
	// 	ref: cubeSpringSlideLeftRef,
	// 	to: {
	// 		position: new THREE.Vector3(relativeLeftPosition * slideDistance, 0, 0)
	// 	}
	// }), [])

	// useChain([cubeSpringSlideRightRef, cubeSpringSlideLeftRef])

	// const [relativePosition, setRelativePosition] = useState<Vector3>(new Vector3(4, 0, 0))
	// const middlePosition = new Vector3(relativeMiddlePosition, 0 ,0)

	function makeVector3(x: number, y: number, z: number): Vector3 {
		return [x,y,z] as any as Vector3
	}

	const testPositionOne = new Vector3(0, 0 ,0)
	const testPositionTwo = new Vector3(4, 0 ,0)

	const cubeSpring = useSpring({
		config: config.wobbly,
		loop: {
			reverse: true,
		},
		from: {
			position: makeVector3(0,0,0),
		},
		to: {
			position: makeVector3(8,0,0),
		},
	})

	// const [cubeSpring, cubeSpringApi] = useSpring(() => ({
	// 	config: config.wobbly,
	// 	// loop: {
	// 	// 	reverse: true,
	// 	// },
	// 	// position: middlePosition,
	// 	from: {
	// 		position: testPositionOne,
	// 		// position: new Vector3(0, 0, 0),
	// 		x: 0,
	// 	},
	// 	to: {
	// 		position: testPositionTwo,
	// 		// position: new Vector3(2, 0, 0),
	// 		x: 4,
	// 	},
	// }))

	// cubeSpringApi.start()

	// function handlePointerOver() {
	// 	console.log('over!')
	// 	cubeSpringApi.start({
	// 		scale: 2,
	// 	})
	// }

	// function handlePointerLeave() {
	// 	console.log('leave!')
	// 	cubeSpringApi.start({
	// 		scale: .5,
	// 	})
	// }

	return (
		<Canvas
			style={{
				'height': '100vh'
			}}
		>
			<ambientLight
				intensity={2}
			/>
			<pointLight
				position={[0, 4, 6]}
				color='#00ff00'
				intensity={10}
			/>
			<Cube
				position={cubeSpring.position}
				// x={cubeSpring.x}
				// handlePointerOver={handlePointerOver}
				// handlePointerLeave={handlePointerLeave}
			/>
		</Canvas>
	)
}
