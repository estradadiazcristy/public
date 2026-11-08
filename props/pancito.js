import *as THREE from "../js/three.module.js";
export  default function eo40({x,y,z}){ 

  
//  MATERIAL DEL PAN

var materialPan = new THREE.MeshStandardMaterial({ color: 0x724319,});


//  PARTE PRINCIPAL DEL PAN

var geometryPan = new THREE.SphereGeometry(11, 32, 16);

var meshpan = new THREE.Mesh( geometryPan, materialPan);
meshpan.scale.set(1.5, 0.65, 1.2);
meshpan.position.set(0, 3, 0);
//scene.add(meshpan);

//EJEMPLOOO
//HUESO HORIZONTAL SOBRE EL PAN

    var geometryHueso = new THREE.SphereGeometry(2, 12, 8);
 var materialHueso = new THREE.MeshLambertMaterial({ color: 0xd98529 });

  //parte central horizontal
    var meshhuesoHorizontal = new THREE.Mesh( geometryHueso, materialHueso);

    meshhuesoHorizontal.scale.x = 2.2;
    meshhuesoHorizontal.scale.y = 0.45;
    meshhuesoHorizontal.scale.z = 0.45;

meshhuesoHorizontal.position.set(0, 10.8, 0);
 //scene.add(meshhuesoHorizontal);


// extremo izquierdo
    var meshhuesoIzq = new THREE.Mesh( geometryHueso, materialHueso  );

    meshhuesoIzq.scale.x = 0.65;
    meshhuesoIzq.scale.y = 0.75;
    meshhuesoIzq.scale.z = 0.55;
 meshhuesoIzq.position.set(-3, 10.8, 0);
 //scene.add(meshhuesoIzq);


// extremo derecho
    var meshhuesoDer = new THREE.Mesh(  geometryHueso, materialHueso );

    meshhuesoDer.scale.x = 0.65;
    meshhuesoDer.scale.y = 0.75;
    meshhuesoDer.scale.z = 0.55;

 meshhuesoDer.position.set(3, 10.8, 0);
 //scene.add(meshhuesoDer);



//HUESO VERTICAL SOBRE EL PAN
// parte central vertical
    var meshhuesoVertical = new THREE.Mesh( geometryHueso, materialHueso );

    meshhuesoVertical.scale.x = 0.45;
    meshhuesoVertical.scale.y = 0.45;
    meshhuesoVertical.scale.z = 2.2;
 meshhuesoVertical.position.set(0, 11.1, 0);
 //scene.add(meshhuesoVertical);


// extremo delantero
    var meshhuesoFrente = new THREE.Mesh(geometryHueso,  materialHueso );

    meshhuesoFrente.scale.x = 0.65;
    meshhuesoFrente.scale.y = 0.75;
    meshhuesoFrente.scale.z = 0.65;

meshhuesoFrente.position.set(0, 11.1, 3);
//scene.add(meshhuesoFrente);

// extremo trasero
    var meshhuesoAtras = new THREE.Mesh(  geometryHueso, materialHueso );

    meshhuesoAtras.scale.x = 0.65;
    meshhuesoAtras.scale.y = 0.75;
    meshhuesoAtras.scale.z = 0.65;

 meshhuesoAtras.position.set(0, 11.1, -3);
 //scene.add(meshhuesoAtras);


// HUeso DEL PAN

var geometryHueso = new THREE.CapsuleGeometry(0.5, 11, 8, 16);

var meshhueso1 = new THREE.Mesh( geometryHueso,  materialPan);

meshhueso1.position.set(0, 8, 0);
//scene.add(meshhueso1);


// Huesito horizontal

var meshhueso2 = new THREE.Mesh(  geometryHueso,  materialPan);

meshhueso2.position.set(0, 11, 0);
meshhueso2.rotation.z = Math.PI / 2;

//scene.add(meshhueso2);
// BOLITA DEL CENTRO

var geometryBolita = new THREE.SphereGeometry(0.8, 20, 20);

var meshbolita = new THREE.Mesh(geometryBolita,  materialPan);

meshbolita.position.set(0, 6.8, 0);
//scene.add(meshbolita);

//bolitas decorativas
var meshbolita1 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
meshbolita1.position.set(-3, 10, 2); 
//scene.add(meshbolita1);

var meshbolita2 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan );
 meshbolita2.position.set(3, 10, 2); 
 //scene.add(meshbolita2);

 var meshbolita3 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
 meshbolita3.position.set(-8, 9.5, 1.7); 
 //scene.add(meshbolita3);

 var meshbolita4 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
 meshbolita4.position.set(8, 9.5, 1.5);
  //scene.add(meshbolita4);

  //bolitas de atras
  var meshbolita5 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
meshbolita5.position.set(-3, 10, -2); 
//scene.add(meshbolita5);

var meshbolita6 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan );
 meshbolita6.position.set(3, 10, -2); 
 //scene.add(meshbolita6);

 var meshbolita7 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
 meshbolita7.position.set(-8, 9.5, -1.7); 
 //scene.add(meshbolita7);

 var meshbolita8 = new THREE.Mesh( new THREE.SphereGeometry(0.45, 16, 16), materialPan ); 
 meshbolita8.position.set(8, 9.5, -1.5);
  //scene.add(meshbolita8);

   

         //espacio para colocar el grupo
    const pan1 = new THREE.Group();
    pan1.add(meshpan,meshhuesoHorizontal,meshhuesoIzq,meshhuesoDer,meshhuesoVertical,
        meshhuesoFrente,meshhuesomeshhuesoAtras,meshhueso1,meshhueso2,meshbolita1,meshbolita2,meshbolita3,
        meshbolita4,meshbolita5,meshbolita6,meshbolita7,meshbolita8,meshbolita );
    pan1.position.set(x,y,z); //no cololocar valor a x,y,z
        return pan1;
    }
