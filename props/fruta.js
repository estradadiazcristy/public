   import * as THREE from "../js/three.module.js";
export default function E30({x,y,z}){
   
   var plato02 = new THREE.CylinderGeometry(6, 4,1.5, 32);
        var materialp2 = new THREE.MeshBasicMaterial({ color: 0xe0e0e0, side: THREE.DoubleSide });
        var meshp2 = new THREE.Mesh(plato02, materialp2);
        meshp2.position.set(0, 0, 0);
       // scene.add(meshp2);
//manzana
var manzana1 = new THREE.SphereGeometry(2,32,32);
 var materialmz = new THREE.MeshLambertMaterial({ color: 0xd32f2f});
var meshmz = new THREE.Mesh(manzana1, materialmz);
meshmz.scale.set(1,0.9,1);
meshmz.position.set(3, 1.5, 0);
 //scene.add(meshmz);

 var tallomz = new THREE.CylinderGeometry(0.08, 0.05,1,8);
 var materialta = new THREE.MeshLambertMaterial({ color: 0x4e342e});
var meshtamz = new THREE.Mesh(tallomz, materialta);
meshtamz.rotation.z = -0.2;
meshtamz.position.set(0, 2, 0);
meshmz.add(meshtamz);

//platano
var platano1 = new THREE.CylinderGeometry(0.6, 0.6, 4, 16);
 var materialplatano = new THREE.MeshLambertMaterial({ color: 0xffeb3b });
var meshplano = new THREE.Mesh(platano1, materialplatano);
meshplano.rotation.z = 4;
meshplano.position.set(-3, 1.3, 0);
//scene.add(meshplano);

var puntaarriba = new THREE.ConeGeometry(0.6, 1, 16);
var materialpun = new THREE.MeshLambertMaterial({ color: 0x4e342e });
var mesharriba = new THREE.Mesh(puntaarriba,materialpun);
mesharriba.position.y = 2.3;
meshplano.add(mesharriba);

var puntaabajo = new THREE.ConeGeometry(0.6, 1, 16);
var materialpuna = new THREE.MeshLambertMaterial({ color: 0x4e342e });
var meshabajo = new THREE.Mesh(puntaabajo,materialpuna);
meshabajo.position.y = -2.3;
meshabajo.rotation.z = Math.PI;
meshplano.add(meshabajo);

var naranja1 = new THREE.SphereGeometry(2, 32, 32);
var materialna = new THREE.MeshLambertMaterial({ color: 0xff9800 }); // Naranja
var meshna = new THREE.Mesh(naranja1,materialna);
meshna.position.set(1, 2, -2);
//scene.add(meshna);

var mandarina1 = new THREE.SphereGeometry(1.2, 32, 32);
var materialman = new THREE.MeshLambertMaterial({ color: 0xcc6600 });
var meshman = new THREE.Mesh(mandarina1, materialman);
meshman.scale.set(1.2, 0.7, 1.2); 
meshman.position.set(0, 1, 1);

var tallo1 = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16);
var materialtallo = new THREE.MeshLambertMaterial({ color: 0x4e342e });
var meshtallo = new THREE.Mesh(tallo1, materialtallo);
meshtallo.position.y = 1.3;
meshman.add(meshtallo);
//scene.add(meshman);

var cana1 = new THREE.CylinderGeometry(0.8, 0.8, 4, 16);
var materialcana = new THREE.MeshLambertMaterial({ color: 0x7cb342 });
var meshcana = new THREE.Mesh(cana1, materialcana);
meshcana.position.set(0,1,3);
meshcana.rotation.z = Math.PI/2;

var division1 = new THREE.CylinderGeometry(0.86, 0.86, 0.1, 16);
var materialdiv = new THREE.MeshLambertMaterial({ color: 0x33691e });
var meshdiv = new THREE.Mesh(division1, materialdiv);
meshdiv.position.y = 1.2;
meshcana.add(meshdiv);

var meshdiv2 = new THREE.Mesh(division1, materialdiv);
meshdiv2.position.y = -1.2;
meshcana.add(meshdiv2);
//scene.add(meshcana);

var cana2 = new THREE.CylinderGeometry(0.8, 0.8, 4, 16);
var materialcana2 = new THREE.MeshLambertMaterial({ color: 0x7cb342 });
var meshcana2 = new THREE.Mesh(cana2, materialcana2);
meshcana2.position.set(0,1,-4);
meshcana2.rotation.z = Math.PI/2;

var division12 = new THREE.CylinderGeometry(0.86, 0.86, 0.1, 16);
var materialdiv22 = new THREE.MeshLambertMaterial({ color: 0x33691e });
var meshdiv22 = new THREE.Mesh(division12, materialdiv22);
meshdiv22.position.y = 1.2;
meshcana2.add(meshdiv22);

var meshdiv222 = new THREE.Mesh(division12, materialdiv22);
meshdiv222.position.y = -1.2;
meshcana2.add(meshdiv222);
//scene.add(meshcana2);

var jicama1 = new THREE.SphereGeometry(1.5, 32, 32);
var materialjic = new THREE.MeshLambertMaterial({ color: 0xc8b288 });
var meshjicama = new THREE.Mesh(jicama1,materialjic);
meshjicama.scale.set(1.3, 0.8, 1.3);
meshjicama.position.set(-2,1.5,-2);

var tallo1 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16);
var materialta = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
var meshtallo = new THREE.Mesh(tallo1, materialta);
meshtallo.position.y = 1.6;
meshjicama.add(meshtallo);
//scene.add(meshjicama);

var manzana2 = new THREE.SphereGeometry(1.5,32,32);
 var materialmz2 = new THREE.MeshLambertMaterial({ color: 0x9acd32});
var meshmz2 = new THREE.Mesh(manzana2, materialmz2);
meshmz2.scale.set(1,0.9,1);
meshmz2.position.set(-2.7, 1, 1.5);
 //scene.add(meshmz2);

 var tallomz2 = new THREE.CylinderGeometry(0.08, 0.05,1,8);
 var materialta2 = new THREE.MeshLambertMaterial({ color: 0x4e342e});
var meshtamz2 = new THREE.Mesh(tallomz2, materialta2);
meshtamz2.rotation.z = -0.2;
meshtamz2.position.set(0, 1.5, 0);
meshmz2.add(meshtamz2);

var jicama2 = new THREE.SphereGeometry(1, 32, 32);
var materialjic2 = new THREE.MeshLambertMaterial({ color: 0xc8b288 });
var meshjicama2 = new THREE.Mesh(jicama2,materialjic2);
meshjicama2.scale.set(1.3, 0.8, 1.3);
meshjicama2.position.set(2.5,1,2);

var tallo2 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16);
var materialta2 = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
var meshtallo2 = new THREE.Mesh(tallo2, materialta2);
meshtallo2.position.y = 1;
meshjicama2.add(meshtallo2);
//scene.add(meshjicama2);

var mandarina2 = new THREE.SphereGeometry(1.2, 32, 32);
var materialman2 = new THREE.MeshLambertMaterial({ color: 0xcc6600 });
var meshman2 = new THREE.Mesh(mandarina2, materialman2);
meshman2.scale.set(1.2, 0.7, 1.2); 
meshman2.position.set(2.5, 1, -3);

var tallo2 = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16);
var materialtallo2 = new THREE.MeshLambertMaterial({ color: 0x4e342e });
var meshtallo2 = new THREE.Mesh(tallo2, materialtallo2);
meshtallo2.position.y = 1.3;
meshman2.add(meshtallo2);
//scene.add(meshman2);

const fruta = new THREE.Group();
fruta.add(meshp2,meshmz,meshplano,meshna,meshman,meshcana,meshcana2,meshjicama,meshmz2,meshjicama2,meshman2);
fruta.position.set(x,y,z);
return fruta;
}