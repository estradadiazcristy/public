import * as THREE from "../js/three.module.js";
export default function E06({x,y,z}){
    
        var tronco = new THREE.CylinderGeometry(0.2, 0.6, 3.5, 32);
        var mattronco = new THREE.MeshLambertMaterial({ color: 0x3d2817 });
        var meshtron = new THREE.Mesh(tronco, mattronco);
        meshtron.position.y = -0.5;
        //scene.add(meshtron);

        // Ramas
        var rama = new THREE.CylinderGeometry(0.1, 0.15, 1.2, 16);
        var ramaizqmesh = new THREE.Mesh(rama, mattronco);
        ramaizqmesh.position.set(-0.8, 0.6, 0);
        ramaizqmesh.rotation.z = Math.PI / 3;
        meshtron.add(ramaizqmesh);

        var ramadermesh = new THREE.Mesh(rama, mattronco);
        ramadermesh.position.set(0.7, 0.8, 0);
        ramadermesh.rotation.z = -Math.PI / 3;
        meshtron.add(ramadermesh);


        var hojas1 = new THREE.SphereGeometry(1, 32, 32);
        var hojas1mat = new THREE.MeshLambertMaterial({ color: 0x1b381b});
        var hojas1mesh = new THREE.Mesh(hojas1, hojas1mat);
        hojas1mesh.position.set(0, 1.8, 0);
        hojas1mesh.scale.set(1.2, 0.8, 1.2); 
        meshtron.add(hojas1mesh);

        var hojas2 = new THREE.SphereGeometry(0.5, 32, 32); 
        var hojas2mat = new THREE.MeshLambertMaterial({ color: 0x325c27 });
        var hojas2izqmesh = new THREE.Mesh(hojas2, hojas2mat);
        hojas2izqmesh.position.set(-1.4, 0.9, 0);
        hojas2izqmesh.scale.set(1.4, 0.7, 1.2);
        meshtron.add(hojas2izqmesh);

        var hoja2dermesh = new THREE.Mesh(hojas2, hojas2mat);
        hoja2dermesh.position.set(1.3, 1.1, 0);
        hoja2dermesh.scale.set(1.3, 0.7, 1.1);
        meshtron.add(hoja2dermesh);

        const arbol2f = new THREE.Group();
        arbol2f.add(meshtron);
        arbol2f.position.set(x,y,z);
        return arbol2f;
}
