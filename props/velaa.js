import *as THREE from "../js/three.module.js";
export  default function EO9({x,y,z}){ 

  

   //vaso color1
  var geometry133 = new THREE.CylinderGeometry(4,4,9,10,10);
        var material133 = new THREE.MeshLambertMaterial({ color: 0xffff00, transparent: true, opacity:0.5 });
        var mesh133 = new THREE.Mesh(geometry133, material133);
        mesh133.position.set(26, 4, -24);
        //scene.add(mesh133);

         var tas = new THREE.CylinderGeometry(3.5, 3,8, 10, 10, false);
        var materialtas = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas = new THREE.Mesh(tas, materialtas);
        meshtas.position.set(26, 4, -24);
        //scene.add(meshtas);

        
       
//fuego
        var geometry91 = new THREE.SphereGeometry(1.5,1);
        var material91 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh91 = new THREE.Mesh(geometry91, material91);
        mesh91.position.set(26, 9, -24);
        //scene.add(mesh91);
    
        //fuego2
         var geometry9 = new THREE.SphereGeometry(1,1);
        var material9 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh9 = new THREE.Mesh(geometry9, material9);
        mesh9.position.set(26, 9, -24);
        //scene.add(mesh9);

        
        //VELA GRANDE 
        var geometry00 = new THREE.CylinderGeometry(3,3,21,10,10);
        var material00 = new THREE.MeshLambertMaterial({ color: 0x6cc2ac, transparent: true, opacity:0.5 });
        var mesh00 = new THREE.Mesh(geometry00, material00);
        mesh00.position.set(1, 9, -24);
        //scene.add(mesh00);

         var tas1 = new THREE.CylinderGeometry(2,2,21, 10, 10, false);
        var materialtas1 = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas1 = new THREE.Mesh(tas1, materialtas1);
        meshtas1.position.set(1, 9, -24);
        //scene.add(meshtas1);

        
       
//fuego de vela grande
        var geometry001 = new THREE.SphereGeometry(1.5,1);
        var material001 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh001 = new THREE.Mesh(geometry001, material001);
        mesh001.position.set(1, 21, -24);
        //scene.add(mesh001);
    
        //fuego2 de vela grande
         var geometry0012 = new THREE.SphereGeometry(1,1);
        var material0012 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh0012 = new THREE.Mesh(geometry0012, material0012);
        mesh0012.position.set(1, 21, -24);
        //scene.add(mesh0012);


        //vela 2
 var geometry3 = new THREE.CylinderGeometry(4,4,9,10,10);
        var material3 = new THREE.MeshLambertMaterial({ color: 0xeff7f6, transparent: true, opacity:0.5 });
        var mesh3 = new THREE.Mesh(geometry3, material3);
        mesh3.position.set(-8, 4, -24);
        //scene.add(mesh3);

         var t = new THREE.CylinderGeometry(3.5, 3,8, 10, 10, false);
        var materialte = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var mesht = new THREE.Mesh(t, materialte);
        mesht.position.set(-8, 4, -24);
        //scene.add(mesht);

        //fuego 2.1

          var geometry910 = new THREE.SphereGeometry(1.5,1);
        var material910 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh910 = new THREE.Mesh(geometry910, material910);
        mesh910.position.set(-8, 9, -24);
        //scene.add(mesh910);
    
        //fuego2.1
         var geometry98 = new THREE.SphereGeometry(1,1);
        var material98 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh98 = new THREE.Mesh(geometry98, material98);
        mesh98.position.set(-8, 9, -24);
        //scene.add(mesh98);

        

        //vela 3
        var geometry33 = new THREE.CylinderGeometry(4,4,9,10,10);
        var material33 = new THREE.MeshLambertMaterial({ color: 0x0096c7, transparent: true, opacity:0.5 });
        var mesh33 = new THREE.Mesh(geometry33, material33);
        mesh33.position.set(9, 4, -24);
        //scene.add(mesh33);

         var to = new THREE.CylinderGeometry(3.5, 3,8, 10, 10, false);
        var materialteo = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshto = new THREE.Mesh(to, materialteo);
        meshto.position.set(9, 4, -24);
        //scene.add(meshto);

        //fuego 3
         var geometry912 = new THREE.SphereGeometry(1.5,1);
        var material912 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh912 = new THREE.Mesh(geometry912, material912);
        mesh912.position.set(9, 9, -24);
        //scene.add(mesh912);

        //fuego 3.1
         var geometry6 = new THREE.SphereGeometry(1,1);
        var material6 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh6 = new THREE.Mesh(geometry6, material6);
        mesh6.position.set(9, 9, -24);
        //scene.add(mesh6);
    
         //VELA GRANDE 
        var geometry007 = new THREE.CylinderGeometry(3,3,21,10,10);
        var material007 = new THREE.MeshLambertMaterial({ color: 0x6cc2ac, transparent: true, opacity:0.5 });
        var mesh007 = new THREE.Mesh(geometry007, material007);
        mesh007.position.set(1, 9, -24);
        //scene.add(mesh007);

         var tas7 = new THREE.CylinderGeometry(2,2,21, 10, 10, false);
        var materialtas7 = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas7 = new THREE.Mesh(tas7, materialtas7);
        meshtas7.position.set(1, 9, -24);
        //scene.add(meshtas7);

        
       
//fuego de vela grande
        var geometry07 = new THREE.SphereGeometry(1.5,1);
        var material07 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh07 = new THREE.Mesh(geometry07, material07);
        mesh07.position.set(1, 21, -24);
        //scene.add(mesh07);
    
        //fuego2 de vela grande
         var geometry0072 = new THREE.SphereGeometry(1,1);
        var material0072 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh0072 = new THREE.Mesh(geometry0072, material0072);
        mesh0072.position.set(1, 21, -24);
       // scene.add(mesh0072);


        //AQUI
        //VELA GRANDE 2
        var geometry08 = new THREE.CylinderGeometry(3,3,21,10,10);
        var material08 = new THREE.MeshLambertMaterial({ color: 0xec665a, transparent: true, opacity:0.5 });
        var mesh08 = new THREE.Mesh(geometry08, material08);
        mesh08.position.set(-17, 9, -24);
        //scene.add(mesh08);

         var tas8 = new THREE.CylinderGeometry(2,2,21, 10, 10, false);
        var materialtas8 = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas8 = new THREE.Mesh(tas8, materialtas8);
        meshtas8.position.set(-17, 9, -24);
        //scene.add(meshtas8);

        
       
//fuego de vela grande2
        var geometry8 = new THREE.SphereGeometry(1.5,1);
        var material8 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh8 = new THREE.Mesh(geometry8, material8);
        mesh8.position.set(-17, 21, -24);
        //scene.add(mesh8);
    
        //fuego2 de vela grande2
         var geometry8p = new THREE.SphereGeometry(1,1);
        var material8p = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh8p = new THREE.Mesh(geometry8p, material8p);
        mesh8p.position.set(-17, 21, -24);
        //scene.add(mesh8p);

        //VELA GRANDE 3 ULTIMA a lado de la amarilla
        var geometry080 = new THREE.CylinderGeometry(3,3,21,10,10);
        var material080 = new THREE.MeshLambertMaterial({ color: 0xe74fc5, transparent: true, opacity:0.5 });
        var mesh080 = new THREE.Mesh(geometry080, material080);
        mesh080.position.set(17, 9, -24);
        //scene.add(mesh080);

         var tas0 = new THREE.CylinderGeometry(2,2,21, 10, 10, false);
        var materialtas0 = new THREE.MeshLambertMaterial({ color: 0xfdf0d5, side: THREE.DoubleSide });
        var meshtas0 = new THREE.Mesh(tas0, materialtas0);
        meshtas0.position.set(17, 9, -24);
        //scene.add(meshtas0);

        
       
//fuego de vela grande2
        var geometry5 = new THREE.SphereGeometry(1.5,1);
        var material5 = new THREE.MeshLambertMaterial({ color: 0xff6d00,transparent: true, opacity:0.5 });
        var mesh5 = new THREE.Mesh(geometry5, material5);
        mesh5.position.set(17, 21, -24);
        //scene.add(mesh5);
    
        //fuego2 de vela grande2
         var geometry50 = new THREE.SphereGeometry(1,1);
        var material50 = new THREE.MeshLambertMaterial({ color: 0xd00000,side: THREE.DoubleSide  });
        var mesh50 = new THREE.Mesh(geometry50, material50);
        mesh50.position.set(17, 21, -24);
        //scene.add(mesh50);

         //espacio para colocar el grupo
    const ESC09 = new THREE.Group();
    ESC09.add(mesh133,meshtas,mesh91,mesh9,mesh00,meshtas1,mesh001,mesh0012,mesh3,mesht,mesh910,mesh98,mesh080,meshtas0,mesh5,mesh50,mesh33,meshto,mesh912,mesh6,mesh007,meshtas7,mesh07,mesh0072,mesh08,meshtas8,mesh8,mesh8p);
ESC09.position.set(x,y,z); //no cololocar valor a x,y,z
        return ESC09;

}

