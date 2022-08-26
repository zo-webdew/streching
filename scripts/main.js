window.onload = function (e) {

   const headerBlock = document.querySelector('.header_wrapper');
   const headerContent = document.querySelector('.header__content');



   if (e.isTrusted && window.pageYOffset > 4) {
      headerBlock.style.backgroundColor = '#fff';
      headerBlock.style.padding = '10px 0';
      headerBlock.style.boxShadow = '5px 5px 15px grey';
      headerContent.style.transform = `translateY(-${50 + (window.scrollY * 0.09)}%)`;
   }

   const changeHeaderBg = (block) => {
      window.addEventListener('scroll', () => {
         if (window.pageYOffset > 4) {
            block.style.backgroundColor = '#fff';
            block.style.padding = '10px 0';
            block.style.boxShadow = '5px 5px 15px grey';
         } else {
            block.style.backgroundColor = 'transparent';
            block.style.padding = '15px 0';
            block.style.boxShadow = 'none';
         }
      })
   }

   changeHeaderBg(headerBlock);


   const errow = document.querySelector('.errow');
   const socialBlock = document.querySelector('.social');

   const openSocial = errow.addEventListener('click', () => {
      errow.classList.toggle('active');
      socialBlock.classList.toggle('active');
   });


   const parallaxDown = window.addEventListener('scroll', () => {
      let value = window.scrollY;
      headerContent.style.transform = `translateY(-${50 + (value * 0.09)}%)`;
   });





   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = {
      threshold: [0.5]
   };

   let elements = document.querySelectorAll('.animation');
   let observer = new IntersectionObserver(onEntry, options);


   for (let item of elements) {
      observer.observe(item);
   }
}

// get gallery item =======================================
const images = document.querySelectorAll('.gallery_img');
const overlay = document.querySelector('.overlay');
const galleryBox = document.querySelector('.gallery_box');

//create galley item ======================================
const createNewDivForImg = document.createElement('div');
const createNewImages = document.createElement('img');
const arrowLeft = document.createElement('span');
const arrowRight = document.createElement('span');



for (let item = 0; item < images.length; item++) {
   images[item].addEventListener('click', () => {
      createNewImages.src = images[item].src;
      createNewDivForImg.className = 'img-active';

      arrowLeft.className = 'arrow-left';
      arrowRight.className = 'arrow-right';

      createNewDivForImg.appendChild(createNewImages);
      createNewDivForImg.appendChild(arrowLeft);
      createNewDivForImg.appendChild(arrowRight);
      galleryBox.appendChild(createNewDivForImg);

      overlay.classList.toggle('active');

      const getClassNameArrowLeft = document.querySelector('.arrow-left');
      const getClassNameArrowRight = document.querySelector('.arrow-right');

      getClassNameArrowRight.addEventListener('click', () => {

         // createNewImages.src = images[item + 1].src;

         // createNewDivForImg.appendChild(createNewImages);
         // createNewDivForImg.appendChild(arrowLeft);
         // createNewDivForImg.appendChild(arrowRight);
         // galleryBox.appendChild(createNewDivForImg);
      })

      const getNewImages = document.querySelector('.img-active');

      getNewImages.addEventListener('click', () => {
         getNewImages.remove();
         overlay.classList.remove('active');
      })

      overlay.addEventListener('click', () => {
         overlay.classList.remove('active');
         getNewImages.remove();
      })
   })
}