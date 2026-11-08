import * as THREE from "../js/three.module.js";

export default function cala({ x = 0, y = 0, z = 0 } = {}) {

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

// Cabeza
var geometrycranio10 = new THREE.SphereGeometry(2, 32, 32);
var materialcranio10 = new THREE.MeshBasicMaterial({
    color: 0xE8E0C8,
});
var cra10 = new THREE.Mesh(geometrycranio10, materialcranio10);
cra10.scale.set(1.3, 1.15, 1.20);
cra10.position.set(0, 12, 0);
//scene.add(cra10);


//costillas
var geometrycos = new THREE.CylinderGeometry(.3,.3,3.5,30,30);
var materialcos = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cos = new THREE.Mesh(geometrycos,materialcos);
//scene.add(cos);
cos.position.set(0,7.5,0);
cos.rotation.z = Math.PI / 2;

var geometrycos1 = new THREE.CylinderGeometry(.3,.3,3,30,30);
var materialcos1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cos1 = new THREE.Mesh(geometrycos1,materialcos1);
//scene.add(cos1);
cos1.position.set(0,6.5,0);
cos1.rotation.z = Math.PI / 2;

var geometrycos2 = new THREE.CylinderGeometry(.3,.3,2.5,30,30);
var materialcos2 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var cos2 = new THREE.Mesh(geometrycos2,materialcos2);
//scene.add(cos2);
cos2.position.set(0,5.5,0);
cos2.rotation.z = Math.PI / 2;

var geometryclavi1 = new THREE.CylinderGeometry(.2,.2,5,30,30);
var materialclavi1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var clavi1 = new THREE.Mesh(geometryclavi1,materialclavi1);
//scene.add(clavi1);
clavi1.position.set(0,8.5,0);
clavi1.rotation.z = Math.PI / 2;

var geometrybolita1 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita1 = new THREE.Mesh(geometrybolita1,materialbolita1);
//scene.add(bolita1);
bolita1.position.set(2.5,8.5,0);

var geometrybolita2 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita2  = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita2  = new THREE.Mesh(geometrybolita2 ,materialbolita2 );
//scene.add(bolita2 );
bolita2 .position.set(-2.5,8.5,0);

//brazo izquierdo
var geometrybrazoi = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialbrazoi = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var brazoi = new THREE.Mesh(geometrybrazoi,materialbrazoi);
//scene.add(brazoi);
brazoi.position.set(-2.5,7.5,1);
brazoi.rotation.x = Math.PI / -4;

var geometrybolita3 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita3  = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita3  = new THREE.Mesh(geometrybolita3 ,materialbolita3 );
//scene.add(bolita3 );
bolita3 .position.set(-2.5,6.5,2);

var geometrybrazoa = new THREE.CylinderGeometry(.2,.2,2,30,30);
var materialbrazoa = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var brazoa = new THREE.Mesh(geometrybrazoa,materialbrazoa);
//scene.add(brazoa);
brazoa.position.set(-1.8,7,2.5);
brazoa.rotation.x = Math.PI / 4;
brazoa.rotation.z = Math.PI / -4;


//brazo derecho
var geometrybrazoi1 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialbrazoi1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var brazoi1 = new THREE.Mesh(geometrybrazoi1,materialbrazoi1);
//scene.add(brazoi1);
brazoi1.position.set(2.5,7.5,1);
brazoi1.rotation.x = Math.PI / -4;

var geometrybolita4 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita4 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita4 = new THREE.Mesh(geometrybolita4,materialbolita4);
//scene.add(bolita4);
bolita4.position.set(2.5,6.5,2);

var geometrybrazoa1 = new THREE.CylinderGeometry(.2,.2,2,30,30);
var materialbrazoa1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var brazoa1 = new THREE.Mesh(geometrybrazoa1,materialbrazoa1);
//scene.add(brazoa1);
brazoa1.position.set(1.8,7,2.5);
brazoa1.rotation.x = Math.PI / 4;
brazoa1.rotation.z = Math.PI / 4;

var geometrycolumna = new THREE.CylinderGeometry(.2,.2,8,30,30);
var materialcolumna = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var columna = new THREE.Mesh(geometrycolumna,materialcolumna);
//scene.add(columna);
columna.position.set(0,7,0);
//columna.rotation.x = Math.PI / -4;

var geometrycadera = new THREE.CylinderGeometry(.2,.2,4,30,30);
var materialcadera = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var cadera = new THREE.Mesh(geometrycadera,materialcadera);
//scene.add(cadera);
cadera.position.set(0,3,0);
cadera.rotation.z = Math.PI / 2;

var geometrypierna1 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialpierna1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var pierna1 = new THREE.Mesh(geometrypierna1,materialpierna1);
//scene.add(pierna1);
pierna1.position.set(2,3,1.5);
pierna1.rotation.x = Math.PI / 2;

var geometrypierna2 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialpierna2 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var pierna2 = new THREE.Mesh(geometrypierna2,materialpierna2);
//scene.add(pierna2);
pierna2.position.set(-2,3,1.5);
pierna2.rotation.x = Math.PI / 2;

var geometrybolita5 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita5  = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita5  = new THREE.Mesh(geometrybolita5 ,materialbolita5 );
//scene.add(bolita5);
bolita5.position.set(-2,3,3);

var geometrybolita6 = new THREE.SphereGeometry(.4, 32, 32);
var materialbolita6  = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var bolita6  = new THREE.Mesh(geometrybolita6,materialbolita6);
//scene.add(bolita6);
bolita6.position.set(2,3,3);

var geometrypierna3 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialpierna3 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var pierna3 = new THREE.Mesh(geometrypierna3,materialpierna3);
//scene.add(pierna3);
pierna3.position.set(-2,1.5,3);

var geometrypierna4 = new THREE.CylinderGeometry(.2,.2,3,30,30);
var materialpierna4 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide
});
var pierna4 = new THREE.Mesh(geometrypierna4,materialpierna4);
//scene.add(pierna4);
pierna4.position.set(2,1.5,3);


//pie
var geometrypie1 = new THREE.BoxGeometry(1,.5,2);
var materialpie1 = new THREE.MeshBasicMaterial({
    color:0x260303,
    side: THREE.DoubleSide
});
var pie1 = new THREE.Mesh(geometrypie1,materialpie1);
//scene.add(pie1);
pie1.position.set(-2,-0.2,3.5);

var geometrypie2 = new THREE.BoxGeometry(1,.5,2);
var materialpie2 = new THREE.MeshBasicMaterial({
    color:0x260303,
    side: THREE.DoubleSide
});
var pie2 = new THREE.Mesh(geometrypie2,materialpie2);
//scene.add(pie2);
pie2.position.set(2,-0.2,3.5);



//ojos
var geometryojos2 = new THREE.CircleGeometry(.5,40);
var materialojos2 = new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var ojos2 = new THREE.Mesh(geometryojos2,materialojos2);
//scene.add(ojos2);
ojos2.position.set(1,11.6,2.4);

var geometryojos3 = new THREE.CircleGeometry(.5,40);
var materialojos3 = new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var ojos3 = new THREE.Mesh(geometryojos3,materialojos3);
//scene.add(ojos3);
ojos3.position.set(-1,11.6,2.4);


//nariz
var geometryNariz1= new THREE.ConeGeometry(0.4, 0.09, 4);
var materialnariz1= new THREE.MeshBasicMaterial({
    color:0x180501,
    side: THREE.DoubleSide });
var nariz1 = new THREE.Mesh(geometryNariz1, materialnariz1);
nariz1.rotation.x = Math.PI / 2;
nariz1.position.set(0,11,2.2);
//scene.add(nariz1);

//boca
var geometryboca1 = new THREE.PlaneGeometry(1.5,.1);
var materialboca1 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var boca1 = new THREE.Mesh(geometryboca1,materialboca1);
//scene.add(boca1);
boca1.position.set(0,10,2);


var geometryboca2 = new THREE.PlaneGeometry(.1,.5);
var materialboca2 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var boca2 = new THREE.Mesh(geometryboca2,materialboca2);
//scene.add(boca2);
boca2.position.set(0,10,2);

var geometryboca3 = new THREE.PlaneGeometry(.1,.5);
var materialboca3 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var boca3 = new THREE.Mesh(geometryboca3,materialboca3);
//scene.add(boca3);
boca3.position.set(.5,10,2);

var geometryboca4 = new THREE.PlaneGeometry(.1,.5);
var materialboca4 = new THREE.MeshBasicMaterial({
    color:0x030303,
    side: THREE.DoubleSide });
var boca4 = new THREE.Mesh(geometryboca4,materialboca4);
//scene.add(boca4);
boca4.position.set(-.5,10,2);

//mandibula
var geometryMandibula1 = new THREE.BoxGeometry(3,3.5,2);
var materialmandibula1 = new THREE.MeshBasicMaterial({
    color:0xE8E0C8,
    side: THREE.DoubleSide });
var mandibula1 = new THREE.Mesh(geometryMandibula1, materialmandibula1);
mandibula1.position.set(0,11,.9);
//scene.add(mandibula1);


 // CREACIÓN DEL GRUPO ESC01
    var catri = new THREE.Group();
    catri.add(cra10,cos,cos1,cos2,clavi1,bolita1,bolita2,bolita3,bolita4,bolita5,bolita6,brazoi,brazoi1,brazoa,brazoa1,cadera,pierna1,pierna2,pierna3,pierna4,pie1,pie2,columna,ojos2,ojos3,nariz1,boca1,boca2,mandibula1);
    catri.position.set(x, y, z);

    return catri;
}