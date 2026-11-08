import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){


//OBJETOS  ✏️✏️✏️✏️  🪶

// CRÁNEO 

// Cabeza
var geometryCranio = new THREE.SphereGeometry(2, 32, 32);
var materialCranio = new THREE.MeshBasicMaterial({
    color: 0xE8E0C8
});
var cranio = new THREE.Mesh(geometryCranio, materialCranio);
cranio.scale.set(1.3, 1.15, 1);
cranio.position.set(0, 4, 0);
//scene.add(cranio);

var geometryMandibula = new THREE.BoxGeometry(3,2,2);
var mandibula = new THREE.Mesh(geometryMandibula, materialCranio);
mandibula.position.set(0,2.7,0.78);
//scene.add(mandibula);

// Ojo izquierdo
var geometryOjo = new THREE.CircleGeometry(.7, 16, 16);
var materialOjo = new THREE.MeshBasicMaterial({
    color: 0x111111
});

var ojo1 = new THREE.Mesh(geometryOjo, materialOjo);
ojo1.position.set(-1,3.7,1.98);
//scene.add(ojo1);

// Ojo derecho
var ojo2 = new THREE.Mesh(geometryOjo, materialOjo);
ojo2.position.set(1,3.7,2);
//scene.add(ojo2);

var geometryNariz = new THREE.ConeGeometry(0.4, 0.09, 4);
var nariz = new THREE.Mesh(geometryNariz, materialOjo);
nariz.rotation.x = Math.PI / 2;
nariz.position.set(0,3.1, 1.98);
//scene.add(nariz);

var geometry01 = new THREE.PlaneGeometry(1.5,.1);
var material01 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,2.3,1.8);
var geometry02 = new THREE.PlaneGeometry(.1,.5);
var material02 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,2.3,1.8);
var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
mesh03.position.set(.5,2.3,1.8);
var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
mesh03.position.set(-.5,2.3,1.8);



const ESC01 =new THREE.Group();
ESC01.add(cranio,mandibula,ojo1,ojo2,nariz,mesh01,mesh02,mesh03);
ESC01.position.set(x,y,z);

return ESC01;


}



