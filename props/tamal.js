import * as THREE from "../js/three.module.js";
export default function E21({x,y,z}){
   
     var plato01 = new THREE.CylinderGeometry(6, 4,1.5, 32);
        var materialp = new THREE.MeshLambertMaterial({ color: 0xe0e0e0, side: THREE.DoubleSide });
        var meshp = new THREE.Mesh(plato01, materialp);
        meshp.position.set(0, 0, 0);
        //scene.add(meshp);

        var tamal01 = new THREE.CylinderGeometry(1.5,1.5,5,20);
        var materialt = new THREE.MeshLambertMaterial({
             color: 0xffff66
            });

        var mesht = new THREE.Mesh(tamal01, materialt);
        mesht.scale.set(1.3, 1, 0.8);
        mesht.rotation.set(Math.PI / 2, 0, 0);
        mesht.position.set(-2, 1, 0);
        //scene.add(mesht);

 var cen01 = new THREE.CylinderGeometry(1.55,1.55,0.3,20,1,true);
        var materialcen = new THREE.MeshLambertMaterial({
             color: 0x996600,
             side: THREE.DoubleSide
            });

        var meshcen = new THREE.Mesh(cen01, materialcen);
        mesht.add(meshcen);

        var UNOT = new THREE.Group();
UNOT.add(mesht);
//scene.add(UNOT);

var DOST = UNOT.clone();
//scene.add(DOST);
DOST.position.set(4, 0, 0);

var TREST = UNOT.clone();
//scene.add(TREST);
TREST.position.set(0, 0, -3);
TREST.rotation.set(-1, Math.PI / 2, 0);

var CUATROT = UNOT.clone();
//scene.add(CUATROT);
CUATROT.position.set(0, 1, 5);
CUATROT.rotation.set(0,Math.PI / 2, 4);

var CINCOT = UNOT.clone();
//scene.add(CINCOT);
CINCOT.position.set(2, 2, 0);

const tamal = new THREE.Group();
tamal.add(meshp,mesht,UNOT,DOST,TREST,CUATROT,CINCOT);
tamal.position.set(x,y,z);
return tamal;

        }