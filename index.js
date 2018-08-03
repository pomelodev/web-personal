let header = document.getElementById("header");
let headerLogo = document.getElementById("header-logo");
let headerMobileLogo = document.getElementById("header-mobile-logo");
let sectionPortada = document.getElementById("section-portada");
let menuButton = document.getElementById("menu-button");
let navElementsArray = document.getElementsByClassName("nav-element");
let navContacto = document.getElementById("nav-contacto");
let portadaContenido = document.getElementById("portada-contenido");
//------Posiciones------//

let posSectionPortada = sectionPortada.getBoundingClientRect().bottom;


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