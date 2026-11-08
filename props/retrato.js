import * as THREE from "../js/three.module.js";

export default function E02({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

var geometry01 = new THREE.BoxGeometry(5,6,.5);
var material01 = new THREE.MeshBasicMaterial({
    color:0x7A4516,
    side: THREE.DoubleSide });
var mesh03 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh03);
mesh03.position.set(0,3,0.2);

var geometry01 = new THREE.PlaneGeometry(4.5,5.5);
var material01 = new THREE.MeshBasicMaterial({
    color:0x3C220B,
    side: THREE.DoubleSide });
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,3,.55);

var geometry0 = new THREE.PlaneGeometry(4,5);
var texture01 = new THREE.TextureLoader().load("./assets/calavera.jpg");
var material01 = new THREE.MeshLambertMaterial({
    map: texture01
});
var mesh02 = new THREE.Mesh(geometry0, material01);
//scene.add(mesh02);
mesh02.position.set(0,3,1);

const ESC02 =new THREE.Group();
ESC02.add(mesh01,mesh02,mesh03);
ESC02.position.set(x,y,z);

return ESC02;
}