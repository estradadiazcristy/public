import * as THREE from "../js/three.module.js";

export default function E06({x,y,z}){

var light2 = new THREE.DirectionalLight(0Xffffff,1.5);
//scene.add(light2);
light2.position.set(0,20,50);
light2.target.position.set(0,0,0);

light2.castShadow = true;
light2.shadow.bias = 0.01;
light2.shadow.mapSize.widht = 1024;
light2.shadow.mapSize.height = 1024;

light2.shadow.camera.top=55;
light2.shadow.camera.bottom = -55;
light2.shadow.camera.left = -50;
light2.shadow.camera.right=-50;
light2.shadow.camera.visible = true;

var directionalHelper = new THREE.CameraHelper(light2.shadow.camera);
//scene.add(light2);



///  💫💢🐭🐭 LUCES



//OBJETOS  ✏️✏️✏️✏️  🪶
var geometry0 = new THREE.BoxGeometry(100,1,100);
var material0 = new THREE.MeshLambertMaterial({
    color:0x180501,
    side: THREE.DoubleSide, 
    });

var mesh0 = new THREE.Mesh(geometry0,material0);
//scene.add(mesh0);
mesh0.position.set(0,0,0);
mesh0.receiveShadow = true;




// Cruz
// ===============================
// CRUZ DE FLORES
// ===============================

// -------- PARTE SUPERIOR --------

var flor3 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat3 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor3 = new THREE.Mesh(flor3,mat3);
flor3.position.set(0,17,0);
flor3.scale.set(.18,.18,.18);
//scene.add(flor3);


var flor4 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat4 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor4 = new THREE.Mesh(flor4,mat4);
flor4.position.set(0,14.5,0);
flor4.scale.set(.18,.18,.18);
//scene.add(flor4);


var flor5 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat5 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor5 = new THREE.Mesh(flor5,mat5);
flor5.position.set(0,12,0);
flor5.scale.set(.18,.18,.18);
//scene.add(flor5);


// -------- CENTRO DE LA CRUZ --------

var flor6 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat6 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor6 = new THREE.Mesh(flor6,mat6);
flor6.position.set(0,9.5,0);
flor6.scale.set(.18,.18,.18);
//scene.add(flor6);


var flor7 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat7 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor7 = new THREE.Mesh(flor7,mat7);
flor7.position.set(0,7,0);
flor7.scale.set(.18,.18,.18);
//scene.add(flor7);


// -------- BRAZO IZQUIERDO --------

var flor8 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat8 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor8 = new THREE.Mesh(flor8,mat8);
flor8.position.set(-2.5,9.5,0);
flor8.scale.set(.18,.18,.18);
//scene.add(flor8);


var flor9 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat9 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor9 = new THREE.Mesh(flor9,mat9);
flor9.position.set(-5,9.5,0);
flor9.scale.set(.18,.18,.18);
//scene.add(flor9);


var flor10 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat10 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor10 = new THREE.Mesh(flor10,mat10);
flor10.position.set(-7.5,9.5,0);
flor10.scale.set(.18,.18,.18);
//scene.add(flor10);


// -------- BRAZO DERECHO --------

var flor11 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat11 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor11 = new THREE.Mesh(flor11,mat11);
flor11.position.set(2.5,9.5,0);
flor11.scale.set(.18,.18,.18);
//scene.add(flor11);


var flor12 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat12 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor12 = new THREE.Mesh(flor12,mat12);
flor12.position.set(5,9.5,0);
flor12.scale.set(.18,.18,.18);
//scene.add(flor12);


var flor13 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat13 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor13 = new THREE.Mesh(flor13,mat13);
flor13.position.set(7.5,9.5,0);
flor13.scale.set(.18,.18,.18);
//scene.add(flor13);


// -------- PARTE INFERIOR --------

var flor14 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat14 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor14 = new THREE.Mesh(flor14,mat14);
flor14.position.set(0,4.5,0);
flor14.scale.set(.18,.18,.18);
//scene.add(flor14);


var flor15 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat15 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor15 = new THREE.Mesh(flor15,mat15);
flor15.position.set(0,2,0);
flor15.scale.set(.18,.18,.18);
//scene.add(flor15);


var flor16 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat16 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor16 = new THREE.Mesh(flor16,mat16);
flor16.position.set(0,-0.5,0);
flor16.scale.set(.18,.18,.18);
//scene.add(flor16);

const cruz =new THREE.Group();
cruz.add(flor3,flor4,flor5,flor6,flor7,flor8,flor9,flor10,flor11,flor12,flor13,flor14,flor15,flor16);
cruz.position.set(x,y,z);

return cruz;


}