window.onload = function (e) {


   const main = document.querySelector('.main');
   const headerBlock = document.querySelector('.header_wrapper');
   const headerContent = document.querySelector('.header__content');
   const anchors = document.querySelectorAll('.anchors[href*="#"]');
   const upBtn = document.querySelector('.up-btn');
   const burgerBtn = document.querySelector('.burger');
   const burgerBtnImg = document.querySelector('.burger img');
   const headerMenu = document.querySelector('.header_menu');
   const errow = document.querySelector('.errow');
   const socialBlock = document.querySelector('.social');


   burgerBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('active');
      headerMenu.style.zIndex = '-1';

      if (headerMenu.classList[headerMenu.classList.length - 1] === 'active') {
         burgerBtnImg.src = 'http://127.0.0.1:5500/images/close.png';
         headerMenu.append(socialBlock);
         socialBlock.style.display = 'flex';
         burgerBtnImg.style.width = '15px';
         burgerBtnImg.style.height = '15px';
      } else {
         burgerBtnImg.src = 'http://127.0.0.1:5500/images/menu.png';
         main.prepend(socialBlock);
         socialBlock.style.display = 'none';
         burgerBtnImg.style.width = '25px';
         burgerBtnImg.style.height = '25px';
      }

      console.log(headerMenu.classList[headerMenu.classList.length - 1] === 'active');
   });

   for (let a of anchors) {
      a.addEventListener('click', (e) => {
         e.preventDefault();
         const blockId = a.getAttribute('href');
         document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
      })
   }

   const anchorBtn = (block) => {
      window.addEventListener('scroll', () => {
         if (window.pageYOffset > 800) {
            block.classList.add('active');
         } else {
            block.classList.remove('active');
         }
      })
   }

   anchorBtn(upBtn);

   if (e.isTrusted && window.pageYOffset > 4) {
      headerBlock.style.backgroundColor = '#fff';
      headerBlock.style.padding = '10px 0';
      headerBlock.style.boxShadow = '5px 5px 15px grey';
      headerContent.style.transform = `translateY(-${50 + (window.scrollY * 0.09)}%)`;
   }

   if (e.isTrusted && window.pageYOffset > 800) {
      upBtn.classList.add('active');
   }

   if (window.innerWidth < 780) {
      headerBlock.style.backgroundColor = 'transparent';
      headerBlock.style.boxShadow = 'none';
      headerBlock.style.padding = '15px 0';
   }

   const changeHeaderBg = (block) => {
      window.addEventListener('scroll', () => {
         if (window.pageYOffset > 4) {
            block.style.backgroundColor = '#fff';
            block.style.padding = '10px 0';
            block.style.boxShadow = '5px 5px 15px grey';
         } else {
            block.style.backgroundColor = 'transparent';
            block.style.padding = '10px 0';
            block.style.boxShadow = 'none';
         }

         if (window.innerWidth < 780) {
            headerBlock.style.backgroundColor = 'transparent';
            headerBlock.style.boxShadow = 'none';
            block.style.padding = '10px 0';
         }
      })
   }

   changeHeaderBg(headerBlock);

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


const images = document.querySelectorAll('.gallery_img');
const showImgBlock = document.querySelector('.show-img');
const showImg = document.querySelector('.show-img img');
const overlay = document.querySelector('.overlay');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const galleryBox = document.querySelector('.gallery_box');
const countBlock = document.querySelector('.count');


for (let i = 0; i < images.length; i++) {
   images[i].addEventListener('click', () => {
      showImg.src = images[i].src;
      showImg.dataset.index = i;
      galleryBox.style.perspective = 'none';
      countBlock.textContent = `${+showImg.dataset.index + 1}/${images.length}`;
      addFunction(showImgBlock, 'active');
      addFunction(overlay, 'active');

   });

   function addFunction(block, cls) {
      block.classList.add(cls);
   }

}


overlay.addEventListener('click', () => {
   removeFunction(overlay, 'active');
   removeFunction(showImgBlock, 'active');
   galleryBox.style.perspective = '600px';
});

function removeFunction(block, cls) {
   block.classList.remove(cls);
}

arrowLeft.addEventListener('click', () => {
   let indx = +showImg.dataset.index;

   if (indx === 0) {
      indx = images.length - 1;
      showImg.src = images[indx].src;
      showImg.dataset.index = indx;

      countBlock.textContent = `${indx + 1}/${images.length}`;

   } else {
      showImg.src = images[indx - 1].src;
      showImg.dataset.index = indx - 1;

      countBlock.textContent = `${indx}/${images.length}`;
   }
})

arrowRight.addEventListener('click', () => {
   let indx = +showImg.dataset.index;

   if (indx < images.length - 1) {
      showImg.src = images[indx + 1].src;
      showImg.dataset.index = indx + 1;

      countBlock.textContent = `${indx + 2}/${images.length}`;
   } else {
      indx = 0;
      showImg.src = images[indx].src;
      showImg.dataset.index = indx;

      countBlock.textContent = `${indx + 1}/${images.length}`;
   }
})

// gallery ====================================================================================

const galleryFunc = () => {
   let xCount = 0;
   let yCount = 0;
   images.forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
         let x = e.offsetX;
         let y = e.offsetY;

         const w = elem.offsetWidth;
         const h = elem.offsetHeight;

         if (x < w / 2 && y < h / 2) {
            xCount = (w / 2) - x;
            yCount = (h / 2) - y;
            elem.style.transform = `rotateX(${xCount / 15}deg) rotateY(-${yCount / 15}deg)`;
         }
         else if (x > 125 && y < 125) {
            xCount = x / 2;
            yCount = (h / 2) - y;
            elem.style.transform = `rotateX(${xCount / 15}deg) rotateY(${yCount / 15}deg)`;
         }
         else if (x < 125 && y > 125) {
            xCount = (w / 2) - x;
            yCount = y / 2;
            elem.style.transform = `rotateX(-${xCount / 15}deg) rotateY(-${yCount / 15}deg)`;

         }
         else if (x > 125 && y > 125) {
            xCount = x / 2;
            yCount = y / 2;
            elem.style.transform = `rotateX(-${xCount / 15}deg) rotateY(${yCount / 15}deg)`;
         }

      })
   })

   images.forEach(img => {
      img.addEventListener('mouseleave', () => {
         img.style.transform = `rotateX(0deg) rotateY(0deg)`;
      })
   })
}

galleryFunc();


