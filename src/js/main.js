(function () {
    const SlideIn = {
        Init(){
            document.documentElement.classList.add('js-enabled');
            console.log('fichier est lié ');

            this.imgs = document.querySelectorAll('.slide-in');

            document.addEventListener('scroll', ()=>{
                this.debounce();

                for(let img of this.imgs){
                    if(((window.scrollY + window.innerHeight) - (img.height / 2)) > img.offsetTop ){
                        img.classList.add('active');
                    } else {
                        img.classList.remove('active');
                    }
                }
            })
        },

        /*CODE à copier coller*/
        debounce(func, wait = 3, immediate = true) {
            let timeout;
            return () => {
                const context = this;
                // eslint-disable-next-line prefer-rest-params
                const args = arguments;
                const later = () => {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            }
        }
    };
    SlideIn.Init();
})();