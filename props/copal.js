import * as THREE from "../js/three.module.js";
export default function E12({x,y,z}){
   
// Espacio para colocar los objetos
    var base = new THREE.CylinderGeometry(0.6, 2.3, 0.8, 32);
     var copalmat = new THREE.MeshBasicMaterial({ color: 0x242d34, side: THREE.DoubleSide});
        var basemesh = new THREE.Mesh(base, copalmat);
        basemesh.position.y = -2.2;
        //scene.add(basemesh);

var medio = new THREE.CylinderGeometry(0.5, 0.5, 2.0, 32);
        var mediomesh = new THREE.Mesh(medio, copalmat);
        mediomesh.position.y = -1.0;
       // scene.add(mediomesh);

var ruedainf = new THREE.TorusGeometry(0.65, 0.15, 16, 32);
        var ruedainfmesh = new THREE.Mesh(ruedainf, copalmat);
        ruedainfmesh.rotation.x = Math.PI / 2;
        ruedainfmesh.position.y = -1.4;
       // scene.add(ruedainfmesh);

var ruedasupmesh = new THREE.Mesh(ruedainf, copalmat);
        ruedasupmesh.rotation.x = Math.PI / 2;
        ruedasupmesh.position.y = -0.6;
       // scene.add(ruedasupmesh);

var copa = new THREE.SphereGeometry(2.2, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
        var copamesh = new THREE.Mesh(copa, copalmat);
        copamesh.position.y = 1.8;
        //scene.add(copamesh);

       
        var borde = new THREE.TorusGeometry(2.2, 0.18, 16, 64);
        var bordemesh = new THREE.Mesh(borde, copalmat);
        bordemesh.rotation.x = Math.PI / 2;
        bordemesh.position.y = 1.8;
        //scene.add(bordemesh);

        
        var interior = new THREE.CylinderGeometry(2.1, 2.1, 0.05, 32);
        var copalmat2 = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide});
        var interiormesh = new THREE.Mesh(interior, copalmat2);
        interiormesh.position.y = 1.75;
        //scene.add(interiormesh);

const copalf = new THREE.Group();
copalf.add(interiormesh,bordemesh,copamesh,ruedasupmesh,ruedainfmesh,mediomesh,basemesh);
copalf.position.set(x,y,z);
return copalf;

}
