import * as THREE from "../js/three.module.js";

export default function E04({x,y,z}){

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




// ramo
var flor1 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat1 = new THREE.MeshLambertMaterial({color:0xF54927});

var flor1 = new THREE.Mesh(flor1,mat1);
flor1.position.set(0,5,0);
flor1.rotation.z=Math.PI/2;
flor1.scale.set(.4, .4, .4);
//scene.add(flor1);

var flor2 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat2 = new THREE.MeshLambertMaterial({color:0xF5B727});

var flor2 = new THREE.Mesh(flor2,mat2);
flor2.position.set(8,5,0);
flor2.rotation.z=Math.PI/2;
flor2.scale.set(.4, .4, .4);
//scene.add(flor2);

var flor3 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat3= new THREE.MeshLambertMaterial({color:0xF5B727});
var flor3 = new THREE.Mesh(flor3,mat3);
flor3.position.set(-8,5,0);
flor3.rotation.z=Math.PI/2;
flor3.scale.set(.4, .4, .4);
//scene.add(flor3);

var flor4 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat4 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor4 = new THREE.Mesh(flor4,mat4);
flor4.position.set(16,5,0);
flor4.rotation.z=Math.PI/2;
flor4.scale.set(.4, .4, .4);
//scene.add(flor4);

var flor5 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat5 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor5 = new THREE.Mesh(flor5,mat5);
flor5.position.set(-16,5,0);
flor5.rotation.z=Math.PI/2;
flor5.scale.set(.4, .4, .4);
//scene.add(flor5);

var flor6 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat6 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor6 = new THREE.Mesh(flor6,mat6);
flor6.position.set(24,5,0);
flor6.rotation.z=Math.PI/2;
flor6.scale.set(.4, .4, .4);
//sscene.add(flor6);
/*
var flor7 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat7 = new THREE.MeshLambertMaterial({color:0xF5B727});
var flor7 = new THREE.Mesh(flor7,mat7);
flor7.position.set(-24,5,0);
flor7.rotation.z=Math.PI/2;
flor7.scale.set(.4, .4, .4);
scene.add(flor7);

var flor8 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat8 = new THREE.MeshLambertMaterial({color:0xF54927});
var flor8 = new THREE.Mesh(flor8,mat8);
flor8.position.set(-32,5,0);
flor8.rotation.z=Math.PI/2;
flor8.scale.set(.4, .4, .4);
scene.add(flor8);*/


//naranja
/*var flor1 = new THREE.TorusKnotGeometry(1,3,100,16,18,13);
var mat1 = new THREE.MeshLambertMaterial({color:0xF54927});

var f1 = new THREE.Mesh(flor1,mat1);
f1.position.set(15,6,-10);
f1.rotation.set(Math.PI/2,0,0);
scene.add(f1);*/

const ESC04 =new THREE.Group();
ESC04.add(flor1,flor2,flor3,flor4,flor5,flor6);
ESC04.position.set(x,y,z);

return ESC04;


}
