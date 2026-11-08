import * as THREE from "../js/three.module.js";
export default function E11({x,y,z}){
   
    //PLATO
 var plato = new THREE.CylinderGeometry(4, 3, 0.3, 32);
    var platomat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var platomesh = new THREE.Mesh(plato,platomat);
        platomesh.scale.set(1.4, 1, 1);
        //scene.add(platomesh);


        //MOLE
        var mole = new THREE.CylinderGeometry(3.5, 3.5, 0.1, 32);
        var molemat = new THREE.MeshLambertMaterial({ color: 0x3a1700 });
        var molemesh = new THREE.Mesh(mole, molemat);
        molemesh.position.y = 0.15;
        molemesh.scale.set(1.3, 1, 0.9);
        //scene.add(molemesh);
    
    //arroz
    var arroz = new THREE.SphereGeometry(1.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    var arrozmat = new THREE.MeshLambertMaterial({ color: 0xff7700 });
    var arrozmesh = new THREE.Mesh(arroz, arrozmat);
        arrozmesh.position.set(-2, 0.2, 0);
        //scene.add(arrozmesh);


    var hoja = new THREE.SphereGeometry(0.3, 8, 8);
        var hojamat = new THREE.MeshLambertMaterial({ color: 0x00aa22 });
        var hojamesh = new THREE.Mesh(hoja, hojamat);
        hojamesh.position.set(-2, 1.7, 0);
        hojamesh.scale.set(1, 0.3, 1);
        //scene.add(hojamesh);

 //pollo
    var pollo = new THREE.SphereGeometry(1.1, 16, 16);
        var pollomat = new THREE.MeshLambertMaterial({ color: 0x4a210d });
        var pollomesh = new THREE.Mesh(pollo, pollomat);
        pollomesh.position.set(0.8, 0.8, 0);
        pollomesh.scale.set(1.3, 0.8, 1);
        //scene.add(pollomesh);

    var hueso = new THREE.CylinderGeometry(0.15, 0.15, 2.5, 8);
    var huesomat = new THREE.MeshLambertMaterial({ color: 0xf5f5dc });
        var huesomesh = new THREE.Mesh(hueso, huesomat);
        huesomesh.position.set(2, 1, 0);
        huesomesh.rotation.z = -Math.PI / 2.5;
        //scene.add(huesomesh);   

    var circulohueso = new THREE.SphereGeometry(0.2, 12, 12);
    var circulomesh = new THREE.Mesh(circulohueso, huesomat);
        circulomesh.position.set(3.3, 1.4, -0.2);
        //scene.add(circulomesh);

        var circulo2mesh = new THREE.Mesh(circulohueso,huesomat);
        circulo2mesh.position.set(3.3, 1.4, 0.1);
        //scene.add(circulo2mesh);

const molef = new THREE.Group();
molef.add(platomesh,molemesh,arrozmesh,hojamesh,pollomesh,huesomesh,circulomesh,circulo2mesh);
molef.position.set(x,y,z);
return molef;

}