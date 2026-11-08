import * as THREE from "../js/three.module.js";
export default function E07({x,y,z}){

        var tronco = new THREE.CylinderGeometry(0.35, 0.5, 2.5, 16);
        var mattronco = new THREE.MeshBasicMaterial({ color: 0x3d2817 });
        var troncomesh = new THREE.Mesh(tronco, mattronco);
        troncomesh.position.y = -2;
        //scene.add(troncomesh);

        var hojas = new THREE.SphereGeometry(1.4, 16, 16);
        var hojasmat = new THREE.MeshBasicMaterial({ color: 0x1b381b});
        var hojacenmesh = new THREE.Mesh(hojas, hojasmat);
        hojacenmesh.scale.set(1.4, 1.0, 1.3);
        //scene.add(hojacenmesh);   
        
        var h1 = new THREE.SphereGeometry(1.0, 12, 12);
        var h1mesh = new THREE.Mesh(h1, hojasmat);
        h1mesh.position.set(1.2, 0.2, 0.5);
        hojacenmesh.add(h1mesh);  
        
        var h2 = new THREE.SphereGeometry(1.1, 12, 12);
        var h2mesh = new THREE.Mesh(h2, hojasmat);
        h2mesh.position.set(-1.3, 0.3, -0.4);
        hojacenmesh.add(h2mesh);  
        
        var h3 = new THREE.SphereGeometry(1.2, 12, 12);
        var h3mesh = new THREE.Mesh(h3, hojasmat);
        h3mesh.position.set(0.2, 1.2, -0.8);
        hojacenmesh.add(h3mesh);  

        var h4 = new THREE.SphereGeometry(1.0, 12, 12);
        var h4mesh = new THREE.Mesh(h4, hojasmat);
        h4mesh.position.set(-0.5, 1.0, 0.9);
        hojacenmesh.add(h4mesh);  

        const arbolf = new THREE.Group();
                arbolf.add(troncomesh,hojacenmesh);
                arbolf.position.set(x,y,z);
                return arbolf;
}