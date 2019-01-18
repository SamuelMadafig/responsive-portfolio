const DOMStrings = {
    menuBtn:document.querySelector('.navbar-main__menuIcon'),
    navBar: document.querySelector('.navbar-main__items')
}

DOMStrings.menuBtn.addEventListener('click', displayMenu);











function displayMenu(){
   console.log('test');
    DOMStrings.navBar.classList.toggle('hideMenu');
}