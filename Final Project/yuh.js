var container, stats;
			var camera, scene, renderer;
			party();
			animate();
			function party() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );
				camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.5, 100 );
				camera.position.set( 0, 0, 1 );
				scene = new THREE.Scene();
				var colorArray = [ new THREE.Color( 0xa8dcff), new THREE.Color( 0xf7a8ff ), new THREE.Color( 0x5e1010 ), new THREE.Color( 0xa8ffaf), new THREE.Color( 0xfcc9b8)];
				var positions = [];
				var colors = [];
				for ( var i = 0; i < 90000; i ++ ) {
					positions.push( Math.random() - 0.3, Math.random() - 0.9, Math.random() - 0.9 );
					var clr = colorArray[ Math.floor( Math.random() * colorArray.length ) ];
					colors.push( clr.r, clr.g, clr.b );
				}
				var geometry = new THREE.BufferGeometry();
				geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 4 ) );
				geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 4 ) );
				var material = new THREE.PointsMaterial( { size: 4, vertexColors: THREE.VertexColors, depthTest: false, sizeAttenuation: false } );
				var mesh = new THREE.Points( geometry, material );
				scene.add( mesh );
				renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: false, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio )
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setClearColor( 0xffffff, 0);
				renderer.autoClearColor = false;
				container.appendChild( renderer.domElement );

				window.addEventListener( 'resize', onWindowResize, false );
				var controls = new THREE.OrbitControls( camera );
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
				stats.update();
			}
			function render() {
				scene.rotation.y = Date.now() / 2000;
				
				renderer.render( scene, camera );

			}