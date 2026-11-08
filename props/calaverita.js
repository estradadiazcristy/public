import *as THREE from "../js/three.module.js";
export  default function e21({x,y,z}){ 

  //CABEZA DE CALAVERITA
    var geometryCabeza = new THREE.SphereGeometry(8, 20, 16);

    var materialCabeza = new THREE.MeshLambertMaterial({
        color: 0xfdf0d5
    });

    var meshCabeza = new THREE.Mesh(geometryCabeza, materialCabeza );
    meshCabeza.scale.y = 1.05;
    meshCabeza.position.set(0, 9, 0);

    //scene.add(meshCabeza);

//PARTE DE ABAJO DE LOS DIENTES                  
var geometryMandibula = new THREE.CylinderGeometry( 5, 4.5, 4, 16);
var materialMandibula = new THREE.MeshLambertMaterial({ color: 0xfdf0d5 });
var meshMandibula = new THREE.Mesh(geometryMandibula,materialMandibula);
meshMandibula.position.set(0, 3, 0);
//scene.add(meshMandibula);

// OJO IZQUIERDO
var geometryOjo1 = new THREE.SphereGeometry( 2.5, 16, 12 );
var materialOjo1 = new THREE.MeshLambertMaterial({color: 0x75214b });
var meshOjo1 = new THREE.Mesh( geometryOjo1, materialOjo1 );
 meshOjo1.scale.z = 0.4;
  meshOjo1.position.set(-3.5, 10, 7);
//scene.add(meshOjo1);

//OJO DERECHO
var geometryOjo2 = new THREE.SphereGeometry(2.5, 16, 12 );
var materialOjo2 = new THREE.MeshLambertMaterial({color: 0x75214b });
var meshOjo2 = new THREE.Mesh( geometryOjo2, materialOjo2 );
 meshOjo2.scale.z = 0.4;
 meshOjo2.position.set(3.5, 10, 7);
 //scene.add(meshOjo2);

//FLORES OJO IZQUIERDO
var geometryPetalo = new THREE.SphereGeometry(1.3, 10, 8);
var materialPetalo = new THREE.MeshLambertMaterial({ color: 0xec665a });

// arriba
    var meshpetalo1 = new THREE.Mesh(geometryPetalo, materialPetalo );
meshpetalo1.position.set(-3.5, 13, 7);
 //scene.add(meshpetalo1);

// abajo
    var meshpetalo2 = new THREE.Mesh(geometryPetalo, materialPetalo );
 meshpetalo2.position.set(-3.5, 7, 7);
//scene.add(meshpetalo2);

// izquierda
    var meshpetalo3 = new THREE.Mesh( geometryPetalo, materialPetalo );
 meshpetalo3.position.set(-6.5, 10, 7);
//scene.add(meshpetalo3);

// derecha
    var meshpetalo4 = new THREE.Mesh(geometryPetalo,  materialPetalo );
meshpetalo4.position.set(-0.5, 10, 7);
 //scene.add(meshpetalo4);


// centro
    var geometryCentro = new THREE.SphereGeometry(1.2, 10, 8 );

    var materialCentro = new THREE.MeshLambertMaterial({color: 0xffc300 });
 var meshcentro1 = new THREE.Mesh(geometryCentro,materialCentro );
    meshcentro1.position.set(-3.5, 10, 8);
 //scene.add(meshcentro1);

//FLORES OJO DERECHO
 var materialPetalo2 = new THREE.MeshLambertMaterial({color: 0xec665a });

// arriba
    var meshpetalo5 = new THREE.Mesh(geometryPetalo,materialPetalo2 );
 meshpetalo5.position.set(3.5, 13, 7);
//scene.add(meshpetalo5);

// abajo
    var meshpetalo6 = new THREE.Mesh( geometryPetalo, materialPetalo2);
meshpetalo6.position.set(3.5, 7, 7);
 //scene.add(meshpetalo6);

// izquierda
    var meshpetalo7 = new THREE.Mesh(geometryPetalo,materialPetalo2);
 meshpetalo7.position.set(0.5, 10, 7);
 //scene.add(meshpetalo7);

// derecha
    var meshpetalo8 = new THREE.Mesh( geometryPetalo, materialPetalo2);
 meshpetalo8.position.set(6.5, 10, 7);
 //scene.add(meshpetalo8);

// centro
    var materialCentro2 = new THREE.MeshLambertMaterial({color: 0xffc300});
 var meshcentro2 = new THREE.Mesh(geometryCentro, materialCentro2 );
meshcentro2.position.set(3.5, 10, 8);
//scene.add(meshcentro2);

//NARIZ
var geometryNariz = new THREE.ConeGeometry( 1.2, 2.5,3);
 var materialNariz = new THREE.MeshLambertMaterial({color: 0x75214b });
var meshNariz = new THREE.Mesh( geometryNariz,materialNariz );
meshNariz.rotation.x = Math.PI / 2;
 meshNariz.position.set(0, 6.5, 8);
//scene.add(meshNariz);

//CORAZÓN
 var geometryCorazon = new THREE.SphereGeometry(1.2, 12, 8 );
var materialCorazon = new THREE.MeshLambertMaterial({color: 0xef286b });

// lado izquierdo
    var meshcorazon1 = new THREE.Mesh(geometryCorazon, materialCorazon);
 meshcorazon1.position.set(-0.8, 16, 7);
//scene.add(meshcorazon1);

// lado derecho
    var meshcorazon2 = new THREE.Mesh(geometryCorazon,materialCorazon);
meshcorazon2.position.set(0.8, 16, 7);
 //scene.add(meshcorazon2);

// punta
    var geometryPunta = new THREE.ConeGeometry( 1.6, 2.5, 3);
var meshpunta = new THREE.Mesh(geometryPunta, materialCorazon);
 meshpunta.rotation.x = Math.PI;
meshpunta.position.set(0, 15, 7);
//scene.add(meshpunta);

//DECORACIONES
var geometryPunto = new THREE.SphereGeometry(0.6, 10, 8 );
 var materialPunto = new THREE.MeshLambertMaterial({ color: 0xa7e005 });

// punto de arriba
    var meshpunto1 = new THREE.Mesh(geometryPunto,  materialPunto );
meshpunto1.position.set(0, 18, 7);
//scene.add(meshpunto1);


// punto izquierdo
    var meshpunto2 = new THREE.Mesh( geometryPunto, materialPunto );
meshpunto2.position.set(-2.2, 16, 7);
 //scene.add(meshpunto2);
// punto derecho
    var meshpunto3 = new THREE.Mesh( geometryPunto,materialPunto );
meshpunto3.position.set(2.2, 16, 7);
 //scene.add(meshpunto3);


//DIENTES

    var geometryDiente = new THREE.BoxGeometry( 0.9, 1.3, 0.6 );
var materialDiente = new THREE.MeshLambertMaterial({ color: 0xffffff });

    var meshdiente1 = new THREE.Mesh(geometryDiente,materialDiente );
 meshdiente1.position.set(-3, 3, 7);
 //scene.add(meshdiente1);

 var meshdiente2 = new THREE.Mesh(geometryDiente, materialDiente);
 meshdiente2.position.set(-2, 3, 7);
//scene.add(meshdiente2);

var meshdiente3 = new THREE.Mesh( geometryDiente,materialDiente );
meshdiente3.position.set(-1, 3, 7);
//scene.add(meshdiente3);

var meshdiente4 = new THREE.Mesh( geometryDiente, materialDiente );
 meshdiente4.position.set(0, 3, 7);
//scene.add(meshdiente4);

var meshdiente5 = new THREE.Mesh(geometryDiente, materialDiente);
meshdiente5.position.set(1, 3, 7);
//scene.add(meshdiente5);

var meshdiente6 = new THREE.Mesh(geometryDiente, materialDiente );
 meshdiente6.position.set(2, 3, 7);
//scene.add(meshdiente6);


var meshdiente7 = new THREE.Mesh( geometryDiente, materialDiente );
 meshdiente7.position.set(3, 3, 7);
//scene.add(meshdiente7);

   




         //espacio para colocar el grupo
    const cala1 = new THREE.Group();
    cala1.add(meshdiente1,meshdiente2,meshdiente3,meshdiente4,meshdiente5,meshdiente6,meshdiente7,meshpunto1,meshpunto2,meshpunto3,
    meshcorazon1,meshcorazon2,meshpunta,meshNariz,meshcentro2,meshcentro1,meshpetalo1,
meshpetalo2,meshpetalo3,meshpetalo4,meshpetalo5,meshpetalo6,meshpetalo7,meshpetalo8,meshOjo1,meshOjo2,meshMandibula,meshCabeza);
cala1.position.set(x,y,z); //no cololocar valor a x,y,z
        return cala1;}
