import * as THREE from "../js/three.module.js";
export default function flor({x,y,z}){

// Espacio para colocar los objetos
// GridHelper
/*var gridHelper = new THREE.GridHelper(50,50);
//scene.add(gridHelper);

var axesHelper = new THREE.AxesHelper(50);
//scene.add(axesHelper);*/

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

var puntoluz = new THREE.PointLight(0x7FFF00, 4, 50, 2);
puntoluz.position.set(0, 20, 0);
//scene.add(puntoluz);
var helper1 = new THREE.PointLightHelper(puntoluz, 2);
//scene.add(helper1);
puntoluz.castShadow = true;

// ramo
var flr1 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mt1 = new THREE.MeshLambertMaterial({color:0xF54927});

var flr1 = new THREE.Mesh(flr1,mt1);
flr1.position.set(0,5,0);
flr1.rotation.x=Math.PI/2;
flr1.scale.set(.4, .4, .4);
//scene.add(flr1);

const rosa = new THREE.Group();
rosa.add(flr1);
rosa.position.set(x,y,z);
return rosa;

}