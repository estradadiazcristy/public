import *as THREE from "../js/three.module.js";
export  default function banco({x,y,z}){ 

  

//BANCO
// ASIENTO PRINCIPAL
var geometry01o = new THREE.BoxGeometry(8, 0.3, 1.8);
var material01o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh01o = new THREE.Mesh(geometry01o, material01o);
mesh01o.position.set(0, 2.5, 0);
//scene.add(mesh01o);

// LISTÓN 1 DEL ASIENTO
var geometry02o = new THREE.BoxGeometry(8, 0.2, 0.3);
var material02o = new THREE.MeshLambertMaterial({color: 0x654321});
var mesh02o = new THREE.Mesh(geometry02o, material02o);
mesh02o.position.set(0, 2.7, -0.6);
//scene.add(mesh02o);

// LISTÓN 2 DEL ASIENTO
var geometry03o = new THREE.BoxGeometry(8, 0.2, 0.3);
var material03o = new THREE.MeshLambertMaterial({color: 0x654321});
var mesh03o = new THREE.Mesh(geometry03o, material03o);
mesh03o.position.set(0, 2.7, -0.2);
//scene.add(mesh03o);

// LISTÓN 3 DEL ASIENTO
var geometry04o = new THREE.BoxGeometry(8, 0.2, 0.3);
var material04o = new THREE.MeshLambertMaterial({color: 0x654321});
var mesh04o = new THREE.Mesh(geometry04o, material04o);
mesh04o.position.set(0, 2.7, 0.2);
//scene.add(mesh04o);

// LISTÓN 4 DEL ASIENTO
var geometry05o = new THREE.BoxGeometry(8, 0.2, 0.3);
var material05o = new THREE.MeshLambertMaterial({color: 0x654321});
var mesh05o = new THREE.Mesh(geometry05o, material05o);
mesh05o.position.set(0, 2.7, 0.6);
//scene.add(mesh05o);

// PATA DELANTERA IZQUIERDA
var geometry06o = new THREE.BoxGeometry(0.4, 2.5, 0.4);
var material06o = new THREE.MeshLambertMaterial({color: 0x4a3022});
var mesh06o = new THREE.Mesh(geometry06o, material06o);
mesh06o.position.set(-3.3, 1.25, 0.6);
//scene.add(mesh06o);

// PATA DELANTERA DERECHA
var geometry07o = new THREE.BoxGeometry(0.4, 2.5, 0.4);
var material07o = new THREE.MeshLambertMaterial({color: 0x4a3022});
var mesh07o = new THREE.Mesh(geometry07o, material07o);
mesh07o.position.set(3.3, 1.25, 0.6);
//scene.add(mesh07o);

// PATA TRASERA IZQUIERDA
var geometry08o = new THREE.BoxGeometry(0.4, 2.5, 0.4);
var material08o = new THREE.MeshLambertMaterial({color: 0x4a3022});
var mesh08o = new THREE.Mesh(geometry08o, material08o);
mesh08o.position.set(-3.3, 1.25, -0.6);
//scene.add(mesh08o);

// PATA TRASERA DERECHA
var geometry09o = new THREE.BoxGeometry(0.4, 2.5, 0.4);
var material09o = new THREE.MeshLambertMaterial({color: 0x4a3022});
var mesh09o = new THREE.Mesh(geometry09o, material09o);
mesh09o.position.set(3.3, 1.25, -0.6);
//scene.add(mesh09o);

// RESPALDO PRINCIPAL
var geometry10o = new THREE.BoxGeometry(8, 2, 0.3);
var material10o = new THREE.MeshLambertMaterial({color: 0x654321});
var mesh10o = new THREE.Mesh(geometry10o, material10o);
mesh10o.position.set(0, 4, -0.8);
//scene.add(mesh10o);

// tabla VERTICAL 1
var geometry11o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material11o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh11o = new THREE.Mesh(geometry11o, material11o);
mesh11o.position.set(-3.4, 4, -0.6);
//scene.add(mesh11o);

// tabla VERTICAL 2
var geometry12o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material12o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh12o = new THREE.Mesh(geometry12o, material12o);
mesh12o.position.set(-2.3, 4, -0.6);
//scene.add(mesh12o);

// tabla VERTICAL 3
var geometry13o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material13o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh13o = new THREE.Mesh(geometry13o, material13o);
mesh13o.position.set(-1.15, 4, -0.6);
//scene.add(mesh13o);

// tabla VERTICAL 4
var geometry14o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material14o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh14o = new THREE.Mesh(geometry14o, material14o);
mesh14o.position.set(0, 4, -0.6);
//scene.add(mesh14o);

// tabla VERTICAL 5
var geometry15o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material15o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh15o = new THREE.Mesh(geometry15o, material15o);
mesh15o.position.set(1.15, 4, -0.6);
//scene.add(mesh15o);

// tabla VERTICAL 6
var geometry16o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material16o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh16o = new THREE.Mesh(geometry16o, material16o);
mesh16o.position.set(2.3, 4, -0.6);
//scene.add(mesh16o);

// tabla VERTICAL 7
var geometry17o = new THREE.BoxGeometry(0.3, 1.8, 0.2);
var material17o = new THREE.MeshLambertMaterial({color: 0x795334});
var mesh17o = new THREE.Mesh(geometry17o, material17o);
mesh17o.position.set(3.4, 4, -0.6);
//scene.add(mesh17o);

// SOPORTE INFERIOR
var geometry18o = new THREE.BoxGeometry(7.5, 0.3, 0.3);
var material18o = new THREE.MeshLambertMaterial({color: 0x4a3022});
var mesh18o = new THREE.Mesh(geometry18o, material18o);
mesh18o.position.set(0, 2, 0);
//scene.add(mesh18o);



   



         //espacio para colocar el grupo
    const banco1 = new THREE.Group();
    banco1.add(mesh01o,mesh02o,mesh03o,mesh04o,mesh05o,mesh06o,mesh07o,mesh08o,mesh09o,
        mesh10o,mesh11o,mesh12o,mesh13o,mesh14o,mesh15o,mesh16o,mesh17o,mesh18o
    );
banco1.position.set(x,y,z); //no cololocar valor a x,y,z
        return banco1;}
