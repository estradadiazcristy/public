import *as THREE from "../js/three.module.js";
export  default function sombrero({x,y,z}){ 

    //OBJETOS  ✏️✏️✏️✏️  🪶
   var geometry01 = new THREE.CylinderGeometry(9,10,1.2,64);

    var material01 = new THREE.MeshBasicMaterial({
        color: 0xc2185b,
        side: THREE.DoubleSide
    });

    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 5, 0);
    mesh01.scale.y = 0.45;
//scene.add(mesh01);

    // BORDE MORADO
    var geometry02 = new THREE.TorusGeometry(8.8,0.7,20,64);
var material02 = new THREE.MeshBasicMaterial({color: 0x702283,side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 5.35, 0);
mesh02.rotation.x = Math.PI / 2;
//scene.add(mesh02);

    // COPA DEL SOMBRERO

    var geometry03 = new THREE.CylinderGeometry(3.3,4.2,6,48);

    var material03 = new THREE.MeshBasicMaterial({color: 0xc2185b,side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry03, material03);
mesh03.position.set(0, 8, 0);
//scene.add(mesh03);

// PARTE SUPERIOR DE LA COPA

    var geometry04 = new THREE.SphereGeometry(3.3,32,16);
var material04 = new THREE.MeshBasicMaterial({
        color: 0xc2185b,
        side: THREE.DoubleSide});

    var mesh04 = new THREE.Mesh(geometry04, material04);

    mesh04.position.set(0, 11, 0);

    // plano
    mesh04.scale.set(1, 0.45, 1);
//scene.add(mesh04);

    // CINTA MORADA
    var geometry05 = new THREE.TorusGeometry(3.75,0.55,20,48);

    var material05 = new THREE.MeshBasicMaterial({
        color: 0x702283,
        side: THREE.DoubleSide
    });

    var mesh05 = new THREE.Mesh(geometry05, material05);

    mesh05.position.set(0, 6.5, 0);
    mesh05.rotation.x = Math.PI / 2;

    //scene.add(mesh05);

    // decoracion Puntos amarillos
    
    var materialAmarillo = new THREE.MeshBasicMaterial({color: 0xffe6a7});
    // Punto 1
    var geometry06 = new THREE.SphereGeometry(0.35, 20, 20);
    
    var meshpunto01 = new THREE.Mesh(geometry06, materialAmarillo);
 meshpunto01.position.set(-2.5, 8, 2.9);
    //scene.add(meshpunto01);
    // Punto 2
    var meshpunto02 = new THREE.Mesh(geometry06, materialAmarillo);
    meshpunto02.position.set(1.5, 9, 3.1);
    //scene.add(meshpunto02);
    // Punto 3
    var meshpunto03 = new THREE.Mesh(geometry06, materialAmarillo);
    meshpunto03.position.set(2.4, 7.8, 2.8);
    //scene.add(meshpunto03);
// Punto 4
    var meshpunto04 = new THREE.Mesh(geometry06, materialAmarillo);

    meshpunto04.position.set(-1, 10, 2.8);
    //scene.add(meshpunto04);


    // DECORACIÓN MORADA 

    // Figura decorativa 1
    var geometry07 = new THREE.TorusGeometry( 1.1,0.18,12,24);

    var material07 = new THREE.MeshBasicMaterial({ color: 0x7b2cbf});
var meshdecoracion01 = new THREE.Mesh(geometry07, material07);
meshdecoracion01.position.set(-1.5, 10.3, 2.7);
meshdecoracion01.rotation.x = Math.PI / 2;
//scene.add(meshdecoracion01);

 // Figura decorativa 2
    var meshdecoracion02 = new THREE.Mesh(geometry07, material07);
meshdecoracion02.position.set(0, 10.7, 2.9);
meshdecoracion02.rotation.x = Math.PI / 2;
//scene.add(meshdecoracion02);

 // Figura decorativa 3
    var meshdecoracion03 = new THREE.Mesh(geometry07, material07);
 meshdecoracion03.position.set(1.5, 10.3, 2.7);
    meshdecoracion03.rotation.x = Math.PI / 2;

    //scene.add(meshdecoracion03);

    // DETALLES AMARILLOS

    var geometry08 = new THREE.SphereGeometry(0.3, 16,16);

    //izquierdo
    var meshdetalle01 = new THREE.Mesh( geometry08,materialAmarillo );
meshdetalle01.position.set(-6, 5.4, 1);
    //scene.add(meshdetalle01);
    // derecho
    var meshdetalle02 = new THREE.Mesh(geometry08,materialAmarillo );

    meshdetalle02.position.set(6, 5.4, 1);
    //scene.add(meshdetalle02);
// Detalle frontal
    var meshdetalle03 = new THREE.Mesh(geometry08,materialAmarillo);

    meshdetalle03.position.set(0, 5.4, 7.5);
    //scene.add(meshdetalle03);
  

         //espacio para colocar el grupo
    const sombrero1 = new THREE.Group();
    sombrero1.add(mesh01,mesh02,mesh03,mesh04,mesh05,meshpunto01,meshpunto02,
        meshpunto03,meshpunto04,meshdecoracion01,meshdecoracion02,meshdecoracion03,meshdetalle01,meshdetalle02,meshdetalle03);
sombrero1.position.set(x,y,z); //no cololocar valor a x,y,z
        return sombrero1;}