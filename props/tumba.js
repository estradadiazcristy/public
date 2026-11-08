import * as THREE from "../js/three.module.js";

export default function E13({ x = 0, y = 0, z = 0 } = {}) {

    // MATERIALES 
    var matTierra = new THREE.MeshLambertMaterial({ color: 0x4a2e18 }); 
    var matPiedraBase = new THREE.MeshLambertMaterial({ color: 0x555555 }); 
    var matPiedraLapida = new THREE.MeshLambertMaterial({ color: 0x777777 }); 
    var matCruz = new THREE.MeshLambertMaterial({ color: 0xeeeeee }); 

    // 1. TIERRA
    var geoTierra = new THREE.BoxGeometry(45, 3, 35);
    var mesh1 = new THREE.Mesh(geoTierra, matTierra);
    mesh1.position.set(0, 1.5, 0);
    mesh1.castShadow = true;

    // 2. PRIMER ESCALON
    var geoBase1 = new THREE.BoxGeometry(38, 4, 28);
    var mesh2 = new THREE.Mesh(geoBase1, matPiedraBase);
    mesh2.position.set(0, 5, -1);
    mesh2.castShadow = true;

    // 3. SEGUNDO ESCALÓN 
    var geoBase2 = new THREE.BoxGeometry(32, 5, 22);
    var mesh3 = new THREE.Mesh(geoBase2, matPiedraLapida);
    mesh3.position.set(0, 9.5, -2);
    mesh3.castShadow = true;

    // 4. LÁPIDA VERTICAL 
    var geoLapida = new THREE.BoxGeometry(26, 22, 6);
    var mesh4 = new THREE.Mesh(geoLapida, matPiedraLapida);
    mesh4.position.set(0, 23, -8);
    mesh4.castShadow = true;

    // 5. PARTE SUPERIOR DE LA LÁPIDA 
    var geoCopete = new THREE.BoxGeometry(20, 4, 6);
    var mesh5 = new THREE.Mesh(geoCopete, matPiedraLapida);
    mesh5.position.set(0, 36, -8);
    mesh5.castShadow = true;

    // CRUZ VERTICAL
    var geoCruzV = new THREE.BoxGeometry(3.5, 14, 3.5);
    var mesh6 = new THREE.Mesh(geoCruzV, matCruz);
    mesh6.position.set(0, 45, -8);
    mesh6.castShadow = true;

    // CRUX
    var geoCruzH = new THREE.BoxGeometry(11, 3.5, 3.5);
    var mesh7 = new THREE.Mesh(geoCruzH, matCruz);
    mesh7.position.set(0, 47, -8);
    mesh7.castShadow = true;


    // GRUPO 
    var tumba = new THREE.Group();
    tumba.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7);

    tumba.position.set(x, y, z); 

    return tumba;
}