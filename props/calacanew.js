import * as THREE from "../js/three.module.js";

export default function cala({x,y,z}){


// Cabeza
var geometryCranio1 = new THREE.SphereGeometry(2, 32, 32);
var materialCranio1 = new THREE.MeshBasicMaterial({
    color: 0xE8E0C8,
});
var cranio1 = new THREE.Mesh(geometryCranio1, materialCranio1);
cranio1.scale.set(1.3, 1.15, 1.20);
cranio1.position.set(0, 12, 0);
//scene.add(cranio1);

var geometryc1 = new THREE.CylinderGeometry(.3,.3,10,30,30);
var materialc1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c1 = new THREE.Mesh(geometryc1,materialc1);
//scene.add(c1);
c1.position.set(0,8,0);
//costillas
var geometrycs1 = new THREE.CylinderGeometry(.3,.3,3.5,30,30);
var materialcs1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cs1 = new THREE.Mesh(geometrycs1,materialcs1);
//scene.add(cs1);
cs1.position.set(0,7.5,0);
cs1.rotation.z = Math.PI / 2;

var geometrycs11 = new THREE.CylinderGeometry(.3,.3,3,30,30);
var materialcs11 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cs11 = new THREE.Mesh(geometrycs11,materialcs11);
//scene.add(cs11);
cs11.position.set(0,6.5,0);
cs11.rotation.z = Math.PI / 2;

var geometrycs21 = new THREE.CylinderGeometry(.3,.3,2.5,30,30);
var materialcs21 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cs21 = new THREE.Mesh(geometrycs21,materialcs21);
//scene.add(cs21);
cs21.position.set(0,5.5,0);
cs21.rotation.z = Math.PI / 2;

var geometryc11 = new THREE.CylinderGeometry(.2,.2,5,30,30);
var materialc11 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var c11 = new THREE.Mesh(geometryc11,materialc11);
//scene.add(c11);
c11.position.set(0,8.5,0);
c11.rotation.z = Math.PI / 2;

var geometryc21 = new THREE.SphereGeometry(.4, 32, 32);
var materialc21 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c21 = new THREE.Mesh(geometryc21,materialc21);
//scene.add(c21);
c21.position.set(2.5,8.5,0);

var geometryc31 = new THREE.SphereGeometry(.4, 32, 32);
var materialc31 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c31 = new THREE.Mesh(geometryc31,materialc31);
//scene.add(c31);
c31.position.set(-2.5,8.5,0);

//brazo izquierdo
var geometryc41 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialc41 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c41 = new THREE.Mesh(geometryc41,materialc41);
//scene.add(c41);
c41.position.set(-2.5,7.5,1);
c41.rotation.x = Math.PI / -4;

var geometryc411 = new THREE.SphereGeometry(.4, 32, 32);
var materialc411 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c411 = new THREE.Mesh(geometryc411,materialc411);
//scene.add(c411);
c411.position.set(-2.5,6.5,2);

var geometryc421 = new THREE.CylinderGeometry(.2,.2,2,30,30);
var materialc421 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c421 = new THREE.Mesh(geometryc421,materialc421);
//scene.add(c421);
c421.position.set(-1.8,7,2.5);
c421.rotation.x = Math.PI / 4;
c421.rotation.z = Math.PI / -4;

//brazo derecho
var geometryc51 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialc51 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c51 = new THREE.Mesh(geometryc51,materialc51);
//scene.add(c51);
c51.position.set(2.5,7.5,1);
c51.rotation.x = Math.PI / -4;

var geometryc511 = new THREE.SphereGeometry(.4, 32, 32);
var materialc511 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c511 = new THREE.Mesh(geometryc511,materialc511);
//scene.add(c511);
c511.position.set(2.5,6.5,2);

var geometryc521 = new THREE.CylinderGeometry(.2,.2,2,30,30);
var materialc521 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c521 = new THREE.Mesh(geometryc521,materialc521);
//scene.add(c521);
c521.position.set(1.8,7,2.5);
c521.rotation.x = Math.PI / 4;
c521.rotation.z = Math.PI / 4;



var geometryp11 = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialp11 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var p11 = new THREE.Mesh(geometryp11,materialp11);
//scene.add(p11);
p11.position.set(0,3,0);
p11.rotation.z = Math.PI / 2;

var geometryp21 = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialp21 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var p21 = new THREE.Mesh(geometryp21,materialp21);
//scene.add(p21);
p21.position.set(2,2.9,1.7);
p21.rotation.x = Math.PI /2 ;

var geometryp31 = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialp31 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var p31 = new THREE.Mesh(geometryp31,materialp31);
//scene.add(p31);
p31.rotation.x = Math.PI /2 ;
p31.position.set(-2,2.9,1.7);

var geometryp41 = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialp41 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var p41 = new THREE.Mesh(geometryp41,materialp41);
//scene.add(p41);
p41.position.set(-2,1,4);

var geometryp51 = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialp51 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var p51 = new THREE.Mesh(geometryp51,materialp51);
//scene.add(p51);
p51.position.set(2,1,4);

var geometryc551 = new THREE.SphereGeometry(.4, 32, 32);
var materialc551 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c551 = new THREE.Mesh(geometryc551,materialc551);
//scene.add(c551);
c551.position.set(2,2.8,4);

var geometryc561 = new THREE.SphereGeometry(.4, 32, 32);
var materialc561 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var c561 = new THREE.Mesh(geometryc561,materialc561);
//scene.add(c561);
c561.position.set(-2,2.8,4);

//pie
var geometrypi31 = new THREE.BoxGeometry(1,.5,2);
var materialpi31 = new THREE.MeshBasicMaterial({
    color:0x260303,
    side: THREE.DoubleSide
});
var pi31 = new THREE.Mesh(geometrypi31,materialpi31);
//scene.add(pi31);
pi31.position.set(-2,-1,4.5);

var geometrypi41 = new THREE.BoxGeometry(1,.5,2);
var materialpi41 = new THREE.MeshBasicMaterial({
    color:0x260303,
    side: THREE.DoubleSide
});
var pi41 = new THREE.Mesh(geometrypi41,materialpi41);
//scene.add(pi41);
pi41.position.set(2,-1,4.5);


//ojos
var geometryojos11 = new THREE.CircleGeometry(.5,40);
var materialojos11 = new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var ojos11 = new THREE.Mesh(geometryojos11,materialojos11);
//scene.add(ojos);
ojos11.position.set(1,11.6,2.4);

var geometryojos111 = new THREE.CircleGeometry(.5,40);
var materialojos111 = new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var ojos111 = new THREE.Mesh(geometryojos111,materialojos111);
//scene.add(ojos111);
ojos111.position.set(-1,11.6,2.4);

//nariz
var geometryNariz1 = new THREE.ConeGeometry(0.4, 0.09, 4);
var materialnariz1= new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var nariz1 = new THREE.Mesh(geometryNariz1, materialnariz1);
nariz1.rotation.x = Math.PI / 2;
nariz1.position.set(0,11,2.2);
//scene.add(nariz1);

//boca
var geometryb11 = new THREE.PlaneGeometry(1.5,.1);
var materialb11 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var b11 = new THREE.Mesh(geometryb11,materialb11);
//scene.add(b11);
b11.position.set(0,10,2);


var geometryb21 = new THREE.PlaneGeometry(.1,.5);
var materialb21 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var b21 = new THREE.Mesh(geometryb21,materialb21);
//scene.add(b21);
b21.position.set(0,10,2);

var geometryb31 = new THREE.PlaneGeometry(.1,.5);
var materialb31 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var b31 = new THREE.Mesh(geometryb31,materialb31);
//scene.add(b31);
b31.position.set(.5,10,2);

var geometryb41 = new THREE.PlaneGeometry(.1,.5);
var materialb41 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var b41 = new THREE.Mesh(geometryb41,materialb41);
//scene.add(b41);
b41.position.set(-.5,10,2);

//mandibula
var geometryMandibula1 = new THREE.BoxGeometry(3,3.5,2);
var mandibula1 = new THREE.Mesh(geometryMandibula1, materialMandibula1);
mandibula1.position.set(0,11,.9);
//scene.add(mandibula1);


/*////botella
const botella2= ESC10({X:-20,Y:0,Z:-20});
//scene.add(b);
botella2.position.set(0,5,3);
botella2.scale.set(.2,.2,.2);*/

var calacaf1 = new THREE.Group();
    calacaf1.add(cranio1,c1,cs1,cs11,cs21,c11,c21,c31,c41,c411,c421,c511,c521,p11,p21,p31,p41,p51,c551,c561,pi31,pi41,ojos11,ojos111,nariz1,b11,b21,b31,b41,mandibula1);
    calacaf1.position.set(x, y, z);

    return calacaf1;
}