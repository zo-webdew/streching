const headerBlock = document.querySelector('.header_wrapper');

const changeHeaderBg = (block) => {
   window.addEventListener('scroll', () => {
      if (window.pageYOffset > 4) {
         block.style.backgroundColor = '#fff';
         block.style.padding = '10px 0';
      } else {
         block.style.backgroundColor = 'transparent';
         block.style.padding = '15px 0';
      }
   })
}

changeHeaderBg(headerBlock);


