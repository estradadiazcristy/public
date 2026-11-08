import * as THREE from "../js/three.module.js";

export default function E10({ x = 0, y = 0, z = 0 } = {}) {

    // MATERIALES (Lambert)
    var matVidrio = new THREE.MeshLambertMaterial({ color: 0x88bb88, transparent: true, opacity: 0.5 }); 
    var matCorcho = new THREE.MeshLambertMaterial({ color: 0x8b5a2b }); 
    var matEtiqueta = new THREE.MeshLambertMaterial({ color: 0xfffdd0 }); 

    // CUERPO (mesh1)
    var geoCuerpo = new THREE.BoxGeometry(10, 14, 6);
    var mesh1 = new THREE.Mesh(geoCuerpo, matVidrio);
    mesh1.position.set(0, 7, 0);
    mesh1.castShadow = true; // Proyectar sombra

    // HOMBRO / LADOS (mesh2)
    var geoHombro = new THREE.CylinderGeometry(3, 5, 4, 16);
    var mesh2 = new THREE.Mesh(geoHombro, matVidrio);
    mesh2.position.set(0, 16, 0);
    mesh2.castShadow = true; // Proyectar sombra

    // CUELLO (mesh3)
    var geoCuello = new THREE.CylinderGeometry(2, 2, 4, 16);
    var mesh3 = new THREE.Mesh(geoCuello, matVidrio);
    mesh3.position.set(0, 20, 0);
    mesh3.castShadow = true; // Proyectar sombra

    // TAPA (mesh4)
    var geoTapa = new THREE.CylinderGeometry(2.2, 2.2, 2, 16);
    var mesh4 = new THREE.Mesh(geoTapa, matCorcho);
    mesh4.position.set(0, 23, 0);
    mesh4.castShadow = true; // Proyectar sombra

    // ETIQUETA (mesh5)
    var geoEtiqueta = new THREE.BoxGeometry(8, 7, 0.2);
    var mesh5 = new THREE.Mesh(geoEtiqueta, matEtiqueta);
    mesh5.position.set(0, 7, 3.1);
    mesh5.castShadow = true; // Proyectar sombra

    // CREACIÓN DEL GRUPO ESC01
    var ESC10 = new THREE.Group();
    ESC10.add(mesh1, mesh2, mesh3, mesh4, mesh5);
    ESC10.position.set(x, y, z);

    return ESC10;
}