import * as THREE from "../js/three.module.js";
export default function concha({x,y,z}){
// Espacio para colocar los objetos
    
var concha1 = new THREE.SphereGeometry(1.5, 32, 32);
var materialcon = new THREE.MeshLambertMaterial({ color: 0xd7ccc8 });
var meshconcha = new THREE.Mesh(concha1, materialcon);
meshconcha.scale.set(1.3, 0.6, 1.3);

var azucar1 = new THREE.SphereGeometry(1.52, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.8);
var materialazu = new THREE.MeshLambertMaterial({ color: 0x4e342e });
var meshazucar = new THREE.Mesh(azucar1, materialazu);
meshconcha.add(meshazucar);
//scene.add(meshconcha);

const conchap = new THREE.Group();
conchap.add(meshconcha);
conchap.position.set(x,y,z);
return conchap;
}
  