import * as THREE from "../js/three.module.js";

export default function E08({x,y,z}){

    // --- MATERIAL ÚNICO ---
    var matFlor = new THREE.MeshLambertMaterial({ color: 0xFF6600 }); 

    // --- 1. FLOR BASE 1 ---
    var geoFlor1 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_1 = new THREE.Mesh(geoFlor1, matFlor);
    var mesh02_1 = new THREE.Mesh(geoFlor1, matFlor); mesh02_1.rotation.set(0, 0, Math.PI / 4);
    var mesh03_1 = new THREE.Mesh(geoFlor1, matFlor); mesh03_1.rotation.set(0, 0, Math.PI / 2);
    var mesh04_1 = new THREE.Mesh(geoFlor1, matFlor); mesh04_1.rotation.set(0, 0, 2.355); 

    var UNO_1 = new THREE.Group();
    UNO_1.add(mesh01_1, mesh02_1, mesh03_1, mesh04_1);

    var DOS_1 = UNO_1.clone(); DOS_1.rotation.set(0, Math.PI / 4, 0);
    var TRES_1 = UNO_1.clone(); TRES_1.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_1 = UNO_1.clone(); CUATRO_1.rotation.set(0, 2.355, 0);

    var CINCO = new THREE.Group();
    CINCO.add(UNO_1, DOS_1, TRES_1, CUATRO_1);
    CINCO.position.set(-45, 15, -45);
    CINCO.scale.set(1, 1, 0.6); 
    CINCO.rotation.set(Math.PI / 2, 0, 0);


    // --- 2. FLOR BASE 2 ---
    var geoFlor2 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_2 = new THREE.Mesh(geoFlor2, matFlor);
    var mesh02_2 = new THREE.Mesh(geoFlor2, matFlor); mesh02_2.rotation.set(0, 0, Math.PI / 4);
    var mesh03_2 = new THREE.Mesh(geoFlor2, matFlor); mesh03_2.rotation.set(0, 0, Math.PI / 2);
    var mesh04_2 = new THREE.Mesh(geoFlor2, matFlor); mesh04_2.rotation.set(0, 0, 2.355); 

    var UNO_2 = new THREE.Group();
    UNO_2.add(mesh01_2, mesh02_2, mesh03_2, mesh04_2);

    var DOS_2 = UNO_2.clone(); DOS_2.rotation.set(0, Math.PI / 4, 0);
    var TRES_2 = UNO_2.clone(); TRES_2.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_2 = UNO_2.clone(); CUATRO_2.rotation.set(0, 2.355, 0);

    var SEIS = new THREE.Group();
    SEIS.add(UNO_2, DOS_2, TRES_2, CUATRO_2);
    SEIS.position.set(-38, 22, -45);
    SEIS.scale.set(1, 1, 0.6); 
    SEIS.rotation.set(Math.PI / 2, 0, 0);


    // --- 3. FLOR BASE 3 ---
    var geoFlor3 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_3 = new THREE.Mesh(geoFlor3, matFlor);
    var mesh02_3 = new THREE.Mesh(geoFlor3, matFlor); mesh02_3.rotation.set(0, 0, Math.PI / 4);
    var mesh03_3 = new THREE.Mesh(geoFlor3, matFlor); mesh03_3.rotation.set(0, 0, Math.PI / 2);
    var mesh04_3 = new THREE.Mesh(geoFlor3, matFlor); mesh04_3.rotation.set(0, 0, 2.355); 

    var UNO_3 = new THREE.Group();
    UNO_3.add(mesh01_3, mesh02_3, mesh03_3, mesh04_3);

    var DOS_3 = UNO_3.clone(); DOS_3.rotation.set(0, Math.PI / 4, 0);
    var TRES_3 = UNO_3.clone(); TRES_3.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_3 = UNO_3.clone(); CUATRO_3.rotation.set(0, 2.355, 0);

    var SIETE = new THREE.Group();
    SIETE.add(UNO_3, DOS_3, TRES_3, CUATRO_3);
    SIETE.position.set(-31, 29, -45);
    SIETE.scale.set(1, 1, 0.6); 
    SIETE.rotation.set(Math.PI / 2, 0, 0);


    // --- 4. FLOR BASE 4 ---
    var geoFlor4 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_4 = new THREE.Mesh(geoFlor4, matFlor);
    var mesh02_4 = new THREE.Mesh(geoFlor4, matFlor); mesh02_4.rotation.set(0, 0, Math.PI / 4);
    var mesh03_4 = new THREE.Mesh(geoFlor4, matFlor); mesh03_4.rotation.set(0, 0, Math.PI / 2);
    var mesh04_4 = new THREE.Mesh(geoFlor4, matFlor); mesh04_4.rotation.set(0, 0, 2.355); 

    var UNO_4 = new THREE.Group();
    UNO_4.add(mesh01_4, mesh02_4, mesh03_4, mesh04_4);

    var DOS_4 = UNO_4.clone(); DOS_4.rotation.set(0, Math.PI / 4, 0);
    var TRES_4 = UNO_4.clone(); TRES_4.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_4 = UNO_4.clone(); CUATRO_4.rotation.set(0, 2.355, 0);

    var OCHO = new THREE.Group();
    OCHO.add(UNO_4, DOS_4, TRES_4, CUATRO_4);
    OCHO.position.set(-21, 35, -45);
    OCHO.scale.set(1, 1, 0.6); 
    OCHO.rotation.set(Math.PI / 2, 0, 0);


    // --- 5. FLOR BASE 5 (CENTRO / CÚSPIDE) ---
    var geoFlor5 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_5 = new THREE.Mesh(geoFlor5, matFlor);
    var mesh02_5 = new THREE.Mesh(geoFlor5, matFlor); mesh02_5.rotation.set(0, 0, Math.PI / 4);
    var mesh03_5 = new THREE.Mesh(geoFlor5, matFlor); mesh03_5.rotation.set(0, 0, Math.PI / 2);
    var mesh04_5 = new THREE.Mesh(geoFlor5, matFlor); mesh04_5.rotation.set(0, 0, 2.355); 

    var UNO_5 = new THREE.Group();
    UNO_5.add(mesh01_5, mesh02_5, mesh03_5, mesh04_5);

    var DOS_5 = UNO_5.clone(); DOS_5.rotation.set(0, Math.PI / 4, 0);
    var TRES_5 = UNO_5.clone(); TRES_5.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_5 = UNO_5.clone(); CUATRO_5.rotation.set(0, 2.355, 0);

    var NUEVE = new THREE.Group();
    NUEVE.add(UNO_5, DOS_5, TRES_5, CUATRO_5);
    NUEVE.position.set(0, 40, -45);
    NUEVE.scale.set(1, 1, 0.6); 
    NUEVE.rotation.set(Math.PI / 2, 0, 0);


    // --- 6. FLOR BASE 6 ---
    var geoFlor6 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_6 = new THREE.Mesh(geoFlor6, matFlor);
    var mesh02_6 = new THREE.Mesh(geoFlor6, matFlor); mesh02_6.rotation.set(0, 0, Math.PI / 4);
    var mesh03_6 = new THREE.Mesh(geoFlor6, matFlor); mesh03_6.rotation.set(0, 0, Math.PI / 2);
    var mesh04_6 = new THREE.Mesh(geoFlor6, matFlor); mesh04_6.rotation.set(0, 0, 2.355); 

    var UNO_6 = new THREE.Group();
    UNO_6.add(mesh01_6, mesh02_6, mesh03_6, mesh04_6);

    var DOS_6 = UNO_6.clone(); DOS_6.rotation.set(0, Math.PI / 4, 0);
    var TRES_6 = UNO_6.clone(); TRES_6.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_6 = UNO_6.clone(); CUATRO_6.rotation.set(0, 2.355, 0);

    var DIEZ = new THREE.Group();
    DIEZ.add(UNO_6, DOS_6, TRES_6, CUATRO_6);
    DIEZ.position.set(21, 35, -45);
    DIEZ.scale.set(1, 1, 0.6); 
    DIEZ.rotation.set(Math.PI / 2, 0, 0);


    // --- 7. FLOR BASE 7 ---
    var geoFlor7 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_7 = new THREE.Mesh(geoFlor7, matFlor);
    var mesh02_7 = new THREE.Mesh(geoFlor7, matFlor); mesh02_7.rotation.set(0, 0, Math.PI / 4);
    var mesh03_7 = new THREE.Mesh(geoFlor7, matFlor); mesh03_7.rotation.set(0, 0, Math.PI / 2);
    var mesh04_7 = new THREE.Mesh(geoFlor7, matFlor); mesh04_7.rotation.set(0, 0, 2.355); 

    var UNO_7 = new THREE.Group();
    UNO_7.add(mesh01_7, mesh02_7, mesh03_7, mesh04_7);

    var DOS_7 = UNO_7.clone(); DOS_7.rotation.set(0, Math.PI / 4, 0);
    var TRES_7 = UNO_7.clone(); TRES_7.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_7 = UNO_7.clone(); CUATRO_7.rotation.set(0, 2.355, 0);

    var ONCE = new THREE.Group();
    ONCE.add(UNO_7, DOS_7, TRES_7, CUATRO_7);
    ONCE.position.set(31, 29, -45);
    ONCE.scale.set(1, 1, 0.6); 
    ONCE.rotation.set(Math.PI / 2, 0, 0);


    // --- 8. FLOR BASE 8 ---
    var geoFlor8 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_8 = new THREE.Mesh(geoFlor8, matFlor);
    var mesh02_8 = new THREE.Mesh(geoFlor8, matFlor); mesh02_8.rotation.set(0, 0, Math.PI / 4);
    var mesh03_8 = new THREE.Mesh(geoFlor8, matFlor); mesh03_8.rotation.set(0, 0, Math.PI / 2);
    var mesh04_8 = new THREE.Mesh(geoFlor8, matFlor); mesh04_8.rotation.set(0, 0, 2.355); 

    var UNO_8 = new THREE.Group();
    UNO_8.add(mesh01_8, mesh02_8, mesh03_8, mesh04_8);

    var DOS_8 = UNO_8.clone(); DOS_8.rotation.set(0, Math.PI / 4, 0);
    var TRES_8 = UNO_8.clone(); TRES_8.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_8 = UNO_8.clone(); CUATRO_8.rotation.set(0, 2.355, 0);

    var DOCE = new THREE.Group();
    DOCE.add(UNO_8, DOS_8, TRES_8, CUATRO_8);
    DOCE.position.set(38, 22, -45);
    DOCE.scale.set(1, 1, 0.6); 
    DOCE.rotation.set(Math.PI / 2, 0, 0);


    // --- 9. FLOR BASE 9 ---
    var geoFlor9 = new THREE.TorusGeometry(6, 2, 16, 100);
    var mesh01_9 = new THREE.Mesh(geoFlor9, matFlor);
    var mesh02_9 = new THREE.Mesh(geoFlor9, matFlor); mesh02_9.rotation.set(0, 0, Math.PI / 4);
    var mesh03_9 = new THREE.Mesh(geoFlor9, matFlor); mesh03_9.rotation.set(0, 0, Math.PI / 2);
    var mesh04_9 = new THREE.Mesh(geoFlor9, matFlor); mesh04_9.rotation.set(0, 0, 2.355); 

    var UNO_9 = new THREE.Group();
    UNO_9.add(mesh01_9, mesh02_9, mesh03_9, mesh04_9);

    var DOS_9 = UNO_9.clone(); DOS_9.rotation.set(0, Math.PI / 4, 0);
    var TRES_9 = UNO_9.clone(); TRES_9.rotation.set(0, Math.PI / 2, 0);
    var CUATRO_9 = UNO_9.clone(); CUATRO_9.rotation.set(0, 2.355, 0);

    var TRECE = new THREE.Group();
    TRECE.add(UNO_9, DOS_9, TRES_9, CUATRO_9);
    TRECE.position.set(45, 15, -45);
    TRECE.scale.set(1, 1, 0.6); 
    TRECE.rotation.set(Math.PI / 2, 0, 0);


    // --- GRUPO PRINCIPAL ---
    var ESC08 = new THREE.Group();
    ESC08.add(CINCO, SEIS, SIETE, OCHO, NUEVE, DIEZ, ONCE, DOCE, TRECE);

    ESC08.position.set(x, y, z);

    return ESC08;
}