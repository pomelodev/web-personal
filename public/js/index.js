let header = document.getElementById("header");
let headerLogo = document.getElementById("header-logo");
let headerMobileLogo = document.getElementById("header-mobile-logo");
let sectionPortada = document.getElementById("section-portada");
let menuButton = document.getElementById("menu-button");
let navElementsArray = document.getElementsByClassName("nav-element");
let navContacto = document.getElementById("nav-contacto");
let navServicios = document.getElementById('nav-servicios');
let navPortfolio = document.getElementById('nav-portfolio');
let navNosotros = document.getElementById('nav-nosotros');
let portadaContenido = document.getElementById("portada-contenido");
let sectionContacto = document.getElementById("section-contacto");
let sectionServicios = document.getElementById('section-servicios');
let sectionPortfolio = document.getElementById('section-portfolio');
let sectionNosotros = document.getElementById('section-nosotros');
let formButton = document.getElementById('form-button');
let form = document.getElementById('form');
let formNombre = document.getElementById('form-nombre');
let formEmail = document.getElementById('form-email');
let formConsulta = document.getElementById('form-consulta');
let formSendMessage = document.getElementById('form-send-message');
let serviciosTitle = document.getElementById('servicios-title');
let portfolioTitle = document.getElementById('portfolio-title');
let nosotrosTitle = document.getElementById('nosotros-title');
let contactoTitle = document.getElementById('contacto-title');
let portfolioContent = document.getElementById('portfolio-content');
let portfolioImg1 = document.getElementById('portfolio-img-1');
let portfolioImg2 = document.getElementById('portfolio-img-2');
let portfolioImg3 = document.getElementById('portfolio-img-3');
let portfolioImg4 = document.getElementById('portfolio-img-4');
let portfolioImg5 = document.getElementById('portfolio-img-5');
let portfolioImg6 = document.getElementById('portfolio-img-6');

//------Posiciones------//

let posSectionPortada = sectionPortada.getBoundingClientRect().bottom;
let posSectionContacto = sectionContacto.getBoundingClientRect().top;
let posSectionServicios = sectionServicios.getBoundingClientRect().top;
let posSectionPortfolio = sectionPortfolio.getBoundingClientRect().top;
let posSectionNosotros = sectionNosotros.getBoundingClientRect().top;

//---------Links Internos-----//
let addLink = function(link, posicion){
    link.addEventListener("click", ()=>{
        window.scroll({
            top: posicion - 80,
            left: 0,
            behavior: 'smooth'
        });
        for(element of navElementsArray){
            element.classList.remove("nav-element-nav-show");
        }
        header.classList.remove("header-nav-show");
        navContacto.classList.remove("nav-contacto-nav-show");
        portadaContenido.classList.remove("portada-contenido-nav-show");
        navMobileShow = false;
    });
};

addLink(navServicios, posSectionServicios);
addLink(navPortfolio, posSectionPortfolio);
addLink(navNosotros, posSectionNosotros);
addLink(navContacto, posSectionContacto);




//------Animación scroll------//

window.onscroll = ()=>{
    if (window.pageYOffset >= posSectionPortada){
        header.classList.add("header-fixed");
        headerLogo.classList.add("header-logo-fixed");
        sectionPortada.style.height ="100vh";
    }
    if (window.pageYOffset >= posSectionPortada && window.innerWidth <= 768){
        headerMobileLogo.style.visibility = "visible";
    }
    if (window.pageYOffset < posSectionPortada){
        header.classList.remove("header-fixed");
        headerLogo.classList.remove("header-logo-fixed");
        sectionPortada.style.height ="90vh";
    }
    if (window.pageYOffset < posSectionPortada && window.innerWidth <= 768){
        headerMobileLogo.style.visibility = "hidden";
    }
    if (window.pageYOffset >= posSectionContacto-10 && window.innerWidth > 768){
        headerLogo.classList.remove("header-logo-fixed");
    }
    if(window.pageYOffset < posSectionContacto-10 && window.pageYOffset > posSectionPortada){
        headerLogo.classList.add("header-logo-fixed");
    }
    if(window.pageYOffset > posSectionServicios - window.innerHeight * 0.50) {
        serviciosTitle.classList.add('title-visible');
    }
    if(window.pageYOffset > posSectionPortfolio - window.innerHeight * 0.50) {
        portfolioTitle.classList.add('title-visible');
    }
    if(window.pageYOffset > posSectionNosotros - window.innerHeight * 0.50) {
        nosotrosTitle.classList.add('title-visible');
    }
    if(window.pageYOffset > posSectionContacto - window.innerHeight * 0.50) {
        contactoTitle.classList.add('title-visible');
    }
    if(window.pageYOffset > posSectionPortfolio - window.innerHeight * 0.25) {
        portfolioImg1.classList.add('portfolio-img-visible');
        setTimeout(()=>{
            portfolioImg2.classList.add('portfolio-img-visible');
        }, 500);
        setTimeout(()=>{
            portfolioImg3.classList.add('portfolio-img-visible');
        }, 700);
        setTimeout(()=>{
            portfolioImg4.classList.add('portfolio-img-visible');
        }, 900);
        setTimeout(()=>{
            portfolioImg5.classList.add('portfolio-img-visible');
        }, 1100);
        setTimeout(()=>{
            portfolioImg6.classList.add('portfolio-img-visible');
        }, 1300);

        
        
    }

};

//------Menu button------//
let navMobileShow = false;
menuButton.addEventListener("click", ()=>{
    if(navMobileShow == false){
        for(element of navElementsArray){
            element.classList.add("nav-element-nav-show");
        }
        header.classList.add("header-nav-show");
        navContacto.classList.add("nav-contacto-nav-show");
        sectionPortada.style.height ="100vh";
        portadaContenido.classList.add("portada-contenido-nav-show");
        navMobileShow = true;
    } else{
        for(let element of navElementsArray){
            element.classList.remove("nav-element-nav-show");
        }
        header.classList.remove("header-nav-show");
        navContacto.classList.remove("nav-contacto-nav-show");
        portadaContenido.classList.remove("portada-contenido-nav-show");
        navMobileShow = false;
    }
});

/*--------FORM-------*/
formButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(formNombre.value == "" | formEmail.value == "" | formConsulta.value == ""){
        let message = document.createTextNode("Completá todos los campos");
        while(formSendMessage.firstChild){
            formSendMessage.removeChild(formSendMessage.firstChild);
        }
        formSendMessage.appendChild(message);
    }else{
        fetch('http://localhost:3000/contact', {
            method:'POST',
            body: JSON.stringify({
                "nombre":formNombre.value,
                "email": formEmail.value,
                "consulta":formConsulta.value 
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response =>{
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse =>{
            console.log(jsonResponse);
            form.reset();
            let message = document.createTextNode("¡Gracias por tu mensaje!");
            while(formSendMessage.firstChild){
                formSendMessage.removeChild(formSendMessage.firstChild);
            }
            formSendMessage.appendChild(message);
        });
    }
});
