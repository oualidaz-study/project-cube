<script>
	import { onMount } from "svelte";
	import * as THREE from "three";

	let cubeCanvas;
	let scene, camera, renderer, cube;

	const cubeAnimation = () => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	};

	const getWindowDimensions = () => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	};

	onMount(() => {
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		window.addEventListener("resize", getWindowDimensions);

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			windowWidth / windowHeight,
			0.1,
			1000
		);

		renderer = new THREE.WebGLRenderer({
			canvas: cubeCanvas,
		});
		renderer.setSize(windowWidth, windowHeight);
		renderer.setAnimationLoop(cubeAnimation);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;
	});
</script>

<canvas bind:this={cubeCanvas}></canvas>
