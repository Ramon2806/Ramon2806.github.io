const navbarItems = document.getElementsByClassName('navbar-item');

for (let i = 0; i < navbarItems.length; /* 9 */ i++) {

    navbarItems[0].addEventListener('click', function(event) {

        deleteActiveClass();
        this.classList.add('active');
        let sectionToGo = this.getElementsByTagName('a')[0].href.split("#")

        if (sectionToGo.length === 2) {
            event.preventDefault();

            let goTo = sectioToGo[sectionToCo.length - 1]

            getElementByIdAndScroll(goTo);

        }
    });

}

function  getElementByIdAndScroll(id) {
let elem;

if (id === '') {
    elem = document.getElementsByClassName('header')[0];
} else {elem = document.getElementById(id);}

scrollToElement(elem);

}

function scrollToElement (elemento){
    let jump = parseInt(elemento.getBoundingClientRect().top * 0.3);

    document.documentElement.scrollTop += jump;

    if (!elemento.lastJump || elemento.lastJump > Math.abs(jump)) {
        elemento.lastJump = Math.abs(jump);

        setTimeout(function(){ scrollToElement(elemento);},40);

    } else {
        elemento.lastJump = null;
    }

}

function deleteActiveClass () {
    for (let i=0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove ('active');
    }
}

let acumulativeOffset = function (element) {

   // console.log (element.offsetTop);
   return element.offsetTop;

}


const offsetQuienSoy = acumulativeOffset (document.getElementById ('home')) -60;
const offsetEquipo = acumulativeOffset (document.getElementById ( 'speciality' )) -60;
const offsetTransporte = acumulativeOffset (document.getElementById ( 'popular' )) -60;
const offsetContacto = acumulativeOffset (document.getElementById( 'gallery' )) -60;
const offsetVisor = acumulativeOffset (document.getElementById( 'review' )) -60;



window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(){

    let pageOffset = window.pageYOffset;
    let previous;

    if (pageOffset >=0 && pageOffset < offsetQuienSoy ) {

        if ( !previous || previous !==1) {
            previous = 1
        } else {
            return false
        }

        deleteActiveClass();
        document.querySelector("a[href='home']").parentNode.classList.add('active');
    
    }else if (pageOffset >= offsetQuienSoy && pageOffset < offsetEquipo) {

        if ( !previous || previous !==2) {
            previous = 1
        } else {
            return false
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='speciality']").parentNode.classList.add('active');
    
    }else if (pageOffset >= offsetEquipo && pageOffset < offsetContacto) {
        
        if ( !previous || previous !==3) {
            previous = 1
        } else {
            return false
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='popular']").parentNode.classList.add('active');
    
    }else if (pageOffset >= offsetContacto && pageOffset < offsetVisor) {

        if ( !previous || previous !==4) {
            previous = 1
        } else {
            return false
        }
        
        
        deleteActiveClass();
        document.querySelector("a[href$='gallery']").parentNode.classList.add('active');
    } else if (pageOffset >= offsetVisor && pageOffset < offsetTransporte) {

        if ( !previous || previous !==5) {
            previous = 1
        } else {
            return false
        }
        
     
        deleteActiveClass();
        document.querySelector("a[href$='review']").parentNode.classList.add('active');
    } else {

        if ( !previous || previous !==6) {
            previous = 1
        } else {
            return false
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='transporte']").parentNode.classList.add('active');
    
    }
    
    console.log (pageOffset);
}