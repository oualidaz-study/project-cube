<script>
  import { onMount } from 'svelte';
  import { initControls } from './controls';
  import { initCamera } from './camera';
  import { getScene, initScene } from './scene';
  import { initRenderer, rendererStartAnimationLoop } from './renderer';
  import { createCube } from './cube';

  let canvasRender;

  onMount(async () => {
    // Initialize all components
    initScene();
    initCamera();
    initRenderer(canvasRender);
    initControls();

    // Add Cube to Scene
    const cube = createCube();
    getScene().add(cube);

    // Start AnimationLoop
    rendererStartAnimationLoop();
  });
</script>

<canvas bind:this={canvasRender} />
