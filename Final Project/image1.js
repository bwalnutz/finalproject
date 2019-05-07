      function addImage() {
        var d = document.querySelector('.images');
        var i = document.createElement('img');
        i.classList.add('sbahnAnimate');
        i.src = 'sbahn.png';
        i.id = 'sbahn';
        d.appendChild(i);
      }

      document.getElementById('railImage').onclick = addImage;