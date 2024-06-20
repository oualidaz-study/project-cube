import * as THREE from 'three';

export const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial();
  return new THREE.Mesh(geometry, material);
}