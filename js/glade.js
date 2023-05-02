document.addEventListener('DOMContentLoaded', function () {

    if (window.innerWidth > 510) {
        const nextButton = document.querySelector('#next');
        const prevButton = document.querySelector('#prev');

        const glide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 4,
            autoplay: false,
            autoplay: 3500,
            hoverpause: true,
            gap: 30,
            breakpoints: {
                768: {
                    perView: 3
                },
                600: {
                    perView: 2
                },
                510: {
                    perView: 1
                }
            },
        })

        nextButton.addEventListener('click', function (e) {
            e.preventDefault();
        
            glide.go('>');
        })
        
        prevButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            glide.go('<');
        })

        glide.mount();
    }
});