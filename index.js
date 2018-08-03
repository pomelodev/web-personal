let header = document.getElementById("header");
let headerLogo = document.getElementById("header-logo");
let headerMobileLogo = document.getElementById("header-mobile-logo");
let sectionPortada = document.getElementById("section-portada");

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

