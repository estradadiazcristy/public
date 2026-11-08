import *as THREE from "../js/three.module.js";
export  default function EO911({x,y,z}){ 

  

   //vaso color1
  var geometry133 = new THREE.CylinderGeometry(4,4,9,10,10);
        var material133 = new THREE.MeshLambertMaterial({ color: 0xffff00, transparent: true, opacity:0.5 });
        var mesh133 = new THREE.Mesh(geometry133, material133);
        mesh133.position.set(26, 4, -24);
        //scene.add(mesh133);

         var tas = new THREE.CylinderGeometry(3.5, 3,8, 10, 10, false);
        var materialtas = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas = new THREE.Mesh(tas, materialtas);
        meshtas.position.set(26, 4, -24);
        //scene.add(meshtas);

        
       
//fuego
        var geometry91 = new THREE.SphereGeometry(1.5,1);
        var material91 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh91 = new THREE.Mesh(geometry91, material91);
        mesh91.position.set(26, 9, -24);
        //scene.add(mesh91);
    
        //fuego2
         var geometry9 = new THREE.SphereGeometry(1,1);
        var material9 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh9 = new THREE.Mesh(geometry9, material9);
        mesh9.position.set(26, 9, -24);
        //scene.add(mesh9);


    const VP = new THREE.Group();
    VP.add(mesh133,mesh91,mesh9,meshtas);
    VP.position.set(x,y,z); //no cololocar valor a x,y,z
    return VP;

}

