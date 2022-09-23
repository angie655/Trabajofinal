let scene;

function init(){
	//esenaario
	const scene = new THREE.Scene();
	
	var loader = new THREE.TextureLoader();

	loader.load("imagen/fondo.png", function (texture){
		scene.background=texture;}
	);

	//camara
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1 );
      
	// render
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );


	//LUZ
	hlight = new THREE.AmbientLight(0xffffff, 1);
	hlight.position.set(1, 1, 1)
	scene.add(hlight);

	//3D
  	const loader1  = new THREE.GLTFLoader();
loader1.load('../js/3D1/scene.gltf', function(gltf){
		flor = gltf.scene.children[0];
		flor.scale.set(0.15, 0.15, 0.15);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		flor.position.x= 9
		flor.position.y = -3;
	});
     
	 const loader2  = new THREE.GLTFLoader();
	 loader2.load('../js/3D2/scene2.gltf', function(gltf){
		otro = gltf.scene.children[0];
		otro.scale.set(0.3, 0.3, 0.3);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		otro.position.x= -4
		otro.position.y = -3 

		
	 });  
	const loader3  = new THREE.GLTFLoader();
	 loader3.load('../js/3D3/scene.gltf', function(gltf){
		hola = gltf.scene.children[0];
		hola.scale.set(0.03, 0.03, 0.03);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		hola.position.x= 2
		hola.position.y = -4.3
	}); 
	const loader4  = new THREE.GLTFLoader();
	 loader4.load('../js/3D4/scene.gltf', function(gltf){
		tres = gltf.scene.children[0];
		tres.scale.set(0.01, 0.01, 0.01);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		tres.position.x= -11
		tres.position.y = 1
	}); 
	const loader5  = new THREE.GLTFLoader();
	 loader5.load('../js/3D5/scene.gltf', function(gltf){
		cuatro = gltf.scene.children[0];
		cuatro.scale.set(3, 3, 3);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		cuatro.position.x= -14
		cuatro.position.y = -3
	});
	const loader6  = new THREE.GLTFLoader();
	 loader6.load('../js/3D5/scene.gltf', function(gltf){
		planta1 = gltf.scene.children[0];
		planta1.scale.set(3, 3, 3);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		planta1.position.x= 14
		planta1.position.y = -3
	});

	const loader7  = new THREE.GLTFLoader();
	 loader7.load('../js/3D5/scene.gltf', function(gltf){
		planta2 = gltf.scene.children[0];
		planta2.scale.set(3, 3, 3);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
		planta2.position.x= 14
		planta2.position.y = -3
	});
	
	//controladores
	var control= new THREE.OrbitControls(camera,renderer.domElement)
	control.minDistance= 200
	control.maxDistance= 50
	
camera.position.z = 10
	
	



	// animación
	function animate (){
		requestAnimationFrame(animate);
		renderer.render(scene,camera);
	}
	animate();
}

init();