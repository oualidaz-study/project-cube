<script>
	import { onMount } from "svelte";
	import * as THREE from "three";
	import { OrbitControls } from "three/addons/controls/OrbitControls.js";

	let cubeCanvas;
	let scene, camera, renderer, cube;

	const animate = () => {
		renderer.render(scene, camera);
	};

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		renderer = new THREE.WebGLRenderer({
			canvas: cubeCanvas,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setAnimationLoop(animate);

		const controls = new OrbitControls(camera, renderer.domElement);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial();
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		return 0;
	});
</script>

<canvas bind:this={cubeCanvas}></canvas>
