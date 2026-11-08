import *as THREE from "../js/three.module.js";
export  default function E13({x,y,z}){ 

  //CUERPO DEL POZOLE
 var geometryTZ = new THREE.CylinderGeometry(  7, 5.5, 6, 20, 10 );
 var textureTZ = new THREE.TextureLoader().load("./assets/cuatro.jpg.jpeg");
var materialTZ = new THREE.MeshLambertMaterial({size:0.6,map:textureTZ});
// repetir la imagen en X
textureTZ.wrapS = THREE.RepeatWrapping;

// repetir la imagen en Y
textureTZ.wrapT = THREE.RepeatWrapping;

// escala de la imagen
textureTZ.repeat.set(6, 1);

var materialTZ = new THREE.MeshLambertMaterial({  map: textureTZ});
var meshTZ = new THREE.Mesh( geometryTZ, materialTZ);

// posición
meshTZ.position.set(0, 6, 0);

// rotación del tazón para  la textura
meshTZ.rotation.y = Math.PI / 2;

//scene.add(meshTZ);



//SOPA
var geometrySopa = new THREE.CylinderGeometry( 6.3, 6.3, 0.7, 20 );
 var textureSopa= new THREE.TextureLoader().load("./assets/p2.jpg.jpeg");
var materialSopa = new THREE.MeshLambertMaterial({size:0.6,map:textureSopa});
 var materialSopa = new THREE.MeshLambertMaterial({color: 0x9b3f13 });
 var meshSopa = new THREE.Mesh( geometrySopa,materialSopa);
 meshSopa.position.set(0, 9.1, 0);
//scene.add(meshSopa);
// repetir la imagen en X
textureSopa.wrapS = THREE.RepeatWrapping;

// repetir la imagen en Y
textureSopa.wrapT = THREE.RepeatWrapping;

// escala de la imagen
textureSopa.repeat.set(1, 1);

var materialSopa = new THREE.MeshLambertMaterial({  map: textureSopa});
var meshSopa = new THREE.Mesh( geometrySopa, materialSopa);

// posición
meshSopa.position.set(0, 9.1, 0);

// rotación del tazón para  la textura
meshSopa.rotation.y = Math.PI / 2;

//scene.add(meshSopa);

// BORDE AZUL
var geometryBorde = new THREE.TorusGeometry( 6.6, 0.65, 10, 30 );
 var materialBorde = new THREE.MeshLambertMaterial({  color: 0x35479c });
 var meshBorde = new THREE.Mesh( geometryBorde, materialBorde );
 meshBorde.rotation.x = Math.PI / 2; 
 meshBorde.position.set(0, 9.4, 0);
 //scene.add(meshBorde);

//DECORACIÓN AZUL DEL BORDE
var geometryDecoracion = new THREE.SphereGeometry( 0.8, 10, 8 );
 var materialDecoracion = new THREE.MeshLambertMaterial({ color: 0x35479c });
// decoración 1 IZQUIERDA
    var meshdecoracion1 = new THREE.Mesh( geometryDecoracion, materialDecoracion );
meshdecoracion1.scale.x = 1.5;
meshdecoracion1.position.set(-5.5, 8.8, 4.5);
//scene.add(meshdecoracion1);

// decoración 2 IZQUIERDA
 var meshdecoracion2 = new THREE.Mesh( geometryDecoracion,materialDecoracion );
meshdecoracion2.scale.x = 1.5;
meshdecoracion2.position.set(-3.5, 8.5, 5.5);
//scene.add(meshdecoracion2);


// decoración 3
    var meshdecoracion3 = new THREE.Mesh( geometryDecoracion, materialDecoracion );
meshdecoracion3.scale.x = 1.5;
meshdecoracion3.position.set(-1.5, 8.4, 5.8);
//scene.add(meshdecoracion3);


// decoración 4
var meshdecoracion4 = new THREE.Mesh(geometryDecoracion, materialDecoracion  );
meshdecoracion4.scale.x = 1.5;
meshdecoracion4.position.set(1.5, 8.4, 5.8);
 //scene.add(meshdecoracion4);

// decoración 5
    var meshdecoracion5 = new THREE.Mesh( geometryDecoracion,  materialDecoracion);
meshdecoracion5.scale.x = 1.5;
meshdecoracion5.position.set(3.5, 8.5, 5.5);
//scene.add(meshdecoracion5);

// decoración 6
 var meshdecoracion6 = new THREE.Mesh( geometryDecoracion,materialDecoracion );
meshdecoracion6.scale.x = 1.5;
meshdecoracion6.position.set(5.5, 8.8, 4.5);
//scene.add(meshdecoracion6);

//INGREDIENTES
var geometryIngrediente = new THREE.SphereGeometry(1.1, 10, 8 );
var materialIngrediente = new THREE.MeshLambertMaterial({color: 0xe89b38  });

// ingrediente 1
    var meshi1 = new THREE.Mesh(geometryIngrediente, materialIngrediente );
meshi1.scale.x = 1.5;
meshi1.scale.y = 0.5;
meshi1.position.set(-4, 9.7, 1);
//scene.add(meshi1);

// ingrediente 2
    var meshi2 = new THREE.Mesh( geometryIngrediente, materialIngrediente );
 meshi2.scale.x = 1.5;
meshi2.scale.y = 0.5;
meshi2.position.set(3.8, 9.7, 1.5);
//scene.add(meshi2);

// ingrediente 3
    var meshi3 = new THREE.Mesh( geometryIngrediente, materialIngrediente);
meshi3.scale.x = 1.5;
meshi3.scale.y = 0.5;
meshi3.position.set(-1.5, 9.8, 3);
//scene.add(meshi3);

// ingrediente 4
    var meshi4 = new THREE.Mesh( geometryIngrediente, materialIngrediente );
 meshi4.scale.x = 1.5;
meshi4.scale.y = 0.5;
 meshi4.position.set(2, 9.8, 3.5);
//scene.add(meshi4);



//VERDURAS BLANCAS INGREDIENTE
 var geometryVerdura = new THREE.SphereGeometry(  1.4, 12, 8 );
  var materialVerdura = new THREE.MeshLambertMaterial({ color: 0xf3f0c4 });
var meshverdura1 = new THREE.Mesh( geometryVerdura, materialVerdura );
 meshverdura1.scale.y = 0.6;
 meshverdura1.position.set(0, 10, 2);
//scene.add(meshverdura1);

// verdura 2
    var meshverdura2 = new THREE.Mesh( geometryVerdura, materialVerdura);
 meshverdura2.scale.y = 0.6;
meshverdura2.position.set(-2.5, 10, 1);
 //scene.add(meshverdura2);

//TALLO VERDE

    var geometryTallo = new THREE.CylinderGeometry( 0.3, 0.3, 2, 8 );
 var materialTallo = new THREE.MeshLambertMaterial({color: 0x4c8c3c });
 var meshtallo = new THREE.Mesh(  geometryTallo,materialTallo );
 meshtallo.rotation.z = -0.3;
 meshtallo.position.set(0, 11, 2);
 //scene.add(meshtallo);

   



         //espacio para colocar el grupo
    const pozole1 = new THREE.Group();
    pozole1.add(meshTZ,meshSopa,meshBorde,meshdecoracion1,meshdecoracion2,meshdecoracion3,meshdecoracion4,meshdecoracion5,meshdecoracion6,
        meshi1,meshi2,meshi3,meshi4,meshverdura1,meshverdura2,meshtallo);
pozole1.position.set(x,y,z); //no cololocar valor a x,y,z
        return pozole1;}
