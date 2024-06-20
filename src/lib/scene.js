import * as THREE from 'three';

let scene

export const initScene = () =>{
  scene = new THREE.Scene();
}

export const getScene = () => {return scene}