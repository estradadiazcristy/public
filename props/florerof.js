import * as THREE from "../js/three.module.js";
export default function EO20({x,y,z}){



    
//OBJETOS  ✏️✏️✏️✏️  🪶
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



    var texture01 = new THREE.TextureLoader().load("./assets/plato.jpg");
    var matFlorero = new THREE.MeshLambertMaterial({
        map: texture01
    });

    // Cuerpo del florero (Cilindro acampanado)
    var geoCuerpo = new THREE.CylinderGeometry(4, 2, 12, 32, 1, true);
    var cuerpoFlorero = new THREE.Mesh(geoCuerpo, matFlorero);
    cuerpoFlorero.position.set(0, 6, 0);
    //scene.add(cuerpoFlorero);

    // Base del florero
    var geoBase = new THREE.CylinderGeometry(2.5, 3, 1.5, 32);
    var baseFlorero = new THREE.Mesh(geoBase, matFlorero);
    baseFlorero.position.set(0, 0.75, 0);
    //scene.add(baseFlorero);

    // Borde superior del florero (Anillo redondeado)
    var geoBorde = new THREE.TorusGeometry(4, 0.3, 16, 32);
    var bordeFlorero = new THREE.Mesh(geoBorde, matFlorero);
    bordeFlorero.rotation.x = Math.PI / 2;
    bordeFlorero.position.set(0, 12, 0);
    //scene.add(bordeFlorero);



//ramo
var flor1 = new THREE.TorusKnotGeometry(4,1,100,16,18,13);
var mat1 = new THREE.MeshLambertMaterial({color:0xF54927});

var fo1 = new THREE.Mesh(flor1,mat1);
fo1.position.set(0,14.5,0);
fo1.rotation.set(Math.PI/2,0,0);
fo1.scale.set(.4, .4, .4);
//scene.add(f1);

var fo2 = new THREE.Mesh(flor1,mat1);
fo2.position.set(3.6,15,1.5);
fo2.rotation.set(Math.PI/2,0,0);
fo2.scale.set(.2, .2, .2);
//scene.add(f2);
var fo3 = new THREE.Mesh(flor1,mat1);
fo3.position.set(-3.6,15,0);
fo3.rotation.set(Math.PI/2,0,0);
fo3.scale.set(.2, .2, .2);
//scene.add(f3);

var fo4 = new THREE.Mesh(flor1,mat1);
fo4.position.set(-3.,15,2.5);
fo4.rotation.set(Math.PI/2,0,0);
fo4.scale.set(.2, .2, .2);
//scene.add(f4);

var fo5 = new THREE.Mesh(flor1,mat1);
fo5.position.set(-.7,15,3.9);
fo5.rotation.set(Math.PI/2,0,0);
fo5.scale.set(.2, .2, .2);
//scene.add(f5);

var fo6 = new THREE.Mesh(flor1,mat1);
fo6.position.set(2,15,3.5);
fo6.rotation.set(Math.PI/2,0,0);
fo6.scale.set(.2, .2, .2);
//scene.add(f6);

var fo7 = new THREE.Mesh(flor1,mat1);
fo7.position.set(2,15,-3.5);
fo7.rotation.set(Math.PI/2,0,0);
fo7.scale.set(.2, .2, .2);
//scene.add(f7);

var fo8 = new THREE.Mesh(flor1,mat1);
fo8.position.set(-.7,15,-3.9);
fo8.rotation.set(Math.PI/2,0,0);
fo8.scale.set(.2, .2, .2);
//scene.add(f8);
var fo9 = new THREE.Mesh(flor1,mat1);
fo9.position.set(-3.,15,-2.5);
fo9.rotation.set(Math.PI/2,0,0);
fo9.scale.set(.2, .2, .2);
//scene.add(f9);

var fo10 = new THREE.Mesh(flor1,mat1);
fo10.position.set(3.6,15,-1.5);
fo10.rotation.set(Math.PI/2,0,0);
fo10.scale.set(.2, .2, .2);
//scene.add(f10);


//papel
var geometrypa = new THREE.ConeGeometry(5.5,10,20,20);
var materialpa = new THREE.MeshBasicMaterial({
    color:0xFEEBE7,
    side: THREE.DoubleSide });
var papel1 = new THREE.Mesh(geometrypa,materialpa);
//scene.add(papel);
papel1.position.set(0,10,0);
papel1.rotation.z = Math.PI;


var seis = new THREE.Group();
seis.add(fo1,fo2,fo3,fo4,fo5,fo6,fo7,fo8,fo9,fo10,papel1);
seis.position.set(0,2,0);
seis.scale.set(.7, .7, .7);
//scene.add(CINCO);


const flore = new THREE.Group();
flore.add(cuerpoFlorero,baseFlorero,bordeFlorero,seis);
flore.position.set(x,y,z);
return flore;

}