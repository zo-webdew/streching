window.onload = function (e) {

   const headerBlock = document.querySelector('.header_wrapper');
   const headerContent = document.querySelector('.header__content');

   1
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
}


function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
         console.log(change);
      }
   });
}

let options = {
};

let elements = document.querySelectorAll('.animation');
let observer = new IntersectionObserver(onEntry, options);


for (let item of elements) {
   observer.observe(item);
}