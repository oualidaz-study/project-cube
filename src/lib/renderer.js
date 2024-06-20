
import * as THREE from 'three';
import {  getControls } from './controls';
import { getCamera } from './camera';
import { getScene } from './scene';

let renderer;

export const initRenderer = (canvasRender) => {
  renderer = new THREE.WebGLRenderer({ canvas: canvasRender });
  renderer.setSize(window.innerWidth, window.innerHeight);
};

export const getRenderer = () => { return renderer }


export const rendererStartAnimationLoop = () => {
  renderer.setAnimationLoop(animate);
}

const animate = () => {
  requestAnimationFrame(animate);
  getControls().update();
  renderer.render(getScene(), getCamera());
}