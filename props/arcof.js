import * as THREE from "../js/three.module.js";

export default function arco({x,y,z}){

// Espacio para colocar los objetos
// GridHelper
/*var gridHelper = new THREE.GridHelper(50,50);
scene.add(gridHelper);

var axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);*/

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

var florGeo = new THREE.TorusKnotGeometry(4, 3, 100, 16, 18, 13);
var mat1 = new THREE.MeshLambertMaterial({ color: 0xF54927 });

// --- FLOR 1 (Extremo izquierdo) ---
var flo1 = new THREE.Mesh(florGeo, mat1);
flo1.position.set(-8, 10, 0);
flo1.scale.set(0.4, 0.4, 0.4);
flo1.receiveShadow = true;
//scene.add(flo1);

var flo2 = new THREE.Mesh(florGeo, mat1);
flo2.position.set(-2, 15, 0);
flo2.scale.set(0.4, 0.4, 0.4);
flo2.receiveShadow = true;
//scene.add(flo2);

var flo3 = new THREE.Mesh(florGeo, mat1);
flo3.position.set(4, 20, 0);
flo3.scale.set(0.4, 0.4, 0.4);
flo3.receiveShadow = true;
//scene.add(flo3);

var flo4 = new THREE.Mesh(florGeo, mat1);
flo4.position.set(12, 20, 0);
flo4.scale.set(0.4, 0.4, 0.4);
flo4.receiveShadow = true;
//scene.add(flo4);

var flo5 = new THREE.Mesh(florGeo, mat1);
flo5.position.set(20, 15, 0);
flo5.scale.set(0.4, 0.4, 0.4);
flo5.receiveShadow = true;
//scene.add(flo5);


var flo6 = new THREE.Mesh(florGeo, mat1);
flo6.position.set(25, 10, 0);
flo6.scale.set(0.4, 0.4, 0.4);
flo6.receiveShadow = true;
//scene.add(flo6);




const arco1 =new THREE.Group();
arco1.add(flo1,flo2,flo3,flo4,flo5,flo6);
arco1.position.set(x,y,z);

return arco1;


}