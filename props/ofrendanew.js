<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <title>OFRENDA</title>
</head>
<body>
    
<canvas id="myCanvas">
    <!--El elemento HTML canvas se puede utilizar para dibujar gráficos a través de 
        secuencias de comandos (por lo general JavaScript ).-->
</canvas>

<!-- Aquí va todo el código de three.js -->
<!-- script type="importmap" importa las librerías necesarias para three.js-->
<script type="importmap"> 
    {
        "imports":{
            "three": "./js/three.module.js",
            "three/OrbitControls": "./js/OrbitControls.js" 
        }
}
</script>
<script type="module"> 
//🗃️🗃️ Mandar llamar a la librería
    import * as THREE from 'three'; 
    import {OrbitControls} from 'three/OrbitControls';
    console.log(OrbitControls);
    import {RoundedBoxGeometry} from "./js/RoundedBoxGeometry.js"

 import ESC01 from"./props/craneonew.js"
 import ESC02 from"./props/retrato.js"
 import ESC03 from"./props/aodrno de flores.js"
 import ESC04 from"./props/adorno de flores.js"
 import ESC05 from"./props/catrina.js"
 import ESC06 from"./props/cruzf.js"
 import ESC07 from"./props/calavera.js"
 import ESC09 from"./props/velaa.js"
 import ESC10 from"./props/botellaTequila.js"
 import molef from"./props/mole.js"
 import copalf from"./props/copal.js"
 import pozole1 from"./props/pozole.js"
 import tumba from"./props/tumba.js"
 import flore from"./props/florerof.js"
 import cala1 from"./props/calaverita.js"
 import vaso from"./props/vaso.js"
 import tamal from"./props/tamal.js"
 import fruta from"./props/fruta.js"
 import VP from"./props/velapequeña.js"
import pan1 from"./props/pancito1.js"
import sombrero1 from"./props/sombrero.js"
import base1 from"./props/basee.js"
import arco1 from"./props/arcof.js"
import iglesiaf from"./props/catedral.js"
import faro1 from"./props/faro.js"
import arbol2f from"./props/arbol2.js"
import arbolf from"./props/arbol.js"
import banco1 from"./props/bannco.js"
import catri from"./props/CATRII.js"
import conchap from"./props/conchaf.js"


//🕹️🕹️ Renderer - Realiza una conexión entre el código y el canvas
    var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'), antialias: true,
    });
    renderer.setPixelRatio(window.decivePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x69142B);



// 🎬 Creando nueva escena - Es el espacio donde se colocan los objetos
    var scene = new THREE.Scene();

//🎥🎥 Agregar una cámara de perspectiva
    var camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight,0.1,20000
      );
    scene.add(camera);

    //Settings de la cámara
    camera.position.set(0, 1000, 2700);

    // Añadiendo los OrbitControls
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

 

// Espacio para colocar los objetos
// GridHelper
/*var gridHelper = new THREE.GridHelper(50,50);
scene.add(gridHelper);

var axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);*/

//TEXTURAS
var loader = new THREE.TextureLoader();
var bgTexture = loader.load('./assets/cementerio_hd.jpg.jpeg');
scene.background=bgTexture;
///  💫💢🐭🐭 LUCES

var light3 = new THREE.HemisphereLight(0xffffff, 0x888888, 0.4);
scene.add(light3);

// Piso
var geometry0 = new THREE.BoxGeometry(2800, 1, 4000);
var texture01 = new THREE.TextureLoader().load("./assets/planoo2.jpg.jpeg");
var material01 = new THREE.MeshLambertMaterial({
    map: texture01
});
var mesh0 = new THREE.Mesh(geometry0, material01);
mesh0.position.set(0, 0, 0);
mesh0.receiveShadow = true;
scene.add(mesh0);




//primer tumba
var geometry4 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base4 = new THREE.Mesh(geometry4,material4);
scene.add(base4);
base4.position.set(-900,40,600);

var geometry5 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material5 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base5 = new THREE.Mesh(geometry5,material5);
scene.add(base5);
base5.position.set(-925,80,600);

//// VELAAS

const vel=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel);
vel.position.set(-550,7,220);
vel.rotation.y =Math.PI/2;
vel.scale.set(5,5,5);




//segunda tumba copia
var geometry4 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base4 = new THREE.Mesh(geometry4,material4);
scene.add(base4);
base4.position.set(900,40,600);

var geometry5 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material5 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base5 = new THREE.Mesh(geometry5,material5);
scene.add(base5);
base5.position.set(925,80,600);
//cruz
 var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

    // 1. Poste vertical de la cruz
    var geoVertical = new THREE.BoxGeometry(40, 190, 40);
    var posteVertical = new THREE.Mesh(geoVertical, material4);
    posteVertical.position.set(1050, 220, 600); 
     posteVertical.rotation.y = Math.PI /2;
 scene.add(posteVertical);

    // 2. Poste horizontal (travesaño) de la cruz
    var geoHorizontal = new THREE.BoxGeometry(120, 40, 40);
    var posteHorizontal = new THREE.Mesh(geoHorizontal, material4);
    posteHorizontal.position.set(1050, 240, 600); 
    posteHorizontal.rotation.y = Math.PI /2;
  scene.add(posteHorizontal);

//// VELAAS
const vel1=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel1);
vel1.position.set(780,7,220);
vel1.rotation.y =Math.PI/2;
vel1.scale.set(5,5,5);

//tercera tumba
var geometry4 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base4 = new THREE.Mesh(geometry4,material4);
scene.add(base4);
base4.position.set(-900,40,190);

var geometry5 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material5 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base5 = new THREE.Mesh(geometry5,material5);
scene.add(base5);
base5.position.set(-925,80,190);

var geometry6 = new THREE.BoxGeometry(220,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material6 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base6 = new THREE.Mesh(geometry6,material6);
scene.add(base6);
base6.rotation.x = Math.PI /2;
base6.rotation.z = Math.PI /2;
base6.position.set(-1060,200,190);

//cruz
 var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

    // 1. Poste vertical de la cruz
    var geoVertical = new THREE.BoxGeometry(40, 190, 40);
    var posteVertical = new THREE.Mesh(geoVertical, material4);
    posteVertical.position.set(-1050, 220, 600); 
     posteVertical.rotation.y = Math.PI /2;
 scene.add(posteVertical);

    // 2. Poste horizontal (travesaño) de la cruz
    var geoHorizontal = new THREE.BoxGeometry(120, 40, 40);
    var posteHorizontal = new THREE.Mesh(geoHorizontal, material4);
    posteHorizontal.position.set(-1050, 240, 600); 
    posteHorizontal.rotation.y = Math.PI /2;
  scene.add(posteHorizontal);

//// VELAAS
const vel2=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel2);
vel2.position.set(780,7,630);
vel2.rotation.y =Math.PI/2;
vel2.scale.set(5,5,5);


//cuarta tumba
var geometry4 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base4 = new THREE.Mesh(geometry4,material4);
scene.add(base4);
base4.position.set(900,40,190);

var geometry5 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material5 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base5 = new THREE.Mesh(geometry5,material5);
scene.add(base5);
base5.position.set(925,80,190);

var geometry6 = new THREE.BoxGeometry(220,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material6 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base6 = new THREE.Mesh(geometry6,material6);
scene.add(base6);
base6.rotation.x = Math.PI /2;
base6.rotation.z = Math.PI /2;
base6.position.set(1060,200,190);

/////calaverita

const c1=cala1({X:-20,Y:0,Z:-20});
scene.add(c1);
c1.position.set(-1050,350,200);
c1.rotation.y =Math.PI/2;
c1.scale.set(4,4,4);

const c2=cala1({X:-20,Y:0,Z:-20});
scene.add(c2);
c2.position.set(-1050,350,120);
c2.rotation.y =Math.PI/2;
c2.scale.set(4,4,4);

const c3=cala1({X:-20,Y:0,Z:-20});
scene.add(c3);
c3.position.set(-1050,350,280);
c3.rotation.y =Math.PI/2;
c3.scale.set(4,4,4);

const c4=cala1({X:-20,Y:0,Z:-20});
scene.add(c4);
c4.position.set(1050,350,200);
c4.rotation.y =Math.PI/-2;
c4.scale.set(4,4,4);

const c5=cala1({X:-20,Y:0,Z:-20});
scene.add(c5);
c5.position.set(1050,350,120);
c5.rotation.y =Math.PI/-2;
c5.scale.set(4,4,4);

const c6=cala1({X:-20,Y:0,Z:-20});
scene.add(c6);
c6.position.set(1050,350,280);
c6.rotation.y =Math.PI/-2;
c6.scale.set(4,4,4);



//// VELAAS

const vel3=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel3);
vel3.position.set(-550,7,630);
vel3.rotation.y =Math.PI/2;
vel3.scale.set(5,5,5);

const vel4=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel4);
vel4.position.set(-990,7,650);
vel4.rotation.x =Math.PI;
vel4.rotation.z =Math.PI;
vel4.scale.set(5,5,5);


const vel41=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel41);
vel41.position.set(-820,7,650);
vel41.rotation.x =Math.PI;
vel41.rotation.z =Math.PI;
vel41.scale.set(5,5,5);

const vel5=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel5);
vel5.position.set(-990,7,280);
vel5.rotation.x =Math.PI;
vel5.rotation.z =Math.PI;
vel5.scale.set(5,5,5);

const vel51=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel51);
vel51.position.set(-820,7,280);
vel51.rotation.x =Math.PI;
vel51.rotation.z =Math.PI;
vel51.scale.set(5,5,5);


const vel53=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel53);
vel53.position.set(-990,7,-100);
vel53.rotation.x =Math.PI;
vel53.rotation.z =Math.PI;
vel53.scale.set(5,5,5);

const vel54=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel54);
vel54.position.set(-820,7,-100);
vel54.rotation.x =Math.PI;
vel54.rotation.z =Math.PI;
vel54.scale.set(5,5,5);


const vel55=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel55);
vel55.position.set(990,7,-100);
vel55.rotation.x =Math.PI;
vel55.rotation.z =Math.PI;
vel55.scale.set(5,5,5);

const vel56=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel56);
vel56.position.set(820,7,-100);
vel56.rotation.x =Math.PI;
vel56.rotation.z =Math.PI;
vel56.scale.set(5,5,5);


const vel57=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel57);
vel57.position.set(990,7,280);
vel57.rotation.x =Math.PI;
vel57.rotation.z =Math.PI;
vel57.scale.set(5,5,5);

const vel58=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel58);
vel58.position.set(820,7,280);
vel58.rotation.x =Math.PI;
vel58.rotation.z =Math.PI;
vel58.scale.set(5,5,5);

const vel42=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel42);
vel42.position.set(990,7,650);
vel42.rotation.x =Math.PI;
vel42.rotation.z =Math.PI;
vel42.scale.set(5,5,5);


const vel43=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel43);
vel43.position.set(820,7,650);
vel43.rotation.x =Math.PI;
vel43.rotation.z =Math.PI;
vel43.scale.set(5,5,5);


const vel44=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel44);
vel44.position.set(820,7,1070);
vel44.rotation.x =Math.PI;
vel44.rotation.z =Math.PI;
vel44.scale.set(5,5,5);

const vel45=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel45);
vel45.position.set(-820,7,1070);
vel45.rotation.x =Math.PI;
vel45.rotation.z =Math.PI;
vel45.scale.set(5,5,5);

const vel59=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel59);
vel59.position.set(990,7,1070);
vel59.rotation.x =Math.PI;
vel59.rotation.z =Math.PI;
vel59.scale.set(5,5,5);

const vel60=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel60);
vel60.position.set(990,7,1070);
vel60.rotation.x =Math.PI;
vel60.rotation.z =Math.PI;
vel60.scale.set(5,5,5);

const vel61=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel61);
vel61.position.set(-990,7,1070);
vel61.rotation.x =Math.PI;
vel61.rotation.z =Math.PI;
vel61.scale.set(5,5,5);

const vel31=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel31);
vel31.position.set(-550,7,1020);
vel31.rotation.y =Math.PI/2;
vel31.scale.set(5,5,5);

const vel32=ESC09({X:-20,Y:0,Z:-20});
scene.add(vel32);
vel32.position.set(770,7,1020);
vel32.rotation.y =Math.PI/2;
vel32.scale.set(5,5,5);

//////retrato
const rt=ESC02({X:-20,Y:0,Z:-20});
scene.add(rt);
rt.rotation.y = Math.PI /2;
rt.position.set(-1020,200,190);
rt.scale.set(25,20,20);

const rt1=ESC02({X:-20,Y:0,Z:-20});
scene.add(rt1);
rt1.rotation.y = Math.PI /-2;
rt1.position.set(1020,200,190);
rt1.scale.set(25,20,20);


//cinco tumba
var geometry6 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material6 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base6 = new THREE.Mesh(geometry6,material6);
scene.add(base6);
base6.position.set(-900,40,1000);

var geometry7 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material7 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base7 = new THREE.Mesh(geometry7,material7);
scene.add(base7);
base7.position.set(-925,80,1000);

var geometry61 = new THREE.BoxGeometry(220,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material61 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base61 = new THREE.Mesh(geometry61,material61);
scene.add(base61);
base61.rotation.x = Math.PI /2;
base61.rotation.z = Math.PI /2;
base61.position.set(1060,200,1000);

//cruz
 var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

    // 1. Poste vertical de la cruz
    var geoVertical = new THREE.BoxGeometry(40, 190, 40);
    var posteVertical = new THREE.Mesh(geoVertical, material4);
    posteVertical.position.set(-1050, 450, 1000); 
     posteVertical.rotation.y = Math.PI /2;
 scene.add(posteVertical);

    // 2. Poste horizontal (travesaño) de la cruz
    var geoHorizontal = new THREE.BoxGeometry(120, 40, 40);
    var posteHorizontal = new THREE.Mesh(geoHorizontal, material4);
    posteHorizontal.position.set(-1050, 500, 1000); 
    posteHorizontal.rotation.y = Math.PI /2;
  scene.add(posteHorizontal);

//seis tumba
var geometry8 = new THREE.BoxGeometry(400,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material8 = new THREE.MeshLambertMaterial({
    map: texture01
});

var base8 = new THREE.Mesh(geometry8,material8);
scene.add(base8);
base8.position.set(900,40,1000);
base8.receiveShadow = true;

var geometry9 = new THREE.BoxGeometry(340,80,220);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material9 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base9 = new THREE.Mesh(geometry9,material9);
scene.add(base9);
base9.position.set(925,80,1000);
base9.receiveShadow = true;

var geometry62 = new THREE.BoxGeometry(220,80,300);
var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material62 = new THREE.MeshLambertMaterial({
    map: texture01
});
var base62 = new THREE.Mesh(geometry62,material62);
scene.add(base62);
base62.rotation.x = Math.PI /2;
base62.rotation.z = Math.PI /2;
base62.position.set(-1060,200,1000);
base62.receiveShadow = true;

//cruz
 var texture01 = new THREE.TextureLoader().load("./assets/lapida2.jpg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture01
});

    // 1. Poste vertical de la cruz
    var geoVertical = new THREE.BoxGeometry(40, 190, 40);
    var posteVertical = new THREE.Mesh(geoVertical, material4);
    posteVertical.position.set(1050, 450, 1000); 
     posteVertical.rotation.y = Math.PI /2;
 scene.add(posteVertical);

    // 2. Poste horizontal (travesaño) de la cruz
    var geoHorizontal = new THREE.BoxGeometry(120, 40, 40);
    var posteHorizontal = new THREE.Mesh(geoHorizontal, material4);
    posteHorizontal.position.set(1050, 500, 1000); 
    posteHorizontal.rotation.y = Math.PI /2;
  scene.add(posteHorizontal);
/////tumba principal

const escenariop=tumba({X:-20,Y:0,Z:-20});
scene.add(escenariop);
escenariop.position.set(0,10,-300);
escenariop.scale.set(15,15,15);

////importanteeeeeee
var puntol = new THREE.SpotLight(0xFCF9D915, 50, 5, 0.5, 0,0);
scene.add(puntol);
scene.add(puntol.target);
puntol.castShadow = true;
var helperr = new THREE.SpotLightHelper(puntol);
//scene.add(helperr);
puntol.position.set(950, 200, 950);
puntol.target.position.set(950, 0, 950);

var puntol1 = new THREE.SpotLight(0xFCF9D915, 50, 5, 0.5, 0,0);
scene.add(puntol1);
scene.add(puntol1.target);
puntol1.castShadow = true;
var helperr1 = new THREE.SpotLightHelper(puntol1);
//scene.add(helperr1);
puntol1.position.set(950, 200, 1060);
puntol1.target.position.set(950, 0, 1060);

var puntol2 = new THREE.SpotLight(0xFCF9D915, 50, 5, 0.5, 0,0);
scene.add(puntol2);
scene.add(puntol2.target);
puntol2.castShadow = true;
var helperr2 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr2);
puntol2.position.set(-950, 200, 1060);
puntol2.target.position.set(-950, 0, 1060);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(-950, 200, 950);
puntol3.target.position.set(-950, 0, 950);


var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(-950, 200, 120);
puntol3.target.position.set(-950, 0, 120);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(-950, 200, 250);
puntol3.target.position.set(-950, 0, 250);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(-900, 200, 600);
puntol3.target.position.set(-900, 0, 600);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(880, 200, 600);
puntol3.target.position.set(880, 0, 600);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(950, 200, 120);
puntol3.target.position.set(950, 0, 120);

var puntol3 = new THREE.SpotLight(0xFCF9D915, 10, 5, 0.5, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol2);
//scene.add(helperr3);
puntol3.position.set(950, 200, 250);
puntol3.target.position.set(950, 0, 250);
//////////////////////////////////////////////////////////////////

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(230, 200, -1000);
punto6.target.position.set(230, 0, -1000);

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(230, 200, -800);
punto6.target.position.set(230, 0, -800);

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(230, 200, -600);
punto6.target.position.set(230, 0, -600);

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(-230, 200, -1000);
punto6.target.position.set(-230, 0, -1000);

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(-230, 200, -800);
punto6.target.position.set(-230, 0, -800);

var punto6 = new THREE.SpotLight(0xE3573B, 2, 5, 0.5, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(-230, 200, -600);
punto6.target.position.set(-230, 0, -600);
///////////////////////////////////////////////////////////////////////////////////////
var punto6 = new THREE.SpotLight(0xE3573B,0.4, 1, 0.4, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(0, 900,0);
punto6.target.position.set(0, 0, -400);


//velas
const v=ESC09({X:-20,Y:0,Z:-20});
scene.add(v);
v.position.set(-180,100,-10);
v.scale.set(5,5,5);
v.castShadow = true;

const v1=ESC09({X:-20,Y:0,Z:-20});
scene.add(v1);
v1.position.set(180,100,-250);
v1.rotation.y = Math.PI ;
v1.scale.set(5,5,5);


////flores
const flor=ESC04({X:-20,Y:0,Z:-20});
scene.add(flor);
flor.position.set(-100,180,-370);
flor.scale.set(5,5,5);
const flor1=ESC04({X:-20,Y:0,Z:-20});
scene.add(flor1);
flor1.position.set(60,180,-370);
flor1.scale.set(5,5,5);
const flor2=ESC04({X:-20,Y:0,Z:-20});
scene.add(flor2);
flor2.position.set(-50,40,-70);
flor2.scale.set(10,10,10);
const flor3=ESC04({X:-20,Y:0,Z:-20});
scene.add(flor3);
flor3.position.set(-300,40,-260);
flor3.rotation.y = Math.PI / 2;
flor3.scale.set(10,10,10);
const flor4=ESC04({X:-20,Y:0,Z:-20});
scene.add(flor4);
flor4.position.set(300,40,-260);
flor4.rotation.y = Math.PI / 2;
flor4.scale.set(10,10,10);

////botella
const b=ESC10({X:-20,Y:0,Z:-20});
scene.add(b);
b.position.set(180,190,-220);
b.scale.set(6,6,6);

const b1=ESC10({X:-20,Y:0,Z:-20});
scene.add(b1);
b1.position.set(150,190,-180);
b1.scale.set(4,4,4);
const b2=ESC10({X:-20,Y:0,Z:-20});
scene.add(b2);
b2.position.set(180,190,-170);
b2.scale.set(3,3,3);

const b3=ESC10({X:-20,Y:0,Z:-20});
scene.add(b3);
b3.position.set(-870,250,1480);
b3.rotation.y = Math.PI / 2;
b3.scale.set(5,5,5);

/////pozole
const pz=pozole1({X:-20,Y:0,Z:-20});
scene.add(pz);
pz.position.set(-100,165,-250);
pz.scale.set(9,9,9);

const pz1=pozole1({X:-20,Y:0,Z:-20});
scene.add(pz1);
pz1.position.set(0,-27,1200);
pz1.scale.set(9,9,9);

/////florero
const florero1=flore({X:-20,Y:0,Z:-20});
scene.add(florero1);
florero1.position.set(-190,190,-300);
florero1.scale.set(12,12,12);
florero1.rotation.y =Math.PI;

const florero2=flore({X:-20,Y:0,Z:-20});
scene.add(florero2);
florero2.position.set(190,190,-300);
florero2.scale.set(12,12,12);
florero2.rotation.y =Math.PI;



////MOLE
const escenario11=molef({X:-20,Y:0,Z:-20});
scene.add(escenario11);
escenario11.position.set(50,195,-250);
escenario11.scale.set(15,15,15);

////cruz flores

const cf=ESC06({X:-20,Y:0,Z:-20});
scene.add(cf);
cf.position.set(5,10,450);
cf.rotation.x = Math.PI /-2;
cf.scale.set(15,15,15);


const cf9=ESC06({X:-20,Y:0,Z:-20});
scene.add(cf9);
cf9.position.set(5,10,-700);
cf9.rotation.x = Math.PI /-2;
cf9.scale.set(15,15,15);

/////calaverita

const cala=cala1({X:-20,Y:0,Z:-20});
scene.add(cala);
cala.position.set(0,110,-120);
cala.scale.set(4,4,4);

const calav1=cala1({X:-20,Y:0,Z:-20});
scene.add(calav1);
calav1.position.set(270,110,-190);
calav1.rotation.y = Math.PI /2;
calav1.scale.set(4,4,4);

const calav2=cala1({X:-20,Y:0,Z:-20});
scene.add(calav2);
calav2.position.set(-270,110,-190);
calav2.rotation.y = Math.PI /-2;
calav2.scale.set(4,4,4);

////craneo
const escenario01=ESC01({X:-20,Y:0,Z:-20});
scene.add(escenario01);
escenario01.position.set(5,-40,60);
escenario01.scale.set(25,25,25);

const cra1=ESC01({X:-20,Y:0,Z:-20});
scene.add(cra1);
cra1.position.set(-800,100,120);
cra1.rotation.y =Math.PI/2;
cra1.scale.set(15,15,15);

const cra2=ESC01({X:-20,Y:0,Z:-20});
scene.add(cra2);
cra2.position.set(-800,100,260);
cra2.rotation.y =Math.PI/2;
cra2.scale.set(15,15,15);

const cra3=ESC01({X:-20,Y:0,Z:-20});
scene.add(cra3);
cra3.position.set(800,100,120);
cra3.rotation.y =Math.PI/-2;
cra3.scale.set(15,15,15);

const cra4=ESC01({X:-20,Y:0,Z:-20});
scene.add(cra4);
cra4.position.set(800,100,260);
cra4.rotation.y =Math.PI/-2;
cra4.scale.set(15,15,15);

const cra5=cala1({X:-20,Y:0,Z:-20});
scene.add(cra5);
cra5.position.set(200,20,1900);
cra5.rotation.x =Math.PI/-4;
cra5.scale.set(8,8,8);

const cra6=cala1({X:-20,Y:0,Z:-20});
scene.add(cra6);
cra6.position.set(-200,20,1900);
cra6.rotation.x =Math.PI/-4;
cra6.scale.set(8,8,8);

////sombrero
const som=sombrero1({X:-20,Y:0,Z:-20});
scene.add(som);
som.position.set(5,60,50);
som.rotation.y =Math.PI/-4;
som.scale.set(9,9,9);

const som1=sombrero1({X:-20,Y:0,Z:-20});
scene.add(som1);
som1.position.set(970,158,1650);
som1.rotation.y =Math.PI/-4;
som1.scale.set(9,9,9);

//////retrato
const escenario02=ESC02({X:-20,Y:0,Z:-20});
scene.add(escenario02);
escenario02.position.set(2,310,-365);
escenario02.scale.set(45,40,25);


////copal
const copa=copalf({X:-20,Y:0,Z:-20});
scene.add(copa);
copa.position.set(-100,60,60);
copa.scale.set(18,18,18);

const copa1=copalf({X:-20,Y:0,Z:-20});
scene.add(copa1);
copa1.position.set(110,60,60);
copa1.scale.set(18,18,18);

const copa2=copalf({X:-20,Y:0,Z:-20});
scene.add(copa2);
copa2.position.set(1050,150,650);
copa2.scale.set(10,10,10);

const copa3=copalf({X:-20,Y:0,Z:-20});
scene.add(copa3);
copa3.position.set(1050,150,550);
copa3.scale.set(10,10,10);

const copa4=copalf({X:-20,Y:0,Z:-20});
scene.add(copa4);
copa4.position.set(-1050,150,650);
copa4.scale.set(10,10,10);

const copa5=copalf({X:-20,Y:0,Z:-20});
scene.add(copa5);
copa5.position.set(-1050,150,550);
copa5.scale.set(10,10,10);

////vaso
const va=vaso({X:-20,Y:0,Z:-20});
scene.add(va);
va.position.set(-190,220,-190);
va.scale.set(7,7,7);

const va1=vaso({X:-20,Y:0,Z:-20});
scene.add(va1);
va1.position.set(0,20,1000);
va1.scale.set(7,7,7);


///adornos de flores

const escenario041=ESC04({X:-20,Y:0,Z:-20});
scene.add(escenario041);
escenario041.position.set(740 ,80,620);
escenario041.rotation.y = Math.PI / 2;
escenario041.scale.set(5,5,5);


const escenario033=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario033);
escenario033.position.set(950 ,80,720);
escenario033.scale.set(5,5,5);

const escenario034=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario034);
escenario034.position.set(950,80,480);
escenario034.scale.set(5,5,5);

/////
const escenario042=ESC04({X:-20,Y:0,Z:-20});
scene.add(escenario042);
escenario042.position.set(-740 ,80,620);
escenario042.rotation.y = Math.PI / 2;
escenario042.scale.set(5,5,5);


const escenario035=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario035);
escenario035.position.set(-900 ,80,720);
escenario035.scale.set(5,5,5);

const escenario036=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario036);
escenario036.position.set(-900,80,480);
escenario036.scale.set(5,5,5);

/////
const escenario043=ESC04({X:-20,Y:0,Z:-20});
scene.add(escenario043);
escenario043.position.set(-740 ,80,210);
escenario043.rotation.y = Math.PI / 2;
escenario043.scale.set(5,5,5);


const escenario037=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario037);
escenario037.position.set(-900 ,80,70);
escenario037.scale.set(5,5,5);

const escenario038=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario038);
escenario038.position.set(-900,80,310);
escenario038.scale.set(5,5,5);

/////
const escenario044=ESC04({X:-20,Y:0,Z:-20});
scene.add(escenario044);
escenario044.position.set(740 ,80,210);
escenario044.rotation.y = Math.PI / 2;
escenario044.scale.set(5,5,5);


const escenario039=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario039);
escenario039.position.set(900 ,80,70);
escenario039.scale.set(5,5,5);

const escenario0310=ESC03({X:-20,Y:0,Z:-20});
scene.add(escenario0310);
escenario0310.position.set(900,80,310);
escenario0310.scale.set(5,5,5);



///////////camino de flores

var puntol3 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol3);
//scene.add(helperr3);
puntol3.position.set(260,300,110);
puntol3.target.position.set(260,0,110);

var puntol4 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol4);
scene.add(puntol4.target);
puntol4.castShadow = true;
puntol4.position.set(260,300,200);
puntol4.target.position.set(260,0,200);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,280);
puntol5.target.position.set(260,0,280);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,460);
puntol5.target.position.set(260,0,460);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,550);
puntol5.target.position.set(260,0,550);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,630);
puntol5.target.position.set(260,0,630);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,800);
puntol5.target.position.set(260,0,800);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,890);
puntol5.target.position.set(260,0,890);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,980);
puntol5.target.position.set(260,0,980);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,1250);
puntol5.target.position.set(260,0,1150);


var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,1250);
puntol5.target.position.set(260,0,1250);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,1350);
puntol5.target.position.set(260,0,1350);

////////
var puntol3 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol3);
scene.add(puntol3.target);
puntol3.castShadow = true;
var helperr3 = new THREE.SpotLightHelper(puntol3);
//scene.add(helperr3);
puntol3.position.set(-240,300,110);
puntol3.target.position.set(-240,0,110);

var puntol4 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol4);
scene.add(puntol4.target);
puntol4.castShadow = true;
puntol4.position.set(-240,300,200);
puntol4.target.position.set(-240,0,200);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,280);
puntol5.target.position.set(-240,0,280);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,460);
puntol5.target.position.set(-240,0,460);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,550);
puntol5.target.position.set(-240,0,550);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(260,300,630);
puntol5.target.position.set(260,0,630);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,800);
puntol5.target.position.set(-240,0,800);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,890);
puntol5.target.position.set(-240,0,890);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,980);
puntol5.target.position.set(-240,0,980);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,1250);
puntol5.target.position.set(-240,0,1150);


var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,1250);
puntol5.target.position.set(-240,0,1250);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-240,300,1350);
puntol5.target.position.set(-240,0,1350);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-110,300,1250);
puntol5.target.position.set(-110,0,1150);


var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-110,300,1250);
puntol5.target.position.set(-110,0,1250);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(-110,300,1350);
puntol5.target.position.set(-110,0,1350);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(110,300,1250);
puntol5.target.position.set(110,0,1150);


var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(110,300,1250);
puntol5.target.position.set(110,0,1250);

var puntol5 = new THREE.SpotLight(0xDF4020, 2, 0, 0.2, 0,0);
scene.add(puntol5);
scene.add(puntol5.target);
puntol5.castShadow = true;
puntol5.position.set(110,300,1350);
puntol5.target.position.set(110,0,1350);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(260, 280, -355);
punto6.target.position.set(260, 0, -355);


var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(260, 280, -260);
punto6.target.position.set(260, 0, -260);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(260, 280, -440);
punto6.target.position.set(260, 0, -440);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(260, 280, -140);
punto6.target.position.set(260, 0, -140);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(180, 280, -140);
punto6.target.position.set(180, 0, -140);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(90, 280, -140);
punto6.target.position.set(90, 0, -140);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(-90, 280, -140);
punto6.target.position.set(-90, 0, -140);

var punto6 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto6);
scene.add(punto6.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto6.position.set(-180, 280, -140);
punto6.target.position.set(-180, 0, -140);

var punto7 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto7);
scene.add(punto7.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto7.position.set(-260, 280, -140);
punto7.target.position.set(-260, 0, -140);


var punto7 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto7);
scene.add(punto7.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto7.position.set(-260, 280, -140);
punto7.target.position.set(-260, 0, -140);

var punto7 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto7);
scene.add(punto7.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto7.position.set(-260, 280, -350);
punto7.target.position.set(-260, 0, -350);


var punto7 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto7);
scene.add(punto7.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto7.position.set(-260, 280, -260);
punto7.target.position.set(-260, 0, -260);

var punto7 = new THREE.SpotLight(0xE3573B, 4, 0, 0.2, 0,0);
scene.add(punto7);
scene.add(punto7.target);
punto6.castShadow = true;
var helperr15 = new THREE.SpotLightHelper(punto6);
//scene.add(helperr15);
punto7.position.set(-260, 280, -450);
punto7.target.position.set(-260, 0, -450);

const f=ESC04({X:-20,Y:0,Z:-20});
scene.add(f);
f.position.set(250,20,170);
f.rotation.x = Math.PI/2;
f.rotation.z =Math.PI/2;
f.scale.set(10,10,10);
f.castShadow = true;

const f1=ESC04({X:-20,Y:0,Z:-20});
scene.add(f1);
f1.position.set(-130,20,170);
f1.rotation.x = Math.PI/2;
f1.rotation.z =Math.PI/2;
f1.scale.set(10,10,10);
f1.castShadow = true;


const f2=ESC04({X:-20,Y:0,Z:-20});
scene.add(f2);
f2.position.set(-130,20,500);
f2.rotation.x = Math.PI/2;
f2.rotation.z =Math.PI/2;
f2.scale.set(10,10,10);

const f3=ESC04({X:-20,Y:0,Z:-20});
scene.add(f3);
f3.position.set(250,20,500);
f3.rotation.x = Math.PI/2;
f3.rotation.z =Math.PI/2;
f3.scale.set(10,10,10);

const f4=ESC04({X:-20,Y:0,Z:-20});
scene.add(f4);
f4.position.set(360,20,170);
f4.rotation.x = Math.PI/2;
f4.rotation.z =Math.PI/2;
f4.scale.set(10,10,10);

const f5=ESC04({X:-20,Y:0,Z:-20});
scene.add(f5);
f5.position.set(-240,20,170);
f5.rotation.x = Math.PI/2;
f5.rotation.z =Math.PI/2;
f5.scale.set(10,10,10);


const f6=ESC04({X:-20,Y:0,Z:-20});
scene.add(f6);
f6.position.set(-260,20,500);
f6.rotation.x = Math.PI/2;
f6.rotation.z =Math.PI/2;
f6.scale.set(10,10,10);

const f7=ESC04({X:-20,Y:0,Z:-20});
scene.add(f7);
f7.position.set(360,20,500);
f7.rotation.x = Math.PI/2;
f7.rotation.z =Math.PI/2;
f7.scale.set(10,10,10);
////

const f8=ESC04({X:-20,Y:0,Z:-20});
scene.add(f8);
f8.position.set(360,20,800);
f8.rotation.x = Math.PI/2;
f8.rotation.z =Math.PI/2;
f8.scale.set(10,10,10);

const f9=ESC04({X:-20,Y:0,Z:-20});
scene.add(f9);
f9.position.set(360,20,1200);
f9.rotation.x = Math.PI/2;
f9.rotation.z =Math.PI/2;
f9.scale.set(10,10,10);

const f10=ESC04({X:-20,Y:0,Z:-20});
scene.add(f10);
f10.position.set(360,20,-880);
f10.rotation.x = Math.PI/2;
f10.rotation.z =Math.PI/2;
f10.scale.set(10,10,10);

const f11=ESC04({X:-20,Y:0,Z:-20});
scene.add(f11);
f11.position.set(360,20,-1280);
f11.rotation.x = Math.PI/2;
f11.rotation.z =Math.PI/2;
f11.scale.set(10,10,10);


const f12=ESC04({X:-20,Y:0,Z:-20});
scene.add(f12);
f12.position.set(-260,20,800);
f12.rotation.x = Math.PI/2;
f12.rotation.z =Math.PI/2;
f12.scale.set(10,10,10);

const f13=ESC04({X:-20,Y:0,Z:-20});
scene.add(f13);
f13.position.set(-260,20,1200);
f13.rotation.x = Math.PI/2;
f13.rotation.z =Math.PI/2;
f13.scale.set(10,10,10);

const f14=ESC04({X:-20,Y:0,Z:-20});
scene.add(f14);
f14.position.set(-260,20,-880);
f14.rotation.x = Math.PI/2;
f14.rotation.z =Math.PI/2;
f14.scale.set(10,10,10);

const f15=ESC04({X:-20,Y:0,Z:-20});
scene.add(f15);
f15.position.set(-260,20,-1280);
f15.rotation.x = Math.PI/2;
f15.rotation.z =Math.PI/2;
f15.scale.set(10,10,10);
///
const f16=ESC04({X:-20,Y:0,Z:-20});
scene.add(f16);
f16.position.set(250,20,800);
f16.rotation.x = Math.PI/2;
f16.rotation.z =Math.PI/2;
f16.scale.set(10,10,10);

const f17=ESC04({X:-20,Y:0,Z:-20});
scene.add(f17);
f17.position.set(250,20,1200);
f17.rotation.x = Math.PI/2;
f17.rotation.z =Math.PI/2;
f17.scale.set(10,10,10);

const f18=ESC04({X:-20,Y:0,Z:-20});
scene.add(f18);
f18.position.set(-130,20,800);
f18.rotation.x = Math.PI/2;
f18.rotation.z =Math.PI/2;
f18.scale.set(10,10,10);

const f19=ESC04({X:-20,Y:0,Z:-20});
scene.add(f19);
f19.position.set(-130,20,1200);
f19.rotation.x = Math.PI/2;
f19.rotation.z =Math.PI/2;
f19.scale.set(10,10,10);

///
const f20=ESC04({X:-20,Y:0,Z:-20});
scene.add(f20);
f20.position.set(250,20,-880);
f20.rotation.x = Math.PI/2;
f20.rotation.z =Math.PI/2;
f20.scale.set(10,10,10);

const f21=ESC04({X:-20,Y:0,Z:-20});
scene.add(f21);
f21.position.set(250,20,-1280);
f21.rotation.x = Math.PI/2;
f21.rotation.z =Math.PI/2;
f21.scale.set(10,10,10);

const f22=ESC04({X:-20,Y:0,Z:-20});
scene.add(f22);
f22.position.set(-130,20,-880);
f22.rotation.x = Math.PI/2;
f22.rotation.z =Math.PI/2;
f22.scale.set(10,10,10);

const f23=ESC04({X:-20,Y:0,Z:-20});
scene.add(f23);
f23.position.set(-130,20,-1280);
f23.rotation.x = Math.PI/2;
f23.rotation.z =Math.PI/2;
f23.scale.set(10,10,10);


///velas el camino
const escenario124=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario124);
escenario124.position.set(-250,40,10);
escenario124.scale.set(15,15,15);

const escenario09=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario09);
escenario09.rotation.y = Math.PI /2;
escenario09.position.set(-120,20,200);
escenario09.scale.set(5,5,5);

const escenario125=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario125);
escenario125.position.set(-250,40,350);
escenario125.scale.set(15,15,15);

const escenario091=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario091);
escenario091.rotation.y = Math.PI /2;
escenario091.position.set(-120,20,550);
escenario091.scale.set(5,5,5);

const escenario126=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario126);
escenario126.position.set(-250,40,700);
escenario126.scale.set(15,15,15);

const escenario0912=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0912);
escenario0912.rotation.y = Math.PI /2;
escenario0912.position.set(-140,100,-350);
escenario0912.scale.set(5,5,5);

const escenario0913=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0913);
escenario0913.rotation.y = Math.PI /2;
escenario0913.position.set(380,100,-350);
escenario0913.scale.set(5,5,5);

const escenario0914=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0914);
escenario0914.rotation.y = Math.PI /2;
escenario0914.position.set(380,10,900);
escenario0914.scale.set(5,5,5);

const escenario0915=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0915);
escenario0915.rotation.y = Math.PI /2;
escenario0915.position.set(380,10,1280);
escenario0915.scale.set(5,5,5);

const escenario0916=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0916);
escenario0916.rotation.y = Math.PI /2;
escenario0916.position.set(-120,10,1280);
escenario0916.scale.set(5,5,5);

const escenario0917=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0917);
escenario0917.rotation.y = Math.PI /2;
escenario0917.position.set(-120,10,900);
escenario0917.scale.set(5,5,5);

const escenario0918=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0918);
escenario0918.rotation.y = Math.PI /2;
escenario0918.position.set(0,10,1300);
escenario0918.scale.set(5,5,5);

const escenario09181=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario09181);
escenario09181.rotation.y = Math.PI /2;
escenario09181.position.set(250,10,1300);
escenario09181.scale.set(5,5,5);

const escenario0919=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0919);
escenario0919.rotation.y = Math.PI /2;
escenario0919.position.set(-120,10,-670);
escenario0919.scale.set(5,5,5);

const escenario0920=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0920);
escenario0920.rotation.y = Math.PI /2;
escenario0920.position.set(-120,10,-920);
escenario0920.scale.set(5,5,5);

const escenario0921=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0921);
escenario0921.rotation.y = Math.PI /2;
escenario0921.position.set(370,10,-670);
escenario0921.scale.set(5,5,5);

const escenario0922=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario0922);
escenario0922.rotation.y = Math.PI /2;
escenario0922.position.set(370,10,-920);
escenario0922.scale.set(5,5,5);

/////

const escenario123=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario123);
escenario123.position.set(260,40,10);
escenario123.scale.set(15,15,15);

const escenario093=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario093);
escenario093.rotation.y = Math.PI /2;
escenario093.position.set(380,20,200);
escenario093.scale.set(5,5,5);

const escenario12=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario12);
escenario12.position.set(260,40,350);
escenario12.scale.set(15,15,15);

const escenario094=ESC09({X:-20,Y:0,Z:-20});
scene.add(escenario094);
escenario094.rotation.y = Math.PI /2;
escenario094.position.set(380,20,550);
escenario094.scale.set(5,5,5);

const escenario121=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario121);
escenario121.position.set(260,40,700);
escenario121.scale.set(15,15,15);

const escenario122=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario122);
escenario122.position.set(260,40,1050);
escenario122.scale.set(15,15,15);

const escenario3=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario3);
escenario3.position.set(260,40,1450);
escenario3.scale.set(15,15,15);

const escenario31=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario31);
escenario31.position.set(-250,40,1450);
escenario31.scale.set(15,15,15);


const escenario32=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario32);
escenario32.position.set(-250,40,1050);
escenario32.scale.set(15,15,15);

const escenario33=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario33);
escenario33.position.set(-80,60,-1000);
escenario33.scale.set(20,20,20);

const escenario34=copalf({X:-20,Y:0,Z:-20});
scene.add(escenario34);
escenario34.position.set(90,60,-1000);
escenario34.scale.set(20,20,20);

/////CATRINA
const escenario05=ESC05({X:-20,Y:0,Z:-20});
scene.add(escenario05);
escenario05.position.set(-650,340,-380);
escenario05.scale.set(25,25,25);

////cruz flores

const escenario06=ESC06({X:-20,Y:0,Z:-20});
scene.add(escenario06);
escenario06.position.set(800,130,200);
escenario06.rotation.x = Math.PI /-2;
escenario06.rotation.z = Math.PI /-2;
escenario06.scale.set(8,8,8);


const escenario0611=ESC06({X:-20,Y:0,Z:-20});
scene.add(escenario0611);
escenario0611.position.set(800,130,1000);
escenario0611.rotation.x = Math.PI /-2;
escenario0611.rotation.z = Math.PI /-2;
escenario0611.scale.set(8,8,8);

const escenario0612=ESC06({X:-20,Y:0,Z:-20});
scene.add(escenario0612);
escenario0612.position.set(-800,130,1000);
escenario0612.rotation.x = Math.PI /-2;
escenario0612.rotation.z = Math.PI /2;
escenario0612.scale.set(8,8,8);

const escenario0613=ESC06({X:-20,Y:0,Z:-20});
scene.add(escenario0613);
escenario0613.position.set(0,20,1920);
escenario0613.rotation.x = Math.PI /-2;
escenario0613.scale.set(35,35,35);

const vela=VP({X:-20,Y:0,Z:-20});
scene.add(vela);
vela.position.set(800,110,400);
vela.scale.set(6,6,6);
vela.castShadow = true;

const vela1=VP({X:-20,Y:0,Z:-20});
scene.add(vela1);
vela1.position.set(800,110,260);
vela1.scale.set(6,6,6);

const escenario061=ESC06({X:-20,Y:0,Z:-20});
scene.add(escenario061);
escenario061.position.set(-800,130,200);
escenario061.rotation.x = Math.PI /-2;
escenario061.rotation.z = Math.PI /2;
escenario061.scale.set(8,8,8);
const vela3=VP({X:-20,Y:0,Z:-20});
scene.add(vela3);
vela3.position.set(-1100,110,400);
vela3.scale.set(6,6,6);

const vela4=VP({X:-20,Y:0,Z:-20});
scene.add(vela4);
vela4.position.set(-1100,110,260);
vela4.scale.set(6,6,6);

const vela41=VP({X:-20,Y:0,Z:-20});
scene.add(vela41);
vela41.position.set(800,110,1200);
vela41.scale.set(6,6,6);

const vela42=VP({X:-20,Y:0,Z:-20});
scene.add(vela42);
vela42.position.set(800,110,1090);
vela42.scale.set(6,6,6);

const vela43=VP({X:-20,Y:0,Z:-20});
scene.add(vela43);
vela43.position.set(-1100,110,1090);
vela43.scale.set(6,6,6);

const vela44=VP({X:-20,Y:0,Z:-20});
scene.add(vela44);
vela44.position.set(-1100,110,1200);
vela44.scale.set(6,6,6);

//// catrin
const escenario07=ESC07({X:-20,Y:0,Z:-20});
scene.add(escenario07);
escenario07.position.set(650,280,-380);
escenario07.scale.set(12,12,12);

/////florero
const florero3=flore({X:-20,Y:0,Z:-20});
scene.add(florero3);
florero3.position.set(-650,10,400);
florero3.scale.set(15,15,15);
florero3.rotation.y =Math.PI;

const florero4=flore({X:-20,Y:0,Z:-20});
scene.add(florero4);
florero4.position.set(650,10,400);
florero4.scale.set(15,15,15);
florero4.rotation.y =Math.PI;

const florero5=flore({X:-20,Y:0,Z:-20});
scene.add(florero5);
florero5.position.set(650,10,-30);
florero5.scale.set(15,15,15);
florero5.rotation.y =Math.PI;

const florero6=flore({X:-20,Y:0,Z:-20});
scene.add(florero6);
florero6.position.set(-650,10,-30);
florero6.scale.set(15,15,15);
florero6.rotation.y =Math.PI;

const florero7=flore({X:-20,Y:0,Z:-20});
scene.add(florero7);
florero7.position.set(650,10,800);
florero7.scale.set(15,15,15);
florero7.rotation.y =Math.PI;

const florero8=flore({X:-20,Y:0,Z:-20});
scene.add(florero8);
florero8.position.set(-650,10,800);
florero8.scale.set(15,15,15);
florero8.rotation.y =Math.PI;

const florero9=flore({X:-20,Y:0,Z:-20});
scene.add(florero9);
florero9.position.set(-650,10,1200);
florero9.scale.set(15,15,15);
florero9.rotation.y =Math.PI;

const florero10=flore({X:-20,Y:0,Z:-20});
scene.add(florero10);
florero10.position.set(650,10,1200);
florero10.scale.set(15,15,15);
florero10.rotation.y =Math.PI;

const florero11=flore({X:-20,Y:0,Z:-20});
scene.add(florero11);
florero11.position.set(980,10,1900);
florero11.scale.set(20,20,20);
florero11.rotation.y =Math.PI;
florero11.receiveShadow = true;

const florero12=flore({X:-20,Y:0,Z:-20});
scene.add(florero12);
florero12.position.set(-980,10,1900);
florero12.scale.set(20,20,20);
florero12.rotation.y =Math.PI;
florero12.receiveShadow = true;

const florero13=flore({X:-20,Y:0,Z:-20});
scene.add(florero13);
florero13.position.set(-850,10,1850);
florero13.scale.set(15,15,15);
florero13.rotation.y =Math.PI;
florero13.receiveShadow = true;

const florero14=flore({X:-20,Y:0,Z:-20});
scene.add(florero14);
florero14.position.set(850,10,1850);
florero14.scale.set(15,15,15);
florero14.rotation.y =Math.PI;
florero14.cash = true;

////tamal
const tam=tamal({X:-20,Y:0,Z:-20});
scene.add(tam);
tam.position.set(800,130,600);
tam.scale.set(10,10,10);

const tam1=tamal({X:-20,Y:0,Z:-20});
scene.add(tam1);
tam1.position.set(10,10,570);
tam1.scale.set(10,10,10);

const tam2=tamal({X:-20,Y:0,Z:-20});
scene.add(tam2);
tam2.position.set(870,320,1470);
tam2.scale.set(10,10,10);

////frutas
const frut=fruta({X:-20,Y:0,Z:-20});
scene.add(frut);
frut.position.set(10,10,700);
frut.scale.set(10,10,10);

const frut1=fruta({X:-20,Y:0,Z:-20});
scene.add(frut1);
frut1.position.set(-800,130,600);
frut1.scale.set(10,10,10);

////pancito
const pan=pan1({X:-20,Y:0,Z:-20});
scene.add(pan);
pan.position.set(-970,130,600);
pan.rotation.y =Math.PI/-4;
pan.scale.set(3,3,3);

///velass
const vela5=VP({X:-20,Y:0,Z:-20});
scene.add(vela5);
vela5.position.set(720,110,750);
vela5.scale.set(6,6,6);

const vela6=VP({X:-20,Y:0,Z:-20});
scene.add(vela6);
vela6.position.set(-1050,110,750);
vela6.scale.set(6,6,6);

////mole
const escenario111=molef({X:-20,Y:0,Z:-20});
scene.add(escenario111);
escenario111.position.set(960,130,600);
escenario111.rotation.y =Math.PI/-2;
escenario111.scale.set(15,15,15);

/////calaverita

const cala2=cala1({X:-20,Y:0,Z:-20});
scene.add(cala2);
cala2.position.set(120,0,500);
cala2.rotation.y =Math.PI/-4;
cala2.scale.set(4,4,4);

const cala3=cala1({X:-20,Y:0,Z:-20});
scene.add(cala3);
cala3.position.set(120,0,620);
cala3.rotation.y =Math.PI/-2;
cala3.scale.set(4,4,4);

const cala4=cala1({X:-20,Y:0,Z:-20});
scene.add(cala4);
cala4.position.set(120,0,730);
cala4.rotation.y =Math.PI/-2;
cala4.scale.set(4,4,4);

const cala5=cala1({X:-20,Y:0,Z:-20});
scene.add(cala5);
cala5.position.set(-110,0,500);
cala5.rotation.y =Math.PI/4;
cala5.scale.set(4,4,4);

const cala6=cala1({X:-20,Y:0,Z:-20});
scene.add(cala6);
cala6.position.set(-110,0,620);
cala6.rotation.y =Math.PI/2;
cala6.scale.set(4,4,4);

const cala7=cala1({X:-20,Y:0,Z:-20});
scene.add(cala7);
cala7.position.set(-110,0,730);
cala7.rotation.y =Math.PI/2;
cala7.scale.set(4,4,4);

const cala8=cala1({X:-20,Y:0,Z:-20});
scene.add(cala8);
cala8.position.set(250,50,-80);
cala8.scale.set(4,4,4);

const cala9=cala1({X:-20,Y:0,Z:-20});
scene.add(cala9);
cala9.position.set(-270,50,-80);
cala9.scale.set(4,4,4);

const cala10=cala1({X:-20,Y:0,Z:-20});
scene.add(cala10);
cala10.position.set(-110,0,850);
cala10.rotation.y =Math.PI/2;
cala10.scale.set(4,4,4);

const cala11=cala1({X:-20,Y:0,Z:-20});
scene.add(cala11);
cala11.position.set(-110,0,950);
cala11.rotation.y =Math.PI/2;
cala11.scale.set(4,4,4);

const cala12=cala1({X:-20,Y:0,Z:-20});
scene.add(cala12);
cala12.position.set(-110,0,1050);
cala12.rotation.y =Math.PI/2;
cala12.scale.set(4,4,4);

const cala13=cala1({X:-20,Y:0,Z:-20});
scene.add(cala13);
cala13.position.set(115,0,850);
cala13.rotation.y =Math.PI/-2;
cala13.scale.set(4,4,4);

const cala14=cala1({X:-20,Y:0,Z:-20});
scene.add(cala14);
cala14.position.set(115,0,950);
cala14.rotation.y =Math.PI/-2;
cala14.scale.set(4,4,4);

const cala15=cala1({X:-20,Y:0,Z:-20});
scene.add(cala15);
cala15.position.set(115,0,1050);
cala15.rotation.y =Math.PI/-2;
cala15.scale.set(4,4,4);


//bases
const ba=base1({X:-20,Y:0,Z:-20});
scene.add(ba);
ba.position.set(-650,40,-380);
ba.scale.set(30,30,30);

const ba1=base1({X:-20,Y:0,Z:-20});
scene.add(ba1);
ba1.position.set(650,40,-380);
ba1.scale.set(30,30,30);



//arco de flores
const arco=arco1({X:-20,Y:0,Z:-20});
scene.add(arco);
arco.position.set(1190,800,100);
arco.scale.set(10,10,10);
arco.rotation.x =Math.PI;
arco.rotation.y =Math.PI/2;

const arco2=arco1({X:-20,Y:0,Z:-20});
scene.add(arco2);
arco2.position.set(1190,800,500);
arco2.scale.set(10,10,10);
arco2.rotation.x =Math.PI;
arco2.rotation.y =Math.PI/2;

const arco3=arco1({X:-20,Y:0,Z:-20});
scene.add(arco3);
arco3.position.set(1190,800,-320);
arco3.scale.set(10,10,10);
arco3.rotation.x =Math.PI;
arco3.rotation.y =Math.PI/2;

const arco4=arco1({X:-20,Y:0,Z:-20});
scene.add(arco4);
arco4.position.set(-1190,800,100);
arco4.scale.set(10,10,10);
arco4.rotation.x =Math.PI;
arco4.rotation.y =Math.PI/2;

const arco5=arco1({X:-20,Y:0,Z:-20});
scene.add(arco5);
arco5.position.set(-1190,800,500);
arco5.scale.set(10,10,10);
arco5.rotation.x =Math.PI;
arco5.rotation.y =Math.PI/2;

const arco6=arco1({X:-20,Y:0,Z:-20});
scene.add(arco6);
arco6.position.set(-1190,800,-320);
arco6.scale.set(10,10,10);
arco6.rotation.x =Math.PI;
arco6.rotation.y =Math.PI/2;
////
const arco7=arco1({X:-20,Y:0,Z:-20});
scene.add(arco7);
arco7.position.set(-1190,800,-790);
arco7.scale.set(10,10,10);
arco7.rotation.x =Math.PI;
arco7.rotation.y =Math.PI/2;

const arco8=arco1({X:-20,Y:0,Z:-20});
scene.add(arco8);
arco8.position.set(-1190,800,900);
arco8.scale.set(10,10,10);
arco8.rotation.x =Math.PI;
arco8.rotation.y =Math.PI/2;

const arco9=arco1({X:-20,Y:0,Z:-20});
scene.add(arco9);
arco9.position.set(-1190,800,1300);
arco9.scale.set(10,10,10);
arco9.rotation.x =Math.PI;
arco9.rotation.y =Math.PI/2;

const arco10=arco1({X:-20,Y:0,Z:-20});
//scene.add(arco10);
arco10.position.set(-1190,800,-1250);
arco10.scale.set(10,10,10);
arco10.rotation.x =Math.PI;
arco10.rotation.y =Math.PI/2;

//////importantee
const arco11=arco1({X:-20,Y:0,Z:-20});
scene.add(arco11);
arco11.position.set(1190,800,-770);
arco11.scale.set(10,10,10);
arco11.rotation.x =Math.PI;
arco11.rotation.y =Math.PI/2;

const arco12=arco1({X:-20,Y:0,Z:-20});
scene.add(arco12);
arco12.position.set(1190,800,900);
arco12.scale.set(10,10,10);
arco12.rotation.x =Math.PI;
arco12.rotation.y =Math.PI/2;

const arco13=arco1({X:-20,Y:0,Z:-20});
scene.add(arco13);
arco13.position.set(1190,800,1300);
arco13.scale.set(10,10,10);
arco13.rotation.x =Math.PI;
arco13.rotation.y =Math.PI/2;
arco13
const arco14=arco1({X:-20,Y:0,Z:-20});
//scene.add(arco14);
arco14.position.set(1190,800,-1250);
arco14.scale.set(10,10,10);
arco14.rotation.x =Math.PI;
arco14.rotation.y =Math.PI/2;

////catedral
const iglesia1=iglesiaf({X:-20,Y:0,Z:-20});
scene.add(iglesia1);
iglesia1.position.set(0, 5, -1600);
//iglesia1.rotation.y = Math.PI / 9;
iglesia1.scale.set(200, 200, 100);

////árbol
const arb1=arbol2f({X:-20,Y:0,Z:-20});
scene.add(arb1);
arb1.position.set(-1200, 900, -1600);
arb1.rotation.y = Math.PI /4;
arb1.scale.set(300, 400, 300);

const arb2=arbol2f({X:-20,Y:0,Z:-20});
scene.add(arb2);
arb2.position.set(1200, 900, -1600);
arb2.rotation.y = Math.PI /-4;
arb2.scale.set(300, 400, 300);

////árbol
/*const arb=arbolf({X:-20,Y:0,Z:-20});
scene.add(arb);
arb.position.set(1200, 1300, -1600);
//iglesia1.rotation.y = Math.PI / 9;
arb.scale.set(200, 400, 200);

const arb1=arbolf({X:-20,Y:0,Z:-20});
scene.add(arb1);
arb1.position.set(1200, 900, -1600);
//iglesia1.rotation.y = Math.PI / 9;
arb1.scale.set(200, 400, 200);*/


////faros
var puntoluz = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz);
scene.add(puntoluz.target);
puntoluz.castShadow = true;

var helper1 = new THREE.SpotLightHelper(puntoluz);
//scene.add(helper1);
puntoluz.position.set(1000, 900, 400);
puntoluz.target.position.set(1000, 0, 400);
////////////////////////////////////////////        
var puntoluz1 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz1);
scene.add(puntoluz1.target);
puntoluz1.castShadow = true;

var helper2 = new THREE.SpotLightHelper(puntoluz1);
//scene.add(helper2);
puntoluz1.position.set(1000, 900, -900);
puntoluz1.target.position.set(1000, 100, -900);

////////////////////////////////////////////        
var puntoluz2 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz2);
scene.add(puntoluz2.target);
puntoluz2.castShadow = true;

var helper3 = new THREE.SpotLightHelper(puntoluz2);
//scene.add(helper3);
puntoluz2.position.set(-1000, 900, -900);
puntoluz2.target.position.set(-1000, 100, -900);

////////////////////////////////////////////        
var puntoluz3 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz3);
scene.add(puntoluz3.target);
puntoluz3.castShadow = true;

var helper4 = new THREE.SpotLightHelper(puntoluz3);
//scene.add(helper4);
puntoluz3.position.set(-1000, 900, 400);
puntoluz3.target.position.set(-1000, 100, 400);

////////////////////////////////////////////        
var puntoluz4 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz4);
scene.add(puntoluz4.target);
puntoluz4.castShadow = true;

var helper5 = new THREE.SpotLightHelper(puntoluz4);
//scene.add(helper5);
puntoluz4.position.set(-1000, 900, 1580);
puntoluz4.target.position.set(-1000, 100, 1580);


////////////////////////////////////////////        
var puntoluz5 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz5);
scene.add(puntoluz5.target);
puntoluz5.castShadow = true;

var helper6 = new THREE.SpotLightHelper(puntoluz5);
//scene.add(helper6);
puntoluz5.position.set(1000, 900, 1580);
puntoluz5.target.position.set(1000, 100, 1580);
/////////////////////////////////////
var puntoluz6 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz6);
scene.add(puntoluz6.target);
puntoluz6.castShadow = true;

var helper7 = new THREE.SpotLightHelper(puntoluz6);
//scene.add(helper7);
puntoluz6.position.set(-800, 900, -1600);
puntoluz6.target.position.set(-800, 100, -1600);

/////////////////////////////////////
var puntoluz6 = new THREE.SpotLight(0xF54927,1,50,0.6,0,0);
scene.add(puntoluz6);
scene.add(puntoluz6.target);
puntoluz6.castShadow = true;

var helper7 = new THREE.SpotLightHelper(puntoluz6);
//scene.add(helper7);
puntoluz6.position.set(800, 1000, -1600);
puntoluz6.target.position.set(800, 100, -1600);


////

const far=faro1({X:-20,Y:0,Z:-20});
scene.add(far);
far.position.set(1185, 0, 400);
far.rotation.y = Math.PI ;
far.scale.set(100, 230, 150);
far.castShadow = true;


const far1=faro1({X:-20,Y:0,Z:-20});
scene.add(far1);
far1.position.set(1185, 0, -900);
far1.rotation.y = Math.PI ;
far1.scale.set(100, 230, 150);
far1.castShadow = true;

const far2=faro1({X:-20,Y:0,Z:-20});
scene.add(far2);
far2.position.set(1185, 0, 1580);
far2.rotation.y = Math.PI ;
far2.scale.set(100, 230, 150);
far2.castShadow = true;

const far3=faro1({X:-20,Y:0,Z:-20});
scene.add(far3);
far3.position.set(-1185, 0, 400);
//far3.rotation.y = Math.PI ;
far3.scale.set(100, 230, 150);
far3.castShadow = true;

const far4=faro1({X:-20,Y:0,Z:-20});
scene.add(far4);
far4.position.set(-1185, 0, -900);
//far4.rotation.y = Math.PI ;
far4.scale.set(100, 230, 150);
far4.castShadow = true;

const far5=faro1({X:-20,Y:0,Z:-20});
scene.add(far5);
far5.position.set(-1185, 0, 1580);
//far5.rotation.y = Math.PI ;
far5.scale.set(100, 230, 150);
far5.castShadow = true;

const far6=faro1({X:-20,Y:0,Z:-20});
scene.add(far6);
far6.position.set(-800, 0, -1700);
far6.rotation.y = Math.PI /-2;
far6.scale.set(100, 230, 150);
far6.castShadow = true;

const far7=faro1({X:-20,Y:0,Z:-20});
scene.add(far7);
far7.position.set(800, 0, -1700);
far7.rotation.y = Math.PI /-2;
far7.scale.set(100, 230, 150);
far7.castShadow = true;


////banco
const ban=banco1({X:-20,Y:0,Z:-20});
scene.add(ban);
ban.position.set(1000, 0, -1300);
ban.rotation.y = Math.PI / -9 ;
ban.scale.set(80, 80, 120);

const ban1=banco1({X:-20,Y:0,Z:-20});
scene.add(ban1);
ban1.position.set(-1000, 0, -1300);
ban1.rotation.y = Math.PI / 9 ;
ban1.scale.set(80, 80, 120);

const ban2=banco1({X:-20,Y:0,Z:-20});
scene.add(ban2);
ban2.position.set(-980, 0, 1500);
ban2.rotation.y = Math.PI /2 ;
ban2.scale.set(70, 70, 120);

const ban3=banco1({X:-20,Y:0,Z:-20});
scene.add(ban3);
ban3.position.set(980, 0, 1500);
ban3.rotation.y = Math.PI /-2 ;
ban3.scale.set(70, 70, 120);

////calaca sentada
const sentada=catri({X:-20,Y:0,Z:-20});
scene.add(sentada);
sentada.position.set(950, 110, 1480);
sentada.rotation.y = Math.PI /-2 ;
sentada.scale.set(30,30,30);

const sentada1=catri({X:-20,Y:0,Z:-20});
scene.add(sentada1);
sentada1.position.set(-950, 110, 1480);
sentada1.rotation.y = Math.PI /2 ;
sentada1.scale.set(30,30,30);    

const sentada2=catri({X:-20,Y:0,Z:-20});
scene.add(sentada2);
sentada2.position.set(-980, 140, -1280);
sentada2.rotation.y = Math.PI /9 ;
sentada2.scale.set(30,30,30);  

const sentada3=catri({X:-20,Y:0,Z:-20});
scene.add(sentada3);
sentada3.position.set(980, 140, -1280);
sentada3.rotation.y = Math.PI /-9 ;
sentada3.scale.set(30,30,30);  

const co=conchap({X:-20,Y:0,Z:-20});
scene.add(co);
co.position.set(0, 0, 850);
co.scale.set(25,25,25);









//🎰🎰Rendering y animación
    requestAnimationFrame(render);
    function render() {
    //🪄🪄 Animación - 
ba.rotation.y += 0.005;
ba1.rotation.y += 0.005;





    //🎮🎮Actualización del OrbitControls para generar la suavidad de movimiento
    controls.update();
    //Llamado para renderizar y volver a llamar a la misma función (render)
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    }
</script>
</body>
</html>