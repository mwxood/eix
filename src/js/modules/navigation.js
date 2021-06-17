const navigation = () => {
   const navHolder = document.querySelector('.navigation');
   const navTrigger = document.querySelector('.hamburger');

   try {
        navTrigger.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
        });
   } catch(e) {}
};

export default navigation;