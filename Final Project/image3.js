
		function clickAnimate(){
			let shape = document.querySelector('.sphereClass');

			let animation = [
			{left: '41.8%', bottom: '225px'},
			{left: '9%', bottom: '80px'},
			// {right: '4000px', bottom: '-200px'},
			// {right: '0px', bottom: '100px'},
			// {right: '600px', bottom: '220px'},
			{left: '41.8%', bottom: '225px'},
			{left: '41.8%', bottom: '-200px'},
			{left: '41.8%', bottom: '225px'}
			];

			let animationTime = {duration: 8000, iterations: 1};

			let move = shape.animate(
				animation,
				animationTime)
		}

		document.getElementById('sphere').onclick = clickAnimate;