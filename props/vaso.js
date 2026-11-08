 import * as THREE from "../js/three.module.js";
export default function vaso1({x,y,z}){
   
      var vaso01 = new THREE.CylinderGeometry(4, 3,10, 20, 10, true);
        var materialv = new THREE.MeshLambertMaterial({ color: 0xffffff,transparent:true,opacity:0.3 });
        var meshv = new THREE.Mesh(vaso01, materialv);
        meshv.position.set(0, 0, 0);
        //scene.add(meshv);

        var vasof = new THREE.CircleGeometry(3, 20);
         var materialf = new THREE.MeshLambertMaterial({ color: 0xffffff,transparent:true,opacity:0.3});
        var meshf = new THREE.Mesh(vasof, materialf);
        meshf.position.set(0, -5, 0);
        meshf.rotation.x = Math.PI / 2;
        meshv.add(meshf);

        var vasoa = new THREE.CylinderGeometry(3.5, 3,8, 20, 10, false);
        var materiala = new THREE.MeshLambertMaterial({ color: 0x64b5f6, side: THREE.DoubleSide });
        var meshva = new THREE.Mesh(vasoa, materiala);
        meshva.position.set(0, 0, 0);
        //scene.add(meshva);

        const vaso = new THREE.Group();
vaso.add(meshv,meshva);
vaso.position.set(x,y,z);
return vaso;
}