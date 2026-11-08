import *as THREE from "../js/three.module.js";
export  default function faro({x,y,z}){ 

//OBJETOS  ✏️✏️✏️✏️  🪶
// POSTE VERTICAL
var geometry01f = new THREE.BoxGeometry(0.5, 3, 0.5);
var material01f = new THREE.MeshLambertMaterial({color: 0x495057});
var mesh01f = new THREE.Mesh(geometry01f, material01f);
mesh01f.position.set(0, 1.5, 0);
//scene.add(mesh01f);

// BASE DEL POSTE
var geometry02f = new THREE.BoxGeometry(0.7, 0.5, 0.7);
var material02f = new THREE.MeshLambertMaterial({color: 0x343A40});
var mesh02f = new THREE.Mesh(geometry02f, material02f);
mesh02f.position.set(0, 0.25, 0);
//scene.add(mesh02f);

// BRAZO CURVO SUPERIOR
var geometry03f = new THREE.TorusGeometry(0.9, 0.12, 12, 32, Math.PI);
var material03f = new THREE.MeshLambertMaterial({color: 0x495057});
var mesh03f = new THREE.Mesh(geometry03f, material03f);
mesh03f.position.set(0.9, 3, 0);
mesh03f.rotation.set(0, 0, Math.PI/8);
//scene.add(mesh03f);

//  BRAZO  DEL POSTE
var geometry04f = new THREE.CylinderGeometry(0.12, 0.12, 0.5, 12);
var material04f = new THREE.MeshLambertMaterial({color: 0x495057});
var mesh04f = new THREE.Mesh(geometry04f, material04f);
mesh04f.position.set(0.85, 3.8, 0);
//scene.add(mesh04f);

// medio circulo gris fuerte superior de la luz
var geometry05f = new THREE.SphereGeometry(0.6, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
var material05f = new THREE.MeshLambertMaterial({color: 0x343a40});
var mesh05f = new THREE.Mesh(geometry05f, material05f);
mesh05f.position.set(1.6, 3.5, 0);
mesh05f.rotation.x = 0;
//scene.add(mesh05f);

// FOCO AMARILLO
var geometry06f = new THREE.SphereGeometry(0.30, 16, 12);
var material06f = new THREE.MeshLambertMaterial({color: 0Xfcbf49});
var mesh06f = new THREE.Mesh(geometry06f, material06f);
mesh06f.position.set(1.6, 3.5, 0);
//scene.add(mesh06f);



    
             //espacio para colocar el grupo
        const faro1 = new THREE.Group();
        faro1.add(mesh01f,mesh02f,mesh03f,mesh04f,mesh05f,mesh06f);
faro1.position.set(x,y,z); //no cololocar valor a x,y,z
        return faro1;}
