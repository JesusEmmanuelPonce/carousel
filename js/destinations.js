document.addEventListener('DOMContentLoaded', function () {

    // Data
    const destinationsData = [
        {
            id: 1,
            name: "Cancún",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/andreas-m.png"
        },
        {
            id: 2,
            name: "Veracruz",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/roberto-carlos.png"
        },
        {
            id: 3,
            name: "Acapulco",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/acapulco.png"
        },
        {
            id: 4,
            name: "Zihuatanejo",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/zihuatanejo-playa.png"
        },
        {
            id: 5,
            name: "Cancún",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/andreas-m.png"
        },
        {
            id: 6,
            name: "Veracruz",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/roberto-carlos.png"
        },
        {
            id: 7,
            name: "Acapulco",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/acapulco.png"
        },
        {
            id: 8,
            name: "Zihuatanejo",
            description: "In commodo vehicula metus, sed lacinia",
            button: "QUIERO IR",
            img: "img/zihuatanejo-playa.png"
        },
    ];

    const desktopContainer = document.getElementById('desktop-container');
    const mobileContainer = document.getElementById('mobile-container');

    // Function to print destination cards
    function destinationView(img, name, description, button) {
        const value = `
            <img src=${img} alt="destinations" class="glide__slide-photo" >
            <section class="glide__slide-content">
                <h4>${name}</h4>
                <p>${description}</p>
                <a href="/#">
                    ${button}
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M-0.000154961 0.0224999L-0.000155072 1.28276L10.1939 8.3042L-0.00015629 15.2244L-0.000156401 16.4903L0.0167217 16.5071L12.0898 8.30983L0.0167232 -4.87016e-06L-0.000154961 0.0224999Z" />
                    </svg>
                </a>
            </section>

        `;

        return value;
    }

    // Function to display destinations in desktop
    function displayInDesktop() {
        destinationsData.forEach(function(destination) {
            const { img, name, description, button } = destination;
        
            let destinationElement = document.createElement('li');
            destinationElement.className = 'glide__slide';
            destinationElement.innerHTML = destinationView(img, name, description, button);
            desktopContainer.appendChild(destinationElement);
        });
    }

    // Function to display destinations in mobile
    function displayInMobile() {
        destinationsData.slice(0, 3).forEach(function(destination) {
            const { img, name, description, button } = destination;

            let destinationElement = document.createElement('li');
            destinationElement.className = 'itemTravels';
            destinationElement.innerHTML = destinationView(img, name, description, button)
            
            mobileContainer.appendChild(destinationElement);
        });
    }

    displayInDesktop();
    displayInMobile();
});