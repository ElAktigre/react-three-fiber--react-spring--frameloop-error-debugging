import { animated, SpringValue } from '@react-spring/three';
import { Euler, Vector3 } from 'three';

interface Props {
	position: SpringValue<THREE.Vector3>
	// x: SpringValue<number>
	// handlePointerOver: () => void
	// handlePointerLeave: () => void
}

export default function Cube(props: Props) {

	const dimensions = {
		width: 1,
		height: 1,
		depth: 1
	}

	return (
		<animated.mesh
			position={props.position as any as Vector3}
			// position={new SpringValue<Vector3>(new Vector3(props.x, 1, 1))}
			rotation={new Euler(0, .5, 1)}
			// onPointerOver={props.handlePointerOver}
			// onPointerLeave={props.handlePointerLeave}
		>
			<boxGeometry
				args={[
					dimensions.width,
					dimensions.height,
					dimensions.depth,
				]}
			/>
			<meshStandardMaterial
				color='#0000ff'
			/>
		</animated.mesh>
	)
}