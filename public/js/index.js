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
        for(element of navElementsArray){
            element.classList.remove("nav-element-nav-show");
        }
        header.classList.remove("header-nav-show");
        navContacto.classList.remove("nav-contacto-nav-show");
        portadaContenido.classList.remove("portada-contenido-nav-show");
        navMobileShow = false;
    }
});